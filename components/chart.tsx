import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

interface PieChartProps {
  data: { label: string; value: number }[];
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
  const d3Container = useRef<SVGSVGElement | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Effect for handling resize
  useEffect(() => {
    const handleResize = () => {
      if (d3Container.current) {
        setDimensions({
          width: d3Container.current.clientWidth,
          height: d3Container.current.clientHeight,
        });
      }
    };

    // Set initial dimensions
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Effect for drawing the pie chart
  useEffect(() => {
    if (data && dimensions.width && dimensions.height && d3Container.current) {
      d3Container.current.innerHTML = ""; // Clear the container
      const radius = Math.min(dimensions.width, dimensions.height) / 2;

      // Adjust the inner radius dynamically
      const innerRadius = radius * 0.5; // Example: make the hole radius half of the outer radius

      const svg = d3
        .select(d3Container.current)
        .attr(
          "viewBox",
          `-${dimensions.width / 2} -${dimensions.height / 2} ${
            dimensions.width
          } ${dimensions.height}`
        );

      const pie = d3
        .pie<{ label: string; value: number }>()
        .value((d) => d.value);

      const arc = d3
        .arc<d3.PieArcDatum<{ label: string; value: number }>>()
        .innerRadius(innerRadius) // Dynamic based on window size
        .outerRadius(radius);

      const color = d3.scaleOrdinal(d3.schemeCategory10);

      svg
        .selectAll("path")
        .data(pie(data))
        .join("path")
        .attr("d", arc as any) // Casting to 'any' to avoid TypeScript errors
        .attr("fill", (d, i) => color(i.toString()));
    }
  }, [data, dimensions]); // Dependency array includes dimensions to recalculate on resize

  return (
    <svg
      className="d3-component"
      ref={d3Container}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default PieChart;

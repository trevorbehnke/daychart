"use client";

// components/BarChart.tsx
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

interface BarChartProps {
  data: { label: string; value: number }[];
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const d3Container = useRef(null);

  useEffect(() => {
    if (data && d3Container.current) {
      const svg = d3.select(d3Container.current);

      // Set dimensions
      const width = 400;
      const height = 200;
      svg.attr("width", width).attr("height", height);

      // Create scales
      const xScale = d3
        .scaleBand()
        .domain(data.map((d) => d.label))
        .rangeRound([0, width])
        .padding(0.1);

      const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.value) as number])
        .range([height, 0]);

      // Draw bars
      svg
        .selectAll(".bar")
        .data(data)
        .enter()
        .append("rect")
        .classed("bar", true)
        .attr("x", (d) => xScale(d.label) as number)
        .attr("y", (d) => yScale(d.value))
        .attr("width", xScale.bandwidth())
        .attr("height", (d) => height - yScale(d.value))
        .attr("fill", "steelblue");
    }
  }, [data, d3Container.current]);

  return <svg className="d3-component" ref={d3Container} />;
};

export default BarChart;

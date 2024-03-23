import { PieChart, FileText } from "lucide-react";

export const MAX_FREE_COUNTS = 5;

export const tools = [
  {
    label: "Chart",
    icon: PieChart,
    href: "/chart",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    label: "Metrics",
    icon: FileText,
    href: "/metrics",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
];


import { ReactNode } from "react";

interface ChartContainerProps {
  title: string;
  children: ReactNode;
}

const ChartContainer = ({ title, children }: ChartContainerProps) => {
  return (
    <div className="bg-slate-800 p-4 rounded-lg">
      <h3 className="text-white text-lg font-semibold mb-4">{title}</h3>
      {children}
    </div>
  );
};

export default ChartContainer;

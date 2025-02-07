
interface KPICardProps {
  title: string;
  value: string;
  comparison: string;
  trend: "up" | "down";
  icon: React.ReactNode;
}

const KPICard = ({ title, value, comparison, trend, icon }: KPICardProps) => {
  const trendColor = trend === "up" ? "text-green-500" : "text-red-500";

  return (
    <div className="bg-slate-800 p-2 rounded-lg">
      <div className="flex justify-between items-start mb-1.5">
        <div>
          <h3 className="text-gray-400 text-xs mb-0.5">{title}</h3>
          <p className="text-base lg:text-lg font-bold text-white">{value}</p>
        </div>
        <div className="bg-slate-700 p-1 rounded-lg">
          {icon}
        </div>
      </div>
      <div className={`${trendColor} text-xs flex items-center`}>
        {comparison}
      </div>
    </div>
  );
};

export default KPICard;


import { BarChartBig, FileText, CheckCircle, Clock } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardFilters from "@/components/dashboard/DashboardFilters";
import KPICard from "@/components/dashboard/KPICard";
import ChartContainer from "@/components/dashboard/ChartContainer";
import PriorityChart from "@/components/charts/PriorityChart";
import CategoryChart from "@/components/charts/CategoryChart";
import SeverityChart from "@/components/charts/SeverityChart";
import TopAgentChart from "@/components/charts/TopAgentChart";
import WorkTypeChart from "@/components/charts/WorkTypeChart";
import SatisfactionChart from "@/components/charts/SatisfactionChart";
import TimelineChart from "@/components/charts/TimelineChart";

const kpiData = [
  {
    title: "Tickets Created",
    value: "26,935",
    comparison: "32.3% vs LY",
    trend: "up" as const,
    icon: <FileText className="h-4 w-4 text-blue-400" />,
  },
  {
    title: "Tickets Closed",
    value: "26,860",
    comparison: "32.0% vs LY",
    trend: "up" as const,
    icon: <CheckCircle className="h-4 w-4 text-green-400" />,
  },
  {
    title: "Closure Rate",
    value: "99.72%",
    comparison: "-0.23% vs LY",
    trend: "down" as const,
    icon: <BarChartBig className="h-4 w-4 text-purple-400" />,
  },
  {
    title: "Within SLA",
    value: "19,539",
    comparison: "Achieved: 72.7%",
    trend: "up" as const,
    icon: <Clock className="h-4 w-4 text-yellow-400" />,
  },
];

const Index = () => {
  return (
    <div className="flex h-screen bg-[#1E293B]">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <div className="flex-1 overflow-y-auto p-2 lg:p-3">
          <DashboardHeader />
          <div className="grid grid-cols-12 gap-2 lg:gap-3">
            {/* Filters Section */}
            <div className="col-span-12 lg:col-span-2">
              <DashboardFilters />
            </div>
            
            {/* Main Content */}
            <div className="col-span-12 lg:col-span-10">
              {/* KPI Cards */}
              <div className="grid grid-cols-4 gap-2 mb-2 lg:mb-3">
                {kpiData.map((kpi, index) => (
                  <KPICard key={index} {...kpi} />
                ))}
              </div>

              {/* Charts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-3">
                <ChartContainer title="Tickets by Priority">
                  <PriorityChart />
                </ChartContainer>
                <ChartContainer title="Tickets by Category">
                  <CategoryChart />
                </ChartContainer>
                <ChartContainer title="Tickets by Severity">
                  <SeverityChart />
                </ChartContainer>
                <ChartContainer title="Top IT Agent">
                  <TopAgentChart />
                </ChartContainer>
                <ChartContainer title="Tickets by Work Type">
                  <WorkTypeChart />
                </ChartContainer>
                <ChartContainer title="Average Satisfaction Rating">
                  <SatisfactionChart />
                </ChartContainer>
                <ChartContainer title="Tickets Overtime">
                  <TimelineChart />
                </ChartContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;


import { Calendar } from "lucide-react";

const DashboardHeader = () => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center space-x-4">
        <img src="/placeholder.svg" alt="Logo" className="h-10 w-10" />
        <div>
          <h1 className="text-2xl font-bold text-white">CONTOSO - Ticket Volume Dashboard</h1>
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <Calendar className="h-4 w-4" />
            <span>Last Data Reload: 5/23/2024 1:58:01 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;

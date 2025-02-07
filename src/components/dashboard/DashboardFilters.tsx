
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const filters = [
  { name: "Year", options: ["2023", "2022", "2021"] },
  { name: "Month-Year", options: ["All", "Jan 2023", "Feb 2023"] },
  { name: "Priority", options: ["All", "High", "Medium", "Low"] },
  { name: "Severity", options: ["All", "Critical", "High", "Medium", "Low"] },
  { name: "Work Type", options: ["All", "Incident", "Service Request"] },
  { name: "Request Category", options: ["All", "Hardware", "Software", "Network"] },
];

const DashboardFilters = () => {
  return (
    <div className="bg-slate-800 p-4 rounded-lg space-y-4">
      <div className="flex items-center space-x-2 text-white mb-4">
        <span className="font-semibold">Filter</span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {filters.map((filter) => (
          <div key={filter.name}>
            <label className="text-sm text-gray-400 mb-1 block">
              {filter.name}
            </label>
            <Select>
              <SelectTrigger className="w-full bg-slate-700 border-slate-600 text-white">
                <SelectValue placeholder={filter.options[0]} />
              </SelectTrigger>
              <SelectContent>
                {filter.options.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        ))}
      </div>
      <Button
        variant="secondary"
        className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white"
      >
        Reset Filter
      </Button>
    </div>
  );
};

export default DashboardFilters;

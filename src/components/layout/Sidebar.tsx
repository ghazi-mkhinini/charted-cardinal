
import { Home, Globe, LineChart, Users, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: Home, label: "Home", active: true },
  { icon: Globe, label: "Workspace", submenu: true },
  {
    icon: Globe,
    label: "Global",
    submenu: [
      "North America",
      "EMEA",
      "APAC"
    ]
  },
  {
    icon: LineChart,
    label: "Report/Dashboard",
    submenu: [
      "Operations",
      "Stakeholders",
      "Market analysis",
      "Suppliers"
    ]
  }
];

const Sidebar = () => {
  return (
    <div className="w-64 bg-[#1E293B] h-screen p-4 flex flex-col text-white">
      {menuItems.map((item, index) => (
        <div key={index} className="mb-2">
          <div className={cn(
            "flex items-center space-x-2 px-4 py-2 rounded-lg cursor-pointer",
            item.active ? "bg-blue-600" : "hover:bg-slate-700"
          )}>
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </div>
          {item.submenu && (
            <div className="ml-6 mt-1">
              {typeof item.submenu === "boolean" ? null : 
                item.submenu.map((subItem, subIndex) => (
                  <div
                    key={subIndex}
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg cursor-pointer hover:bg-slate-700"
                  >
                    <span className="text-sm text-gray-300">{subItem}</span>
                  </div>
                ))
              }
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;

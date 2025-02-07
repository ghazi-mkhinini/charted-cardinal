
import { Bell, Search, Settings, User } from "lucide-react";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-[#1E293B] text-white border-b border-slate-700">
      <div className="flex items-center space-x-4">
        <img src="/placeholder.svg" alt="Contoso Logo" className="h-8 w-8" />
        <h1 className="text-lg font-semibold">Contoso company</h1>
        <Settings className="h-5 w-5 text-gray-400 cursor-pointer hover:text-white transition-colors" />
      </div>
      <div className="flex items-center space-x-6">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search..."
            className="pl-8 bg-slate-800 border-slate-700 text-white w-[300px]"
          />
        </div>
        <Bell className="h-5 w-5 text-gray-400 cursor-pointer hover:text-white transition-colors" />
        <User className="h-5 w-5 text-gray-400 cursor-pointer hover:text-white transition-colors" />
      </div>
    </nav>
  );
};

export default Navbar;

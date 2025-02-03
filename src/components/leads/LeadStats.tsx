import { Card } from "@/components/ui/card";
import { User, Phone } from "lucide-react";

const stats = [
  { label: "New", count: "150", bgColor: "bg-cyan-300" },
  { label: "Processing", count: "75", bgColor: "bg-pink-300" },
  { label: "Close-by", count: "25", bgColor: "bg-green-300" },
  { label: "Confirm", count: "45", bgColor: "bg-red-400" },
  { label: "Cancel", count: "5", bgColor: "bg-orange-400" },
];

export const LeadStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {stats.map((stat, index) => (
        <div key={index} className={`${stat.bgColor} rounded-lg shadow-md p-4`}>
          <div className="text-sm font-medium mb-2">
            <span className="bg-pink-200 text-black px-2 py-1 rounded-full text-xs">
              categories
            </span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span className="text-sm">Leads Name</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span className="text-sm">Phone Number</span>
            </div>
            <div className="text-sm">
              <div>CD:</div>
              <div>BY:</div>
              <div>TO:</div>
              <div>NFD:</div>
            </div>
            <div className="flex gap-2 mt-2">
              {Array(8).fill(0).map((_, i) => (
                <div key={i} className="w-6 h-6 bg-white/80 rounded-md flex items-center justify-center">
                  <span className="text-xs">•</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
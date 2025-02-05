import { Card } from "@/components/ui/card";
import { 
  User, Phone, Mail, MessageCircle, 
  Link2, ArrowRight, Trash, Home, Send 
} from "lucide-react";

const stats = [
  { 
    label: "New", 
    count: "150", 
    bgColor: "bg-[#E5DEFF]", 
    textColor: "text-[#6E59A5]",
    icon: User,
    category: "Lead Generation"
  },
  { 
    label: "Processing", 
    count: "75", 
    bgColor: "bg-[#FFDEE2]", 
    textColor: "text-[#D946EF]",
    icon: Phone,
    category: "Contact Made"
  },
  { 
    label: "Close-by", 
    count: "25", 
    bgColor: "bg-[#F2FCE2]", 
    textColor: "text-green-600",
    icon: Mail,
    category: "Follow Up"
  },
  { 
    label: "Confirm", 
    count: "45", 
    bgColor: "bg-[#FEF7CD]", 
    textColor: "text-orange-600",
    icon: MessageCircle,
    category: "Negotiation"
  },
  { 
    label: "Cancel", 
    count: "5", 
    bgColor: "bg-[#FEC6A1]", 
    textColor: "text-red-600",
    icon: Trash,
    category: "Closed"
  },
];

const actionIcons = [
  { Icon: Link2, color: "text-green-500" },
  { Icon: ArrowRight, color: "text-gray-700" },
  { Icon: Mail, color: "text-emerald-700" },
  { Icon: MessageCircle, color: "text-red-700" },
  { Icon: Phone, color: "text-green-400" },
  { Icon: Home, color: "text-red-500" },
  { Icon: User, color: "text-blue-500" },
  { Icon: Send, color: "text-gray-500" },
];

export const LeadStats = () => {
  return (
    <div className="space-y-6">
      {/* Status Labels */}
      <div className="flex gap-4 items-center px-4 py-3 bg-[#F8F8FF] rounded-lg">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${stat.bgColor} ${stat.textColor}`}
          >
            <stat.icon className="w-4 h-4" />
            <span className="text-sm font-medium">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Lead Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className={`${stat.bgColor} rounded-lg shadow-sm p-4 space-y-3`}
          >
            <div className="flex justify-between items-start">
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-white/80 ${stat.textColor}`}>
                {stat.category}
              </span>
              <span className={`text-lg font-semibold ${stat.textColor}`}>
                {stat.count}
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span className="text-sm">Lead Name</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">Phone Number</span>
              </div>
              <div className="text-sm space-y-1">
                <div>CD: 2024-03-15</div>
                <div>BY: John Doe</div>
                <div>TO: Sales Team</div>
                <div>NFD: 2024-03-20</div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {actionIcons.map(({ Icon, color }, i) => (
                <div 
                  key={i}
                  className="w-8 h-8 bg-white/80 rounded-md flex items-center justify-center hover:bg-white transition-colors"
                >
                  <Icon className={`w-4 h-4 ${color}`} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
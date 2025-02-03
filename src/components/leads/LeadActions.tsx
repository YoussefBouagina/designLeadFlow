import { Button } from "@/components/ui/button";
import { PlusCircle, FileText, Bell, Video, Copy } from "lucide-react";
import { Input } from "@/components/ui/input";

export const LeadActions = () => {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Button className="bg-violet-600 hover:bg-violet-700">
          <PlusCircle className="w-4 h-4 mr-2" />
          Leads
        </Button>
        <Button className="bg-violet-600 hover:bg-violet-700">
          <FileText className="w-4 h-4 mr-2" />
          Task
        </Button>
        <Button className="bg-violet-600 hover:bg-violet-700">
          <FileText className="w-4 h-4 mr-2" />
          Notes
        </Button>
        <Button className="bg-violet-600 hover:bg-violet-700">
          <Bell className="w-4 h-4 mr-2" />
          Reminder
        </Button>
        <Button className="bg-violet-600 hover:bg-violet-700">
          <Video className="w-4 h-4 mr-2" />
          Meeting
        </Button>
      </div>
      
      <div className="flex items-center gap-2">
        <div className="flex-1">
          <Input placeholder="Inquiry URL" className="w-full" />
        </div>
        <Button variant="secondary">
          <Copy className="w-4 h-4 mr-2" />
          Copy URL
        </Button>
      </div>
    </div>
  );
};
import { Button } from "@/components/ui/button";
import { PlusCircle, Copy } from "lucide-react";
import { Input } from "@/components/ui/input";

export const LeadActions = () => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center justify-between">
      <div className="flex gap-2">
        <Button variant="default">
          <PlusCircle className="w-4 h-4 mr-2" />
          Add Leads
        </Button>
        <Button variant="outline">+ Task</Button>
        <Button variant="outline">+ Notes</Button>
        <Button variant="outline">Reminder</Button>
        <Button variant="outline">Meeting</Button>
      </div>
      <div className="flex items-center gap-2">
        <Input placeholder="Inquiry URL" className="w-64" />
        <Button variant="outline">
          <Copy className="w-4 h-4 mr-2" />
          Copy URL
        </Button>
      </div>
    </div>
  );
};
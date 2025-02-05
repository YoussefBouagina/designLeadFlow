import { Button } from "@/components/ui/button";
import { FileText, Bell, Video, Copy, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { AddLeadDialog } from "./AddLeadDialog";
import { AddLabelDialog } from "./AddLabelDialog";
import { InquiryForm } from "./InquiryForm";
import { useState } from "react";

export const LeadActions = () => {
  const [inquiryFormOpen, setInquiryFormOpen] = useState(false);
  const [addLeadOpen, setAddLeadOpen] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Button 
          onClick={() => setAddLeadOpen(true)}
          className="bg-violet-600 hover:bg-violet-700"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Lead
        </Button>
        <AddLabelDialog />
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
        <Button 
          variant="secondary"
          onClick={() => setInquiryFormOpen(true)}
        >
          <Copy className="w-4 h-4 mr-2" />
          Copy URL
        </Button>
      </div>

      <AddLeadDialog 
        open={addLeadOpen} 
        onOpenChange={setAddLeadOpen}
      />
      <InquiryForm 
        open={inquiryFormOpen} 
        onOpenChange={setInquiryFormOpen} 
      />
    </div>
  );
};
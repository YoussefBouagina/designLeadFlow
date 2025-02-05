import { Sidebar } from "@/components/layout/Sidebar";
import { LeadStats } from "@/components/leads/LeadStats";
import { LeadTable } from "@/components/leads/LeadTable";
import { LeadActions } from "@/components/leads/LeadActions";
import { Button } from "@/components/ui/button";
import { Filter, ChevronRight, PlusCircle, Mail, User, Sun, Bell } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AddLeadDialog } from "@/components/leads/AddLeadDialog";
import { useState } from "react";
import { useTheme } from "next-themes";
import { toast } from "sonner";

const Index = () => {
  const [isAddLeadOpen, setIsAddLeadOpen] = useState(false);
  const [showTableView, setShowTableView] = useState(false);
  const { setTheme } = useTheme();

  const handleLogout = () => {
    toast.success("Logged out successfully");
    // Add actual logout logic here
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 overflow-auto p-6">
        <div className="max-w-[1400px] mx-auto space-y-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Leads Management</h1>
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button variant="ghost" size="icon" onClick={() => toast.success("Email notifications")}>
                <Mail className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => setTheme('dark')}>
                <Sun className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => toast.success("Notifications")}>
                <Bell className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <LeadActions />
          
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <h2 className="text-xl font-semibold">Leads</h2>
              <Button 
                variant="default" 
                size="sm" 
                className={showTableView ? "bg-violet-700" : "bg-violet-600"}
                onClick={() => setShowTableView(!showTableView)}
              >
                Table view
              </Button>
            </div>
            
            <div className="flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="bg-white hover:bg-gray-100 group">
                    <Filter className="w-4 h-4 mr-2" />
                    All labels
                    <ChevronRight className="w-4 h-4 ml-2 transition-transform group-data-[state=open]:rotate-90" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem className="cursor-pointer hover:bg-violet-50">
                    New
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer hover:bg-violet-50">
                    Processing
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer hover:bg-violet-50">
                    Close-by
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer hover:bg-violet-50">
                    Confirm
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer hover:bg-violet-50">
                    Cancel
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button 
                className="bg-violet-600 hover:bg-violet-700"
                onClick={() => setIsAddLeadOpen(true)}
              >
                <PlusCircle className="w-4 h-4 mr-2" />
                Add Lead
              </Button>
            </div>
          </div>

          {showTableView ? <LeadTable /> : <LeadStats />}
          <AddLeadDialog open={isAddLeadOpen} onOpenChange={setIsAddLeadOpen} />
        </div>
      </main>
    </div>
  );
};

export default Index;
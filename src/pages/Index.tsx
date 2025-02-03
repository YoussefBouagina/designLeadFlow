import { Sidebar } from "@/components/layout/Sidebar";
import { LeadStats } from "@/components/leads/LeadStats";
import { LeadActions } from "@/components/leads/LeadActions";
import { LeadTable } from "@/components/leads/LeadTable";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

const Index = () => {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto py-6 space-y-6">
          <LeadActions />
          
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-bold">Table view</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  New
                </Button>
                <Button variant="outline" size="sm">
                  Total Leads
                </Button>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                All labels
              </Button>
              <Button>+ Add Leads</Button>
            </div>
          </div>

          <LeadStats />
          <LeadTable />
        </div>
      </main>
    </div>
  );
};

export default Index;
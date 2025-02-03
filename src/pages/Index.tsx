import { Sidebar } from "@/components/layout/Sidebar";
import { LeadStats } from "@/components/leads/LeadStats";
import { LeadActions } from "@/components/leads/LeadActions";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

const Index = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 overflow-auto p-6">
        <div className="max-w-[1400px] mx-auto space-y-6">
          <LeadActions />
          
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <h2 className="text-xl font-semibold">Leads</h2>
              <Button variant="default" size="sm" className="bg-violet-600">
                Table view
              </Button>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="outline" className="bg-white">
                <Filter className="w-4 h-4 mr-2" />
                All labels
              </Button>
              <Button className="bg-violet-600 hover:bg-violet-700">
                + Add Leads
              </Button>
            </div>
          </div>

          <LeadStats />
        </div>
      </main>
    </div>
  );
};

export default Index;
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Edit, Trash } from "lucide-react";

const leads = [
  {
    name: "John Doe",
    phone: "+1 234 567 890",
    cd: "2024-03-20",
    by: "Sarah",
    to: "Sales",
    nfd: "2024-03-25",
  },
  // Add more leads as needed
];

export const LeadTable = () => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Leads Name</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead>CD:</TableHead>
            <TableHead>BY:</TableHead>
            <TableHead>TO:</TableHead>
            <TableHead>NFD:</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leads.map((lead, index) => (
            <TableRow key={index}>
              <TableCell>{lead.name}</TableCell>
              <TableCell>{lead.phone}</TableCell>
              <TableCell>{lead.cd}</TableCell>
              <TableCell>{lead.by}</TableCell>
              <TableCell>{lead.to}</TableCell>
              <TableCell>{lead.nfd}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
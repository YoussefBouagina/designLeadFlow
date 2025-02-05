import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Edit, Trash, Mail, Link2, MessageCircle, Phone, Home, User, Send } from "lucide-react";

const leads = [
  {
    name: "John Doe",
    phone: "+1 234 567 890",
    cd: "2024-03-20",
    by: "Sarah",
    to: "Sales",
    nfd: "2024-03-25",
    status: "Processing"
  },
  {
    name: "Jane Smith",
    phone: "+1 987 654 321",
    cd: "2024-03-21",
    by: "Mike",
    to: "Marketing",
    nfd: "2024-03-26",
    status: "New"
  },
  // Add more leads as needed
];

const actionIcons = [
  { Icon: Link2, color: "text-green-500" },
  { Icon: Edit, color: "text-gray-700" },
  { Icon: Mail, color: "text-emerald-700" },
  { Icon: MessageCircle, color: "text-red-700" },
  { Icon: Phone, color: "text-green-400" },
  { Icon: Home, color: "text-red-500" },
  { Icon: User, color: "text-blue-500" },
  { Icon: Send, color: "text-gray-500" },
];

export const LeadTable = () => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">NO.</TableHead>
            <TableHead>Customer Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Assign to</TableHead>
            <TableHead>Mobile</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leads.map((lead, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{lead.name}</TableCell>
              <TableCell>{lead.cd}</TableCell>
              <TableCell>{lead.to}</TableCell>
              <TableCell>{lead.phone}</TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  lead.status === "Processing" ? "bg-orange-100 text-orange-700" :
                  lead.status === "New" ? "bg-green-100 text-green-700" :
                  "bg-gray-100 text-gray-700"
                }`}>
                  {lead.status}
                </span>
              </TableCell>
              <TableCell>
                <div className="flex justify-end gap-2">
                  {actionIcons.map(({ Icon, color }, i) => (
                    <Button key={i} variant="ghost" size="icon" className="h-8 w-8">
                      <Icon className={`w-4 h-4 ${color}`} />
                    </Button>
                  ))}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
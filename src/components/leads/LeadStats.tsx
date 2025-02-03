import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  { label: "New", count: "150" },
  { label: "Processing", count: "75" },
  { label: "Close-by", count: "25" },
  { label: "Confirm", count: "45" },
  { label: "Cancel", count: "5" },
];

export const LeadStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">{stat.label}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {stat.count}
              <span className="text-sm font-normal ml-1">Total Leads</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
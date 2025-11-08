import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Plus } from "lucide-react";

const groups = [
  {
    name: "Advanced Algorithms",
    description: "Weekly problem-solving labs exploring complex data structures and patterns.",
    members: 8,
    nextSession: "Nov 12 • 7:00 PM"
  },
  {
    name: "Distributed Systems",
    description: "Architecture deep dives covering fault tolerance, messaging and scalability.",
    members: 6,
    nextSession: "Nov 14 • 5:00 PM"
  },
  {
    name: "UX Fundamentals",
    description: "Human-centered design workshops with rapid prototyping challenges.",
    members: 10,
    nextSession: "Nov 15 • 4:00 PM"
  }
];

export default function GroupsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">Groups</h1>
          <p className="text-gray-500">Build collaborative cohorts, track engagement and keep upcoming sessions visible.</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Create new group
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {groups.map((group) => (
          <Card key={group.name} hover>
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{group.name}</h2>
                <p className="mt-2 text-sm text-gray-600">{group.description}</p>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-2 text-sm text-gray-500">
                <span>{group.members} active members</span>
                <span>Next session: {group.nextSession}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}


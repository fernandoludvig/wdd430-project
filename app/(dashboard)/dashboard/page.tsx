import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Calendar, BarChart3, Users } from "lucide-react";

const quickStats = [
  {
    title: "Scheduled sessions",
    value: "12",
    change: "+3 this week",
    icon: Calendar
  },
  {
    title: "Average participation",
    value: "82%",
    change: "+6% vs last month",
    icon: Users
  },
  {
    title: "Goals completed",
    value: "28",
    change: "+9 new milestones",
    icon: BarChart3
  }
];

const recentActivities = [
  "Algorithms squad completed the sprint 6 review plan.",
  "UX Fundamentals team shared new annotated resources.",
  "Fernando Ludvig scheduled a collaborative session for Nov 12."
];

const priorityTasks = [
  "Prepare the data structures quiz outline.",
  "Update the reading checkpoints for Module 4.",
  "Review feedback from the latest study sprint."
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">Overview</h1>
          <p className="text-gray-500">Monitor the momentum of every study group and surface quick wins.</p>
        </div>
        <Button>Generate report</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {quickStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                  <p className="mt-3 text-3xl font-semibold text-gray-900">{stat.value}</p>
                  <p className="mt-2 text-sm text-green-600">{stat.change}</p>
                </div>
                <span className="rounded-full bg-blue-50 p-3 text-blue-600">
                  <Icon className="h-5 w-5" />
                </span>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <h2 className="mb-4 text-lg font-semibold text-gray-900">Recent activity</h2>
          <ul className="space-y-4 text-sm text-gray-600">
            {recentActivities.map((activity) => (
              <li key={activity}>
                <span className="font-medium text-gray-900">Update:</span> {activity}
              </li>
            ))}
          </ul>
        </Card>
        <Card>
          <h2 className="mb-4 text-lg font-semibold text-gray-900">Priority tasks</h2>
          <ul className="space-y-3 text-sm text-gray-600">
            {priorityTasks.map((task) => (
              <li key={task}>{task}</li>
            ))}
          </ul>
          <Button variant="outline" className="mt-6 w-full">
            View all tasks
          </Button>
        </Card>
      </div>
    </div>
  );
}


import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const sections = [
  {
    title: "Integrations",
    description: "Connect StudyHub to external tools to sync data, events and course materials."
  },
  {
    title: "Security",
    description: "Manage authentication, trusted devices and active sessions with advanced controls."
  },
  {
    title: "Personalization",
    description: "Fine-tune dashboard preferences, themes and notification rules."
  }
];

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-gray-900">Settings</h1>
        <p className="text-gray-500">Customize the collaborative workspace, review permissions and reinforce security.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {sections.map((section) => (
          <Card key={section.title} hover>
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
              <p className="text-sm text-gray-600">{section.description}</p>
            </div>
            <Button variant="outline" className="mt-6 w-full">
              Manage
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}


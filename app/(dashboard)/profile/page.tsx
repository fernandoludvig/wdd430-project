import Card from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-gray-900">Profile</h1>
        <p className="text-gray-500">Keep your personal details and collaboration preferences aligned with the team.</p>
      </div>
      <Card>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Basic information</h2>
          <Button size="sm">Save changes</Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Input label="Full name" placeholder="Enter your full name" defaultValue="Fernando Ludvig" />
          <Input label="Email" type="email" placeholder="name@example.com" defaultValue="fernando@example.com" />
          <Input label="Role" placeholder="Project role" defaultValue="Team lead" />
          <Input label="Time zone" placeholder="Select your time zone" defaultValue="GMT-7" />
        </div>
      </Card>
      <Card>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Preferences</h2>
          <Button size="sm" variant="outline">
            Update preferences
          </Button>
        </div>
        <div className="grid gap-4">
          <label className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-600">
            Email notifications
            <span className="inline-flex h-6 w-12 items-center rounded-full bg-primary/20 px-1 text-xs font-semibold text-primary">
              On
            </span>
          </label>
          <label className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-600">
            Weekly summaries
            <span className="inline-flex h-6 w-12 items-center justify-center rounded-full bg-neutral-100 px-1 text-xs font-semibold text-neutral-500">
              Off
            </span>
          </label>
          <label className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-600">
            Goal alerts
            <span className="inline-flex h-6 w-12 items-center rounded-full bg-success/20 px-1 text-xs font-semibold text-success">
              On
            </span>
          </label>
        </div>
      </Card>
    </div>
  );
}


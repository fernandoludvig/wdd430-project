"use client";

import { useState } from "react";

import Card from "@/components/ui/Card";

import Button from "@/components/ui/Button";

import Input from "@/components/ui/Input";

export default function SettingsPage() {
  const [emailNotifications, setEmailNotifications] = useState(true);

  const [sessionReminders, setSessionReminders] = useState(true);

  const [newResources, setNewResources] = useState(true);

  const [publicProfile, setPublicProfile] = useState(true);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold text-gray-900">Settings</h1>

      <Card>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Account Settings</h2>
        <div className="space-y-4">
          <Input label="Email" type="email" defaultValue="fernando@studyhub.com" />
          <Input label="Current Password" type="password" placeholder="••••••••" />
          <Input label="New Password" type="password" placeholder="••••••••" />
          <Button>Update Account</Button>
        </div>
      </Card>

      <Card>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Notification Preferences</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Email Notifications</p>
              <p className="text-sm text-gray-600">Receive updates via email</p>
            </div>
            <input
              type="checkbox"
              checked={emailNotifications}
              onChange={(e) => setEmailNotifications(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Session Reminders</p>
              <p className="text-sm text-gray-600">Get reminded before study sessions</p>
            </div>
            <input
              type="checkbox"
              checked={sessionReminders}
              onChange={(e) => setSessionReminders(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">New Resources</p>
              <p className="text-sm text-gray-600">Notify when resources are shared</p>
            </div>
            <input
              type="checkbox"
              checked={newResources}
              onChange={(e) => setNewResources(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
          </div>
        </div>
        <Button className="mt-4">Save Preferences</Button>
      </Card>

      <Card>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Privacy Settings</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Public Profile</p>
              <p className="text-sm text-gray-600">Make your profile visible to others</p>
            </div>
            <input
              type="checkbox"
              checked={publicProfile}
              onChange={(e) => setPublicProfile(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
          </div>
        </div>
        <Button className="mt-4">Save Privacy Settings</Button>
      </Card>

      <Card className="border-red-200">
        <h2 className="text-xl font-bold text-red-600 mb-4">Danger Zone</h2>
        <p className="text-sm text-gray-600 mb-4">
          Once you delete your account, there is no going back. Please be certain.
        </p>
        <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
          Delete Account
        </Button>
      </Card>
    </div>
  );
}
"use client";

import { useState } from "react";

import { mockUsers, getUserStats } from "@/lib/mock-data";

import Card from "@/components/ui/Card";

import Button from "@/components/ui/Button";

import Input from "@/components/ui/Input";

export default function ProfilePage() {
  const currentUser = mockUsers[0];

  const stats = getUserStats(currentUser.id);

  const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState(currentUser.name);

  const [bio, setBio] = useState(currentUser.bio || "");

  const handleSave = () => {
    alert("Profile updated!");
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold text-gray-900">Profile</h1>

      <Card>
        <div className="flex items-center gap-6">
          <div className="h-24 w-24 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
            {currentUser.name.split(" ").map(n => n[0]).join("")}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{currentUser.name}</h2>
            <p className="text-gray-600">{currentUser.email}</p>
            <p className="text-sm text-gray-500 mt-1">
              {currentUser.major} • {currentUser.university}
            </p>
          </div>
        </div>
      </Card>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <p className="text-sm text-gray-600 mb-1">Groups</p>
          <p className="text-2xl font-bold text-gray-900">{stats.totalGroups}</p>
        </Card>
        <Card>
          <p className="text-sm text-gray-600 mb-1">Study Hours</p>
          <p className="text-2xl font-bold text-gray-900">{stats.totalStudyHours.toFixed(1)}</p>
        </Card>
        <Card>
          <p className="text-sm text-gray-600 mb-1">Goals Completed</p>
          <p className="text-2xl font-bold text-gray-900">{stats.goalsCompleted}</p>
        </Card>
        <Card>
          <p className="text-sm text-gray-600 mb-1">Achievements</p>
          <p className="text-2xl font-bold text-gray-900">{stats.achievements}</p>
        </Card>
      </div>

      <Card>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-900">Personal Information</h3>
          <Button onClick={() => isEditing ? handleSave() : setIsEditing(true)}>
            {isEditing ? "Save" : "Edit"}
          </Button>
        </div>

        {isEditing ? (
          <div className="space-y-4">
            <Input
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Bio
              </label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows={4}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-600">Name</p>
              <p className="font-medium text-gray-900">{currentUser.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Bio</p>
              <p className="font-medium text-gray-900">{currentUser.bio || "No bio yet"}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">University</p>
              <p className="font-medium text-gray-900">{currentUser.university}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Major</p>
              <p className="font-medium text-gray-900">{currentUser.major}</p>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}
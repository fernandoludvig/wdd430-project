"use client";

import { useState } from "react";

import { Search, Plus } from "lucide-react";

import GroupCard from "@/components/ui/GroupCard";

import Button from "@/components/ui/Button";

import Input from "@/components/ui/Input";

import Modal from "@/components/ui/Modal";

import { mockGroups } from "@/lib/mock-data";

const subjects = ["All", "Computer Science", "Mathematics", "Design", "Programming"];

export default function GroupsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const [selectedSubject, setSelectedSubject] = useState("All");

  const [showCreateModal, setShowCreateModal] = useState(false);

  const [newGroupName, setNewGroupName] = useState("");

  const [newGroupDescription, setNewGroupDescription] = useState("");

  const [newGroupSubject, setNewGroupSubject] = useState("");

  const [newGroupIsPublic, setNewGroupIsPublic] = useState(true);

  const filteredGroups = mockGroups.filter((group) => {
    const matchesSearch = group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         group.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesSubject = selectedSubject === "All" || group.subject === selectedSubject;

    return matchesSearch && matchesSubject;
  });

  const handleJoinGroup = (id: string) => {
    alert(`Joining group ${id}...`);
  };

  const handleViewGroup = (id: string) => {
    alert(`Viewing group ${id}...`);
  };

  const handleCreateGroup = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Creating group: ${newGroupName}`);
    setShowCreateModal(false);
    setNewGroupName("");
    setNewGroupDescription("");
    setNewGroupSubject("");
    setNewGroupIsPublic(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">Study Groups</h1>
          <p className="text-gray-500">Find and join collaborative learning communities</p>
        </div>
        <Button onClick={() => setShowCreateModal(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Create Group
        </Button>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search groups..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
          {subjects.map((subject) => (
            <button
              key={subject}
              onClick={() => setSelectedSubject(subject)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                selectedSubject === subject
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {subject}
            </button>
          ))}
        </div>
      </div>

      {filteredGroups.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredGroups.map((group) => (
            <GroupCard
              key={group.id}
              {...group}
              onJoin={handleJoinGroup}
              onView={handleViewGroup}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No groups found</p>
          <p className="text-gray-400 text-sm mt-2">Try adjusting your search or filters</p>
        </div>
      )}

      <Modal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        title="Create New Study Group"
        size="md"
      >
        <form onSubmit={handleCreateGroup} className="space-y-4">
          <Input
            label="Group Name *"
            type="text"
            placeholder="e.g., Advanced Algorithms"
            value={newGroupName}
            onChange={(e) => setNewGroupName(e.target.value)}
            required
          />
          <div>
            <label htmlFor="groupDescription" className="block text-sm font-medium text-gray-700 mb-1">
              Description *
            </label>
            <textarea
              id="groupDescription"
              placeholder="Describe your study group..."
              value={newGroupDescription}
              onChange={(e) => setNewGroupDescription(e.target.value)}
              required
              rows={4}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
          <div>
            <label htmlFor="groupSubject" className="block text-sm font-medium text-gray-700 mb-1">
              Subject *
            </label>
            <select
              id="groupSubject"
              value={newGroupSubject}
              onChange={(e) => setNewGroupSubject(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            >
              <option value="">Select a subject</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Design">Design</option>
              <option value="Programming">Programming</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="isPublic"
              checked={newGroupIsPublic}
              onChange={(e) => setNewGroupIsPublic(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="isPublic" className="text-sm text-gray-700">
              Make this group public
            </label>
          </div>
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setShowCreateModal(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button type="submit" className="flex-1">
              Create Group
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
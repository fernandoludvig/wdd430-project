import { Users, Lock, Globe } from "lucide-react";

import Card from "./Card";

import Button from "./Button";

interface GroupCardProps {
  id: string;
  name: string;
  description: string;
  subject: string;
  memberCount: number;
  isPublic: boolean;
  isMember?: boolean;
  onJoin?: (id: string) => void;
  onView?: (id: string) => void;
}

export default function GroupCard({
  id,
  name,
  description,
  subject,
  memberCount,
  isPublic,
  isMember = false,
  onJoin,
  onView
}: GroupCardProps) {
  return (
    <Card hover className="flex flex-col h-full">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 mb-1">{name}</h3>
          <span className="inline-block px-2 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full">
            {subject}
          </span>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          {isPublic ? (
            <Globe className="h-4 w-4" />
          ) : (
            <Lock className="h-4 w-4" />
          )}
        </div>
      </div>
      <p className="text-sm text-gray-600 mb-4 flex-grow line-clamp-2">
        {description}
      </p>
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Users className="h-4 w-4" />
          <span>{memberCount} {memberCount === 1 ? 'member' : 'members'}</span>
        </div>
        {isMember ? (
          <Button
            variant="outline"
            onClick={() => onView?.(id)}
          >
            View Group
          </Button>
        ) : (
          <Button
            onClick={() => onJoin?.(id)}
          >
            {isPublic ? 'Join' : 'Request'}
          </Button>
        )}
      </div>
    </Card>
  );
}

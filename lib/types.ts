export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
  university?: string;
  major?: string;
  graduationYear?: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface StudyGroup {
  id: string;
  name: string;
  description: string;
  members: User[];
  createdAt: Date;
}

export interface Group {
  id: string;
  name: string;
  description: string;
  subject: string;
  isPublic: boolean;
  ownerId: string;
  members: User[];
  memberCount: number;
  tags?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Session {
  id: string;
  groupId: string;
  title: string;
  description: string;
  scheduledAt: Date;
  duration: number;
  location?: string;
  type: "online" | "in-person" | "hybrid";
  hostId: string;
  participants: User[];
  status: "scheduled" | "in-progress" | "completed" | "cancelled";
  createdAt: Date;
  updatedAt: Date;
}

export interface Goal {
  id: string;
  userId: string;
  groupId?: string;
  title: string;
  description?: string;
  targetDate?: Date;
  progress: number;
  status: "not-started" | "in-progress" | "completed" | "abandoned";
  createdAt: Date;
  updatedAt: Date;
}

export interface UserStats {
  totalGroups: number;
  totalSessions: number;
  totalStudyHours: number;
  goalsCompleted: number;
  resourcesShared: number;
  achievements: number;
}


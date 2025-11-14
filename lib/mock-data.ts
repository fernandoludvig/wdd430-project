import type { User, Group, Session, Goal, UserStats } from "./types";

export const mockUsers: User[] = [
  {
    id: "1",
    name: "Fernando Ludvig",
    email: "fernando@studyhub.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fernando",
    bio: "Computer Science student passionate about algorithms",
    university: "BYU-Idaho",
    major: "Software Engineering",
    graduationYear: 2025,
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-11-08")
  },
  {
    id: "2",
    name: "Cynthia Moyo",
    email: "cynthia@studyhub.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Cynthia",
    bio: "UX Designer and frontend enthusiast",
    university: "BYU-Idaho",
    major: "Design",
    graduationYear: 2025,
    createdAt: new Date("2024-01-20"),
    updatedAt: new Date("2024-11-08")
  }
];

export const mockGroups: Group[] = [
  {
    id: "1",
    name: "Advanced Algorithms",
    description: "Deep dive into sorting, searching, and optimization algorithms.",
    subject: "Computer Science",
    isPublic: true,
    ownerId: "1",
    members: [mockUsers[0]],
    memberCount: 12,
    tags: ["algorithms", "coding"],
    createdAt: new Date("2024-09-01"),
    updatedAt: new Date("2024-11-08")
  },
  {
    id: "2",
    name: "UX Design Principles",
    description: "Explore user experience fundamentals and design thinking.",
    subject: "Design",
    isPublic: false,
    ownerId: "2",
    members: [mockUsers[1]],
    memberCount: 15,
    tags: ["ux", "design"],
    createdAt: new Date("2024-09-15"),
    updatedAt: new Date("2024-11-08")
  },
  {
    id: "3",
    name: "Web Development Bootcamp",
    description: "Full-stack development with React and Node.js.",
    subject: "Programming",
    isPublic: true,
    ownerId: "1",
    members: [mockUsers[0]],
    memberCount: 25,
    tags: ["react", "nodejs"],
    createdAt: new Date("2024-10-01"),
    updatedAt: new Date("2024-11-08")
  }
];

export const getUserStats = (userId: string): UserStats => {
  return {
    totalGroups: 3,
    totalSessions: 12,
    totalStudyHours: 45.5,
    goalsCompleted: 8,
    resourcesShared: 15,
    achievements: 5
  };
};

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface StudyGroup {
  id: string;
  name: string;
  description: string;
  members: User[];
  createdAt: Date;
}


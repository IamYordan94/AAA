// Drizzle ORM schema stubs - will be implemented with actual database

export interface Enrollment {
  id: number;
  email: string;
  phone: string;
  accessKey: string;
  cycleId: number;
  totalScore: number;
  paymentStatus: 'pending' | 'paid' | 'failed';
  createdAt: Date;
}

export interface GameCycle {
  id: number;
  startDate: Date;
  endDate: Date;
  status: 'upcoming' | 'active' | 'completed';
  capacity: number;
  isActive: boolean;
  roomName: string;
  accessCode: string;
}

export interface Challenge {
  id: number;
  title: string;
  quadrant: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
  submissionType: 'text' | 'image' | 'location';
  description: string;
  isActive: boolean;
}

export interface Submission {
  id: number;
  enrollmentId: number;
  challengeId: number;
  submissionData: string;
  status: 'pending' | 'approved' | 'rejected';
  gpsLat?: number;
  gpsLng?: number;
  submittedAt: Date;
}

export interface User {
  id: number;
  username: string;
  password: string;
  role: 'admin';
}

// Placeholder functions - will be replaced with actual Drizzle queries
export const db = {
  enrollments: {
    create: async (data: Partial<Enrollment>) => ({ id: 1, ...data } as Enrollment),
    findById: async (id: number) => ({ id, email: 'test@example.com' } as Enrollment),
    findByAccessKey: async (key: string) => ({ id: 1, accessKey: key } as Enrollment),
  },
  gameCycles: {
    findActive: async () => ({ id: 1, isActive: true } as GameCycle),
    findById: async (id: number) => ({ id, isActive: true } as GameCycle),
  },
  challenges: {
    findByQuadrant: async (quadrant: number) => [] as Challenge[],
    findById: async (id: number) => ({ id, title: 'Test Challenge' } as Challenge),
  },
  submissions: {
    create: async (data: Partial<Submission>) => ({ id: 1, ...data } as Submission),
    findByEnrollment: async (enrollmentId: number) => [] as Submission[],
  },
};

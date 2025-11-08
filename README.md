<div align="center">

# StudyHub 📚

**Collaborate. Learn. Succeed Together.**

</div>

## Team

- Fernando Ludvig (Lead)
- Cynthia Moyo
- Ganiyat Bakare
- Saul Carracelas

## Overview

StudyHub is a collaborative platform designed for students and mentors to co-create personalized learning journeys. It centralizes study groups, curated resources, shared goals and real-time communication so academic teams can stay aligned, accountable and motivated throughout every milestone.

## Key Features

1. Unified dashboard with progress indicators and quick insights  
2. Study group management with membership, objectives and milestones  
3. Smart scheduling synced with external calendars and reminders  
4. Real-time chat organized by topic and study cohort  
5. Resource library with version control and powerful filters  
6. Personalized learning tracks tailored to each team’s goals  
7. Goal setting, checkpoints and continuous feedback loops  
8. Automated participation and performance reports  
9. Configurable notifications by channel and priority  
10. Gamification with achievements, leaderboards and badges  
11. Collaborative profiles highlighting availability and skills  
12. Integrations with academic and productivity tooling

## Design Guidelines

- **Palette:** Primary `#2563EB`, dark primary `#1E40AF`, light primary `#3B82F6`, accent `#7C3AED`, plus success `#10B981`, warning `#F59E0B`, error `#EF4444`, and neutral range `#F9FAFB`–`#111827`  
- **Typography:** Inter family, headings 600/700 weight, body 400/500  
- **Visual style:** 4/8/16/24/32 px spacing scale, 8 px rounded corners, soft shadows and subtle gradients on light backgrounds  
- **Components:** Based on shadcn/ui patterns with accessible hierarchy, OWASP-aligned contrasts and WCAG AA considerations

## Tech Stack

- Next.js 14+ (App Router)  
- TypeScript  
- Tailwind CSS v4  
- PostgreSQL  
- Prisma  
- Clerk/Auth0 for authentication

## Project Structure

```
wdd430-project/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── register/
│   │       └── page.tsx
│   ├── (dashboard)/
│   │   ├── layout.tsx
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   ├── groups/
│   │   │   └── page.tsx
│   │   ├── profile/
│   │   │   └── page.tsx
│   │   └── settings/
│   │       └── page.tsx
│   ├── api/
│   │   └── hello/
│   │       └── route.ts
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Input.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Sidebar.tsx
├── lib/
│   ├── types.ts
│   └── utils.ts
├── public/
│   └── logo.svg
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.mjs
├── postcss.config.js
└── README.md
```

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Run the development server**
   ```bash
   npm run dev
   ```
3. **Open the app**
   ```
   http://localhost:3000
   ```

## Development Workflow

- Keep `main` protected; develop new work on feature branches  
- Submit pull requests with peer review before merging  
- Execute `npm run lint` prior to opening a PR  
- Continuous delivery powered by Vercel with a managed PostgreSQL instance  
- Apply OWASP Top 10 practices to every new capability

## Project Timeline

| Week | Milestones |
| ---- | ---------- |
| 1 | Discovery, requirements and persona definition |
| 2 | Interface prototypes and stakeholder validation |
| 3 | Collaborative MVP implementation and core integrations |
| 4 | Testing, performance refinements and final delivery |

## Planning & Tracking

- Project board: [GitHub Project Board](https://github.com/users/fernandoludvig/projects/3/views/1)  
- Weekly syncs and retrospectives  
- Ongoing documentation and architectural decision records stored in-repo

---

**Ready to collaborate?** Clone the repo, spin up the environment and help the StudyHub team build the next generation of collaborative learning.


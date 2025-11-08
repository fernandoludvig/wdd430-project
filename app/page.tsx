import Link from "next/link";
import { BookOpen, Users, Calendar, MessageCircle, Trophy, Search } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Card from "@/components/ui/Card";

const heroStats = [
  { value: "18+", label: "Active study groups" },
  { value: "45", label: "Weekly sessions" },
  { value: "92%", label: "Goals completed" }
];

const features = [
  {
    icon: Users,
    title: "Collaborative study groups",
    description: "Create or join focused study hubs for each subject you need to master.",
    bgClass: "bg-blue-100",
    iconClass: "text-blue-600"
  },
  {
    icon: BookOpen,
    title: "Shared knowledge base",
    description: "Upload notes, PDFs and resources to keep your team aligned and prepared.",
    bgClass: "bg-purple-100",
    iconClass: "text-purple-600"
  },
  {
    icon: Calendar,
    title: "Smart scheduling",
    description: "Plan study sessions with automatic reminders and calendar integrations.",
    bgClass: "bg-green-100",
    iconClass: "text-green-600"
  },
  {
    icon: MessageCircle,
    title: "Real-time chat",
    description: "Keep discussions organized and answer questions instantly with live messaging.",
    bgClass: "bg-blue-100",
    iconClass: "text-blue-600"
  },
  {
    icon: Trophy,
    title: "Progress tracking",
    description: "Visualize achievements, monitor milestones and celebrate every win.",
    bgClass: "bg-orange-100",
    iconClass: "text-orange-600"
  },
  {
    icon: Search,
    title: "Intelligent search",
    description: "Find groups, resources and classmates in seconds with smart filters.",
    bgClass: "bg-purple-100",
    iconClass: "text-purple-600"
  }
];

const roadmap = [
  {
    week: "Week 1",
    title: "Discovery",
    description: "Research, persona definition and collaborative requirements gathering."
  },
  {
    week: "Week 2",
    title: "Design",
    description: "High-fidelity prototypes, usability testing and stakeholder validation."
  },
  {
    week: "Week 3",
    title: "Collaborative MVP",
    description: "Implementation of core experiences, integrations and collaboration flows."
  },
  {
    week: "Week 4",
    title: "Final delivery",
    description: "Quality assurance, performance tuning, presentation prep and documentation."
  }
];

const teamMembers = [
  { name: "Fernando Ludvig", role: "Project Lead (Week 1)" },
  { name: "Cynthia Moyo", role: "Project Lead (Week 2)" },
  { name: "Ganiyat Bakare", role: "Full-stack Developer" },
  { name: "Saul Carracelas", role: "Full-stack Developer" }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white">
      <Header />
      <main>
        <section className="container pt-20 pb-16">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 blur-[1px]" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
              </span>
              New: Live collaboration is now available!
            </div>
            <h1 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">StudyHub 📚</h1>
            <p className="mb-4 text-2xl font-semibold text-blue-600">Collaborate. Learn. Succeed Together.</p>
            <p className="mx-auto mb-12 max-w-2xl text-xl text-gray-600">
              The collaborative platform that connects students, mentors and knowledge. Organize study groups, track progress
              and amplify academic results with transparency and real-time insights.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
              >
                Get Started Now →
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center justify-center rounded-lg border-2 border-blue-600 px-8 py-4 text-lg font-semibold text-blue-600 transition-all hover:bg-blue-50"
              >
                Explore Features
              </Link>
            </div>
          </div>
        </section>

        <section className="container pb-12">
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-gray-100 bg-white p-8 text-center shadow-lg">
                <p className="mb-2 text-5xl font-bold text-blue-600">{stat.value}</p>
                <p className="text-base font-medium text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="features" className="container py-20">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">Essential tools for engaged teams</h2>
            <p className="text-xl text-gray-600">
              Everything you need to collaborate, share knowledge and reach ambitious academic goals together.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} hover>
                <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-lg ${feature.bgClass}`}>
                  <feature.icon className={`h-7 w-7 ${feature.iconClass}`} />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section id="roadmap" className="bg-gray-50 py-20">
          <div className="container">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="mb-4 text-4xl font-bold text-gray-900">Our delivery roadmap</h2>
              <p className="text-xl text-gray-600">A clear timeline keeps the team aligned and laser-focused.</p>
            </div>
            <div className="mx-auto max-w-4xl space-y-8">
              {roadmap.map((phase, index) => (
                <div key={phase.title} className="flex gap-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                    {index + 1}
                  </div>
                  <Card className="flex-grow">
                    <div className="mb-2 flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-600">
                        {phase.week}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900">{phase.title}</h3>
                    </div>
                    <p className="text-gray-600">{phase.description}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="container py-20">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">Meet the StudyHub team</h2>
            <p className="text-xl text-gray-600">A multidisciplinary crew passionate about technology and education.</p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-purple-500 text-2xl font-bold text-white">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="mb-1 text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="container text-center">
            <h2 className="mb-6 text-4xl font-bold text-white">Ready to transform the way you study?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-100">
              Join hundreds of students collaborating in real time, sharing knowledge and delivering better results together.
            </p>
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-lg font-semibold text-blue-600 shadow-xl transition-all hover:bg-gray-100"
            >
              Start for free →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


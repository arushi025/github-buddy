import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Progress } from "@/components/ui/progress";
import { useProgress, TopicId } from "@/hooks/use-progress";
import { Check } from "lucide-react";

const sections: { path: string; id: TopicId; emoji: string; title: string; desc: string }[] = [
  { path: "/setup", id: "setup", emoji: "⚙️", title: "Setup", desc: "Install Git, VS Code & create GitHub account" },
  { path: "/git-basics", id: "git-basics", emoji: "🌱", title: "Git Basics", desc: "Learn init, add, commit, status" },
  { path: "/github-basics", id: "github-basics", emoji: "🐙", title: "GitHub Basics", desc: "Create repos, push & pull code" },
  { path: "/workflow", id: "workflow", emoji: "🔄", title: "Git & GitHub Workflow", desc: "The complete flow from edit to PR" },
  { path: "/first-project", id: "first-project", emoji: "🚀", title: "Your First Project", desc: "Build & push a real project" },
  { path: "/pr-guide", id: "pr-guide", emoji: "🔀", title: "First Pull Request", desc: "Fork, clone, commit, push & PR" },
  { path: "/errors", id: "errors", emoji: "🐛", title: "Common Errors & Fixes", desc: "Fix real beginner mistakes" },
  { path: "/practice", id: "practice", emoji: "✅", title: "Practice Tasks", desc: "Hands-on challenges to master Git" },
  { path: "/cheatsheet", id: "cheatsheet", emoji: "📋", title: "Quick Cheat Sheet", desc: "All commands in one place" },
];

const Index = () => {
  const { isTopicComplete, completionPercent } = useProgress();

  return (
    <Layout>
      <div className="text-center mb-14">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary text-glow mb-4">
          🐙 GitHub Beginner Helper
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Learn Git & GitHub from zero. No jargon, no confusion — just clear steps to make your first push and pull request.
        </p>
      </div>

      {/* Progress Dashboard */}
      <div className="bg-card border border-border rounded-lg p-6 mb-10">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-heading text-lg font-bold text-primary text-glow-sm">📊 Your Progress</h2>
          <span className="text-sm font-heading font-semibold text-primary">{completionPercent}%</span>
        </div>
        <Progress value={completionPercent} className="h-3 mb-2" />
        <p className="text-xs text-muted-foreground">
          {sections.filter((s) => isTopicComplete(s.id)).length} of {sections.length} topics completed
        </p>
      </div>

      {/* Why Git & GitHub */}
      <div className="bg-card border border-border rounded-lg p-6 mb-10">
        <h2 className="font-heading text-xl font-bold text-primary text-glow-sm mb-4">🤔 Why Git & GitHub?</h2>
        <ul className="space-y-2 text-muted-foreground">
          <li>✅ Track every change you make to your code</li>
          <li>✅ Collaborate with other developers easily</li>
          <li>✅ Required for almost every developer job</li>
          <li>✅ Build your portfolio and show your work</li>
          <li>✅ Never lose your code again</li>
        </ul>
      </div>

      {/* What You'll Learn */}
      <h2 className="font-heading text-2xl font-bold text-primary text-glow-sm mb-6">📚 What You'll Learn</h2>
      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        {sections.map((s) => {
          const done = isTopicComplete(s.id);
          return (
            <Link
              key={s.path}
              to={s.path}
              className={`group relative rounded-lg p-5 transition-all hover:box-glow hover:scale-[1.02] ${
                done ? "bg-green-500/20 border border-green-500/30" : "bg-primary"
              }`}
            >
              {done && (
                <div className="absolute top-3 right-3">
                  <Check className="w-5 h-5 text-green-400" />
                </div>
              )}
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{s.emoji}</span>
                <h3 className={`font-heading font-bold text-lg ${done ? "text-green-300" : "text-primary-foreground"}`}>
                  {s.title}
                </h3>
              </div>
              <p className={`text-sm ${done ? "text-green-400/80" : "text-primary-foreground/80"}`}>{s.desc}</p>
            </Link>
          );
        })}
      </div>

      <div className="text-center">
        <Link
          to="/setup"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-bold px-8 py-3 rounded-lg text-lg hover:box-glow transition-all"
        >
          🚀 Start from Basics
        </Link>
      </div>
    </Layout>
  );
};

export default Index;

import { Link, useLocation } from "react-router-dom";
import { BookOpen, Settings, GitBranch, Github, Workflow, Rocket, AlertTriangle, CheckSquare, FileText, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { path: "/", label: "Home", icon: BookOpen, emoji: "🏠" },
  { path: "/setup", label: "Setup", icon: Settings, emoji: "⚙️" },
  { path: "/git-basics", label: "Git Basics", icon: GitBranch, emoji: "🌱" },
  { path: "/github-basics", label: "GitHub Basics", icon: Github, emoji: "🐙" },
  { path: "/workflow", label: "Workflow", icon: Workflow, emoji: "🔄" },
  { path: "/first-project", label: "First Project", icon: Rocket, emoji: "🚀" },
  { path: "/pr-guide", label: "First PR Guide", icon: GitBranch, emoji: "🔀" },
  { path: "/errors", label: "Common Errors", icon: AlertTriangle, emoji: "🐛" },
  { path: "/practice", label: "Practice Tasks", icon: CheckSquare, emoji: "✅" },
  { path: "/cheatsheet", label: "Cheat Sheet", icon: FileText, emoji: "📋" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Mobile toggle */}
      <button
        className="fixed top-4 left-4 z-50 lg:hidden p-2 rounded-md bg-card border border-border"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X className="w-5 h-5 text-primary" /> : <Menu className="w-5 h-5 text-primary" />}
      </button>

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-card border-r border-border transform transition-transform lg:translate-x-0 ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 border-b border-border">
          <h1 className="font-heading text-xl font-bold text-primary text-glow-sm">
            🐙 GitHub Helper
          </h1>
          <p className="text-xs text-muted-foreground mt-1">Beginner's Guide</p>
        </div>
        <nav className="p-4 space-y-1 overflow-y-auto h-[calc(100vh-100px)]">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground box-glow"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                <span className="text-base">{item.emoji}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-30 bg-background/80 lg:hidden" onClick={() => setMobileOpen(false)} />
      )}

      {/* Main */}
      <main className="flex-1 lg:ml-64">
        <div className="max-w-4xl mx-auto px-6 py-12 lg:py-16">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;

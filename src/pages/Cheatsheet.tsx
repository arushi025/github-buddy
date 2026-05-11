import Layout from "@/components/Layout";
import PageHeading from "@/components/PageHeading";
import TopicCompleteButton from "@/components/TopicCompleteButton";
import { useProgress } from "@/hooks/use-progress";

const commands = [
  { cmd: "git init", desc: "Start tracking a folder" },
  { cmd: "git add .", desc: "Stage all changes" },
  { cmd: 'git commit -m "msg"', desc: "Save a snapshot" },
  { cmd: "git status", desc: "Check what's changed" },
  { cmd: "git log --oneline", desc: "See commit history" },
  { cmd: "git push", desc: "Upload to GitHub" },
  { cmd: "git pull", desc: "Download latest changes" },
  { cmd: "git clone <url>", desc: "Copy a repo" },
  { cmd: "git branch <name>", desc: "Create a branch" },
  { cmd: "git checkout <name>", desc: "Switch to a branch" },
  { cmd: "git checkout -b <name>", desc: "Create + switch branch" },
  { cmd: "git merge <branch>", desc: "Merge a branch into current" },
  { cmd: "git remote add origin <url>", desc: "Link to GitHub repo" },
  { cmd: "git push -u origin main", desc: "First push to GitHub" },
  { cmd: "git stash", desc: "Save changes temporarily" },
  { cmd: "git stash pop", desc: "Restore stashed changes" },
  { cmd: "git diff", desc: "See exact changes made" },
  { cmd: 'git config --global user.name "name"', desc: "Set your Git name" },
  { cmd: 'git config --global user.email "email"', desc: "Set your Git email" },
];

const Cheatsheet = () => {
  const { toggleTopic, isTopicComplete } = useProgress();

  const handleCopy = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
  };

  return (
    <Layout>
      <PageHeading emoji="📋" title="Quick Cheat Sheet" subtitle="All the commands you need, in one place." />
      <div className="space-y-3">
        {commands.map((c) => (
          <div
            key={c.cmd}
            className="bg-card border border-border rounded-lg p-4 flex flex-col sm:flex-row sm:items-center gap-2 group cursor-pointer hover:border-primary/50 transition-all"
            onClick={() => handleCopy(c.cmd)}
            title="Click to copy"
          >
            <code className="text-primary font-semibold text-sm whitespace-nowrap">{c.cmd}</code>
            <span className="text-muted-foreground text-sm sm:ml-auto">→ {c.desc}</span>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <TopicCompleteButton topicId="cheatsheet" topicName="Cheat Sheet" isComplete={isTopicComplete("cheatsheet")} onToggle={toggleTopic} />
      </div>
    </Layout>
  );
};
export default Cheatsheet;

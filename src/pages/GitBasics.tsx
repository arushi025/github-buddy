import Layout from "@/components/Layout";
import PageHeading from "@/components/PageHeading";
import SectionCard from "@/components/SectionCard";
import CodeBlock from "@/components/CodeBlock";
import TopicCompleteButton from "@/components/TopicCompleteButton";
import { useProgress } from "@/hooks/use-progress";

const GitBasics = () => {
  const { toggleTopic, isTopicComplete } = useProgress();
  return (
    <Layout>
      <PageHeading emoji="🌱" title="Git Basics" subtitle="Understand the core commands you'll use every day." />
      <SectionCard title="🤔 What is Git?">
        <p>Git is a <strong className="text-foreground">version control tool</strong>. Think of it like "Ctrl+Z" for your entire project — but way more powerful.</p>
        <p>It saves snapshots of your code so you can go back anytime.</p>
      </SectionCard>
      <SectionCard title="📁 What is a Repository?">
        <p>A <strong className="text-foreground">repository (repo)</strong> is just a folder that Git is tracking.</p>
        <p>When you "initialize" a folder with Git, it becomes a repo.</p>
      </SectionCard>
      <SectionCard title="⚡ git init — Start tracking a folder">
        <p>Creates a new Git repo in your current folder.</p>
        <CodeBlock>{`mkdir my-project\ncd my-project\ngit init`}</CodeBlock>
        <p>Now Git is watching this folder for changes!</p>
      </SectionCard>
      <SectionCard title="➕ git add — Stage your changes">
        <p>Tells Git: "I want to include these changes in my next save."</p>
        <CodeBlock>{`git add filename.txt     # Add one file\ngit add .               # Add ALL changed files`}</CodeBlock>
      </SectionCard>
      <SectionCard title="💾 git commit — Save a snapshot">
        <p>Saves your staged changes with a message describing what you did.</p>
        <CodeBlock>{`git commit -m "Added homepage"`}</CodeBlock>
        <p>Always write clear messages! "fix stuff" = bad. "Fixed login button" = good.</p>
      </SectionCard>
      <SectionCard title="📊 git status — Check what's happening">
        <p>Shows which files are changed, staged, or untracked.</p>
        <CodeBlock>git status</CodeBlock>
        <p>Run this often — it's your best friend!</p>
      </SectionCard>
      <SectionCard title="📜 git log — See your history">
        <p>Shows all your past commits.</p>
        <CodeBlock>git log --oneline</CodeBlock>
      </SectionCard>
      <SectionCard title="✅ Practice Task">
        <p>1. Create a folder called <code className="text-primary">test-repo</code></p>
        <p>2. Run <code className="text-primary">git init</code> inside it</p>
        <p>3. Create a file <code className="text-primary">hello.txt</code> with some text</p>
        <p>4. Add and commit it</p>
        <p>5. Run <code className="text-primary">git log</code> to see your commit</p>
      </SectionCard>
      <div className="mt-8 flex justify-center">
        <TopicCompleteButton topicId="git-basics" topicName="Git Basics" isComplete={isTopicComplete("git-basics")} onToggle={toggleTopic} />
      </div>
    </Layout>
  );
};
export default GitBasics;

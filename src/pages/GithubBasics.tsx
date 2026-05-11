import Layout from "@/components/Layout";
import PageHeading from "@/components/PageHeading";
import SectionCard from "@/components/SectionCard";
import CodeBlock from "@/components/CodeBlock";
import TopicCompleteButton from "@/components/TopicCompleteButton";
import { useProgress } from "@/hooks/use-progress";

const GithubBasics = () => {
  const { toggleTopic, isTopicComplete } = useProgress();
  return (
    <Layout>
      <PageHeading emoji="🐙" title="GitHub Basics" subtitle="GitHub is where your code lives online. Git ≠ GitHub!" />
      <SectionCard title="🌐 What is GitHub?">
        <p><strong className="text-foreground">Git</strong> = tool on your computer that tracks changes.</p>
        <p><strong className="text-foreground">GitHub</strong> = website where you store your Git repos online.</p>
        <p>Think of Git as your camera, GitHub as your photo album in the cloud.</p>
      </SectionCard>
      <SectionCard title="📦 Create a Repository on GitHub">
        <p>1. Go to <strong className="text-foreground">github.com</strong> → Click <strong className="text-foreground">"New"</strong></p>
        <p>2. Give it a name (e.g., <code className="text-primary">my-first-repo</code>)</p>
        <p>3. Keep it Public</p>
        <p>4. DON'T check "Add README"</p>
        <p>5. Click <strong className="text-foreground">Create Repository</strong></p>
      </SectionCard>
      <SectionCard title="🔗 Connect Git to GitHub">
        <p>In your local project folder, run:</p>
        <CodeBlock>{`git remote add origin https://github.com/YOUR-USERNAME/my-first-repo.git`}</CodeBlock>
      </SectionCard>
      <SectionCard title="🚀 git push — Upload your code">
        <CodeBlock>{`git push -u origin main`}</CodeBlock>
      </SectionCard>
      <SectionCard title="⬇️ git pull — Download latest changes">
        <CodeBlock>git pull origin main</CodeBlock>
        <p>Always pull before you start working!</p>
      </SectionCard>
      <SectionCard title="📥 git clone — Copy an existing repo">
        <CodeBlock>git clone https://github.com/username/repo-name.git</CodeBlock>
      </SectionCard>
      <div className="mt-8 flex justify-center">
        <TopicCompleteButton topicId="github-basics" topicName="GitHub Basics" isComplete={isTopicComplete("github-basics")} onToggle={toggleTopic} />
      </div>
    </Layout>
  );
};
export default GithubBasics;

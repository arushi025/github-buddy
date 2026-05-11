import Layout from "@/components/Layout";
import PageHeading from "@/components/PageHeading";
import SectionCard from "@/components/SectionCard";
import CodeBlock from "@/components/CodeBlock";
import TopicCompleteButton from "@/components/TopicCompleteButton";
import { useProgress } from "@/hooks/use-progress";

const WorkflowPage = () => {
  const { toggleTopic, isTopicComplete } = useProgress();
  return (
    <Layout>
      <PageHeading emoji="🔄" title="Git & GitHub Workflow" subtitle="This is the MOST important page. Master this flow." />
      <SectionCard title="🔁 The Complete Flow">
        <div className="space-y-3">
          <p><strong className="text-foreground">Step 1:</strong> Make changes to your files</p>
          <p><strong className="text-foreground">Step 2:</strong> Check what changed → <code className="text-primary">git status</code></p>
          <p><strong className="text-foreground">Step 3:</strong> Stage changes → <code className="text-primary">git add .</code></p>
          <p><strong className="text-foreground">Step 4:</strong> Commit → <code className="text-primary">git commit -m "message"</code></p>
          <p><strong className="text-foreground">Step 5:</strong> Push to GitHub → <code className="text-primary">git push</code></p>
        </div>
        <CodeBlock>{`# The daily workflow:\ngit status\ngit add .\ngit commit -m "Added new feature"\ngit push`}</CodeBlock>
      </SectionCard>
      <SectionCard title="🌿 Branches — Work Without Breaking Things">
        <p>A <strong className="text-foreground">branch</strong> is like a copy of your project where you can experiment safely.</p>
        <CodeBlock>{`git checkout -b feature-login`}</CodeBlock>
      </SectionCard>
      <SectionCard title="🔀 Merging Branches">
        <p>When your feature is ready, merge it back into main:</p>
        <CodeBlock>{`git checkout main\ngit merge feature-login`}</CodeBlock>
      </SectionCard>
      <SectionCard title="📬 Pull Requests (PR)">
        <p>Push your branch and create a <strong className="text-foreground">Pull Request</strong> on GitHub:</p>
        <CodeBlock>{`git push -u origin feature-login`}</CodeBlock>
        <p>1. Go to your repo → Click <strong className="text-foreground">"Compare & pull request"</strong></p>
        <p>2. Add a description → Create PR → Merge → Done! 🎉</p>
      </SectionCard>
      <div className="mt-8 flex justify-center">
        <TopicCompleteButton topicId="workflow" topicName="Git & GitHub Workflow" isComplete={isTopicComplete("workflow")} onToggle={toggleTopic} />
      </div>
    </Layout>
  );
};

export default WorkflowPage;

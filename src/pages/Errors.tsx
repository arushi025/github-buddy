import Layout from "@/components/Layout";
import PageHeading from "@/components/PageHeading";
import SectionCard from "@/components/SectionCard";
import CodeBlock from "@/components/CodeBlock";
import TopicCompleteButton from "@/components/TopicCompleteButton";
import { useProgress } from "@/hooks/use-progress";

const Errors = () => {
  const { toggleTopic, isTopicComplete } = useProgress();
  return (
    <Layout>
      <PageHeading emoji="🐛" title="Common Errors & Fixes" subtitle="Every beginner hits these. Here's how to fix them." />
      <SectionCard title='❌ "git is not recognized"'>
        <p><strong className="text-foreground">Problem:</strong> Git is not installed or not in your system PATH.</p>
        <p><strong className="text-foreground">Fix:</strong> Install Git from <strong className="text-foreground">git-scm.com</strong>, check "Add Git to PATH", restart terminal.</p>
        <CodeBlock>git --version</CodeBlock>
      </SectionCard>
      <SectionCard title="⚠️ Merge Conflict">
        <p><strong className="text-foreground">What you see:</strong></p>
        <CodeBlock>{`<<<<<<< HEAD\nYour changes\n=======\nOther person's changes\n>>>>>>> branch-name`}</CodeBlock>
        <p><strong className="text-foreground">Fix:</strong> Delete markers, keep the code you want, then:</p>
        <CodeBlock>{`git add .\ngit commit -m "Resolved merge conflict"`}</CodeBlock>
      </SectionCard>
      <SectionCard title="😱 Forgot to Commit Before Switching Branch">
        <p><strong className="text-foreground">Fix:</strong> Stash your changes:</p>
        <CodeBlock>{`git stash\ngit checkout other-branch\n# Come back later:\ngit checkout your-branch\ngit stash pop`}</CodeBlock>
      </SectionCard>
      <SectionCard title="🔀 Pushed to Wrong Branch">
        <CodeBlock>{`git log --oneline\ngit checkout correct-branch\ngit cherry-pick <commit-hash>\ngit checkout wrong-branch\ngit reset --hard HEAD~1`}</CodeBlock>
      </SectionCard>
      <SectionCard title='📛 "fatal: not a git repository"'>
        <p><strong className="text-foreground">Fix:</strong> You're not inside a Git folder:</p>
        <CodeBlock>{`cd your-project-folder\ngit init`}</CodeBlock>
      </SectionCard>
      <SectionCard title="🔑 Authentication Failed">
        <p>GitHub stopped accepting passwords. Generate a Personal Access Token:</p>
        <p>GitHub → Settings → Developer settings → Personal access tokens → Use as password.</p>
      </SectionCard>
      <div className="mt-8 flex justify-center">
        <TopicCompleteButton topicId="errors" topicName="Common Errors" isComplete={isTopicComplete("errors")} onToggle={toggleTopic} />
      </div>
    </Layout>
  );
};

export default Errors;

import Layout from "@/components/Layout";
import PageHeading from "@/components/PageHeading";
import SectionCard from "@/components/SectionCard";
import CodeBlock from "@/components/CodeBlock";
import TopicCompleteButton from "@/components/TopicCompleteButton";
import { useProgress } from "@/hooks/use-progress";

const Setup = () => {
  const { toggleTopic, isTopicComplete } = useProgress();
  return (
    <Layout>
      <PageHeading emoji="⚙️" title="Setup" subtitle="Get everything installed — takes 10 minutes." />
      <SectionCard title="1️⃣ Create a GitHub Account">
        <p>Go to <strong className="text-foreground">github.com</strong> → Click <strong className="text-foreground">Sign Up</strong></p>
        <p>Pick a username, add your email, set a password. Done!</p>
      </SectionCard>
      <SectionCard title="2️⃣ Install Git">
        <p><strong className="text-foreground">Windows:</strong> Download from <strong className="text-foreground">git-scm.com</strong> → Run installer → Keep defaults.</p>
        <p><strong className="text-foreground">Mac:</strong> Open Terminal and run:</p>
        <CodeBlock>brew install git</CodeBlock>
        <p><strong className="text-foreground">Linux:</strong></p>
        <CodeBlock>sudo apt install git</CodeBlock>
      </SectionCard>
      <SectionCard title="3️⃣ Install VS Code">
        <p>Go to <strong className="text-foreground">code.visualstudio.com</strong> → Download → Install.</p>
        <p>VS Code has a built-in terminal — you'll use it for Git commands.</p>
      </SectionCard>
      <SectionCard title="4️⃣ Verify Installation">
        <p>Open your terminal and run:</p>
        <CodeBlock>{`git --version\n# Should show something like: git version 2.40.0`}</CodeBlock>
        <p>Set your name and email (GitHub uses these):</p>
        <CodeBlock>{`git config --global user.name "Your Name"\ngit config --global user.email "your@email.com"`}</CodeBlock>
      </SectionCard>
      <SectionCard title="✅ Mini Task">
        <p>1. Create your GitHub account</p>
        <p>2. Install Git</p>
        <p>3. Run <code className="text-primary">git --version</code> and confirm it works</p>
      </SectionCard>
      <div className="mt-8 flex justify-center">
        <TopicCompleteButton topicId="setup" topicName="Setup" isComplete={isTopicComplete("setup")} onToggle={toggleTopic} />
      </div>
    </Layout>
  );
};

export default Setup;

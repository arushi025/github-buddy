import Layout from "@/components/Layout";
import PageHeading from "@/components/PageHeading";
import SectionCard from "@/components/SectionCard";
import CodeBlock from "@/components/CodeBlock";
import TopicCompleteButton from "@/components/TopicCompleteButton";
import { useProgress } from "@/hooks/use-progress";

const FirstProject = () => {
  const { toggleTopic, isTopicComplete } = useProgress();
  return (
    <Layout>
      <PageHeading emoji="🚀" title="Your First Project" subtitle="Let's build something real and push it to GitHub." />
      <SectionCard title="📝 Step 1: Create a Simple HTML Page">
        <p>Create a new folder and add an <code className="text-primary">index.html</code> file:</p>
        <CodeBlock>{`mkdir my-portfolio\ncd my-portfolio`}</CodeBlock>
      </SectionCard>
      <SectionCard title="🔧 Step 2: Initialize Git">
        <CodeBlock>{`git init\ngit add .\ngit commit -m "First commit - added homepage"`}</CodeBlock>
      </SectionCard>
      <SectionCard title="☁️ Step 3: Create a Repo on GitHub">
        <p>Go to GitHub → New Repository → Name it <code className="text-primary">my-portfolio</code> → Create</p>
      </SectionCard>
      <SectionCard title="🚀 Step 4: Push to GitHub">
        <CodeBlock>{`git remote add origin https://github.com/YOUR-USERNAME/my-portfolio.git\ngit branch -M main\ngit push -u origin main`}</CodeBlock>
      </SectionCard>
      <SectionCard title="✏️ Step 5: Make a Change">
        <p>Edit your file, then commit and push:</p>
        <CodeBlock>{`git add .\ngit commit -m "Added celebration message"\ngit push`}</CodeBlock>
      </SectionCard>
      <SectionCard title="🔀 Step 6: Create a Pull Request">
        <CodeBlock>{`git checkout -b add-skills\ngit add .\ngit commit -m "Added skills section"\ngit push -u origin add-skills`}</CodeBlock>
        <p>Go to GitHub → Create Pull Request → Merge it 🎉</p>
      </SectionCard>
      <div className="mt-8 flex justify-center">
        <TopicCompleteButton topicId="first-project" topicName="Your First Project" isComplete={isTopicComplete("first-project")} onToggle={toggleTopic} />
      </div>
    </Layout>
  );
};
export default FirstProject;

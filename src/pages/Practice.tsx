import Layout from "@/components/Layout";
import PageHeading from "@/components/PageHeading";
import SectionCard from "@/components/SectionCard";
import TopicCompleteButton from "@/components/TopicCompleteButton";
import { useProgress } from "@/hooks/use-progress";

const Practice = () => {
  const { toggleTopic, isTopicComplete } = useProgress();
  return (
    <Layout>
      <PageHeading emoji="✅" title="Practice Tasks" subtitle="No reading. Just doing. Complete these challenges!" />
      <SectionCard title="🟢 Level 1: Basics">
        <p>❶ Create a new folder, initialize Git, add a file, and make your first commit.</p>
        <p>❷ Run <code className="text-primary">git log</code> to see your commit history.</p>
        <p>❸ Make 3 more changes with 3 separate commits.</p>
      </SectionCard>
      <SectionCard title="🟡 Level 2: GitHub">
        <p>❹ Create a new repo on GitHub and push your local project to it.</p>
        <p>❺ Clone any public repo from GitHub to your computer.</p>
        <p>❻ Make a change to the cloned repo, commit, and push it.</p>
      </SectionCard>
      <SectionCard title="🟠 Level 3: Branches & PRs">
        <p>❼ Create a new branch, make changes, and push the branch.</p>
        <p>❽ Create a Pull Request on GitHub and merge it yourself.</p>
        <p>❾ Create 2 branches, make different changes, and merge both into main.</p>
      </SectionCard>
      <SectionCard title="🔴 Level 4: Real World">
        <p>❿ Fork an open-source project, make a small fix, and submit a PR.</p>
        <p>⓫ Intentionally create a merge conflict and resolve it.</p>
        <p>⓬ Use <code className="text-primary">git stash</code> to save work, switch branches, then restore it.</p>
      </SectionCard>
      <SectionCard title="🏆 Boss Level">
        <p>⓭ Build a complete project and push it with at least 10 meaningful commits.</p>
        <p>⓮ Contribute to someone else's open-source project with a real PR.</p>
      </SectionCard>
      <div className="mt-8 flex justify-center">
        <TopicCompleteButton topicId="practice" topicName="Practice Tasks" isComplete={isTopicComplete("practice")} onToggle={toggleTopic} />
      </div>
    </Layout>
  );
};
export default Practice;

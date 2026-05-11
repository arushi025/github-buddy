import Layout from "@/components/Layout";
import PageHeading from "@/components/PageHeading";
import SectionCard from "@/components/SectionCard";
import CodeBlock from "@/components/CodeBlock";
import InteractiveChecklist from "@/components/InteractiveChecklist";
import TopicCompleteButton from "@/components/TopicCompleteButton";
import { useProgress } from "@/hooks/use-progress";
import { GitFork, Download, GitCommit, Upload, GitPullRequest, ArrowRight } from "lucide-react";

const prSteps = [
  { id: "fork", label: "Fork the repository on GitHub" },
  { id: "clone", label: "Clone your forked repo locally" },
  { id: "branch", label: "Create a new branch for your changes" },
  { id: "edit", label: "Make your changes to the code" },
  { id: "add", label: "Stage your changes with git add" },
  { id: "commit", label: "Commit with a clear message" },
  { id: "push", label: "Push your branch to GitHub" },
  { id: "pr", label: "Open a Pull Request on GitHub" },
];

const flowSteps = [
  { icon: GitFork, label: "Fork", color: "text-blue-400" },
  { icon: Download, label: "Clone", color: "text-cyan-400" },
  { icon: GitCommit, label: "Commit", color: "text-primary" },
  { icon: Upload, label: "Push", color: "text-yellow-400" },
  { icon: GitPullRequest, label: "PR", color: "text-green-400" },
];

const PullRequestGuide = () => {
  const { toggleTopic, isTopicComplete, toggleStep, isStepComplete, progress } = useProgress();
  const completedSteps = progress.completedSteps["pr-guide"] || [];

  const handleStepToggle = (stepId: string) => toggleStep("pr-guide", stepId);

  return (
    <Layout>
      <PageHeading
        emoji="🔀"
        title="First Pull Request Guide"
        subtitle="Your complete guide to making your first open-source contribution!"
      />

      {/* Visual Flow */}
      <div className="bg-card border border-border rounded-lg p-6 mb-8">
        <h2 className="font-heading text-lg font-bold text-primary text-glow-sm mb-5">🗺️ The PR Flow</h2>
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-0">
          {flowSteps.map((step, i) => (
            <div key={step.label} className="flex items-center gap-2">
              <div className="flex flex-col items-center gap-1.5">
                <div className={`w-12 h-12 rounded-full bg-muted flex items-center justify-center ${step.color}`}>
                  <step.icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-heading font-semibold text-foreground">{step.label}</span>
              </div>
              {i < flowSteps.length - 1 && (
                <ArrowRight className="w-5 h-5 text-muted-foreground mx-1 hidden md:block" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Checklist */}
      <SectionCard title="✅ Your PR Checklist">
        <p>Click each step as you complete it:</p>
        <InteractiveChecklist steps={prSteps} completedSteps={completedSteps} onToggle={handleStepToggle} />
        <p className="text-xs text-muted-foreground mt-2">
          {completedSteps.length}/{prSteps.length} steps done
        </p>
      </SectionCard>

      {/* Step-by-step instructions */}
      <SectionCard title="1️⃣ Fork the Repository">
        <p>Go to the repo you want to contribute to and click the <strong className="text-foreground">Fork</strong> button (top right).</p>
        <p>This creates your own copy of the project under your GitHub account.</p>
      </SectionCard>

      <SectionCard title="2️⃣ Clone Your Fork">
        <CodeBlock>{`git clone https://github.com/YOUR-USERNAME/repo-name.git\ncd repo-name`}</CodeBlock>
      </SectionCard>

      <SectionCard title="3️⃣ Create a Branch">
        <p>Never work directly on <code className="text-primary">main</code>. Create a feature branch:</p>
        <CodeBlock>{`git checkout -b fix-typo`}</CodeBlock>
      </SectionCard>

      <SectionCard title="4️⃣ Make Changes & Commit">
        <p>Edit files, then stage and commit:</p>
        <CodeBlock>{`git add .\ngit commit -m "Fix typo in README"`}</CodeBlock>
      </SectionCard>

      <SectionCard title="5️⃣ Push to GitHub">
        <CodeBlock>{`git push -u origin fix-typo`}</CodeBlock>
      </SectionCard>

      <SectionCard title="6️⃣ Open a Pull Request">
        <p>1. Go to your fork on GitHub</p>
        <p>2. Click <strong className="text-foreground">"Compare & pull request"</strong></p>
        <p>3. Write a clear title and description</p>
        <p>4. Click <strong className="text-foreground">"Create Pull Request"</strong></p>
        <p>🎉 You just made your first PR!</p>
      </SectionCard>

      <SectionCard title="💡 Pro Tips">
        <p>• Read the project's <code className="text-primary">CONTRIBUTING.md</code> before starting</p>
        <p>• Keep your changes small and focused</p>
        <p>• Write clear commit messages</p>
        <p>• Be patient — maintainers are busy!</p>
      </SectionCard>

      <div className="mt-8 flex justify-center">
        <TopicCompleteButton
          topicId="pr-guide"
          topicName="First Pull Request Guide"
          isComplete={isTopicComplete("pr-guide")}
          onToggle={toggleTopic}
        />
      </div>
    </Layout>
  );
};

export default PullRequestGuide;

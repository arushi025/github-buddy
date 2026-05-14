import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/use-auth";
import { useProgress } from "@/hooks/use-progress";
import Layout from "@/components/Layout";
import PageHeading from "@/components/PageHeading";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { User, BookOpen, CheckCircle } from "lucide-react";

const topicLabels: Record<string, string> = {
  setup: "⚡ Setup",
  "git-basics": "🔀 Git Basics",
  "github-basics": "⭐ GitHub Basics",
  workflow: "🔄 Workflow",
  "first-project": "🚀 First Project",
  errors: "⚠️ Common Errors",
  practice: "✏️ Practice",
  cheatsheet: "📋 Cheat Sheet",
  "pr-guide": "🔃 PR Guide",
};

const Profile = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const { progress, completionPercent, isTopicComplete } = useProgress();
  const [displayName, setDisplayName] = useState("");
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (!loading && !user) navigate("/auth", { replace: true });
  }, [user, loading, navigate]);

  useEffect(() => {
    if (!user) return;
    (async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("display_name")
        .eq("id", user.id)
        .maybeSingle();
      if (!error && data) {
        setDisplayName(data.display_name ?? "");
      }
      setFetching(false);
    })();
  }, [user]);

  if (loading || fetching) {
    return (
      <Layout>
        <p className="text-muted-foreground">Loading…</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageHeading emoji="👤" title="Your Profile" />

      <div className="space-y-6 max-w-2xl">
        {/* Name & Email */}
        <Card className="p-6 border-primary/20">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
              <User className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-semibold text-primary">
                {displayName || "Learner"}
              </h3>
              <p className="text-sm text-muted-foreground">{user?.email}</p>
            </div>
          </div>
        </Card>

        {/* Progress */}
        <Card className="p-6 border-primary/20">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-5 h-5 text-primary" />
            <h3 className="font-heading text-lg font-semibold text-primary">
              Your Progress
            </h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                {progress.completedTopics.length} of 9 topics completed
              </span>
              <span className="text-sm font-medium text-primary">
                {completionPercent}%
              </span>
            </div>
            <Progress value={completionPercent} className="h-2" />
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {Object.keys(topicLabels).map((key) => {
              const done = isTopicComplete(key as any);
              return (
                <div
                  key={key}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg border transition-colors ${
                    done
                      ? "bg-primary/10 border-primary/30"
                      : "bg-muted/30 border-muted"
                  }`}
                >
                  {done ? (
                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                  ) : (
                    <div className="w-4 h-4 rounded-full border-2 border-muted-foreground/40 shrink-0" />
                  )}
                  <span
                    className={`text-sm ${
                      done ? "text-primary font-medium" : "text-muted-foreground"
                    }`}
                  >
                    {topicLabels[key]}
                  </span>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Profile;

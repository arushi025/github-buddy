import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import Layout from "@/components/Layout";
import PageHeading from "@/components/PageHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { useAuth } from "@/hooks/use-auth";
import { LogIn, UserPlus } from "lucide-react";

const emailSchema = z.string().trim().email("Invalid email").max(255);
const passwordSchema = z.string().min(6, "Min 6 characters").max(72);
const nameSchema = z.string().trim().min(1, "Required").max(60);

const Auth = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && user) navigate("/profile", { replace: true });
  }, [user, loading, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const e1 = emailSchema.parse(email);
      const p1 = passwordSchema.parse(password);
      setSubmitting(true);

      if (mode === "signup") {
        const n1 = nameSchema.parse(displayName);
        const { error } = await supabase.auth.signUp({
          email: e1,
          password: p1,
          options: {
            emailRedirectTo: `${window.location.origin}/profile`,
            data: { display_name: n1 },
          },
        });
        if (error) throw error;
        toast.success("Account created! 🎉");
        navigate("/profile", { replace: true });
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email: e1, password: p1 });
        if (error) throw error;
        toast.success("Welcome back! 👋");
        navigate("/profile", { replace: true });
      }
    } catch (err: any) {
      toast.error(err?.message || "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <PageHeading
        emoji={mode === "login" ? "🔐" : "✨"}
        title={mode === "login" ? "Login" : "Sign Up"}
        subtitle={mode === "login" ? "Welcome back to GitHub Helper" : "Create your free account"}
      />

      <Card className="p-6 max-w-md mx-auto border-primary/20">
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "signup" && (
            <div className="space-y-2">
              <Label htmlFor="name">Display Name</Label>
              <Input id="name" value={displayName} onChange={(e) => setDisplayName(e.target.value)} placeholder="Jane Doe" required maxLength={60} />
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required maxLength={255} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" required minLength={6} maxLength={72} />
          </div>

          <Button type="submit" disabled={submitting} className="w-full gap-2">
            {mode === "login" ? <LogIn className="w-4 h-4" /> : <UserPlus className="w-4 h-4" />}
            {submitting ? "Please wait…" : mode === "login" ? "Login" : "Create Account"}
          </Button>
        </form>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          {mode === "login" ? (
            <>New here?{" "}
              <button onClick={() => setMode("signup")} className="text-primary hover:underline font-medium">Create an account</button>
            </>
          ) : (
            <>Already have an account?{" "}
              <button onClick={() => setMode("login")} className="text-primary hover:underline font-medium">Login</button>
            </>
          )}
        </div>
      </Card>
    </Layout>
  );
};

export default Auth;

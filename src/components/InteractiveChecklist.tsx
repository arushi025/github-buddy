import { Check } from "lucide-react";

interface Step {
  id: string;
  label: string;
}

interface Props {
  steps: Step[];
  completedSteps: string[];
  onToggle: (stepId: string) => void;
}

const InteractiveChecklist = ({ steps, completedSteps, onToggle }: Props) => (
  <div className="space-y-2 my-4">
    {steps.map((step, i) => {
      const done = completedSteps.includes(step.id);
      return (
        <button
          key={step.id}
          onClick={() => onToggle(step.id)}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg border text-left text-sm transition-all ${
            done
              ? "bg-green-500/10 border-green-500/30 text-green-400"
              : "bg-card border-border text-muted-foreground hover:border-primary hover:text-foreground"
          }`}
        >
          <span
            className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
              done ? "bg-green-500 text-background" : "bg-muted text-muted-foreground"
            }`}
          >
            {done ? <Check className="w-3.5 h-3.5" /> : i + 1}
          </span>
          <span className={done ? "line-through opacity-70" : ""}>{step.label}</span>
        </button>
      );
    })}
  </div>
);

export default InteractiveChecklist;

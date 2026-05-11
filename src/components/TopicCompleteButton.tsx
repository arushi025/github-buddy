import { Check, Circle } from "lucide-react";
import { toast } from "sonner";
import type { TopicId } from "@/hooks/use-progress";

interface Props {
  topicId: TopicId;
  topicName: string;
  isComplete: boolean;
  onToggle: (id: TopicId) => void;
}

const TopicCompleteButton = ({ topicId, topicName, isComplete, onToggle }: Props) => {
  const handleClick = () => {
    onToggle(topicId);
    if (!isComplete) {
      toast.success(`🎉 "${topicName}" marked as complete!`, {
        description: "Great job! Keep going!",
      });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-heading font-semibold text-sm transition-all ${
        isComplete
          ? "bg-green-500/20 text-green-400 border border-green-500/40"
          : "bg-primary text-primary-foreground hover:box-glow"
      }`}
    >
      {isComplete ? <Check className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
      {isComplete ? "Completed ✓" : "Mark as Complete"}
    </button>
  );
};

export default TopicCompleteButton;

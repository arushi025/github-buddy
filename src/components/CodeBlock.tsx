import { useState } from "react";
import { Check, Copy } from "lucide-react";

const CodeBlock = ({ children }: { children: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-3">
      <pre className="bg-muted rounded-lg p-4 pr-12 overflow-x-auto border border-border">
        <code className="text-sm text-primary">{children}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-1.5 rounded-md bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all opacity-0 group-hover:opacity-100"
        title="Copy command"
      >
        {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
      </button>
    </div>
  );
};

export default CodeBlock;

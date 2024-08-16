import React from "react";

interface CodeComponentProps {
  lines: string[];
}

const CodeComponent: React.FC<CodeComponentProps> = ({ lines }) => {
  return (
    <div className="mockup-code overflow-hidden hover:bg-slate-600">
      {lines.map((line, index) => (
        <pre key={index} data-prefix="">
          <code className="whitespace-pre-wrap break-words">{line}</code>
        </pre>
      ))}
    </div>
  );
};

export default CodeComponent;

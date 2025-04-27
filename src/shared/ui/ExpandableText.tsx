import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

import { Button } from "./button";

interface ExpandableText {
  text: string;
  maxLength?: number;
}

export const ExpandableText = ({ text, maxLength = 90 }: ExpandableText) => {
  const [expanded, setExpanded] = useState(false);

  const shouldTruncate = text.length > maxLength;
  const displayedText =
    expanded || !shouldTruncate ? text : `${text.substring(0, maxLength)}...`;

  return (
    <div>
      <p className="break-words hyphens-auto">{displayedText}</p>
      {shouldTruncate && (
        <Button
          type="button"
          variant="ghost"
          onClick={() => {
            setExpanded((prev) => !prev);
          }}
          className="text-on-secondary-container p-0"
          size="sm"
        >
          {expanded ? "Свернуть" : "Читать полностью"}
          {expanded ? <ChevronUp /> : <ChevronDown />}
        </Button>
      )}
    </div>
  );
};

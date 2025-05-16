import { useState } from "react";

export const useAIGeneratorController = () => {
  const [isGeneratorOpen, setIsGeneratorOpen] = useState(true);
  return { isGeneratorOpen, setIsGeneratorOpen };
};

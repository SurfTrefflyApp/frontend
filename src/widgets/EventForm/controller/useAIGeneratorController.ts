import { useState } from "react";

export const useAIGeneratorController = () => {
  const [isGeneratorOpen, setIsGeneratorOpen] = useState(false);
  return { isGeneratorOpen, setIsGeneratorOpen };
};

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "github-helper-progress";

export type TopicId = "setup" | "git-basics" | "github-basics" | "workflow" | "first-project" | "errors" | "practice" | "cheatsheet" | "pr-guide";

export interface ProgressState {
  completedTopics: TopicId[];
  completedSteps: Record<string, string[]>; // topicId -> stepIds
}

const defaultState: ProgressState = {
  completedTopics: [],
  completedSteps: {},
};

function loadProgress(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? { ...defaultState, ...JSON.parse(raw) } : defaultState;
  } catch {
    return defaultState;
  }
}

function saveProgress(state: ProgressState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function useProgress() {
  const [progress, setProgress] = useState<ProgressState>(loadProgress);

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const toggleTopic = useCallback((topicId: TopicId) => {
    setProgress((prev) => {
      const completed = prev.completedTopics.includes(topicId)
        ? prev.completedTopics.filter((t) => t !== topicId)
        : [...prev.completedTopics, topicId];
      return { ...prev, completedTopics: completed };
    });
  }, []);

  const isTopicComplete = useCallback(
    (topicId: TopicId) => progress.completedTopics.includes(topicId),
    [progress.completedTopics]
  );

  const toggleStep = useCallback((topicId: string, stepId: string) => {
    setProgress((prev) => {
      const steps = prev.completedSteps[topicId] || [];
      const updated = steps.includes(stepId)
        ? steps.filter((s) => s !== stepId)
        : [...steps, stepId];
      return { ...prev, completedSteps: { ...prev.completedSteps, [topicId]: updated } };
    });
  }, []);

  const isStepComplete = useCallback(
    (topicId: string, stepId: string) =>
      (progress.completedSteps[topicId] || []).includes(stepId),
    [progress.completedSteps]
  );

  const completionPercent = Math.round(
    (progress.completedTopics.length / 9) * 100
  );

  return { progress, toggleTopic, isTopicComplete, toggleStep, isStepComplete, completionPercent };
}

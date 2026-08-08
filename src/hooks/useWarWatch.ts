import { useCallback, useEffect, useState } from "react";
import type { Post, Topic } from "@/data/posts";

const STORAGE_KEY = "warwatch:v1";

interface Stored {
  persona: string;
  posts: Post[];
  liked: string[];
}

const EMPTY: Stored = { persona: "imp", posts: [], liked: [] };

function read(): Stored {
  if (typeof window === "undefined") return EMPTY;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw) as Partial<Stored>;
    return {
      persona: parsed.persona ?? EMPTY.persona,
      posts: Array.isArray(parsed.posts) ? parsed.posts : [],
      liked: Array.isArray(parsed.liked) ? parsed.liked : [],
    };
  } catch {
    return EMPTY;
  }
}

export function useWarWatch() {
  const [state, setState] = useState<Stored>(EMPTY);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setState(read());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* storage full or blocked \u2014 the feed still works */
    }
  }, [state, hydrated]);

  const setPersona = useCallback((persona: string) => {
    setState((s) => ({ ...s, persona }));
  }, []);

  const addPost = useCallback((body: string, topic: Topic) => {
    setState((s) => ({
      ...s,
      posts: [
        {
          id: `own-${Date.now()}`,
          author: s.persona,
          body,
          topic,
          when: "just now",
          ravens: 0,
          quills: 0,
          whispers: 0,
        },
        ...s.posts,
      ],
    }));
  }, []);

  const removePost = useCallback((id: string) => {
    setState((s) => ({ ...s, posts: s.posts.filter((p) => p.id !== id) }));
  }, []);

  const toggleQuill = useCallback((id: string) => {
    setState((s) => ({
      ...s,
      liked: s.liked.includes(id) ? s.liked.filter((x) => x !== id) : [...s.liked, id],
    }));
  }, []);

  return {
    hydrated,
    persona: state.persona,
    ownPosts: state.posts,
    liked: state.liked,
    setPersona,
    addPost,
    removePost,
    toggleQuill,
  };
}

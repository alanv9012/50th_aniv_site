"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "@phosphor-icons/react";
import { siteContent } from "@/lib/content";

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export function MusicPlayer() {
  const { music } = siteContent;
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = new Audio(music.src);
    audio.preload = "metadata";
    audioRef.current = audio;

    const onLoaded = () => setDuration(audio.duration || 0);
    const onTimeUpdate = () => {
      if (!audio.duration) return;
      setProgress(audio.currentTime / audio.duration);
    };
    const onEnded = () => {
      setIsPlaying(false);
      setProgress(0);
    };

    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.pause();
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("ended", onEnded);
      audioRef.current = null;
    };
  }, [music.src]);

  async function togglePlayback() {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  }

  return (
    <div className="mt-8 w-full max-w-sm">
      <div className="flex items-center gap-3 rounded-full border border-background/30 bg-ink/35 px-3 py-2.5 backdrop-blur-sm">
        <button
          type="button"
          onClick={togglePlayback}
          aria-label={isPlaying ? "Pausar canción" : "Reproducir canción"}
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-gold-soft/50 bg-background/10 text-gold-soft transition-[transform,background-color,border-color] duration-160 ease-[var(--ease-out-premium)] active:scale-[0.97] [@media(hover:hover)_and_(pointer:fine)]:hover:border-gold-soft [@media(hover:hover)_and_(pointer:fine)]:hover:bg-background/15"
        >
          {isPlaying ? (
            <Pause size={20} weight="fill" aria-hidden="true" />
          ) : (
            <Play size={20} weight="fill" aria-hidden="true" className="ml-0.5" />
          )}
        </button>

        <div className="min-w-0 flex-1 pr-2">
          <p className="truncate font-serif text-[0.9375rem] italic leading-tight text-background/95">
            {music.title}
          </p>
          <p className="mt-0.5 text-xs tracking-wide text-background/65">
            {music.label}
            {duration > 0 ? (
              <span className="text-background/45">
                {" "}
                · {formatTime(duration * progress)} / {formatTime(duration)}
              </span>
            ) : null}
          </p>

          <div
            className="mt-2 h-px w-full overflow-hidden rounded-full bg-background/20"
            aria-hidden="true"
          >
            <div
              className="h-full rounded-full bg-gold-soft/80 transition-[width] duration-150 ease-linear"
              style={{ width: `${Math.min(progress * 100, 100)}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

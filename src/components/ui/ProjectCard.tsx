"use client";

import { motion } from "framer-motion";
import { cardHover } from "@/lib/motion";
import type { Project } from "@/data/projects";

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {
  return (
    <motion.article
      initial="rest"
      whileHover="hover"
      variants={cardHover}
      className="relative bg-surface border border-border rounded-sm p-6 flex flex-col gap-4 h-full"
    >
      <div className="flex items-start justify-between gap-4">
        <span
          aria-hidden="true"
          className="font-mono text-xs text-accent select-none"
        >
          [{project.id}]
        </span>
        <span
          aria-hidden="true"
          className="font-mono text-xs text-muted select-none tracking-widest"
        >
          /\/\
        </span>
      </div>

      <div>
        <h3 className="font-display text-xl text-text mb-2">{project.title}</h3>
        <p className="font-sans text-sm text-muted leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="mt-auto flex flex-col gap-3">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] text-accent border border-accent/30 px-2 py-0.5 rounded-sm tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-muted hover:text-accent transition-colors duration-200"
            >
              github →
            </a>
          )}
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-muted hover:text-accent transition-colors duration-200"
            >
              live →
            </a>
          )}
          <span className="font-mono text-xs text-muted/50 ml-auto">
            {project.year}
          </span>
        </div>
      </div>
    </motion.article>
  );
}

"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "../ui/icons";
import { useTranslations } from "../../i18n/LanguageContext";
import "../../../styles/projects.css";

const PREMIUM_EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: PREMIUM_EASE } },
};

const fadeUpReduced = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.3, ease: "linear" as const } },
};

type Project = {
  name: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  featured?: boolean;
  icon?: string;
  cover?: string;
};

const PROJECT_META: Omit<Project, "name" | "description">[] = [
  {
    tags: ["Flutter", "Next.js", "TypeScript", "AI"],
    link: "https://toursyncapp.com",
    featured: true,
    icon: "/images/launcher_toursync.png",
    cover: "/images/project_toursync.png",
  },
  {
    tags: ["Flutter", "BLoC", "Clean Architecture"],
    link: "https://indir.heyfuxi.com",
    github: "https://github.com/atakaneryldz/fuxi_app_open",
    icon: "/images/launcher_fuxi.png",
    cover: "/images/project_fuxi.png",
  },
  {
    tags: ["Flutter", "BLoC", "Firebase"],
    link: "https://onelink.to/kiraala.app",
    icon: "/images/launcher_kiraala.png",
    cover: "/images/project_fuxi.png",
  },
  {
    tags: ["Flutter", "Next.js", "BLoC", "Maps"],
    link: "https://bulcar.app",
    icon: "/images/launcher_bulcar.png",
    cover: "/images/project_fuxi.png",
  },
  {
    tags: ["Flutter", "BLoC", "Clean Architecture"],
    github: "https://github.com/atakaneryldz/tazepaket_app_open",
    icon: "/images/launcher_tazepaket.png",
    cover: "/images/project_tazepaket.png",
  },
];

function TiltCard({
  project,
  prefersReducedMotion,
  variant,
  visitLabel,
  githubLabel,
}: {
  project: Project;
  prefersReducedMotion: boolean | null;
  variant: typeof fadeUp | typeof fadeUpReduced;
  visitLabel: string;
  githubLabel: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const springConfig = { stiffness: 220, damping: 22, mass: 0.6 };
  const sx = useSpring(px, springConfig);
  const sy = useSpring(py, springConfig);
  const rotateX = useTransform(sy, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-7, 7]);

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (prefersReducedMotion || e.pointerType !== "mouse" || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width - 0.5);
    py.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handlePointerLeave() {
    px.set(0);
    py.set(0);
  }

  return (
    <motion.div
      ref={ref}
      className={`project-card${project.featured ? " project-card-featured" : ""}`}
      variants={variant}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={
        prefersReducedMotion
          ? undefined
          : { rotateX, rotateY, transformPerspective: 800 }
      }
      whileHover={prefersReducedMotion ? undefined : { y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      {project.cover && (
        <div className="project-card-cover">
          <Image
            src={project.cover}
            alt=""
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
            className="project-card-cover-image"
            aria-hidden="true"
          />
        </div>
      )}

      <div className="project-card-body">
        <div className="project-card-header">
          <div className="project-card-heading">
            {project.icon && (
              <Image
                src={project.icon}
                alt=""
                width={32}
                height={32}
                className="project-card-icon"
                aria-hidden="true"
              />
            )}
            <h3 className="project-card-title">{project.name}</h3>
          </div>
          <div className="project-card-links">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-icon-link"
                aria-label={`${project.name} ${githubLabel}`}
              >
                <GithubIcon size={16} />
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-icon-link"
                aria-label={`${visitLabel} ${project.name}`}
              >
                <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        </div>

        <p className="project-card-description">{project.description}</p>

        <div className="project-card-tags">
          {project.tags.map((tag) => (
            <span className="project-card-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const prefersReducedMotion = useReducedMotion();
  const variant = prefersReducedMotion ? fadeUpReduced : fadeUp;
  const t = useTranslations();
  const projects: Project[] = t.projects.items.map((item, i) => ({
    ...item,
    ...PROJECT_META[i],
  }));

  return (
    <section id="projects" className="projects section">
      <div className="section-inner">
        <motion.span
          className="section-eyebrow"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={variant}
        >
          {t.projects.eyebrow}
        </motion.span>
        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={variant}
        >
          {t.projects.title}
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={variant}
        >
          {t.projects.subtitle}
        </motion.p>

        <motion.div
          className="projects-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        >
          {projects.map((project) => (
            <TiltCard
              key={project.name}
              project={project}
              prefersReducedMotion={prefersReducedMotion}
              variant={variant}
              visitLabel={t.projects.visitLabel}
              githubLabel={t.projects.githubLabel}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

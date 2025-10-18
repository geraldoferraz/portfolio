import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Skill {
  name: string;
  icon: string;
  color: string;
}

const skills: Skill[] = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
  { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#3178C6" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#F7DF1E" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#339933" },
  { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg", color: "#E0234E" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", color: "#000000" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "#4169E1" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "#4479A1" },
  { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "#00758F" },
  { name: "Sequelize", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg", color: "#52B0E7" },
  { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", color: "#764ABC" },
  { name: "Styled Components", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/styledcomponents.svg", color: "#DB7093" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "#F05032" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "#E34F26" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "#1572B6" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", color: "#181717" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "#2496ED" },
];

type CategoryId = "all" | "frontend" | "backend" | "database" | "infra";

const categories: { id: CategoryId; title: string; items: string[] }[] = [
  {
    id: "frontend",
    title: "Front-End",
    items: ["React", "React Native", "Redux", "TypeScript", "JavaScript", "Styled Components", "HTML5", "CSS3"],
  },
  {
    id: "backend",
    title: "Back-End",
    items: ["Node.js", "NestJS", "Express", "TypeScript"],
  },
  {
    id: "database",
    title: "Database",
    items: ["PostgreSQL", "MySQL", "SQL", "Sequelize"],
  },
  {
    id: "infra",
    title: "Infra & Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];

const tabOrder: CategoryId[] = ["all", "frontend", "backend", "database", "infra"];

const fadeInUpOnce = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Skills = () => {
  const [selected, setSelected] = useState<CategoryId>("all");
  const scrollRef = useRef<HTMLDivElement>(null);

  const skillMap = useMemo(() => {
    const m = new Map<string, Skill>();
    skills.forEach((s) => m.set(s.name, s));
    return m;
  }, []);

  const filteredSkills: Skill[] = useMemo(() => {
    if (selected === "all") return skills;
    const cat = categories.find((c) => c.id === selected);
    if (!cat) return skills;
    return cat.items.map((n) => skillMap.get(n)).filter((s): s is Skill => Boolean(s));
  }, [selected, skillMap]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let raf = 0;
    let x = 0;
    const step = () => {
      x += 0.4;
      if (x >= el.scrollWidth / 2) x = 0;
      el.scrollLeft = x;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      const idx = tabOrder.indexOf(selected);
      const next =
        e.key === "ArrowRight"
          ? tabOrder[(idx + 1) % tabOrder.length]
          : tabOrder[(idx - 1 + tabOrder.length) % tabOrder.length];
      setSelected(next);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  const marquee = [...skills, ...skills];

  return (
    <section id="skills" className="py-20 px-4 bg-card/30 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4 text-gradient text-center"
        >
          Technical Skills
        </motion.h2>

        <motion.p
          variants={fadeInUpOnce}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center text-muted-foreground mb-8"
        >
          Here are some of the technologies and tools I have experience with.
        </motion.p>

        <motion.div
          className="relative flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          role="tablist"
          aria-label="Filter skills by category"
        >
          {(["all", ...categories.map((c) => c.id)] as CategoryId[]).map((id) => {
            const isActive = selected === id;
            const title = id === "all" ? "All" : categories.find((c) => c.id === id)?.title ?? id;
            const count =
              id === "all"
                ? skills.length
                : categories.find((c) => c.id === id)?.items.length ?? 0;

            return (
              <motion.button
                key={id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelected(id)}
                className={`relative px-4 py-2 rounded-full border smooth-transition glass text-sm md:text-base ${
                  isActive ? "border-primary/60" : "border-border hover:border-primary/30"
                }`}
                whileTap={{ scale: 0.97 }}
                whileHover={{ y: -2 }}
              >
                <span className="font-medium">{title}</span>
                <span className="ml-2 text-xs opacity-70">({count})</span>
                {isActive && (
                  <motion.span
                    layoutId="tab-underline"
                    className="absolute inset-0 -z-10 rounded-full"
                    style={{ boxShadow: "0 0 24px rgba(99,102,241,0.25)" }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>
      </div>

      {/* MARQUEE */}
      {/* <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
        <div ref={scrollRef} className="flex gap-8 overflow-hidden py-6 px-4" aria-hidden>
          {marquee.map((skill, idx) => (
            <motion.div
              key={`${skill.name}-${idx}`}
              className="flex-shrink-0 group"
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div
                className="w-28 h-28 glass rounded-2xl border border-border card-glow flex flex-col items-center justify-center gap-3 p-4 group-hover:bg-primary/5 smooth-transition"
                style={{ boxShadow: `0 0 0 1px rgba(255,255,255,0.03), 0 10px 30px rgba(0,0,0,0.15)` }}
              >
                <motion.img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 object-contain"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  style={{ filter: `drop-shadow(0 0 10px ${skill.color}60)` }}
                />
                <span className="text-xs font-medium text-foreground/90 text-center group-hover:text-primary smooth-transition">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div> */}

      <div className="max-w-6xl mx-auto mt-12">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`header-${selected}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.25 } }}
            exit={{ opacity: 0, y: -6, transition: { duration: 0.18 } }}
            className="mb-6 flex items-center justify-between gap-4 flex-wrap"
          >
            <h3 className="text-xl md:text-2xl font-semibold">
              {selected === "all"
                ? "All Skills"
                : categories.find((c) => c.id === selected)?.title}
            </h3>

            <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
              {categories.map((c) => (
                <span key={c.id} className="glass px-2 py-1 rounded-full border border-border">
                  {c.title}: {c.items.length}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`grid-${selected}`}
            layout
            initial={false}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {filteredSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                layout
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.15 } }}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 24, delay: i * 0.03 }}
                className="relative group rounded-2xl p-4 border glass border-border cursor-default smooth-transition"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.00) 100%)",
                }}
              >
                <motion.span
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  initial={false}
                  whileHover={{ boxShadow: `0 0 0 2px ${skill.color}40, 0 10px 30px ${skill.color}20` }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                />

                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10">
                    <motion.img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-10 h-10 object-contain"
                      whileHover={{ scale: 1.08, rotate: 3 }}
                      transition={{ type: "spring", stiffness: 300, damping: 18 }}
                      style={{ filter: `drop-shadow(0 0 8px ${skill.color}55)` }}
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="font-medium leading-tight">{skill.name}</div>
                    <div className="text-[11px] text-muted-foreground mt-0.5">
                      {categories.find((c) => c.items.includes(skill.name))?.title ?? "Skill"}
                    </div>
                  </div>
                </div>

                <motion.div className="mt-3 h-1.5 rounded-full bg-border overflow-hidden" initial={false}>
                  <motion.span
                    className="block h-full rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.9, delay: 0.05 + i * 0.02 }}
                    style={{ background: `${skill.color}` }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {categories.map((category, idx) => (
            <motion.button
              key={category.id}
              onClick={() => setSelected(category.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className={`text-left glass p-5 rounded-2xl border border-border card-glow hover:border-primary/40 smooth-transition group cursor-pointer ${
                selected === category.id ? "ring-1 ring-primary/40" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold group-hover:scale-[1.02] smooth-transition">
                  {category.title}
                </h4>
                <span className="text-xs text-muted-foreground">
                  {category.items.length} skills
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                {category.items.join(", ")}
              </p>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

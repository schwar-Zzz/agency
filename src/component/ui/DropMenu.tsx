import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

type MenuItem = {
  label: string;
  href: string;
  description?: string;
};

type DropMenuProps = {
  logo?: string;
  items?: MenuItem[];
  className?: string;
};

const defaultItems: MenuItem[] = [
  {
    label: "Home",
    href: "#hero",
    description: "Back to the hero",
  },
  {
    label: "Services",
    href: "#services",
    description: "Services and options",
  },
  {
    label: "How we work",
    href: "#how-we-work",
    description: "Our design process",
  },
  {
    label: "Contact",
    href: "#contact",
    description: "Start a project",
  },
];

export default function DropMenu({
  logo = "MONO",
  items = defaultItems,
  className = "",
}: DropMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`fixed left-1/2 top-6 z-50 -translate-x-1/2 ${className}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
{/* morphing container */}

      <motion.nav
        initial={false}
        animate={{
          width: open ? 390 : 132,
          height: open ? 490 : 56,
          borderRadius: open ? 34 : 999,
        }}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 28,
          mass: 0.9,
        }}
        className="relative overflow-hidden border border-white/10 bg-[#080808]/70 text-white shadow-2xl shadow-black/40 backdrop-blur-2xl"
      >
        {/* glass highlight */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.035)_35%,rgba(255,255,255,0)_75%)]" />

        {/* top row */}
        <div className="relative z-10 flex h-14 w-full items-center justify-center px-3">
          <motion.a
            href="#hero"
            className="flex h-10 items-center justify-center rounded-full  px-5 text-xs font-semibold uppercase tracking-[0.24em] "
            animate={{
              scale: open ? 0.96 : 1,
            }}
            transition={{
              duration: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {logo}
          </motion.a>

          <AnimatePresence>
            {open && (
              <motion.span
                className="absolute right-5 text-[10px] font-medium uppercase tracking-[0.18em] text-white/40"
                initial={{ opacity: 0, x: -8, filter: "blur(6px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -8, filter: "blur(6px)" }}
                transition={{
                  duration: 0.25,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                Menu
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* inner dropdown content - inside same morphing container */}
        <AnimatePresence>
          {open && (
            <motion.div
              className="relative z-10 px-3 pb-3 pt-2"
              initial={{
                opacity: 0,
                y: -12,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                y: -12,
                filter: "blur(10px)",
              }}
              transition={{
                duration: 0.34,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="mb-3 h-px w-full bg-white/10" />

              <motion.div
                className="space-y-1"
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.055,
                      delayChildren: 0.05,
                    },
                  },
                }}
              >
                {items.map((item, index) => (
                  <MenuItemRow key={item.href} item={item} index={index} />
                ))}
              </motion.div>

              <motion.div
                className="mt-3 flex items-center justify-between rounded-[24px] border border-white/10 bg-white/[0.035] px-4 py-3"
                initial={{
                  opacity: 0,
                  y: 14,
                  filter: "blur(8px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  y: 14,
                  filter: "blur(8px)",
                }}
                transition={{
                  delay: 0.16,
                  duration: 0.32,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/35">
                    Availability
                  </p>
                  <p className="mt-1 text-sm text-white/70">
                    2/5 slots for May
                  </p>
                </div>

                <a
                  href="#contact"
                  className="rounded-full bg-white px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-white/80"
                >
                  Start
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}

function MenuItemRow({
  item,
  index,
}: {
  item: MenuItem;
  index: number;
}) {
  return (
    <motion.a
      href={item.href}
      className="group flex items-center justify-between rounded-[24px] px-4 py-4 transition hover:bg-white/[0.06]"
      variants={{
        hidden: {
          opacity: 0,
          y: 16,
          filter: "blur(8px)",
        },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            duration: 0.38,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
    >
      <div className="flex items-start gap-4">
        <span className="mt-1 text-[10px] font-medium text-white/25">
          0{index + 1}
        </span>

        <div className="my-1">
          <p className="text-2xl font-medium tracking-[-0.05em] text-white/80 transition group-hover:text-white">
            {item.label}
          </p>

          {item.description && (
            <p className="mt-1 max-w-[230px] text-xs leading-5 text-white/35 transition group-hover:text-white/50">
              {item.description}
            </p>
          )}
        </div>
      </div>

      <ArrowUpRight
        size={18}
        className="text-white/25 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white/80"
      />
    </motion.a>
  );
}
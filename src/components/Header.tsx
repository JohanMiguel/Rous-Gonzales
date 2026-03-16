import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const NAV = [
  { label: "Inicio", href: "#inicio" },
  { label: "Trayectoria", href: "#trayectoria" },
  { label: "Esencia", href: "#esencia" },
  { label: "Vínculos", href: "#vinculos" },
  { label: "Mascotas", href: "#mascotas" },
  { label: "Fuera del radar", href: "#fuera-del-radar" },
  { label: "Contacto", href: "#contacto" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-stone-200/80 bg-nude-bone/85 backdrop-blur-md supports-[backdrop-filter]:bg-nude-bone/70"
      role="banner"
    >
      <div className="container mx-auto flex h-16 md:h-[4.25rem] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a
          href="#inicio"
          className="font-serif text-lg sm:text-xl text-stone-900 shrink-0 hover:text-sage-accent transition-colors"
          onClick={close}
        >
          Reina del Rosario
        </a>

        <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Principal">
          {NAV.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="rounded-full px-3 py-2 text-sm text-stone-600 hover:bg-sage-soft/40 hover:text-stone-900 transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="lg:hidden rounded-full p-2 text-stone-800 hover:bg-stone-100 transition-colors"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-stone-900/30 lg:hidden"
              aria-hidden
              onClick={close}
            />
            <motion.nav
              id="mobile-nav"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden absolute left-0 right-0 top-full z-50 border-b border-stone-200 bg-nude-bone shadow-lg"
              aria-label="Móvil"
            >
              <ul className="container mx-auto flex flex-col py-4 px-4">
                {NAV.map(({ label, href }) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="block rounded-xl px-4 py-3 text-stone-800 hover:bg-sage-soft/30"
                      onClick={close}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

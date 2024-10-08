import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import useMobileListener from "@/hooks/useMobileListener";
import Link from "next/link";
import { routes } from "../Header";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

export default function MobileHeader({ open, setOpen }) {
  const { useMobileWidth } = useMobileListener();
  return (
    <>
      {useMobileWidth() && (
        <>
          <div
            className="cursor-pointer"
            onClick={() => setOpen((prev) => !prev)}
          >
            <FontAwesomeIcon icon={faBars} size="lg" />
          </div>
          <AnimatePresence>
            {open && (
              <motion.div
                className="fixed z-30 h-screen w-full rounded-[5px] bg-slate-200 top-0 left-0 overflow-hidden"
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-4">
                  <div
                    className="flex justify-end w-full p-4 cursor-pointer"
                    onClick={() => setOpen(false)}
                  >
                    <FontAwesomeIcon icon={faClose} size="2x" />
                  </div>
                  <ul>
                    {routes.map((route) => (
                      <li key={route.name}>
                        <Link
                          href={route.href}
                          className="block mb-2 h-10 text-2xl text-black hover:border-b hover:border-black transition-all duration-500"
                        >
                          {route.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </>
  );
}

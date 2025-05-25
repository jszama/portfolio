import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashScreen({ visible = true }: { visible?: boolean }) {
    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center origin-center bg-[#111] text-[var(--primary-magenta)]"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        opacity: { duration: 0.7, delay: 0.7 },
                        ease: [0.25, 1, 0.25, 1]
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -400, scale: 0.95 }}
                        transition={{
                            opacity: { duration: 1.2, delay: 0, ease: [0.25, 1, 0.25, 1] },
                            y: { duration: 1.2, delay: 0, ease: [0.25, 1, 0.25, 1] },
                            scale: { duration: 1.2, delay: 0, ease: [0.25, 1, 0.25, 1] },
                        }}
                        className="flex flex-col items-center pb-20 tracking-wide font-light"
                    >
                        <p className="text-6xl md:text-7xl text-center">
                            Welcome to My Portfolio
                        </p>
                        <p className="text-[var(--hover-magenta)] text-xl md:text-2xl mt-2 drop-shadow-[0_2px_8px_black]">
                            Discover. Explore. Connect.
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

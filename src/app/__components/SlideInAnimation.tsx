import React from 'react'
import { motion } from 'framer-motion';

type SlideInAnimationProps = {
    duration?: number;
    from?: 'left' | 'right' | 'top' | 'bottom';
    delay?: number;
    children: React.ReactNode;
};

export default function SlideInAnimation({ duration = 0.5, from, delay, children }: SlideInAnimationProps) {
    return (
        <motion.div
            initial={{
                x: from === 'left' ? -150 : from === 'right' ? 150 : 0,
                y: from === 'top' ? -150 : from === 'bottom' ? 150 : 0,
                opacity: 0
            }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration, delay, ease: [0.25, 1.0, 0.25, 1.0]}}
            viewport={{ once: true, amount: 0.3 }}
        >
            {children}
        </motion.div>
    );
}

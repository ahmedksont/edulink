'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';

function CountUp({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export default function StatsSection() {
  const t = useTranslations('stats');

  const stats = [
    { value: 266, label: t('schools'), icon: '🏫' },
    { value: 527, label: t('teachers'), icon: '👩‍🏫' },
    { value: 9351, label: t('students'), icon: '🎓' },
    { value: 661, label: t('tests'), icon: '📊' },
  ];

  return (
    <section className="relative py-24 overflow-hidden" id="stats">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-mono text-accent uppercase tracking-widest">{t('label')}</span>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ value, label, icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 1, 0.5, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="relative group glass rounded-2xl p-6 text-center overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
              </div>

              <div className="text-2xl mb-3">{icon}</div>
              <div className="font-display font-extrabold text-4xl md:text-5xl gradient-text mb-2">
                <CountUp end={value} />
              </div>
              <div className="text-sm font-body text-muted-foreground uppercase tracking-wide">{label}</div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
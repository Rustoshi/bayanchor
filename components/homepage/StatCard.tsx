"use client";

import { motion } from "framer-motion";
import { fadeInUp, AnimatedCounter } from "./motion";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon?: LucideIcon;
  delay?: number;
}

export function StatCard({ value, suffix = "", prefix = "", label, icon: Icon, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      custom={delay}
      className="relative text-center p-6 lg:p-8"
    >
      {Icon && (
        <div className="inline-flex items-center justify-center w-14 h-14 mb-4 rounded-xl bg-orange-500/10">
          <Icon className="h-7 w-7 text-orange-500" />
        </div>
      )}
      <div className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-2">
        <AnimatedCounter value={value} suffix={suffix} prefix={prefix} />
      </div>
      <p className="text-gray-600 text-sm lg:text-base font-medium uppercase tracking-wide">
        {label}
      </p>
    </motion.div>
  );
}

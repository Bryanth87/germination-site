"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sprout, BarChart3, FlaskConical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projectInfo } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-16 flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_60%,oklch(0.40_0.12_145/0.05))]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full">
        <div className="grid lg:grid-cols-[1fr_minmax(280px,420px)] gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6">
              <FlaskConical className="h-4 w-4" />
              <span>{projectInfo.university}</span>
            </div>

            <p className="text-sm font-semibold tracking-wide text-primary uppercase mb-2">
              {projectInfo.brandName}
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Efecto del Riego con{" "}
              <span className="text-primary">Agua Azucarada</span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed text-pretty">
              {projectInfo.subtitle}
              <span className="italic"> (Phaseolus vulgaris)</span>. Experimento comparativo
              de {projectInfo.durationDays} días con {projectInfo.totalSeeds} semillas en{" "}
              {projectInfo.location}.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#grupos">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Sprout className="mr-2 h-5 w-5" />
                  Ver Resultados
                </Button>
              </a>
              <a href="#analytics">
                <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/5">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  Panel de Datos
                </Button>
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6">
              {[
                { value: "40", label: "Semillas (2 grupos)" },
                { value: "30% vs 0%", label: "Tasa de Germinación" },
                { value: "100%", label: "Inhibición con Azúcar" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center sm:text-left"
                >
                  <p className="text-2xl sm:text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="order-1 lg:order-2 relative mx-auto w-full max-w-[420px]"
          >
            <div className="absolute -inset-4 bg-gradient-to-b from-primary/15 via-secondary/10 to-transparent rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border/60 bg-card">
              <Image
                src={projectInfo.logoSrc}
                alt={`${projectInfo.brandName} — ${projectInfo.brandTagline}`}
                width={1024}
                height={1536}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
            <p className="mt-4 text-center text-xs text-muted-foreground">
              {projectInfo.brandTagline}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sprout, BarChart3, FlaskConical } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-16 flex items-center overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6">
              <FlaskConical className="h-4 w-4" />
              <span>Investigación en Tiempo Real</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Procesos de{" "}
              <span className="text-primary">Germinación</span>
            </h1>
            
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed text-pretty">
              Soluciones de Cultivo Sostenible - Monitoreo y análisis en tiempo real de 
              ciclos de crecimiento vegetal con tecnología de sensores avanzada.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Sprout className="mr-2 h-5 w-5" />
                Ver Procesos
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/5">
                <BarChart3 className="mr-2 h-5 w-5" />
                Panel de Datos
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              {[
                { value: "12", label: "Procesos Totales" },
                { value: "94.5%", label: "Tasa de Éxito" },
                { value: "18.5d", label: "Tiempo Promedio" },
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

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
              <Image
                src="/images/logo.jpeg"
                alt="BioGrow Partners - Sistema de monitoreo de germinación"
                fill
                className="object-cover rounded-3xl shadow-2xl"
                priority
              />
            </div>
            
            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-card p-4 rounded-xl shadow-lg border border-border"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Sprout className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-card-foreground">Crecimiento Óptimo</p>
                  <p className="text-xs text-muted-foreground">+23% esta semana</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -top-4 -right-4 bg-card p-4 rounded-xl shadow-lg border border-border"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-card-foreground">Eficiencia</p>
                  <p className="text-xs text-muted-foreground">92% Fotosíntesis</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

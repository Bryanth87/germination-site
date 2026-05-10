"use client";

import { motion } from "framer-motion";
import { FlaskConical, Target, Microscope, Cpu, Leaf, Droplets, Thermometer, Sun } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const objectives = [
  {
    icon: <FlaskConical className="h-6 w-6" />,
    title: "Análisis de Germinación",
    description: "Estudio detallado de los procesos de germinación bajo condiciones controladas.",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Optimización de Rendimiento",
    description: "Maximizar la eficiencia en el crecimiento y absorción de nutrientes.",
  },
  {
    icon: <Microscope className="h-6 w-6" />,
    title: "Investigación Sostenible",
    description: "Desarrollo de metodologías de cultivo respetuosas con el medio ambiente.",
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: "Automatización Inteligente",
    description: "Implementación de sistemas de monitoreo y control automatizado.",
  },
];

const technicalSpecs = [
  { icon: <Leaf className="h-5 w-5" />, label: "Sensor de Nutrientes", spec: "Root Zone Sensor Array v2.1" },
  { icon: <Droplets className="h-5 w-5" />, label: "Monitor de Humedad", spec: "Nutrient Intake Probe 360°" },
  { icon: <Thermometer className="h-5 w-5" />, label: "Control Térmico", spec: "Bio-data Entry Base ±0.1°C" },
  { icon: <Sun className="h-5 w-5" />, label: "Sistema de Iluminación", spec: "LED Grow Light 400-700nm" },
];

export function ExperimentInfo() {
  return (
    <section id="experimento" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Información del <span className="text-primary">Experimento</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Detalles sobre el proyecto de investigación, objetivos y especificaciones técnicas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Project Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">Descripción del Proyecto</h3>
            <div className="prose prose-sm max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                BioGrow Partners es un proyecto de investigación enfocado en el estudio y 
                optimización de procesos de germinación vegetal. Utilizamos tecnología de 
                sensores avanzada para monitorear en tiempo real las condiciones de cultivo 
                y el desarrollo de las plantas.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nuestro sistema integrado permite el seguimiento preciso de variables críticas 
                como temperatura, humedad, absorción de nutrientes y eficiencia fotosintética, 
                proporcionando datos valiosos para la investigación agrícola sostenible.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                El proyecto combina metodologías científicas tradicionales con innovaciones 
                tecnológicas para desarrollar soluciones de cultivo más eficientes y 
                respetuosas con el medio ambiente.
              </p>
            </div>

            {/* Technical Specs */}
            <div className="mt-8">
              <h4 className="font-semibold text-foreground mb-4">Especificaciones Técnicas</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {technicalSpecs.map((spec, index) => (
                  <motion.div
                    key={spec.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-3 bg-card rounded-lg border border-border"
                  >
                    <div className="text-primary">{spec.icon}</div>
                    <div>
                      <p className="text-sm font-medium text-card-foreground">{spec.label}</p>
                      <p className="text-xs text-muted-foreground">{spec.spec}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Objectives */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">Objetivos de Investigación</h3>
            <div className="grid gap-4">
              {objectives.map((objective, index) => (
                <motion.div
                  key={objective.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="hover:border-primary/30 transition-colors">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                          {objective.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-card-foreground">{objective.title}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{objective.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Methodology */}
            <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
              <h4 className="font-semibold text-foreground mb-3">Metodología</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                  Monitoreo continuo 24/7 con sensores de alta precisión
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                  Registro y análisis de datos en tiempo real
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                  Control automatizado de condiciones ambientales
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                  Comparación entre diferentes variedades y tratamientos
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

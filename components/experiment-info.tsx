"use client";

import { motion } from "framer-motion";
import { Beaker, Droplets, Ruler, Bug, Thermometer, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { projectInfo, hypotheses, mechanisms, type Hypothesis } from "@/lib/data";

// Operacionalización de variables (Tabla 2.3.1)
const variables = [
  {
    icon: <Droplets className="h-5 w-5" />,
    type: "Independiente",
    label: "Tipo de riego",
    indicator: "Agua pura / Solución saturada de sacarosa",
  },
  {
    icon: <Ruler className="h-5 w-5" />,
    type: "Dependiente",
    label: "Crecimiento vegetal",
    indicator: "Longitud del tallo en cm (regla milimétrica)",
  },
  {
    icon: <Bug className="h-5 w-5" />,
    type: "Dependiente",
    label: "Salud fitosanitaria",
    indicator: "Presencia y % de moho (observación visual)",
  },
  {
    icon: <Thermometer className="h-5 w-5" />,
    type: "Controlada",
    label: "Condiciones ambientales",
    indicator: "Temperatura 18–24 °C y luz constantes",
  },
];

const resultBadge: Record<Hypothesis["result"], string> = {
  COMPROBADA: "bg-secondary/20 text-secondary-foreground",
  "NO RECHAZADA": "bg-muted text-muted-foreground",
  RESPALDADA: "bg-primary/15 text-primary",
};

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
            Metodología del <span className="text-primary">Experimento</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Diseño experimental, variables, hipótesis y los mecanismos bioquímicos que
            explican los resultados.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Descripción + Diseño */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">Descripción del Proyecto</h3>
            <div className="prose prose-sm max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Investigación cuantitativa experimental que evalúa el efecto del riego con agua
                azucarada sobre la germinación del frijol común
                <span className="italic"> (Phaseolus vulgaris)</span>. Surge de una creencia popular
                muy extendida en {projectInfo.location}: que el azúcar ayuda a las plantas a crecer.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Se usó un diseño de dos grupos paralelos independientes de {projectInfo.groupSize}{" "}
                semillas cada uno, del mismo lote comercial, sobre sustrato de algodón absorbente.
                La única variable manipulada fue el tipo de riego.
              </p>
            </div>

            {/* Parámetros del diseño */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <SpecCard label="Muestra total" value={`${projectInfo.totalSeeds} semillas`} />
              <SpecCard label="Duración" value={`${projectInfo.durationDays} días`} />
              <SpecCard label="Concentración" value={projectInfo.sucroseConcentration} />
              <SpecCard label="Presupuesto" value={projectInfo.budget} />
            </div>

            {/* Variables */}
            <div className="mt-8">
              <h4 className="font-semibold text-foreground mb-4">Operacionalización de Variables</h4>
              <div className="grid grid-cols-1 gap-3">
                {variables.map((v, index) => (
                  <motion.div
                    key={v.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-3 bg-card rounded-lg border border-border"
                  >
                    <div className="text-primary mt-0.5">{v.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium text-card-foreground">{v.label}</p>
                        <span className="text-[10px] uppercase tracking-wide px-1.5 py-0.5 rounded bg-muted text-muted-foreground">
                          {v.type}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">{v.indicator}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Hipótesis + Mecanismos */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">Hipótesis</h3>
            <div className="grid gap-4">
              {hypotheses.map((h, index) => (
                <motion.div
                  key={h.code}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="hover:border-primary/30 transition-colors">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-card-foreground">
                          {h.code} — {h.name}
                        </h4>
                        <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${resultBadge[h.result]}`}>
                          {h.result}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{h.statement}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Mecanismos bioquímicos */}
            <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Beaker className="h-5 w-5 text-primary" />
                Mecanismos Bioquímicos
              </h4>
              <ul className="space-y-3 text-sm">
                {mechanisms.map((m) => (
                  <li key={m.title} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">
                      <span className="font-medium text-foreground">{m.title}:</span> {m.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SpecCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-3 bg-card rounded-lg border border-border">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="text-sm font-semibold text-card-foreground">{value}</p>
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sprout,
  Droplets,
  Ruler,
  Bug,
  ChevronDown,
  ChevronUp,
  FlaskConical,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  experimentGroups,
  growthEvolution,
  moldProgression,
  type ExperimentGroup,
} from "@/lib/data";

export function GerminationProcesses() {
  const [expandedId, setExpandedId] = useState<string | null>("control");

  return (
    <section id="grupos" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Grupos del <span className="text-primary">Experimento</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Dos grupos paralelos de 20 semillas cada uno. La única variable manipulada
            fue el tipo de riego: agua pura frente a solución saturada de sacarosa.
          </p>
        </motion.div>

        {/* Group Cards */}
        <div className="grid gap-6">
          {experimentGroups.map((group, index) => (
            <GroupCard
              key={group.id}
              group={group}
              index={index}
              isExpanded={expandedId === group.id}
              onToggle={() =>
                setExpandedId(expandedId === group.id ? null : group.id)
              }
            />
          ))}
        </div>

        {/* Comparative Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20 flex items-start gap-4"
        >
          <FlaskConical className="h-6 w-6 text-primary shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            <span className="font-medium text-foreground">Hallazgo central:</span> el agua con azúcar
            no retrasó la germinación, la eliminó por completo. El grupo control promedió 2.45 cm al
            día 26; el experimental marcó 0.00 cm en las 20 muestras, con 100% de cobertura de moho.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function GroupCard({
  group,
  index,
  isExpanded,
  onToggle,
}: {
  group: ExperimentGroup;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const isControl = group.id === "control";

  // Combinar evolución de crecimiento y moho para este grupo en una sola serie
  const chartData = growthEvolution.map((point, i) => ({
    day: point.day,
    crecimiento: isControl ? point.control : point.experimental,
    moho: isControl ? moldProgression[i].control : moldProgression[i].experimental,
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden border-border/50 hover:border-primary/30 transition-colors">
        <CardHeader className="cursor-pointer" onClick={onToggle}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span
                  className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                    isControl
                      ? "bg-primary/20 text-primary"
                      : "bg-destructive/15 text-destructive"
                  }`}
                >
                  {group.treatment}
                </span>
                <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                  {group.total} semillas
                </span>
              </div>
              <CardTitle className="text-lg text-card-foreground">{group.name}</CardTitle>
              <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{group.description}</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className={`text-2xl font-bold ${isControl ? "text-primary" : "text-destructive"}`}>
                  {group.germinationRate}%
                </p>
                <p className="text-xs text-muted-foreground">germinación</p>
              </div>
              <Button variant="ghost" size="icon">
                {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </CardHeader>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <CardContent className="pt-0 border-t border-border">
                <div className="pt-6 grid lg:grid-cols-2 gap-6">
                  {/* Metrics */}
                  <div className="space-y-4">
                    <h4 className="font-medium text-card-foreground">Resultados al día 26</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <MetricCard
                        icon={<Sprout className="h-4 w-4" />}
                        label="Semillas germinadas"
                        value={`${group.germinated} de ${group.total}`}
                        color="text-primary"
                      />
                      <MetricCard
                        icon={<Ruler className="h-4 w-4" />}
                        label="Crecimiento promedio"
                        value={`${group.avgGrowth.toFixed(2)} cm`}
                        color="text-secondary"
                      />
                      <MetricCard
                        icon={<Bug className="h-4 w-4" />}
                        label="Cobertura de moho"
                        value={`${group.finalMold}%`}
                        color="text-destructive"
                      />
                      <MetricCard
                        icon={<Droplets className="h-4 w-4" />}
                        label="Tipo de riego"
                        value={isControl ? "Agua pura" : "Sacarosa"}
                        color="text-chart-2"
                      />
                    </div>

                    <div className="mt-4 p-3 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">Observación:</span> {group.notes}
                      </p>
                    </div>
                  </div>

                  {/* Chart */}
                  <div>
                    <h4 className="font-medium text-card-foreground mb-4">
                      Crecimiento (cm) y moho (%) a lo largo del tiempo
                    </h4>
                    <div className="h-64 bg-muted/50 rounded-lg p-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={chartData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="currentColor" opacity={0.1} />
                          <XAxis dataKey="day" tick={{ fontSize: 12 }} stroke="currentColor" opacity={0.5} />
                          <YAxis tick={{ fontSize: 12 }} stroke="currentColor" opacity={0.5} />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "var(--card)",
                              border: "1px solid var(--border)",
                              borderRadius: "8px",
                            }}
                          />
                          <Legend wrapperStyle={{ fontSize: 12 }} />
                          <Line
                            type="monotone"
                            dataKey="crecimiento"
                            stroke="var(--primary)"
                            strokeWidth={2}
                            dot={{ fill: "var(--primary)" }}
                            name="Crecimiento (cm)"
                          />
                          <Line
                            type="monotone"
                            dataKey="moho"
                            stroke="var(--destructive)"
                            strokeWidth={2}
                            strokeDasharray="5 5"
                            dot={{ fill: "var(--destructive)" }}
                            name="Moho (%)"
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </CardContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
}

function MetricCard({
  icon,
  label,
  value,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div className="p-3 bg-muted/50 rounded-lg">
      <div className={`flex items-center gap-2 mb-1 ${color}`}>
        {icon}
        <span className="text-xs font-medium">{label}</span>
      </div>
      <p className="text-lg font-bold text-card-foreground">{value}</p>
    </div>
  );
}

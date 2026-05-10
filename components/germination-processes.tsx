"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Thermometer,
  Droplets,
  Leaf,
  Sun,
  TrendingUp,
  Filter,
  Plus,
  ChevronDown,
  ChevronUp,
  Calendar,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  germinationProcesses,
  phaseColors,
  statusColors,
  type GerminationProcess,
} from "@/lib/data";

const phases = ["todas", "preparación", "germinación", "crecimiento", "maduración", "cosecha"] as const;
const statuses = ["todos", "activo", "pausado", "completado"] as const;

export function GerminationProcesses() {
  const [phaseFilter, setPhaseFilter] = useState<string>("todas");
  const [statusFilter, setStatusFilter] = useState<string>("todos");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredProcesses = germinationProcesses.filter((process) => {
    const phaseMatch = phaseFilter === "todas" || process.phase === phaseFilter;
    const statusMatch = statusFilter === "todos" || process.status === statusFilter;
    return phaseMatch && statusMatch;
  });

  return (
    <section id="procesos" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Procesos de <span className="text-primary">Germinación</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Monitoreo en tiempo real de todos los procesos de cultivo activos. 
            Cada proceso incluye métricas detalladas y visualizaciones de datos.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Filter className="h-4 w-4" />
              <span>Filtrar:</span>
            </div>
            
            {/* Phase Filter */}
            <div className="flex flex-wrap gap-1">
              {phases.map((phase) => (
                <Button
                  key={phase}
                  variant={phaseFilter === phase ? "default" : "outline"}
                  size="sm"
                  onClick={() => setPhaseFilter(phase)}
                  className="capitalize text-xs"
                >
                  {phase}
                </Button>
              ))}
            </div>
          </div>

          {/* Status Filter */}
          <div className="flex flex-wrap gap-1">
            {statuses.map((status) => (
              <Button
                key={status}
                variant={statusFilter === status ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setStatusFilter(status)}
                className="capitalize text-xs"
              >
                {status}
              </Button>
            ))}
          </div>
        </div>

        {/* Process Cards */}
        <div className="grid gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProcesses.map((process, index) => (
              <ProcessCard
                key={process.id}
                process={process}
                index={index}
                isExpanded={expandedId === process.id}
                onToggle={() => setExpandedId(expandedId === process.id ? null : process.id)}
              />
            ))}
          </AnimatePresence>
        </div>

        {filteredProcesses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No se encontraron procesos con los filtros seleccionados.</p>
          </div>
        )}

        {/* Add Process Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-dashed border-2 border-primary/30 hover:border-primary hover:bg-primary/5"
          >
            <Plus className="mr-2 h-5 w-5" />
            Agregar Nuevo Proceso
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function ProcessCard({
  process,
  index,
  isExpanded,
  onToggle,
}: {
  process: GerminationProcess;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden border-border/50 hover:border-primary/30 transition-colors">
        <CardHeader className="cursor-pointer" onClick={onToggle}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium capitalize ${phaseColors[process.phase]}`}>
                  {process.phase}
                </span>
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium capitalize ${statusColors[process.status]}`}>
                  {process.status}
                </span>
              </div>
              <CardTitle className="text-lg text-card-foreground">{process.title}</CardTitle>
              <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{process.description}</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{new Date(process.startDate).toLocaleDateString("es-ES")}</span>
              </div>
              <Button variant="ghost" size="icon">
                {isExpanded ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
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
                    <h4 className="font-medium text-card-foreground">Métricas Actuales</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <MetricCard
                        icon={<Thermometer className="h-4 w-4" />}
                        label="Temperatura"
                        value={`${process.metrics.temperature}°C`}
                        color="text-chart-4"
                      />
                      <MetricCard
                        icon={<Droplets className="h-4 w-4" />}
                        label="Humedad"
                        value={`${process.metrics.humidity}%`}
                        color="text-chart-2"
                      />
                      <MetricCard
                        icon={<Leaf className="h-4 w-4" />}
                        label="Absorción Nutrientes"
                        value={`${process.metrics.nutrientAbsorption}%`}
                        color="text-primary"
                      />
                      <MetricCard
                        icon={<Sun className="h-4 w-4" />}
                        label="Eficiencia Fotosíntesis"
                        value={`${process.metrics.photosyntheticEfficiency}%`}
                        color="text-secondary"
                      />
                      <MetricCard
                        icon={<TrendingUp className="h-4 w-4" />}
                        label="Crecimiento Raíz"
                        value={`${process.metrics.rootGrowth}%`}
                        color="text-accent"
                      />
                    </div>
                    
                    {process.notes && (
                      <div className="mt-4 p-3 bg-muted rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium text-foreground">Notas:</span> {process.notes}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Chart */}
                  <div>
                    <h4 className="font-medium text-card-foreground mb-4">Evolución del Proceso</h4>
                    <div className="h-64 bg-muted/50 rounded-lg p-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={process.chartData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="currentColor" opacity={0.1} />
                          <XAxis dataKey="day" tick={{ fontSize: 12 }} stroke="currentColor" opacity={0.5} />
                          <YAxis tick={{ fontSize: 12 }} stroke="currentColor" opacity={0.5} />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "hsl(var(--card))",
                              border: "1px solid hsl(var(--border))",
                              borderRadius: "8px",
                            }}
                          />
                          <Line
                            type="monotone"
                            dataKey="nutrientAbsorption"
                            stroke="hsl(var(--primary))"
                            strokeWidth={2}
                            dot={{ fill: "hsl(var(--primary))" }}
                            name="Nutrientes"
                          />
                          <Line
                            type="monotone"
                            dataKey="efficiency"
                            stroke="hsl(var(--secondary))"
                            strokeWidth={2}
                            dot={{ fill: "hsl(var(--secondary))" }}
                            name="Eficiencia"
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

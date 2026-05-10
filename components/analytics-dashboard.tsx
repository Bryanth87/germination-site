"use client";

import { motion } from "framer-motion";
import {
  Activity,
  TrendingUp,
  Clock,
  CheckCircle2,
  Sprout,
  Target,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { experimentStats } from "@/lib/data";

const monthlyData = [
  { month: "Ene", procesos: 2, exito: 100 },
  { month: "Feb", procesos: 4, exito: 95 },
  { month: "Mar", procesos: 3, exito: 100 },
  { month: "Abr", procesos: 2, exito: 90 },
  { month: "May", procesos: 1, exito: 85 },
];

const phaseDistribution = [
  { name: "Preparación", value: 1, color: "hsl(var(--muted-foreground))" },
  { name: "Germinación", value: 3, color: "hsl(var(--primary))" },
  { name: "Crecimiento", value: 4, color: "hsl(var(--secondary))" },
  { name: "Maduración", value: 2, color: "hsl(var(--accent))" },
  { name: "Cosecha", value: 2, color: "hsl(var(--chart-3))" },
];

export function AnalyticsDashboard() {
  return (
    <section id="analytics" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Panel de <span className="text-primary">Analytics</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Resumen estadístico del experimento con métricas clave y visualizaciones comparativas.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={<Sprout className="h-5 w-5" />}
            label="Procesos Totales"
            value={experimentStats.totalProcesses.toString()}
            change="+3 este mes"
            index={0}
          />
          <StatCard
            icon={<Activity className="h-5 w-5" />}
            label="Procesos Activos"
            value={experimentStats.activeProcesses.toString()}
            change="En monitoreo"
            index={1}
          />
          <StatCard
            icon={<CheckCircle2 className="h-5 w-5" />}
            label="Tasa de Éxito"
            value={`${experimentStats.avgSuccessRate}%`}
            change="+2.5% vs anterior"
            index={2}
          />
          <StatCard
            icon={<Clock className="h-5 w-5" />}
            label="Tiempo Promedio"
            value={`${experimentStats.avgGerminationTime}d`}
            change="Germinación"
            index={3}
          />
        </div>

        {/* Charts Row */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Area Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-card-foreground">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Progreso Mensual
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="currentColor" opacity={0.1} />
                      <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="currentColor" opacity={0.5} />
                      <YAxis tick={{ fontSize: 12 }} stroke="currentColor" opacity={0.5} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="procesos"
                        stroke="hsl(var(--primary))"
                        fill="hsl(var(--primary))"
                        fillOpacity={0.2}
                        strokeWidth={2}
                        name="Procesos"
                      />
                      <Area
                        type="monotone"
                        dataKey="exito"
                        stroke="hsl(var(--secondary))"
                        fill="hsl(var(--secondary))"
                        fillOpacity={0.1}
                        strokeWidth={2}
                        name="Tasa Éxito %"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Pie Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-card-foreground">
                  <Target className="h-5 w-5 text-secondary" />
                  Distribución por Fase
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-52">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={phaseDistribution}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={80}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {phaseDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {phaseDistribution.slice(0, 4).map((phase) => (
                    <div key={phase.name} className="flex items-center gap-2 text-xs">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: phase.color }}
                      />
                      <span className="text-muted-foreground">{phase.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  icon,
  label,
  value,
  change,
  index,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  change: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              {icon}
            </div>
          </div>
          <div className="mt-4">
            <p className="text-2xl font-bold text-card-foreground">{value}</p>
            <p className="text-sm text-muted-foreground">{label}</p>
            <p className="text-xs text-secondary mt-1">{change}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

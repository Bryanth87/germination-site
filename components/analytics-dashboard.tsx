"use client";

import { motion } from "framer-motion";
import {
  Sprout,
  Ruler,
  Bug,
  Sigma,
  TrendingUp,
  ScatterChart as ScatterIcon,
} from "lucide-react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  LineChart,
  Line,
  BarChart,
  Bar,
  Cell,
  ScatterChart,
  Scatter,
  ReferenceLine,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  experimentStats,
  moldProgression,
  individualMeasurements,
  tTestResults,
} from "@/lib/data";

// Tasa de germinación por grupo (Gráfica 5)
const germinationRateData = [
  { grupo: "Control", tasa: experimentStats.controlGerminationRate, fill: "var(--primary)" },
  { grupo: "Experimental", tasa: experimentStats.experimentalGerminationRate, fill: "var(--destructive)" },
];

// Dispersión individual de las 20 mediciones del control (Gráfica 3/6)
const controlScatter = individualMeasurements.map((m) => ({
  x: m.sample,
  y: m.control,
}));

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
            Panel de <span className="text-primary">Resultados</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Datos cuantitativos del experimento: tasa de germinación, progresión de moho,
            dispersión de mediciones y la prueba T de Student.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={<Sprout className="h-5 w-5" />}
            label="Germinación Control"
            value={`${experimentStats.controlGerminationRate}%`}
            change="6 de 20 semillas"
            index={0}
          />
          <StatCard
            icon={<Bug className="h-5 w-5" />}
            label="Germinación Sacarosa"
            value={`${experimentStats.experimentalGerminationRate}%`}
            change="0 de 20 semillas"
            index={1}
          />
          <StatCard
            icon={<Ruler className="h-5 w-5" />}
            label="Crecimiento Promedio"
            value={`${experimentStats.controlAvgGrowth} cm`}
            change="vs 0.00 cm con azúcar"
            index={2}
          />
          <StatCard
            icon={<TrendingUp className="h-5 w-5" />}
            label="Tasa de Inhibición"
            value={`${experimentStats.inhibitionRate}%`}
            change="con agua azucarada"
            index={3}
          />
        </div>

        {/* Charts Row 1 */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Mold progression */}
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
                  <Bug className="h-5 w-5 text-destructive" />
                  Progresión de Moho por Grupo (Días 0–26)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={moldProgression}>
                      <CartesianGrid strokeDasharray="3 3" stroke="currentColor" opacity={0.1} />
                      <XAxis dataKey="day" tick={{ fontSize: 12 }} stroke="currentColor" opacity={0.5} />
                      <YAxis tick={{ fontSize: 12 }} stroke="currentColor" opacity={0.5} unit="%" />
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
                        dataKey="control"
                        stroke="var(--primary)"
                        strokeWidth={2}
                        dot={{ fill: "var(--primary)" }}
                        name="Control (agua pura)"
                      />
                      <Line
                        type="monotone"
                        dataKey="experimental"
                        stroke="var(--destructive)"
                        strokeWidth={2}
                        strokeDasharray="5 5"
                        dot={{ fill: "var(--destructive)" }}
                        name="Experimental (sacarosa)"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Germination rate */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-card-foreground">
                  <Sprout className="h-5 w-5 text-primary" />
                  Tasa de Germinación al Día 26
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={germinationRateData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="currentColor" opacity={0.1} />
                      <XAxis dataKey="grupo" tick={{ fontSize: 12 }} stroke="currentColor" opacity={0.5} />
                      <YAxis tick={{ fontSize: 12 }} stroke="currentColor" opacity={0.5} unit="%" domain={[0, 45]} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "var(--card)",
                          border: "1px solid var(--border)",
                          borderRadius: "8px",
                        }}
                      />
                      <Bar dataKey="tasa" name="Germinación %" radius={[6, 6, 0, 0]}>
                        {germinationRateData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Charts Row 2 */}
        <div className="grid lg:grid-cols-3 gap-6 mt-6">
          {/* Scatter — distribución individual */}
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
                  <ScatterIcon className="h-5 w-5 text-secondary" />
                  Distribución Individual — Grupo Control (20 muestras)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <ScatterChart>
                      <CartesianGrid strokeDasharray="3 3" stroke="currentColor" opacity={0.1} />
                      <XAxis
                        type="number"
                        dataKey="x"
                        name="Muestra"
                        domain={[0, 21]}
                        tick={{ fontSize: 12 }}
                        stroke="currentColor"
                        opacity={0.5}
                      />
                      <YAxis
                        type="number"
                        dataKey="y"
                        name="Longitud"
                        unit=" cm"
                        tick={{ fontSize: 12 }}
                        stroke="currentColor"
                        opacity={0.5}
                      />
                      <Tooltip
                        cursor={{ strokeDasharray: "3 3" }}
                        contentStyle={{
                          backgroundColor: "var(--card)",
                          border: "1px solid var(--border)",
                          borderRadius: "8px",
                        }}
                      />
                      <ReferenceLine
                        y={tTestResults.control.mean}
                        stroke="var(--primary)"
                        strokeDasharray="6 4"
                        label={{ value: `Media ${tTestResults.control.mean} cm`, fontSize: 11, fill: "var(--primary)" }}
                      />
                      <Scatter data={controlScatter} fill="var(--secondary)" />
                    </ScatterChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Tres semillas superaron los 13 cm mientras 14 quedaron en cero: esa dispersión
                  (s = {tTestResults.control.stdDev} cm) infló la varianza y redujo el poder de la prueba T.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* T-test summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-card-foreground">
                  <Sigma className="h-5 w-5 text-accent" />
                  Prueba T de Student (α = {tTestResults.alpha})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="space-y-2 text-sm">
                  <Row label="Media control" value={`${tTestResults.control.mean} cm`} />
                  <Row label="Media experimental" value={`${tTestResults.experimental.mean} cm`} />
                  <Row label="Desv. estándar (control)" value={`${tTestResults.control.stdDev} cm`} />
                  <Row label="Grados de libertad" value={`${tTestResults.degreesOfFreedom}`} />
                  <Row label="T calculado" value={`${tTestResults.tCalculated}`} highlight />
                  <Row label="T crítico" value={`${tTestResults.tCritical}`} />
                </dl>
                <div className="mt-4 p-3 bg-muted rounded-lg">
                  <p className="text-xs font-medium text-foreground">{tTestResults.decision}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Aun así, la evidencia práctica (0% de germinación y 100% de moho con azúcar)
                    respalda la hipótesis de investigación.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Row({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-center justify-between border-b border-border/50 pb-1">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className={`font-medium ${highlight ? "text-primary" : "text-card-foreground"}`}>{value}</dd>
    </div>
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

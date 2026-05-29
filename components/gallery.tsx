"use client";

import { motion } from "framer-motion";
import { Users, CheckCircle2, Lightbulb } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  surveyResults,
  surveySampleSize,
  conclusions,
  recommendations,
} from "@/lib/data";

// Datos de la encuesta para la gráfica (Gráfica 3.7), etiquetas abreviadas
const surveyChartData = surveyResults.map((item, i) => ({
  pregunta: ["¿Ayuda al crecimiento?", "¿Ha usado azúcar/melaza?", "¿Sabe que causa hongos?"][i],
  Sí: item.yes,
  No: item.no,
}));

export function Gallery() {
  return (
    <section id="galeria" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Percepción y <span className="text-primary">Conclusiones</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Encuesta a {surveySampleSize} personas de Villa Nueva sobre el uso de azúcar en el riego,
            contrastada con los hallazgos del experimento.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Survey chart + key insight */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-card-foreground">
                  <Users className="h-5 w-5 text-primary" />
                  Encuesta de Percepción (n = {surveySampleSize})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={surveyChartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="currentColor" opacity={0.1} />
                      <XAxis dataKey="pregunta" tick={{ fontSize: 11 }} stroke="currentColor" opacity={0.5} />
                      <YAxis tick={{ fontSize: 12 }} stroke="currentColor" opacity={0.5} unit="%" domain={[0, 100]} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "var(--card)",
                          border: "1px solid var(--border)",
                          borderRadius: "8px",
                        }}
                      />
                      <Legend wrapperStyle={{ fontSize: 12 }} />
                      <Bar dataKey="Sí" fill="var(--primary)" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="No" fill="var(--destructive)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">El resultado fue contundente:</span> 7 de cada 10
                    personas creen que el azúcar beneficia el crecimiento, y 9 de cada 10 no saben que puede
                    destruir la semilla antes de germinar. Una brecha entre la creencia popular y la realidad
                    biológica con consecuencias reales sobre los cultivos domésticos.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Conclusiones */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-card-foreground">
                  <CheckCircle2 className="h-5 w-5 text-secondary" />
                  Conclusiones
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {conclusions.map((c, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg border-l-4 border-secondary"
                    >
                      <span className="text-sm text-card-foreground">{c}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recomendaciones */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-card-foreground">
                  <Lightbulb className="h-5 w-5 text-accent" />
                  Recomendaciones
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recommendations.map((rec, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg"
                    >
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-sm text-card-foreground">{rec}</p>
                    </motion.div>
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

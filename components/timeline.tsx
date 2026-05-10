"use client";

import { motion } from "framer-motion";
import { 
  Play, 
  Flag, 
  Eye, 
  CheckCircle,
  Calendar,
} from "lucide-react";
import { timelineEvents, type TimelineEvent } from "@/lib/data";

const eventIcons: Record<TimelineEvent["type"], React.ReactNode> = {
  inicio: <Play className="h-4 w-4" />,
  hito: <Flag className="h-4 w-4" />,
  observación: <Eye className="h-4 w-4" />,
  completado: <CheckCircle className="h-4 w-4" />,
};

const eventColors: Record<TimelineEvent["type"], string> = {
  inicio: "bg-primary text-primary-foreground",
  hito: "bg-secondary text-secondary-foreground",
  observación: "bg-accent text-accent-foreground",
  completado: "bg-muted text-muted-foreground",
};

export function Timeline() {
  return (
    <section id="cronologia" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Cronología del <span className="text-primary">Experimento</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Hitos importantes y progreso del proyecto de investigación.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

          {/* Timeline Events */}
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-start gap-6 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                  <div className="bg-card p-4 rounded-xl border border-border shadow-sm hover:border-primary/30 transition-colors">
                    <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {new Date(event.date).toLocaleDateString("es-ES", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <h3 className="font-semibold text-card-foreground">{event.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{event.description}</p>
                  </div>
                </div>

                {/* Icon */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center ${eventColors[event.type]} shadow-md`}>
                    {eventIcons[event.type]}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>

          {/* Current Phase Indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-full border border-secondary/30">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
              </span>
              <span className="text-sm font-medium text-secondary-foreground">Experimento en progreso</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

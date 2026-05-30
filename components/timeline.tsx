"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Play,
  Flag,
  Eye,
  CheckCircle,
  Calendar,
  Users,
} from "lucide-react";
import { timelineEvents, projectInfo, type TimelineEvent } from "@/lib/data";

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Bitácora de <span className="text-primary">Observación</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Registro cronológico de ambos grupos del 22 de abril al 18 de mayo de 2026,
            con los puntos de quiebre observados día a día.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* La línea vertical solo cubre los eventos, no el pie de la sección */}
          <div className="relative">
            <div
              className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-border md:-translate-x-1/2 -z-0"
              aria-hidden
            />

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
                  <div
                    className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}
                  >
                    <div className="bg-card p-4 rounded-xl border border-border shadow-sm hover:border-primary/30 transition-colors">
                      <div
                        className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}
                      >
                        <Calendar className="h-4 w-4 text-muted-foreground shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {event.day} ·{" "}
                          {new Date(`${event.date}T12:00:00`).toLocaleDateString("es-ES", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <h3 className="font-semibold text-card-foreground">{event.title}</h3>
                      <div
                        className={`mt-3 space-y-2 text-left ${index % 2 === 0 ? "md:text-left" : ""}`}
                      >
                        <div className="p-2 rounded-lg bg-primary/5 border-l-2 border-primary">
                          <p className="text-[11px] font-medium text-primary uppercase tracking-wide">
                            Control · Agua pura
                          </p>
                          <p className="text-xs text-muted-foreground mt-0.5">{event.control}</p>
                        </div>
                        <div className="p-2 rounded-lg bg-destructive/5 border-l-2 border-destructive">
                          <p className="text-[11px] font-medium text-destructive uppercase tracking-wide">
                            Experimental · Sacarosa
                          </p>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {event.experimental}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10 flex items-center justify-center">
                    <div
                      className={`h-8 w-8 rounded-full flex items-center justify-center ring-4 ring-background ${eventColors[event.type]} shadow-md`}
                    >
                      {eventIcons[event.type]}
                    </div>
                  </div>

                  <div className="hidden md:block flex-1" aria-hidden />
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-14 flex justify-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-background rounded-full border border-secondary/30 shadow-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary" />
              </span>
              <span className="text-sm font-medium text-foreground">
                Experimento finalizado · 26 días
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 max-w-2xl mx-auto"
            id="equipo"
          >
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-3">
                <Users className="h-4 w-4" />
                <span>Equipo de investigación</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Integrantes del proyecto
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {projectInfo.course} · {projectInfo.university}
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border shadow-lg bg-card">
              <Image
                src={projectInfo.teamPhotoSrc}
                alt="Foto grupal del equipo de investigación del proyecto de germinación"
                width={1200}
                height={800}
                className="w-full h-auto object-cover object-center"
              />
            </div>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              {projectInfo.location} · {projectInfo.endDate.slice(0, 4)}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

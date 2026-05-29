"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, ImageOff, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { experimentPhotos, type ExperimentPhoto } from "@/lib/data";

export function ExperimentGallery() {
  const [selected, setSelected] = useState<number | null>(null);

  const next = () =>
    setSelected((s) => (s === null ? s : (s + 1) % experimentPhotos.length));
  const prev = () =>
    setSelected((s) =>
      s === null ? s : (s - 1 + experimentPhotos.length) % experimentPhotos.length
    );

  const control = experimentPhotos.filter((p) => p.group === "control");
  const experimental = experimentPhotos.filter((p) => p.group === "experimental");

  return (
    <section id="evidencia" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Evidencia <span className="text-primary">Fotográfica</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Anexo A — fotografías del experimento. A la izquierda el grupo control (agua pura),
            a la derecha el grupo experimental (solución de sacarosa).
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Control */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-card-foreground">
                <Camera className="h-5 w-5 text-primary" />
                Grupo Control · Agua pura
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {control.map((photo) => (
                  <PhotoThumb
                    key={photo.src}
                    photo={photo}
                    onClick={() =>
                      setSelected(experimentPhotos.findIndex((p) => p.src === photo.src))
                    }
                  />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Experimental */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-card-foreground">
                <Camera className="h-5 w-5 text-destructive" />
                Grupo Experimental · Sacarosa
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {experimental.map((photo) => (
                  <PhotoThumb
                    key={photo.src}
                    photo={photo}
                    onClick={() =>
                      setSelected(experimentPhotos.findIndex((p) => p.src === photo.src))
                    }
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Haz clic en cualquier fotografía para ampliarla y navegar entre ellas.
        </p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-background hover:bg-background/20"
              onClick={() => setSelected(null)}
            >
              <X className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-background hover:bg-background/20"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-background hover:bg-background/20"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={experimentPhotos[selected].src}
                alt={experimentPhotos[selected].caption}
                className="w-full max-h-[75vh] object-contain rounded-lg bg-card"
              />
              <p className="text-background text-center mt-4 text-sm">
                {experimentPhotos[selected].caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function PhotoThumb({
  photo,
  onClick,
}: {
  photo: ExperimentPhoto;
  onClick: () => void;
}) {
  const [missing, setMissing] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="group relative aspect-[3/4] rounded-lg overflow-hidden border border-border bg-muted/50 cursor-pointer"
      onClick={() => !missing && onClick()}
      title={photo.caption}
    >
      {missing ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground gap-2 p-3 text-center">
          <ImageOff className="h-6 w-6" />
          <span className="text-[10px] leading-tight break-all">{photo.src}</span>
        </div>
      ) : (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photo.src}
            alt={photo.caption}
            onError={() => setMissing(true)}
            className="absolute inset-0 h-full w-full object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
        </>
      )}
    </motion.div>
  );
}

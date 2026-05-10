"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ImageIcon, 
  FileText, 
  Download, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Camera,
  FileSpreadsheet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const galleryImages = [
  {
    id: 1,
    src: "/images/logo.jpeg",
    alt: "Sistema de monitoreo principal",
    caption: "Cámara de cultivo con sistema de monitoreo integrado",
  },
  {
    id: 2,
    src: "/images/logo.jpeg",
    alt: "Sensor de nutrientes",
    caption: "Detalle del sensor de absorción de nutrientes",
  },
  {
    id: 3,
    src: "/images/logo.jpeg",
    alt: "Panel de control",
    caption: "Panel de visualización de datos en tiempo real",
  },
];

const documents = [
  {
    id: 1,
    title: "Reporte Mensual - Enero 2024",
    type: "PDF",
    size: "2.4 MB",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    id: 2,
    title: "Datos de Sensores - Semana 4",
    type: "CSV",
    size: "856 KB",
    icon: <FileSpreadsheet className="h-5 w-5" />,
  },
  {
    id: 3,
    title: "Protocolo de Experimentación",
    type: "PDF",
    size: "1.2 MB",
    icon: <FileText className="h-5 w-5" />,
  },
];

const observations = [
  {
    date: "2024-02-10",
    note: "Las plántulas de soja muestran un desarrollo radicular superior al esperado. Se observa una absorción de nutrientes 15% mayor que en el grupo de control.",
  },
  {
    date: "2024-02-08",
    note: "Ajuste en la temperatura nocturna de 21°C a 19°C para simular condiciones naturales. Respuesta positiva en eficiencia fotosintética.",
  },
  {
    date: "2024-02-05",
    note: "Inicio de fase de crecimiento activo en trigo híbrido. Primeras hojas verdaderas visibles en 85% de los especímenes.",
  },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

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
            Galería y <span className="text-primary">Documentación</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Imágenes del proceso, notas de observación y documentos descargables.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-card-foreground">
                  <Camera className="h-5 w-5 text-primary" />
                  Galería de Imágenes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {galleryImages.map((image, index) => (
                    <motion.div
                      key={image.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
                      onClick={() => setSelectedImage(index)}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors flex items-center justify-center">
                        <ImageIcon className="h-8 w-8 text-background opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Observations */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-card-foreground">
                  <FileText className="h-5 w-5 text-secondary" />
                  Notas de Observación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {observations.map((obs, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 bg-muted/50 rounded-lg border-l-4 border-primary"
                    >
                      <p className="text-xs text-muted-foreground mb-2">
                        {new Date(obs.date).toLocaleDateString("es-ES", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                      <p className="text-sm text-card-foreground">{obs.note}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Documents */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-card-foreground">
                  <Download className="h-5 w-5 text-accent" />
                  Documentos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {documents.map((doc, index) => (
                    <motion.div
                      key={doc.id}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors cursor-pointer group"
                    >
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        {doc.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-card-foreground truncate">{doc.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {doc.type} • {doc.size}
                        </p>
                      </div>
                      <Download className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </motion.div>
                  ))}
                </div>

                <Button variant="outline" className="w-full mt-4">
                  Ver todos los documentos
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-background hover:bg-background/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-background hover:bg-background/20"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
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
                nextImage();
              }}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full aspect-square"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                fill
                className="object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent">
                <p className="text-background text-center">{galleryImages[selectedImage].caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

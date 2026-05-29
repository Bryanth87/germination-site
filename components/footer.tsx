"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projectInfo } from "@/lib/data";
import {
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react";

const quickLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#grupos", label: "Grupos" },
  { href: "#analytics", label: "Resultados" },
  { href: "#experimento", label: "Metodología" },
  { href: "#cronologia", label: "Bitácora" },
  { href: "#evidencia", label: "Galería" },
  { href: "#galeria", label: "Percepción" },
];

const resources = [
  { href: "#experimento", label: "Marco Teórico" },
  { href: "#analytics", label: "Prueba T de Student" },
  { href: "#galeria", label: "Conclusiones" },
  { href: "#cronologia", label: "Bitácora" },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href="#inicio" className="flex items-center gap-3 mb-4">
              <Image
                src={projectInfo.logoSrc}
                alt={`${projectInfo.brandName} Logo`}
                width={48}
                height={48}
                className="rounded-lg object-cover object-top h-12 w-12"
              />
              <div>
                <p className="font-semibold text-card-foreground">{projectInfo.brandName}</p>
                <p className="text-xs text-muted-foreground">Phaseolus vulgaris · UMG 2026</p>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Proyecto final de Metodología de la Investigación sobre el efecto del riego con
              agua azucarada en la germinación del frijol. Villa Nueva, Guatemala.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                className="h-9 w-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="h-9 w-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="h-9 w-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-semibold text-card-foreground mb-4">Navegación</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-semibold text-card-foreground mb-4">Recursos</h3>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-semibold text-card-foreground mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Universidad Mariano Gálvez de Guatemala<br />
                  Facultad de Ciencias y Tecnología · Villa Nueva
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Metodología de la Investigación
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Proyecto Final · Mayo 2026
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Proyecto de Investigación — Phaseolus vulgaris. UMG, Villa Nueva.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors">
              Política de Privacidad
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Términos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

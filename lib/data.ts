export interface GerminationProcess {
  id: string;
  title: string;
  description: string;
  phase: "preparación" | "germinación" | "crecimiento" | "maduración" | "cosecha";
  status: "activo" | "pausado" | "completado";
  startDate: string;
  endDate?: string;
  metrics: {
    temperature: number;
    humidity: number;
    nutrientAbsorption: number;
    photosyntheticEfficiency: number;
    rootGrowth: number;
  };
  chartData: {
    day: string;
    nutrientAbsorption: number;
    efficiency: number;
    temperature: number;
  }[];
  notes?: string;
}

export interface ExperimentStats {
  totalProcesses: number;
  activeProcesses: number;
  completedProcesses: number;
  avgSuccessRate: number;
  avgGerminationTime: number;
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  type: "inicio" | "hito" | "observación" | "completado";
}

export const germinationProcesses: GerminationProcess[] = [
  {
    id: "proc-001",
    title: "Cultivo de Soja Experimental",
    description: "Proceso de germinación de semillas de soja bajo condiciones controladas con monitoreo de absorción de nutrientes y eficiencia fotosintética.",
    phase: "crecimiento",
    status: "activo",
    startDate: "2024-01-15",
    metrics: {
      temperature: 24.5,
      humidity: 72,
      nutrientAbsorption: 87,
      photosyntheticEfficiency: 92,
      rootGrowth: 78,
    },
    chartData: [
      { day: "D1", nutrientAbsorption: 45, efficiency: 60, temperature: 22 },
      { day: "D5", nutrientAbsorption: 58, efficiency: 68, temperature: 23 },
      { day: "D10", nutrientAbsorption: 72, efficiency: 78, temperature: 24 },
      { day: "D15", nutrientAbsorption: 80, efficiency: 85, temperature: 24.5 },
      { day: "D20", nutrientAbsorption: 87, efficiency: 92, temperature: 24.5 },
    ],
    notes: "Excelente respuesta al nuevo sustrato orgánico. Raíces muestran desarrollo óptimo.",
  },
  {
    id: "proc-002",
    title: "Germinación de Trigo Híbrido",
    description: "Análisis comparativo de variedades de trigo híbrido con diferentes tratamientos de temperatura y humedad.",
    phase: "germinación",
    status: "activo",
    startDate: "2024-02-01",
    metrics: {
      temperature: 21.0,
      humidity: 68,
      nutrientAbsorption: 65,
      photosyntheticEfficiency: 74,
      rootGrowth: 52,
    },
    chartData: [
      { day: "D1", nutrientAbsorption: 30, efficiency: 40, temperature: 20 },
      { day: "D3", nutrientAbsorption: 42, efficiency: 52, temperature: 20.5 },
      { day: "D5", nutrientAbsorption: 55, efficiency: 65, temperature: 21 },
      { day: "D7", nutrientAbsorption: 65, efficiency: 74, temperature: 21 },
    ],
    notes: "Fase inicial muestra buenos indicadores. Continuamos monitoreo.",
  },
  {
    id: "proc-003",
    title: "Microgreens de Girasol",
    description: "Cultivo de microgreens de girasol para análisis nutricional y optimización de tiempos de cosecha.",
    phase: "maduración",
    status: "activo",
    startDate: "2024-01-28",
    endDate: "2024-02-15",
    metrics: {
      temperature: 22.5,
      humidity: 75,
      nutrientAbsorption: 95,
      photosyntheticEfficiency: 88,
      rootGrowth: 92,
    },
    chartData: [
      { day: "D1", nutrientAbsorption: 50, efficiency: 55, temperature: 21 },
      { day: "D4", nutrientAbsorption: 68, efficiency: 70, temperature: 22 },
      { day: "D8", nutrientAbsorption: 82, efficiency: 80, temperature: 22.5 },
      { day: "D12", nutrientAbsorption: 90, efficiency: 85, temperature: 22.5 },
      { day: "D16", nutrientAbsorption: 95, efficiency: 88, temperature: 22.5 },
    ],
    notes: "Listo para cosecha en próximos 3 días. Valores nutricionales óptimos alcanzados.",
  },
];

export const experimentStats: ExperimentStats = {
  totalProcesses: 12,
  activeProcesses: 3,
  completedProcesses: 9,
  avgSuccessRate: 94.5,
  avgGerminationTime: 18.5,
};

export const timelineEvents: TimelineEvent[] = [
  {
    id: "evt-001",
    date: "2024-01-10",
    title: "Inicio del Proyecto",
    description: "Configuración inicial de equipos y calibración de sensores.",
    type: "inicio",
  },
  {
    id: "evt-002",
    date: "2024-01-15",
    title: "Primer Proceso Activo",
    description: "Inicio del cultivo de soja experimental con nuevo sustrato.",
    type: "hito",
  },
  {
    id: "evt-003",
    date: "2024-01-22",
    title: "Optimización de Iluminación",
    description: "Ajustes en el sistema LED para mejorar eficiencia fotosintética.",
    type: "observación",
  },
  {
    id: "evt-004",
    date: "2024-02-01",
    title: "Expansión de Cultivos",
    description: "Incorporación de trigo híbrido al programa de investigación.",
    type: "hito",
  },
  {
    id: "evt-005",
    date: "2024-02-10",
    title: "Fase Actual",
    description: "Monitoreo continuo de todos los procesos activos.",
    type: "observación",
  },
];

export const phaseColors: Record<GerminationProcess["phase"], string> = {
  preparación: "bg-muted text-muted-foreground",
  germinación: "bg-primary/20 text-primary",
  crecimiento: "bg-secondary/30 text-secondary-foreground",
  maduración: "bg-accent/30 text-accent-foreground",
  cosecha: "bg-chart-3/20 text-chart-3",
};

export const statusColors: Record<GerminationProcess["status"], string> = {
  activo: "bg-secondary text-secondary-foreground",
  pausado: "bg-accent text-accent-foreground",
  completado: "bg-muted text-muted-foreground",
};

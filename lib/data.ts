// ============================================================================
// DATOS DEL PROYECTO DE INVESTIGACIÓN
// "Efecto del Riego con Agua Azucarada en la Germinación y Desarrollo Inicial
//  de Semillas de Frijol (Phaseolus vulgaris)"
// Universidad Mariano Gálvez de Guatemala — Villa Nueva, Mayo 2026
// Todos los valores provienen del informe final de investigación.
// ============================================================================

// ----------------------------------------------------------------------------
// Metadatos generales del proyecto
// ----------------------------------------------------------------------------
export const projectInfo = {
  title: "Efecto del Riego con Agua Azucarada",
  subtitle: "Germinación y Desarrollo Inicial de Semillas de Frijol (Phaseolus vulgaris)",
  brandName: "BioGrow Partners",
  brandTagline: "Soluciones de Cultivo Sostenible",
  logoSrc: "/images/logo-oficial-proyecto.png",
  university: "Universidad Mariano Gálvez de Guatemala",
  faculty: "Facultad de Ciencias y Tecnología",
  course: "Metodología de la Investigación",
  location: "Villa Nueva, Guatemala",
  startDate: "2026-04-22",
  endDate: "2026-05-18",
  durationDays: 26,
  totalSeeds: 40,
  groupSize: 20,
  sucroseConcentration: "~200 g/L",
  budget: "Q 90.00",
};

// ----------------------------------------------------------------------------
// Grupos experimentales (Control vs Experimental)
// ----------------------------------------------------------------------------
export interface ExperimentGroup {
  id: "control" | "experimental";
  name: string;
  shortName: string;
  treatment: string;
  description: string;
  color: string; // token de color para gráficas
  germinated: number;
  total: number;
  germinationRate: number; // %
  avgGrowth: number; // cm
  finalMold: number; // % al día 26
  status: "completado";
  notes: string;
}

export const experimentGroups: ExperimentGroup[] = [
  {
    id: "control",
    name: "Grupo Control",
    shortName: "Control",
    treatment: "Agua pura (H₂O)",
    description:
      "20 semillas de frijol regadas únicamente con agua pura sobre sustrato de algodón absorbente. Grupo de referencia del experimento.",
    color: "hsl(var(--primary))",
    germinated: 6,
    total: 20,
    germinationRate: 30,
    avgGrowth: 2.45,
    finalMold: 65,
    status: "completado",
    notes:
      "6 de 20 semillas desarrollaron tallo medible (promedio 2.45 cm). Al día 9 el 85% ya mostraba radícula. El moho del 65% apareció solo en semillas que no completaron la germinación, por humedad acumulada — no por el tratamiento.",
  },
  {
    id: "experimental",
    name: "Grupo Experimental",
    shortName: "Experimental",
    treatment: "Solución saturada de sacarosa (~200 g/L)",
    description:
      "20 semillas de frijol regadas con solución saturada de sacarosa sobre sustrato de algodón absorbente. Grupo sometido al tratamiento.",
    color: "hsl(var(--destructive))",
    germinated: 0,
    total: 20,
    germinationRate: 0,
    avgGrowth: 0,
    finalMold: 100,
    status: "completado",
    notes:
      "Inhibición total: 0 de 20 semillas germinó (0.00 cm). El estrés osmótico deshidrató las semillas desde adentro y la sacarosa alimentó a los hongos. Al día 26 el 100% de las muestras estaba cubierto de moho.",
  },
];

// ----------------------------------------------------------------------------
// Estadísticas globales del experimento (resumen para tarjetas)
// ----------------------------------------------------------------------------
export const experimentStats = {
  totalSeeds: 40,
  groups: 2,
  durationDays: 26,
  controlGerminationRate: 30, // %
  experimentalGerminationRate: 0, // %
  controlAvgGrowth: 2.45, // cm
  experimentalAvgGrowth: 0, // cm
  inhibitionRate: 100, // %
};

// ----------------------------------------------------------------------------
// Evolución del crecimiento promedio (Tabla 4.3b / Gráfica 2)
// ----------------------------------------------------------------------------
export interface GrowthPoint {
  day: string;
  date: string;
  control: number; // cm
  experimental: number; // cm
}

export const growthEvolution: GrowthPoint[] = [
  { day: "Día 0", date: "2026-04-22", control: 0, experimental: 0 },
  { day: "Día 9", date: "2026-05-01", control: 0.5, experimental: 0 },
  { day: "Día 16", date: "2026-05-08", control: 1.8, experimental: 0 },
  { day: "Día 26", date: "2026-05-18", control: 2.45, experimental: 0 },
];

// ----------------------------------------------------------------------------
// Progresión porcentual de moho (Tabla 4.5.4 / Gráfica 4)
// ----------------------------------------------------------------------------
export interface MoldPoint {
  day: string;
  date: string;
  control: number; // %
  experimental: number; // %
}

export const moldProgression: MoldPoint[] = [
  { day: "Día 0", date: "2026-04-22", control: 0, experimental: 0 },
  { day: "Día 9", date: "2026-05-01", control: 0, experimental: 10 },
  { day: "Día 16", date: "2026-05-08", control: 30, experimental: 90 },
  { day: "Día 26", date: "2026-05-18", control: 65, experimental: 100 },
];

// ----------------------------------------------------------------------------
// Mediciones individuales al día 26 (Tabla 4.3.2)
// ----------------------------------------------------------------------------
export interface SeedMeasurement {
  sample: number;
  control: number; // cm
  experimental: number; // cm
}

export const individualMeasurements: SeedMeasurement[] = [
  { sample: 1, control: 0, experimental: 0 },
  { sample: 2, control: 0, experimental: 0 },
  { sample: 3, control: 0, experimental: 0 },
  { sample: 4, control: 0, experimental: 0 },
  { sample: 5, control: 0, experimental: 0 },
  { sample: 6, control: 0, experimental: 0 },
  { sample: 7, control: 0, experimental: 0 },
  { sample: 8, control: 0, experimental: 0 },
  { sample: 9, control: 0, experimental: 0 },
  { sample: 10, control: 0, experimental: 0 },
  { sample: 11, control: 0.4, experimental: 0 },
  { sample: 12, control: 0.03, experimental: 0 },
  { sample: 13, control: 0, experimental: 0 },
  { sample: 14, control: 0.04, experimental: 0 },
  { sample: 15, control: 0, experimental: 0 },
  { sample: 16, control: 21.47, experimental: 0 },
  { sample: 17, control: 14.12, experimental: 0 },
  { sample: 18, control: 13.02, experimental: 0 },
  { sample: 19, control: 0, experimental: 0 },
  { sample: 20, control: 0, experimental: 0 },
];

// ----------------------------------------------------------------------------
// Resumen estadístico — Prueba T de Student (Tabla 4.4.3)
// ----------------------------------------------------------------------------
export const tTestResults = {
  alpha: 0.05,
  control: {
    mean: 2.45,
    stdDev: 6.11,
    variance: 37.3461,
    n: 20,
  },
  experimental: {
    mean: 0,
    stdDev: 0,
    variance: 0,
    n: 20,
  },
  degreesOfFreedom: 38,
  tCalculated: 1.796,
  tCritical: 2.024,
  decision: "No se rechaza H₀ (α=0.05)",
  interpretation:
    "El T calculado (1.796) no supera el T crítico (2.024), por lo que estadísticamente no se rechaza H₀. Sin embargo, la inhibición absoluta del crecimiento (0.00 cm en las 20 muestras experimentales) y el 100% de cobertura de moho constituyen evidencia práctica contundente. La alta varianza interna del grupo control (tres semillas superaron 13 cm) redujo el poder estadístico de la prueba.",
};

// ----------------------------------------------------------------------------
// Hipótesis (sección 2.2)
// ----------------------------------------------------------------------------
export interface Hypothesis {
  code: string;
  name: string;
  statement: string;
  result: "COMPROBADA" | "NO RECHAZADA" | "RESPALDADA";
}

export const hypotheses: Hypothesis[] = [
  {
    code: "Hi",
    name: "Hipótesis de Investigación",
    statement:
      "El riego con agua azucarada afectará negativamente el crecimiento y la salud fitosanitaria de las semillas de frijol, reduciendo su tasa de germinación, altura final y resistencia a enfermedades fúngicas.",
    result: "COMPROBADA",
  },
  {
    code: "H₀",
    name: "Hipótesis Nula",
    statement:
      "No existe diferencia estadísticamente significativa en el crecimiento y la salud fitosanitaria de las semillas regadas con agua azucarada frente a las regadas con agua pura.",
    result: "NO RECHAZADA",
  },
  {
    code: "H₁",
    name: "Hipótesis Alterna",
    statement:
      "El riego con solución saturada de sacarosa inhibe la germinación y promueve la aparición de moho, resultando en un crecimiento longitudinal inferior al del grupo control.",
    result: "RESPALDADA",
  },
];

// ----------------------------------------------------------------------------
// Objetivos específicos (sección 1.5.2 / comprobación 4.10.2)
// ----------------------------------------------------------------------------
export const objectives = [
  {
    title: "Comparar el crecimiento longitudinal",
    description:
      "Diferencia de 2.45 cm entre grupos (control x̄ = 2.45 cm vs experimental x̄ = 0.00 cm) al día 26.",
  },
  {
    title: "Documentar la progresión de moho",
    description:
      "Registro de cobertura fúngica en ambos grupos en los días 0, 9, 16 y 26.",
  },
  {
    title: "Aplicar la prueba T de Student",
    description:
      "Prueba para muestras independientes: T calculado = 1.796, T crítico = 2.024, α = 0.05.",
  },
  {
    title: "Identificar mecanismos bioquímicos",
    description:
      "Estrés osmótico, plasmólisis y proliferación fúngica por sacarosa disponible.",
  },
  {
    title: "Analizar la percepción popular",
    description:
      "Encuesta a 10 personas de Villa Nueva sobre el uso de azúcar en el riego.",
  },
];

// ----------------------------------------------------------------------------
// Encuesta de percepción (Tabla 3.7.1 / Gráfica 3.7)
// ----------------------------------------------------------------------------
export interface SurveyItem {
  question: string;
  yes: number; // %
  no: number; // %
}

export const surveyResults: SurveyItem[] = [
  { question: "¿Cree que el azúcar ayuda al crecimiento de las plantas?", yes: 70, no: 30 },
  { question: "¿Ha utilizado alguna vez azúcar o melaza en su riego?", yes: 40, no: 60 },
  { question: "¿Sabía que el azúcar puede causar hongos en la raíz?", yes: 10, no: 90 },
];

export const surveySampleSize = 10;

// ----------------------------------------------------------------------------
// Bitácora de observación / Cronología (Tabla 4.2.1)
// ----------------------------------------------------------------------------
export interface TimelineEvent {
  id: string;
  date: string;
  day: string;
  title: string;
  control: string;
  experimental: string;
  type: "inicio" | "hito" | "observación" | "completado";
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: "evt-d0",
    date: "2026-04-22",
    day: "Día 0",
    title: "Siembra inicial",
    control: "Siembra exitosa. Semillas hidratadas, aspecto firme y sano. Sin moho.",
    experimental: "Siembra exitosa. Solución saturada aplicada. Sin cambios visibles. Sin moho.",
    type: "inicio",
  },
  {
    id: "evt-d9",
    date: "2026-05-01",
    day: "Día 9",
    title: "Primer punto de quiebre",
    control: "Ruptura de testa visible. Inicio de radícula en 85% de semillas. Sin moho.",
    experimental: "Puntos negros en la superficie. Coloración café. Sin germinación. Moho en ~10%.",
    type: "hito",
  },
  {
    id: "evt-d16",
    date: "2026-05-08",
    day: "Día 16",
    title: "Divergencia marcada",
    control: "Hipocótilo emergido en semillas germinadas. Coloración verde vigorosa. Moho en ~30% de las no germinadas.",
    experimental: "Colonias de moho visibles en 90% de las semillas. Olor a fermentación. Sin germinación.",
    type: "observación",
  },
  {
    id: "evt-d26",
    date: "2026-05-18",
    day: "Día 26",
    title: "Medición final",
    control: "6 semillas con plántula desarrollada. Media: 2.45 cm. Moho en ~65% de las no germinadas.",
    experimental: "100% de muestras cubiertas de moho. Sin germinación. Sustrato coloreado.",
    type: "completado",
  },
];

// ----------------------------------------------------------------------------
// Mecanismos bioquímicos / Marco teórico (Capítulo III)
// ----------------------------------------------------------------------------
export const mechanisms = [
  {
    title: "Estrés osmótico",
    description:
      "Al disolver azúcar, el potencial hídrico (Ψ) externo cae. Si la concentración es alta, el gradiente se invierte y la semilla pierde agua en vez de absorberla.",
  },
  {
    title: "Plasmólisis",
    description:
      "Las células del embrión se deshidratan desde adentro hacia el medio hipertónico externo. Cuando ocurre, el embrión muere.",
  },
  {
    title: "Proliferación fúngica",
    description:
      "Hongos saprófitos (Aspergillus, Penicillium, Rhizopus) usan la sacarosa como fuente de carbono. El algodón saturado se vuelve alimento concentrado para los hongos.",
  },
  {
    title: "Señal de latencia (ABA)",
    description:
      "El exceso de sacarosa externa puede activar la producción de ácido abscísico (ABA), la hormona que mantiene a la semilla en estado de latencia.",
  },
];

// ----------------------------------------------------------------------------
// Conclusiones (sección 5.1)
// ----------------------------------------------------------------------------
export const conclusions: string[] = [
  "El riego con agua azucarada no redujo la tasa de germinación: la llevó a cero. Tasa de inhibición: 100%.",
  "El daño operó en dos vías simultáneas: estrés osmótico que deshidrató las semillas y sacarosa que alimentó a los hongos (100% de moho al día 26).",
  "El agua pura fue suficiente: 6 de 20 semillas del control desarrollaron tallo medible (promedio 2.45 cm), sin aditivos.",
  "La prueba T no rechazó H₀ por la alta varianza del control, pero la evidencia práctica respalda Hi sin ambigüedad: ninguna semilla experimental germinó.",
  "El 70% de los encuestados cree que el azúcar ayuda al crecimiento y el 90% desconoce que puede provocar moho: una brecha con consecuencias reales sobre los cultivos domésticos.",
];

// ----------------------------------------------------------------------------
// Recomendaciones (sección 5.2)
// ----------------------------------------------------------------------------
export const recommendations: string[] = [
  "No agregar azúcar, melaza ni carbohidratos simples al agua de riego durante la germinación. El daño es total e irreversible.",
  "Repetir el experimento con distintas concentraciones de sacarosa (2, 5, 10 y 50 g/L) para identificar el umbral exacto de inhibición.",
  "Replicar el experimento con suelo agrícola en lugar de algodón para evaluar el efecto tampón del suelo.",
  "Llevar los resultados a la comunidad mediante talleres y material de divulgación con datos locales de Villa Nueva.",
  "Probar con otras leguminosas de la región (ejote, garbanzo) para determinar si el efecto inhibidor es generalizable.",
];

// ----------------------------------------------------------------------------
// Galería del experimento (Anexo A) — fotografías en public/images/experimento/
// ----------------------------------------------------------------------------
export interface ExperimentPhoto {
  src: string;
  group: "control" | "experimental";
  caption: string;
}

export const experimentPhotos: ExperimentPhoto[] = [
  {
    src: "/images/experimento/control-inicio.png",
    group: "control",
    caption: "Grupo Control · Día 0 — preparación del espacio con algodón seco en bandeja de huevos.",
  },
  {
    src: "/images/experimento/control-25-04-2026.png",
    group: "control",
    caption: "Grupo Control · 25 abr 2026 — siembra sobre algodón con agua pura.",
  },
  {
    src: "/images/experimento/control-30-04-2026.png",
    group: "control",
    caption: "Grupo Control · 30 abr 2026 — hidratación visible; semillas firmes, sin moho.",
  },
  {
    src: "/images/experimento/control-avance.png",
    group: "control",
    caption: "Grupo Control — primera plántula emergiendo del algodón húmedo.",
  },
  {
    src: "/images/experimento/control-09-05-2026.png",
    group: "control",
    caption: "Grupo Control · 9 may 2026 — hipocótilos visibles en varias semillas germinadas.",
  },
  {
    src: "/images/experimento/control-18-05-2026.png",
    group: "control",
    caption: "Grupo Control · 18 may 2026 — plántulas desarrolladas y moho en semillas no germinadas.",
  },
  {
    src: "/images/experimento/experimental-inicio.png",
    group: "experimental",
    caption: "Grupo Experimental · Día 0 — preparación del espacio etiquetado «Azúcar» con algodón seco.",
  },
  {
    src: "/images/experimento/experimental-25-04-2026.png",
    group: "experimental",
    caption: "Grupo Experimental · 25 abr 2026 — siembra con solución saturada de sacarosa.",
  },
  {
    src: "/images/experimento/experimental-30-04-2026.png",
    group: "experimental",
    caption: "Grupo Experimental · 30 abr 2026 — coloración del algodón; sin germinación.",
  },
  {
    src: "/images/experimento/experimental-avance.png",
    group: "experimental",
    caption: "Grupo Experimental — manchas oscuras y deterioro del sustrato por humedad.",
  },
  {
    src: "/images/experimento/experimental-09-05-2026.png",
    group: "experimental",
    caption: "Grupo Experimental · 9 may 2026 — colonias de moho en la mayoría de las muestras.",
  },
  {
    src: "/images/experimento/experimental-18-05-2026.png",
    group: "experimental",
    caption: "Grupo Experimental · 18 may 2026 — 100% de las muestras cubiertas de moho.",
  },
];

// ----------------------------------------------------------------------------
// Glosario técnico (Tabla G.1) — selección de términos clave
// ----------------------------------------------------------------------------
export interface GlossaryTerm {
  term: string;
  definition: string;
}

export const glossary: GlossaryTerm[] = [
  { term: "Estrés osmótico", definition: "Desequilibrio de solutos que impide la correcta hidratación celular y la imbibición de la semilla." },
  { term: "Plasmólisis", definition: "Contracción del protoplasto de una célula vegetal por pérdida de agua hacia un medio hipertónico externo." },
  { term: "Imbibición", definition: "Proceso físico de absorción de agua por una semilla seca; primera etapa de la germinación." },
  { term: "Potencial hídrico (Ψ)", definition: "Medida de la energía libre del agua; determina la dirección del flujo osmótico. Se expresa en MPa." },
  { term: "Saprófito", definition: "Organismo que obtiene energía descomponiendo materia orgánica muerta, como los hongos del moho." },
  { term: "Germinación epigea", definition: "Tipo de germinación donde los cotiledones emergen sobre el sustrato, característica del frijol." },
];

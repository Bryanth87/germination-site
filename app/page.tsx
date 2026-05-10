import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { GerminationProcesses } from "@/components/germination-processes";
import { AnalyticsDashboard } from "@/components/analytics-dashboard";
import { ExperimentInfo } from "@/components/experiment-info";
import { Timeline } from "@/components/timeline";
import { Gallery } from "@/components/gallery";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <GerminationProcesses />
      <AnalyticsDashboard />
      <ExperimentInfo />
      <Timeline />
      <Gallery />
      <Footer />
    </main>
  );
}

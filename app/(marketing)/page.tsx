// app/(marketing)/page.tsx
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Modules from "@/app/components/Modules";
import Plans from "@/app/components/Plans";
import Integrations from "@/app/components/Integrations";
import CTA from "@/app/components/CTA";
import Footer from "@/app/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Modules />
        <Plans />
        <Integrations />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
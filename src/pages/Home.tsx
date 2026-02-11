import { Hero } from "../components/landing/Hero";
import { Solutions } from "../components/landing/Solutions";
import { DashboardPreview } from "../components/landing/DashboardPreview";
import { BrochureDownload } from "../components/landing/BrochureDownload";
import { SecurityFeatures } from "../components/landing/SecurityFeatures";
import { PDCACycle } from "../components/landing/PDCACycle";
import { Pricing } from "../components/landing/Pricing";
import { Contact } from "../components/landing/Contact";
import { CompliLawInsight } from "../components/landing/CompliLawInsight";
import { ServiceBanner } from "../components/landing/ServiceBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <Solutions />
      <DashboardPreview />
      <BrochureDownload />
      <SecurityFeatures />
      <PDCACycle />
      <Pricing />
      <Contact />
      <CompliLawInsight />
      <ServiceBanner />
    </>
  );
}

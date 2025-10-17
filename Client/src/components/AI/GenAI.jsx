import React from "react";
import HeroSection from "../Ui.jsx/HeroSectionoUi";
import UiImpactSection from "../Ui.jsx/UiImpactSection";
import ModernUIDeliver from "../Ui.jsx/ModernUIDeliver";
import {
  Edit3,
  Globe,
  Target,
  Zap,
  Plug,
  Shield,
  Layers,
  FileCheck,
  Code2,
  Cloud,
  ShieldCheck,
  Brain,
  LayoutGrid,
  Rocket,
} from "lucide-react";
import NorthslingUIDesigns from "../Ui.jsx/NorthslingUIDesigns";
import CaseStudySection from "../Ui.jsx/CaseStudySection";
import ContactForm from "../../pages/success/ContactForm";
import WhoWeAreSection from "../Ui.jsx/WhoWeAre";
import UxAuditSection from "../Ui.jsx/UxAuditSection";
function GenAI() {
  const features = [
    {
      icon: <Layers className="w-7 h-7 text-yellow-400" />, // Unified Data Lakes -> multiple layers / unified
      title: "Continuous Self-Learning",
      desc: "Models that retrain as data evolves",
    },
    {
      icon: <Globe className="w-7 h-7 text-yellow-400" />, // Real-Time Dashboards -> global visibility / live data
      title: "Multi-Modal Intelligence",
      desc: "Text, voice, code, docs—understood natively",
    },
    {
      icon: <Target className="w-7 h-7 text-yellow-400" />, // Role-Based BI -> accuracy / target
      title: "Autonomous Agents",
      desc: "Digital coworkers who think and do",
    },
    {
      icon: <Shield className="w-7 h-7 text-yellow-400" />, // Compliance-First Design -> security / compliance
      title: "Composable, Cloud-Agnostic Builds",
      desc: "Run anywhere, scale everywhere",
    },
    {
      icon: <Brain className="w-7 h-7 text-yellow-400" />, // AI & Predictive Readiness -> intelligence / future-ready
      title: "Compliance by Design",
      desc: "SOC2, HIPAA, GDPR-ready",
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-yellow-400" />, // Governed Access -> verified / secured
      title: "Human-Guardrails",
      desc: "HITL/HOTL workflows with override options",
    },
    {
      icon: <Edit3 className="w-7 h-7 text-yellow-400" />, // Self-Service Interfaces -> editable / customizable
      title: "Real-Time Execution",
      desc: "Insights + action, in seconds",
    },
    {
      icon: <Cloud className="w-7 h-7 text-yellow-400" />, // Scalable Cloud Backbone -> cloud / scalable
      title: "Enterprise Integration",
      desc: "AI that connects with your CRM, ERP, and CX stack",
    },
  ];
  const uiFeatures = [
    {
      icon: <Layers className="w-6 h-6 text-orange-500" />, // Data Lakes with Purpose -> structured layers
      title: "Strategy & Readiness",
      desc: "Workshops, assessments, and opportunity maps aligned to your enterprise goals",
    },
    {
      icon: <Zap className="w-6 h-6 text-orange-500" />, // Real-Time Decision Systems -> fast / real-time
      title: "LLM Tuning",
      desc: "We fine-tune foundation models like GPT, LLaMA, and Falcon to your proprietary data.",
    },
    {
      icon: <LayoutGrid className="w-6 h-6 text-orange-500" />, // BI for Business -> structured dashboard / grid
      title: "Agentic AI Deployment",
      desc: "We create autonomous agents with LangChain, Open Agents, and custom orchestration stacks.",
    },
    {
      icon: <Brain className="w-6 h-6 text-orange-500" />, // Automation-Ready Architecture -> intelligence / AI
      title: "Systems Integration",
      desc: "REST, GraphQL, and event-driven connections to your CRMs, ERPs, and data lakes.",
    },
    {
      icon: <Plug className="w-6 h-6 text-orange-500" />, // Plug & Perform Integrations -> connectivity / integration
      title: "Guardrails & Compliance",
      desc: "Explainability, audit logs, observability—all baked into our launch blueprints.",
    },
    {
      icon: <Target className="w-6 h-6 text-orange-500" />, // Actionable KPIs -> focus / target metrics
      title: "Post-Launch Optimization",
      desc: "MLflow, Prometheus, Grafana dashboards and feedback loops for continuous tuning.",
    },
  ];

  const stats = [
    {
      value: "7x%",
      label: "faster content velocity across digital campaigns",
    },
    {
      value: "60%",
      label: "reduction in spend on external content services",
    },
  ];
  const awardsList = [
    "/awards/deloitte1.png",
    "/awards/deloitte2.png",
    "/awards/duns1.png",
    "/awards/duns2.png",
    "/awards/sme.png",
  ];

  const statsList = [
    { value: "27+", label: "Years of Excellence" },
    { value: "10", label: "Offices Worldwide" },
    { value: "1,100+", label: "Solution Experts" },
    { value: "500+", label: "Worldwide Happy Clients" },
  ];
  return (
    <div>
      <HeroSection
        title={<>Next-Level Intelligence, Built In</>}
        subtitle="Transform your AI from static responders into autonomous actors"
        primaryBtn="Schedule a Meeting"
        secondaryBtn="Read Success Stories"
        bgImage="https://img.freepik.com/premium-photo/engineer-working-computer-office-engineering-architecture-concept_968517-57115.jpg"
        ratings={[
          { name: "Google", rating: 4.0 },
          { name: "Clutch", rating: 4.5 },
          { name: "Glassdoor", rating: 4.5 },
        ]}
      />
      <UiImpactSection
        title={
          <>
            Generative AI accelerates creativity and insight, Agentic AI takes
            it further <br />
          </>
        }
        description="At Northsling), we turn AI from an assistant into a force multiplier for growth, efficiency, and scale."
        points={[
          "Create at scale with AI-driven content, code, and knowledge generation",
          "Act with autonomy through AI agents that execute workflows end-to-end",
          "Integrate seamlessly across your business systems and processes",
          "Continuously improve with self-learning models tailored to your needs",
          "Build on trust with secure, ethical, and compliant AI frameworks",
        ]}
        stats={[
          {
            value: "83%",
            description:
              "of business leaders believe generative AI will drive the largest digital transformation of the decade, leading to new revenue streams and operating models ",
            source: "Mission Cloud",
          },
          {
            value: "30%",
            description:
              "reduction in operational costs reported by retailers using agentic AI agents for workflow automation and process optimization ",
            source: "Experro",
          },
        ]}
        emphasisText="Generative + Agentic AI aren’t experiments — they’re how the next generation of businesses create faster, act smarter, and scale harder."
        titleColor="text-gray-900"
        descriptionColor="text-gray-700"
        pointColor="text-gray-800"
      />
      <ModernUIDeliver
        title={
          <>
            What Next
            <span className="text-yellow-400"> Gen AI</span> Must Absolutely Get
            Right
          </>
        }
        description="AI needs to do more than answer. It needs to act."
        features={features}
      />
      <NorthslingUIDesigns
        sectionTitle={
          <>
            Why Northling Doesn’t Just Build AI — We Engineer Autonomous
            Intelligence{" "}
          </>
        }
        sectionSubtitle="We don’t deploy AI for vanity. We deploy it to deliver."
        features={uiFeatures}
      />
      <CaseStudySection
        tag="Case Study"
        title="Contact Center Boosts SLA 40% & Cuts Breaches 81% with Northling Agentic QA"
        description="Implemented an LLM-powered GenAI solution for a BFSI client to create compliant marketing content with minimal human input."
        image="data:image/webp;base64,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"
        stats={stats}
        ctaText="Read full case study"
        ctaLink="#"
      />
      <UxAuditSection
        logoText="NS"
        heading="Get Your Free
AI Opportunity Audit"
        points={[
          "An AI maturity + use case fit analysis",
          "A custom map of top 3 workflows ready for GenAI/Agentic automation",
          "Strategic AI roadmap with impact projections",
          "A 30-minute consult with INT.’s AI leads",
        ]}
        buttonText="Schedule Your Free Assessment"
        buttonAction={() => console.log("Button clicked!")}
      />

      <WhoWeAreSection
        tag="WHO WE ARE"
        title="At Northsling, excellence and innovation drive everything we do"
        description="We go beyond maintaining operations—we empower businesses with data, insights, and best practices to stay ahead in an ever-evolving digital landscape.."
        stats={statsList}
        awards={awardsList}
        primaryColor="text-blue-600"
      />
      <ContactForm />
    </div>
  );
}

export default GenAI;

import React from "react";
import HeroSection from "../Ui.jsx/HeroSectionoUi";
import UiImpactSection from "../Ui.jsx/UiImpactSection";
import ModernUIDeliver from "../Ui.jsx/ModernUIDeliver";
import {
  Brain,
  Globe,
  Target,
  Zap,
  Shield,
  ShieldCheck,
  Layers,
  FileCheck,
  Code2,
  Rocket,
  Server,
  Activity,
  Cpu,
  Box,
  Repeat,
} from "lucide-react";
import NorthslingUIDesigns from "../Ui.jsx/NorthslingUIDesigns";
import CaseStudySection from "../Ui.jsx/CaseStudySection";
import UxAuditSection from "../Ui.jsx/UxAuditSection";
import WhoWeAreSection from "../Ui.jsx/WhoWeAre";
import ContactForm from "../../pages/success/ContactForm";

function QAandQC() {
const features = [
  {
    icon: <Zap className="w-7 h-7 text-yellow-400" />, // Shift-Left Testing -> quick / lightning
    title: "Shift-Left Testing",
    desc: "QA embedded into every sprint and story",
  },
  {
    icon: <Globe className="w-7 h-7 text-yellow-400" />, // End-to-End Automation -> global / system
    title: "End-to-End Automation",
    desc: "From smoke tests to regression packs",
  },
  {
    icon: <Activity className="w-7 h-7 text-yellow-400" />, // Predictive Intelligence -> analytics / monitoring
    title: "Predictive Intelligence",
    desc: "Bottlenecks flagged before they cause damage",
  },
  {
    icon: <Server className="w-7 h-7 text-yellow-400" />, // Omnichannel QA -> servers / backend
    title: "Omnichannel QA",
    desc: "Consistency across web, mobile, API, and integrations",
  },
  {
    icon: <Shield className="w-7 h-7 text-yellow-400" />, // Compliance Readiness -> protection / compliance
    title: "Compliance Readiness",
    desc: "Built-in checks for HIPAA, PCI-DSS, GDPR",
  },
  {
    icon: <Target className="w-7 h-7 text-yellow-400" />, // Load & Performance Testing -> accuracy / performance
    title: "Load & Performance Testing",
    desc: "Simulate real-world usage with precision",
  },
  {
    icon: <Box className="w-7 h-7 text-yellow-400" />, // Security Testing -> modular / package
    title: "Security Testing (SAST/DAST)",
    desc: "Bake in protection, not just detection",
  },
  {
    icon: <FileCheck className="w-7 h-7 text-yellow-400" />, // Visibility Dashboards -> reports / audit
    title: "Visibility Dashboards",
    desc: "Real-time QA KPIs for stakeholders",
  },
];

const uiFeatures = [
  {
    icon: <Code2 className="w-6 h-6 text-orange-500" />, // Coverage -> coding / functional
    title: "Coverage",
    desc: "Functional, non-functional, security, compliance, and exploratory QA in one stack",
  },
  {
    icon: <Layers className="w-6 h-6 text-orange-500" />, // Continuity -> layered / pipeline
    title: "Continuity",
    desc: "Integrated automation across the full DevOps pipeline for 24/7 test cycles",
  },
  {
    icon: <Shield className="w-6 h-6 text-orange-500" />, // Scalability -> protection / robustness
    title: "Scalability",
    desc: "Parallel testing across devices, OSs, APIs, and distributed environments",
  },
  {
    icon: <Brain className="w-6 h-6 text-orange-500" />, // Precision -> intelligence / AI
    title: "Precision",
    desc: "Risk-based testing prioritization and AI-augmented defect prediction",
  },
  {
    icon: <Repeat className="w-6 h-6 text-orange-500" />, // Governance -> repeatable / process
    title: "Governance",
    desc: "ISO 9001, ISO 27001, GDPR-ready quality documentation and traceability",
  },
  {
    icon: <Rocket className="w-6 h-6 text-orange-500" />, // Velocity -> speed / delivery
    title: "Velocity",
    desc: "Reusable frameworks and toolchains for faster sprints and zero test debt",
  },
];

  const stats = [
    {
      value: "85%",
      label: "reduction in app crashes and critical defects post-deployment",
    },
    {
      value: "59%",
      label: "faster release cycles with consistent user satisfaction across updates",
    },
  ];
  const awardsList = [
    "https://intglobal.com/wp-content/uploads/2025/01/Award-Image-2.png",
    "https://intglobal.com/wp-content/uploads/2025/01/Award-Image-3.png",
    "https://intglobal.com/wp-content/uploads/2025/02/500-1-1.png",
    "https://intglobal.com/wp-content/uploads/2025/02/fast50-1.png",
    "https://intglobal.com/wp-content/uploads/2025/01/Award-Image-3.png",
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
        title={<>From Bugs to Brilliance</>}
        subtitle="Your Software’s Quality Isn’t Just Technical — It’s Strategic"
        primaryBtn="Schedule a Meeting"
        secondaryBtn="Read Success Stories"
        bgImage="data:image/webp;base64,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"
        ratings={[
          { name: "Google", rating: 4.0 },
          { name: "Clutch", rating: 4.5 },
          { name: "Glassdoor", rating: 4.5 },
        ]}
      />
      <UiImpactSection
        title={
          <>
            Bugs, breakdowns, and bad user experiences cost more than fixes —
            they cost trust, adoption, and revenue
            <br />
          </>
        }
        description="At  (Northsling), we combine automation, manual rigor, and domain expertise to deliver reliable, secure, and scalable digital products — every time."
        points={[
          "End-to-end QA frameworks covering functionality, performance, and security",
          "Automated testing for faster releases without sacrificing quality",
          "Manual testing to ensure user experience and edge cases are bulletproof",
          "Continuous testing pipelines integrated into CI/CD workflows",
          "Industry-grade compliance and standards built into every release",
        ]}
        stats={[
          {
            value: "30%",
            description:
              "decrease in labor costs reported after automating QC processes using advanced QA tools  ",
            source: "Moldstud",
          },
          {
            value: "21%",
            description:
              "faster software release cycles achieved through continuous QA and automated testing processes  ",
            source: "ThinkSys",
          },
        ]}
        emphasisText="QA & QC aren’t final checks — they’re the guarantee that your product earns trust from day one."
        titleColor="text-gray-900"
        descriptionColor="text-gray-700"
        pointColor="text-gray-800"
      />
      <ModernUIDeliver
        title={
          <>
            What High -
            <span className="text-yellow-400">Performing QA Programs </span>{" "}
            Must Absolutely Get Right
          </>
        }
        description="Quality is no longer a gatekeeper at the end. It’s a growth enabler from the start."
        features={features}
      />
      <NorthslingUIDesigns
        sectionTitle={
          <>
            Why Northsling Doesn’t Just Test Products — We Engineer Confidence
            Across 6 Dimensions
            <br className="hidden md:block" />
          </>
        }
        sectionSubtitle=" Northsling's Quality Engineering Model ensures your releases don’t just go live — they go strong."
        features={uiFeatures}
      />
            <CaseStudySection
              tag="Case Study"
              title="Paytm Cuts Crashes & Speeds Releases with INT. QA Automation"
              description="Paytm scaled its release velocity and stability through INT.'s automation-first QA framework integrated with CI/CD, security, and performance testing."
              image="https://editorial01.shutterstock.com/preview-440/12214949b/493b5b1b/Shutterstock_12214949b.jpg"
              stats={stats}
              ctaText="Read full case study"
              ctaLink="#"
            />
                  <UxAuditSection
                    logoText="NS"
                    heading="Book a Free QA
Maturity Assessment"
                    subheading="Your codebase has stories to tell. We help you listen, learn, and level up."
                    points={[
                      "QA strategy and automation audit",
                      "Compliance readiness snapshot (HIPAA, PCI-DSS, etc.)",
                      "Test coverage and gap report",
                      "Optimization roadmap with tool and cost recommendations",
                    ]}
                    buttonText="Schedule Your Free Assessment"
                    buttonAction={() => console.log("Button clicked!")}
                  />
                     <WhoWeAreSection
                          tag="WHO WE ARE"
                          title="At Northsling, excellence and innovation drive everything we do."
                          description="We go beyond maintaining operations—we empower businesses with data, insights, and best practices to stay ahead in an ever-evolving digital landscape."
                          stats={statsList}
                          awards={awardsList}
                          primaryColor="text-blue-600"
                        />
                        <ContactForm />
    </div>
  );
}

export default QAandQC;

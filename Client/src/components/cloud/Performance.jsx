import React from "react";
import UiImpactSection from "../Ui.jsx/UiImpactSection";
import ModernUIDeliver from "../Ui.jsx/ModernUIDeliver";
import NorthslingUIDesigns from "../Ui.jsx/NorthslingUIDesigns";
import CaseStudySection from "../Ui.jsx/CaseStudySection";
import UxAuditSection from "../Ui.jsx/UxAuditSection";
import ContactForm from "../../pages/success/ContactForm";
import HeroSection from "../Ui.jsx/HeroSectionoUi";
import WhoWeAre from "../Ui.jsx/WhoWeAre";
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

import WhoWeAreSection from "../Ui.jsx/WhoWeAre";
function Performance() {
  const features = [
    {
      icon: <Rocket className="w-7 h-7 text-yellow-400" />,
      altIcon: <Zap className="w-7 h-7 text-yellow-400" />,
      title: "FinOps-Led Governance",
      desc: "Slash wastage, align spend with ROI",
    },
    {
      icon: <Zap className="w-7 h-7 text-yellow-400" />,
      altIcon: <Rocket className="w-7 h-7 text-yellow-400" />,
      title: "DevOps Pipeline Optimization",
      desc: "Eliminate bottlenecks, boost release velocity",
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-yellow-400" />,
      altIcon: <Shield className="w-7 h-7 text-yellow-400" />,
      title: "Full-Stack Observability",
      desc: "Detect and resolve issues before they escalate",
    },
    {
      icon: <Cloud className="w-7 h-7 text-yellow-400" />,
      altIcon: <Layers className="w-7 h-7 text-yellow-400" />,
      title: "Auto-Scaling & Resilience",
      desc: "Handle surges without over-provisioning",
    },
    {
      icon: <Code2 className="w-7 h-7 text-yellow-400" />,
      altIcon: <Edit3 className="w-7 h-7 text-yellow-400" />,
      title: "SRE Integration",
      desc: "Reliability built-in from day one",
    },
    {
      icon: <Shield className="w-7 h-7 text-yellow-400" />,
      altIcon: <ShieldCheck className="w-7 h-7 text-yellow-400" />,
      title: "Security & Compliance Alignment",
      desc: "Secure by design, compliant by default",
    },
    {
      icon: <Layers className="w-7 h-7 text-yellow-400" />,
      altIcon: <Cloud className="w-7 h-7 text-yellow-400" />,
      title: "Workload Right-Sizing",
      desc: "Continuously tune resource allocation based on real usage patterns",
    },
    {
      icon: <FileCheck className="w-7 h-7 text-yellow-400" />,
      altIcon: <Code2 className="w-7 h-7 text-yellow-400" />,
      title: "Proactive Anomaly Detection",
      desc: "Spot performance drifts and cost spikes before they hurt ops",
    },
  ];

  const uiFeatures = [
    {
      icon: <Target className="w-6 h-6 text-orange-500" />,
      altIcon: <Layers className="w-6 h-6 text-orange-500" />,
      title: "Misuse Mapping",
      desc: "Identifies idle resources, rogue environments, and misrouted traffic inflating costs.",
    },
    {
      icon: <Zap className="w-6 h-6 text-orange-500" />,
      altIcon: <Rocket className="w-6 h-6 text-orange-500" />,
      title: "Pipeline Bottleneck Scans",
      desc: "Detects DevOps delays from flaky tests, slow approvals, and build clogs.",
    },
    {
      icon: <Rocket className="w-6 h-6 text-orange-500" />,
      altIcon: <Zap className="w-6 h-6 text-orange-500" />,
      title: "Load Behavior Simulation",
      desc: "Stress-tests autoscaling and circuit breakers to reveal failure points early.",
    },
    {
      icon: <Globe className="w-6 h-6 text-orange-500" />,
      altIcon: <Target className="w-6 h-6 text-orange-500" />,
      title: "SRE DNA Injection",
      desc: "Implements SLIs, chaos testing, and alert hygiene with hands-on playbooks.",
    },
    {
      icon: <LayoutGrid className="w-6 h-6 text-orange-500" />,
      altIcon: <Brain className="w-6 h-6 text-orange-500" />,
      title: "Velocity Decay Monitoring",
      desc: "Tracks regressions and tool sprawl to prevent performance drift over time.",
    },
  ];
  const stats = [
    {
      value: "3x",
      label: "increase in API scalability with no latency issues",
    },
    {
      value: "43%",
      label: "improvement in incident response time",
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
    <div className="">
      <HeroSection
        title={
          <>
            Your Cloud Spends Millions. <br />
            Shouldn’t It Perform Like One?
          </>
        }
        subtitle="Northsling turns cloud performance into competitive advantage — not operational drag."
        primaryBtn="Schedule a Meeting"
        secondaryBtn="Read Success Stories"
        bgImage="https://static.vecteezy.com/system/resources/previews/013/032/921/non_2x/abstract-wave-background-blue-gradient-waves-background-free-vector.jpg"
        ratings={[
          { name: "Google", rating: 4.0 },
          { name: "Clutch", rating: 4.5 },
          { name: "Glassdoor", rating: 4.5 },
        ]}
      />

      <UiImpactSection
        title={
          <>
            An Unoptimized Cloud Drains Money, Slows Teams, And Frustrates
            Customers
            <br />
          </>
        }
        description="Performance Optimization is about squeezing the most out of your infrastructure — speed, efficiency, and resilience without overspending. At Northsling, we fine-tune workloads, streamline architectures, and eliminate bottlenecks so your cloud runs at peak performance every day."
        points={[
          "   Workload right-sizing to cut waste and reduce costs",
          "Application performance tuning for faster response times and smoother experiences",
          "Cloud architecture optimization to improve scalability and reliability",
          "Continuous monitoring with real-time alerts and proactive issue resolution",
          "Cost governance frameworks that keep spending efficient and predictable",
        ]}
        stats={[
          {
            value: "30%",
            description:
              "reduction in infrastructure costs reported by enterprises leveraging advanced cloud performance optimization tools  ",
            source: "Cyber Defense Magazine",
          },
          {
            value: "31%",
            description:
              "improvement in business forecasting accuracy enabled by cloud analytics and performance optimization automation  ",
            source: "SQ Magazine",
          },
        ]}
        emphasisText="Performance Optimization isn’t maintenance — it’s the difference between a cloud that costs you and a cloud that grows with you."
        titleColor="text-gray-900"
        descriptionColor="text-gray-700"
        pointColor="text-gray-800"
      />

      <ModernUIDeliver
        title={
          <>
            What Smart
            <span className="text-yellow-400">Cloud Optimization</span> Must
            Absolutely Deliver
          </>
        }
        description="If it doesn’t solve these — it’s just another expense:"
        features={features}
      />

      <NorthslingUIDesigns
        sectionTitle={
          <>
            Northling Cloud Performance Disruption Model{" "}
            <br className="hidden md:block" />
          </>
        }
        sectionSubtitle="Rewiring optimization around five friction-first disruptors that silently bleed performance:"
        features={uiFeatures}
      />
      <CaseStudySection
        tag="Case Study"
        title="EZTaxReturn Cuts Costs 70–80% & Achieves 3x Faster Deployments with Northsling"
        description="Northsling modernized EZTaxReturn’s tax platform to handle peak season traffic with speed, cost-efficiency, and compliance.
"
        image="https://intglobal.com/wp-content/uploads/2025/05/Performance-Optimization.png"
        stats={stats}
        ctaText="Read full case study"
        ctaLink="#"
      />
      <UxAuditSection
        logoText="NS"
        heading="Get a Free Website
Performance Audit"
        subheading="Is your website silently hurting your brand and pipeline?"
        points={[
          "Speed, UX, and Core Web Vitals audit",
          "Personalization & accessibility readiness report",
          "Martech and CRM integration landscape map",
          "Compliance & security gap analysis",
          "Tailored optimization roadmap",
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

export default Performance;

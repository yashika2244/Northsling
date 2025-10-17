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
Cloud as CloudIcon,
  ShieldCheck,
  Brain,
  LayoutGrid,
  Rocket,
} from "lucide-react";

import WhoWeAreSection from "../Ui.jsx/WhoWeAre";
function Cloud() {
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
      icon: <CloudIcon  className="w-7 h-7 text-yellow-400" />,
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
      label:
        "increase in API scalability with no latency issues",
    },
    {
      value: "43%",
      label: "improvement in incident response time",
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
    <div className="">
      <HeroSection
        title={
          <>
 The Cloud Isn’t Just an Option Anymore.   <br />
It’s the Growth Platform.
       
        
          </>
        }
        subtitle="Stop Lifting-and-Shifting. Start Future-Proofing."
        primaryBtn="Schedule a Meeting"
        secondaryBtn="Read Success Stories"
        bgImage="https://img.freepik.com/premium-photo/photo-realistic-as-cloud-computing-service-models-with-saas-paas-iaas-icons-concept-as-vector-ic_980716-405211.jpg?w=2000"
        ratings={[
          { name: "Google", rating: 4.0 },
          { name: "Clutch", rating: 4.5 },
          { name: "Glassdoor", rating: 4.5 },
        ]}
      />

      <UiImpactSection
        title={
          <>
       Your Journey to the Cloud — Without the Risks
            <br />
          </>
        }
        description="Moving to the cloud isn’t just a lift-and-shift — it’s a strategic move that defines how fast and secure your business can grow.  At Northsling,we guide organizations through every stage of cloud adoption, from assessment and strategy to seamless migration."
        points={[
"Cloud readiness assessments to align strategy with business goals",
'Tailored migration roadmaps that minimize downtime and disruption',
'Multi-cloud and hybrid strategies designed for flexibility and scale',
'Secure migration frameworks to safeguard data and compliance',
'Post-migration optimization for cost, performance, and reliability',
        ]}
        stats={[
          {
            value: "63%",
            description:
              "of cloud-driven companies report higher revenue growth than industry peers, linking cloud adoption to business acceleration ",
            source: "SQ Magazine",
          },
          {
            value: "74%",
            description:
              "of CFOs confirm cloud investments deliver ROI within 12–18 months ",
            source: "SQ Magazine",
          },
        ]}
        emphasisText="Cloud Consulting & Migration isn’t just about moving workloads — it’s about building a foundation for growth, agility, and innovation."
        titleColor="text-gray-900"
        descriptionColor="text-gray-700"
        pointColor="text-gray-800"
      />

      <ModernUIDeliver
        title={
          <>
            What Smart 
            <span className="text-yellow-400">Cloud Optimization</span> Must Absolutely Deliver
          </>
        }
        description="If it doesn’t solve these — it’s just another expense:"
        features={features}
      />

      <NorthslingUIDesigns
        sectionTitle={
          <>
         Northling Cloud Performance Disruption Model <br className="hidden md:block" />
          </>
        }
        sectionSubtitle="Rewiring optimization around five friction-first disruptors that silently bleed performance:"
        features={uiFeatures}
      />
      <CaseStudySection
        tag="Case Study"
        title="EZTaxReturn Cuts Costs 70–80% & Achieves 3x Faster Deployments with INT."
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

export default Cloud;

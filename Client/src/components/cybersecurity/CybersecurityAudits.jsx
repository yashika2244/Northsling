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
  Target,
  Shield,
  Rocket,
  Globe,
  LayoutGrid,
  LifeBuoy,
    AlertTriangle,
  Zap,
  ShieldCheck,
  FileText,
  BarChart2,
  DollarSign,
  Layers,
  Users,
} from "lucide-react";
import WhoWeAreSection from "../Ui.jsx/WhoWeAre";
function CybersecurityAudits() {
 const features = [
  {
    icon: <AlertTriangle className="w-7 h-7 text-yellow-400" />,
    title: "Risk Discovery",
    desc: "Launch faster than the competition",
  },
  {
    icon: <Zap className="w-7 h-7 text-yellow-400" />,
    title: "Impact-Based Prioritization",
    desc: "Rank vulnerabilities by potential damage to revenue and continuity",
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-yellow-400" />,
    title: "Actionable Remediation",
    desc: "Deliver focused plans that drive action—not overwhelm teams",
  },
  {
    icon: <FileText className="w-7 h-7 text-yellow-400" />,
    title: "Regulatory Alignment",
    desc: "Map controls to ISO, NIST, HIPAA, GDPR, and more",
  },
  {
    icon: <BarChart2 className="w-7 h-7 text-yellow-400" />,
    title: "Executive Translation",
    desc: "Convert technical risks into boardroom-ready business language",
  },
  {
    icon: <DollarSign className="w-7 h-7 text-yellow-400" />,
    title: "Risk Quantification",
    desc: "Express cyber threats in financial terms to justify budgets",
  },
  {
    icon: <Layers className="w-7 h-7 text-yellow-400" />,
    title: "Ongoing Advisory",
    desc: "Provide continuous guidance for lasting cyber resilience",
  },
  {
    icon: <Users className="w-7 h-7 text-yellow-400" />,
    title: "Stakeholder Enablement",
    desc: "Equip both IT and CXOs to lead security maturity",
  },
];

 const uiFeatures = [
  {
    icon: <Target className="w-6 h-6 text-orange-500" />,
    title: "Business-Aligned Risk Mapping",
    desc: "Every vulnerability we surface is tied to revenue, reputation, or compliance impact.",
  },
  {
    icon: <Shield className="w-6 h-6 text-orange-500" />,
    title: "360° Surface Coverage",
    desc: "People, processes, systems, vendors—nothing gets missed.",
  },
  {
    icon: <Rocket className="w-6 h-6 text-orange-500" />,
    title: "Tactical + Strategic Playbooks",
    desc: "From quick wins to board-level roadmaps, we arm you to act.",
  },
  {
    icon: <Globe className="w-6 h-6 text-orange-500" />,
    title: "Real-World Threat Modeling",
    desc: "Simulate how attackers target your exact operations.",
  },
  {
    icon: <LayoutGrid className="w-6 h-6 text-orange-500" />,
    title: "Executive Dashboards & Heatmaps",
    desc: "Turn complex risk into clear, actionable insights.",
  },
  {
    icon: <LifeBuoy className="w-6 h-6 text-orange-500" />,
    title: "Post-Audit Advisory",
    desc: "90-day support to sustain momentum and continuously improve.",
  },
];

  const stats = [
    {
      value: "8 weeks",
      label:
        "to achieve full regulatory alignment across all digital touchpoints",
    },
    {
      value: "40%",
      label: "reduction in risk exposure across 3 core business units",
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
            Your Risk Is Hiding in Plain Sight.
            <br />
            Expose What Matters.
          </>
        }
        subtitle="Cybersecurity Isn’t a Checklist Anymore. It’s Your Next Competitive Edge."
        primaryBtn="Schedule a Meeting"
        secondaryBtn="Read Success Stories"
        bgImage="https://wallpapercave.com/wp/wp2691571.jpg"
        ratings={[
          { name: "Google", rating: 4.0 },
          { name: "Clutch", rating: 4.5 },
          { name: "Glassdoor", rating: 4.5 },
        ]}
      />

      <UiImpactSection
        title={
          <>
            You Can’t Protect What You Can’t See
            <br />
          </>
        }
        description="Most breaches stem from unseen gaps, not unknown threats. At Northsling Cybersecurity Audits & Risk Assessments expose vulnerabilities early, benchmark defenses, and deliver actionable strategies to boost resilience and ensure compliance."
        points={[
          " Full-spectrum audits covering networks, applications, data, and endpoints",
          "Risk assessments aligned to business-critical processes and industry standards",
          "Regulatory compliance checks (GDPR, HIPAA, PCI-DSS, ISO 27001, etc.)",
          "Prioritized remediation roadmap to address high-risk gaps first",
          "Continuous improvement cycle to evolve with new threats and regulations",
          "Security investments often lack alignment with business-critical priorities",
        ]}
        stats={[
          {
            value: "77%",
            description:
              "achieve enhanced stakeholder confidence and trust through formal security assessments ",
            source: "SentinelOne",
          },
          {
            value: "57%",
            description:
              "cite reduced incident response times and faster recovery from breaches, protecting business continuity  ",
            source: "SentinelOne",
          },
        ]}
        emphasisText="Cybersecurity Audits & Risk Assessments aren’t paperwork — they’re the roadmap to a stronger, compliant, and more resilient business."
        titleColor="text-gray-900"
        descriptionColor="text-gray-700"
        pointColor="text-gray-800"
      />

      <ModernUIDeliver
        title={
          <>
            What Modern
            <span className="text-yellow-400"> Cybersecurity Audits</span> Must
            Absolutely Get Right
          </>
        }
        description="Today’s enterprises need more than checkbox audits — they need strategic assessments that surface real risk, align teams, and drive action."
        features={features}
      />

      <NorthslingUIDesigns
        sectionTitle={
          <>
            Why Northsling Doesn’t Just Do Cyber Audits— We Engineer Enterprise
            Resilience Across 6 Dimensions
          </>
        }
        sectionSubtitle="Modern threats demand more than technical scans. Northsling delivers audit outcomes that drive real, measurable risk reduction—enterprise-wide."
        features={uiFeatures}
      />
      <CaseStudySection
        tag="Case Study"
        title="Global Pharma Achieves Audit-Ready Posture in 8 Weeks with Northsling Cybersecurity Framework"
        description="A Southeast Asia-based digital lender partnered with Northsling to conduct a multi-layer audit and gain compliance across AWS, mobile, and fintech APIs.

"
        image="https://intglobal.com/wp-content/uploads/2025/05/Cybersecurity-Audits-Risk-Assessments.png"
        stats={stats}
        ctaText="Read full case study"
        ctaLink="#"
      />
      <UxAuditSection
        logoText="NS"
        heading="Get a Free Cybersecurity
Risk Assessment"
        points={[
          "      Executive summary exposure report",
          "Business impact scorecard",
          "Top 5 strategic action priorities",
          "30-minute expert consult",
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

export default CybersecurityAudits;

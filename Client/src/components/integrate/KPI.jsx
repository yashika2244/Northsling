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
  Search,
  Target,
  Zap,
  FileText,
  BarChart2,
  Layers,
  Users,
  Eye,
  Grid,
  BookOpen,
  BarChart3,
  AlertTriangle,
  ShieldCheck,
  Shield,
  RefreshCcw,
} from "lucide-react";

import WhoWeAreSection from "../Ui.jsx/WhoWeAre";
import LeadershipTeam from "../../pages/company/LeadershipTeam";
import TestimonialSlider from "./TestimonialSlider";
function KPI() {
  const features = [
    {
      icon: <Search className="w-7 h-7 text-yellow-400" />,
      title: "Risk Discovery",
      desc: "Identify threats across email traffic, attachments, cloud collaboration apps, and user behavior",
    },
    {
      icon: <AlertTriangle className="w-7 h-7 text-yellow-400" />,
      title: "Impact-Based Prioritization",
      desc: "Rank vulnerabilities by potential to cause data leaks, financial fraud, or regulatory violations",
    },
    {
      icon: <Zap className="w-7 h-7 text-yellow-400" />,
      title: "Actionable Remediation",
      desc: "Deliver focused remediation plans—from phishing quarantine to auto-removal from inboxes",
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-yellow-400" />,
      title: "Regulatory Alignment",
      desc: "Map email handling and logging to ISO 27001, DPDP, RBI, HIPAA, and more",
    },
    {
      icon: <FileText className="w-7 h-7 text-yellow-400" />,
      title: "Executive Translation",
      desc: "Convert complex email threats into boardroom-ready business risks",
    },
    {
      icon: <BarChart2 className="w-7 h-7 text-yellow-400" />,
      title: "Risk Quantification",
      desc: "Express potential email breaches in financial terms to drive investment",
    },
    {
      icon: <Layers className="w-7 h-7 text-yellow-400" />,
      title: "Ongoing Advisory",
      desc: "Provide continuous guidance to maintain secure and compliant email environments",
    },
    {
      icon: <Users className="w-7 h-7 text-yellow-400" />,
      title: "Stakeholder Enablement",
      desc: "Equip IT, compliance, and CXOs to lead email threat reduction initiatives",
    },
  ];

  const uiFeatures = [
    {
      icon: <Eye className="w-6 h-6 text-orange-500" />,
      title: "Unified KPI Visibility",
      desc: "Break down silos with centralized dashboards for real-time monitoring of your marketing performance. Stay informed with data that matters most, leading to faster decision-making and actionable insights.",
    },
    {
      icon: <Grid className="w-6 h-6 text-orange-500" />,
      title: "Digital Asset Optimization",
      desc: "Maximize the potential of your digital assets, from websites to content and creatives. We optimize for SEO, user experience, and engagement, driving increased traffic and higher rankings on search engines.",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-orange-500" />,
      title: "Full-Funnel Growth",
      desc: "From awareness to retention, our strategies cover every stage of the customer journey. With a focus on multi-channel engagement, we ensure higher lead-to-conversion rates and enhanced lifetime customer value.",
    },
    {
      icon: <Shield className="w-6 h-6 text-orange-500" />,
      title: "Media and Communication Excellence",
      desc: "Craft impactful messaging and strategic media plans to amplify your brand’s presence. With expertise in paid, owned, and earned media, our campaigns deliver higher reach and cost-efficient outcomes.",
    },
  ];
  const stats = [
    {
      value: "305%",
      label: "growth in keyword rankings",
    },
    {
      value: "3,000%",
      label: "increase in callbacks query submissions",
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
        title={<>Integrated Digital Marketing</>}
        subtitle="Connecting You to Your Audience Like Never Before"
        primaryBtn="Read success stories"
        secondaryBtn="Talk to us"
        bgImage="https://alston-systems.com/wp-content/uploads/2017/10/post-img4-1.jpg"
      />

      <UiImpactSection
        title={<>Marketing That Works as One</>}
        description="Digital marketing is no longer about isolated campaigns — it’s about orchestrated, always-on growth.At Northsling we unify content, performance, and automation into integrated strategies that reach the right audience, at the right time, with the right message."
        points={[
          "    End-to-end digital campaigns across search, social, and display",
          "Content strategies that build trust and authority with your audience",
          "Data-driven performance marketing to maximize ROI and reduce waste",
          "Marketing automation for personalized, scalable engagement",
          "Analytics & reporting that tie every dollar spent to business results",
        ]}
        stats={[
          {
            value: "31%",
            description:
              " increase in campaign efficiency reported by marketers using integrated marketing strategies   ",
            source: "Optimizely",
          },
          {
            value: "42%",
            description:
              "increase in conversion rates reported by companies combining PPC and SEO in integrated campaigns",
            source: "LinkedIn",
          },
        ]}
        emphasisText="Integrated Digital Marketing isn’t about vanity metrics — it’s about building pipelines, driving revenue, and accelerating growth."
        titleColor="text-gray-900"
        descriptionColor="text-gray-700"
        pointColor="text-gray-800"
      />

      <NorthslingUIDesigns
        sectionTitle={<>OUR SERVICES</>}
        sectionSubtitle="Tailored Services to Deliver Outstanding Value"
        features={uiFeatures}
      />
      <CaseStudySection
        tag="Case Study"
        title="How Integrated Digital Marketing Drives Growth + ROI"
        description=" Northsling's integrated digital marketing expertise help SBI General Insurance achieve  unparalleled online visibilty and user engagement. 

"
        image="https://intglobal.com/wp-content/uploads/2025/02/image-11.png"
        stats={stats}
        ctaText="Read full case study"
        ctaLink="#"
      />
      <TestimonialSlider/>

      <UxAuditSection
        logoText="NS"
        heading="Why Choose Northsling for Integrated Digital Marketing?"

        points={[
        " Holistic Approach: Aligning strategy, creativity, and technology for impactful campaigns.",
"Data-Driven Precision: Informed decision-making with actionable insights.",
'Omnichannel Expertise: Delivering seamless experiences across web, social, and mobile platforms.',
'Proven Results: Demonstrated ROI and measurable growth across industries.',
        ]}
        buttonText="Connect with us"
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

export default KPI;

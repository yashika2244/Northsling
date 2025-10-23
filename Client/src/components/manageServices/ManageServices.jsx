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
import TestimonialSlider from "../../components/integrate/TestimonialSlider";
function ManageServices() {
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
      title: "Flexi",
      desc: "Adapt to changing business needs with our flexible managed services. Our Flexi model provides scalability and resource allocation that evolves with your organization, enabling a faster response to market changes.",
    },
    {
      icon: <Grid className="w-6 h-6 text-orange-500" />,
      title: "Dedicated",
      desc: "Benefit from a dedicated team that aligns with your business objectives and integrates seamlessly into your operations. Our Dedicated services ensure continuity and accountability, resulting in more efficient workflows.",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-orange-500" />,
      title: "Managed Dedicated",
      desc: "Enjoy the best of both worlds with Managed Dedicated services. Our expert team handles specific functions while maintaining a strong alignment with your organizational goals. Clients experience improved productivity and operational resilience",
    },
    {
      icon: <Shield className="w-6 h-6 text-orange-500" />,
      title: "Fix-bid",
      desc: "Optimize costs and enhance predictability with our Fix-bid model. This approach allows you to manage your budget effectively while receiving high-quality services tailored to your needs, leading to savings on project costs.",
    },
  ];
  const stats = [
    {
      value: "84%",
      label: "reduction in manual effort for report generation ",
    },
    {
      value: "37%",
      label: "decrease in internal operational costs",
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
        title={<>Managed Services</>}
        subtitle="Taking Care of the Complexity So You Can Focus on Growth"
        primaryBtn="Read success stories"
        secondaryBtn="Talk to us"
        bgImage="https://alston-systems.com/wp-content/uploads/2017/10/post-img4-1.jpg"
      />

      <UiImpactSection
        title={<>Focus on Growth. We’ll Handle the Rest</>}
        description="In-house IT drains time and budgets . Northsling’s Managed Services handle your infrastructure, apps, and operations end-to-end—cutting costs, eliminating downtime, and keeping your business future-ready."
        points={[
"24/7 monitoring & support to keep systems running without disruption",
'Proactive issue resolution to prevent downtime before it happens',
'Scalable service models tailored to your business needs',
'Cost optimization by reducing overheads and IT complexity',
'Compliance-ready operations that meet global standards and regulations'
        ]}
        stats={[
          {
            value: "13%",
            description:
              " annual growth in IT managed services revenue reflects shifting business preference for expert, scalable support ",
            source: "Canalys",
          },
          {
            value: "47%",
            description:
              "of organizations report improved business outcomes from managed services operational changes ",
            source: "Scoop Market",
          },
        ]}
        emphasisText="Managed Services aren’t outsourcing — they’re your unfair advantage in running leaner, faster, and more resilient operations."
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
        title="Driving measurable cost savings and uptime gains with Managed Services"
        description=" Northsling's streamlined  MIS reporting for Bajaj Allianz Life Insurance through Managed Services, reducing manual intervention and enhancing decision-making efficiency.

"
        image="https://intglobal.com/wp-content/uploads/2025/02/image-19.png"
        stats={stats}
        ctaText="Read full case study"
        ctaLink="#"
      />
      <TestimonialSlider/>

      <UxAuditSection
        logoText="NS"
        heading="Why Choose Northsling for for Managed Services/GCC?"

        points={[
    "   Tailored Solutions: Custom-managed services to fit your unique business needs.",
"Global Expertise:: Access to a skilled workforce with experience across various industries.",
"Operational Efficiency: Streamlined processes that enhance service delivery and performance.",
"Proven Success: A track record of delivering measurable results and client satisfaction."
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

export default ManageServices;

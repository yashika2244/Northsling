import React from "react";
import HeroSection from "../Ui.jsx/HeroSectionoUi";
import UiImpactSection from "../Ui.jsx/UiImpactSection";
import ModernUIDeliver from "../Ui.jsx/ModernUIDeliver";
import NorthslingUIDesigns from "../Ui.jsx/NorthslingUIDesigns";
import CaseStudySection from "../Ui.jsx/CaseStudySection";
import ContactForm from "../../pages/success/ContactForm";
import WhoWeAreSection from "../Ui.jsx/WhoWeAre";
import UxAuditSection from "../Ui.jsx/UxAuditSection";
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

function AiChatbox() {
  const features = [
    {
      icon: <Layers className="w-8 h-8 text-yellow-400" />,
      title: "Human-Like Understanding",
      desc: "Context-aware, sentiment-sensitive natural language processing",
    },
    {
      icon: <Globe className="w-8 h-8 text-yellow-400" />,
      title: "End-to-End Workflow Automation",
      desc: "Execute real business processes across CRMs, ERPs, and helpdesks",
    },
    {
      icon: <Target className="w-8 h-8 text-yellow-400" />,
      title: "Omnichannel Coverage",
      desc: "WhatsApp, web, apps, voice, email, social—seamless across them all",
    },
    {
      icon: <Shield className="w-8 h-8 text-yellow-400" />,
      title: "Secure & Compliant Infrastructure",
      desc: "GDPR, ISO27001, SOC2 built in",
    },
    {
      icon: <Brain className="w-8 h-8 text-yellow-400" />,
      title: "Intelligent Personalization",
      desc: "Use real-time customer data to tailor every response",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-yellow-400" />,
      title: "Live Agent Escalation",
      desc: "Smart handoff with full history and no repetition",
    },
    {
      icon: <Edit3 className="w-8 h-8 text-yellow-400" />,
      title: "Self-Learning Loops",
      desc: "NLP logs, feedback capture, and weekly optimization",
    },
    {
      icon: <Cloud className="w-8 h-8 text-yellow-400" />,
      title: "Built-In Analytics",
      desc: "Dashboards for CSAT, resolution time, deflection rate, and drop-off",
    },
  ];

  const uiFeatures = [
    {
      icon: <Layers className="w-6 h-6 text-orange-500" />,
      title: "Strategy & Use Case Discovery",
      desc: "We identify high-impact CX and EX journeys primed for automation.",
    },
    {
      icon: <Zap className="w-6 h-6 text-orange-500" />,
      title: "GenAI + Domain Tuning",
      desc: "Fine-tuned GPT-class models built on your tone, brand, and workflows.",
    },
    {
      icon: <LayoutGrid className="w-6 h-6 text-orange-500" />,
      title: "Conversational UX Design",
      desc: "We build human-like flows that handle sentiment, fallbacks, and escalation logic.",
    },
    {
      icon: <Brain className="w-6 h-6 text-orange-500" />,
      title: "Integration & Intelligence",
      desc: "APIs for Salesforce, SAP, HubSpot, Zendesk, and legacy systems.",
    },
    {
      icon: <Plug className="w-6 h-6 text-orange-500" />,
      title: "Observability & Optimization",
      desc: "Prometheus, Grafana, and Power BI dashboards with retraining built-in.",
    },
    {
      icon: <Target className="w-6 h-6 text-orange-500" />,
      title: "Security & Compliance",
      desc: "Enterprise-ready with SSO, audit logs, and end-to-end encryption.",
    },
  ];
  const stats = [
    {
      value: "63%",
      label: "automation of customer service queries",
    },
    {
      value: "42%",
      label: "reduction in support costs during high-traffic events",
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
        title={<>Your Smartest Agent Is Now a Bot</>}
        subtitle="AI Chatbots That Automate, Assist, and Accelerate Every Interaction"
        primaryBtn="Schedule a Meeting"
        secondaryBtn="Read Success Stories"
        bgImage="https://frostbrowntodd.com/app/uploads/2024/04/digital-chatbot-ai-robot-application-conversation-assistant-ai-artificial-intelligence-concept-woman-using-mobile-smart-phone-chatting-with-digital-chatbot-customer-service-stockpack-gettyimages-scaled.jpg"
        ratings={[
          { name: "Google", rating: 4.0 },
          { name: "Clutch", rating: 4.5 },
          { name: "Glassdoor", rating: 4.5 },
        ]}
      />
      <UiImpactSection
        title={
          <>
            Conversations That Convert, 24/7
            <br />
          </>
        }
        description="AI chatbots go beyond Q&A — they help you serve more customers with less effort. Northsling  builds chatbots that automate, personalize, and convert, seamlessly integrated into your business."
        points={[
          " Always-on assistance to resolve queries instantly and reduce support load",
          "Conversational AI that feels human, learns context, and adapts in real time",
          "Seamless integrations with CRM, ERP, and helpdesk platforms",
          "Multilingual capability to engage global audiences at scale",
          "Data-driven insights from every interaction to refine service and sales strategies",
        ]}
        stats={[
          {
            value: "24.6%",
            description:
              "reduction in average handling time is seen by companies after deploying AI chatbots, boosting operational efficiency ",
            source: "Forrester Research",
          },
          {
            value: "27%",
            description:
              "of consumers worldwide have used a chatbot for customer support in the past year, resulting in faster responses and higher satisfaction ",
            source: " Desk365",
          },
        ]}
        emphasisText="AI chatbots aren’t just service tools — they’re growth engines that engage, convert, and retain customers at scale."
        titleColor="text-gray-900"
        descriptionColor="text-gray-700"
        pointColor="text-gray-800"
      />
      <ModernUIDeliver
        title={
          <>
            What Modern
            <span className="text-yellow-400">AI Chatbots</span> Must Absolutely
            Get Right
          </>
        }
        description="If your chatbot isn’t helping you scale CX and sales, it’s obsolete."
        features={features}
      />
      <NorthslingUIDesigns
        sectionTitle={
          <>
            Why Northling Doesn’t Just Build Bots — We Architect Conversational
            Engines <br className="hidden md:block" />
            <span className="text-orange-500">Real-Time Enterprise Ops</span>
          </>
        }
        sectionSubtitle="We combine LLM power with enterprise-grade engineering to deliver AI chatbots that talk, transact, and transform."
        features={uiFeatures}
      />
      <CaseStudySection
        tag="Case Study"
        title="Retailer Automates 63% Queries & Cuts Ticket Costs 42% with Northling Conversational AI"
        description="Northling implemented a multilingual, e-commerce AI chatbot for a national retailer to automate Tier-1 support across web, app, and WhatsApp."
        image="https://www.bing.com/th/id/OIP.V_4f3Viha-QLGUUhP_9AaQHaE3?w=273&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
        stats={stats}
        ctaText="Read full case study"
        ctaLink="#"
      />
      <UxAuditSection
        logoText="NS"
        heading="Get a Free AI Chatbot
Readiness Audit"
        points={[
          "A conversational journey audit",
          "Chatbot deployment scorecard",
          "3 quick-win recommendations",
          "Strategy consult with Northsling’s AI leads",
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

export default AiChatbox;

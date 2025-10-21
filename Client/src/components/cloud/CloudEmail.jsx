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
  Activity,
  Users,
  ShieldCheck,
  ShieldOff,
  Calendar,
  BarChart2,
  Target,
  Zap,
  Rocket,
  Globe,
  LayoutGrid,
  Code2,
  Brain,
} from "lucide-react";
import WhoWeAreSection from "../Ui.jsx/WhoWeAre";
import CloudPartners from "./CloudPartners";
import PartnersSection from "./CloudPartners";
function CloudEmail() {
  const cloudPartners = [
    {
      name: "Google Workspace",
      logo: "https://logos-world.net/wp-content/uploads/2023/12/Google-Workspace-Symbol.png",
      benefit:
        "Upgrade to Google’s intelligent communication and collaboration suite — deployed securely and configured for scale.",
      capabilities: [
        "End-to-end migration from Gmail, Outlook, cPanel, and more",
        "End-to-end migration from Gmail, Outlook, cPanel, and more",
        "Admin Console setup and user role provisioning",
        "SPF/DKIM/DMARC configuration for email authenticity",
        "Google Vault for data retention and eDiscovery",
        "Integration with Calendar, Drive, Meet, and 3rd-party tools",
      ],
    },
    {
      name: "Microsoft 365 Email",
      logo: "https://tse2.mm.bing.net/th/id/OIP.61tx9KjUmS6N1qdfAa8GCwHaHG?rs=1&pid=ImgDetMain&o=7&rm=3",
      benefit:
        "Empower your teams with secure, enterprise-grade email through Exchange Online — with zero disruption.",
      capabilities: [
   "   IMAP/POP/PST mailbox migration to Exchange Online",
'Hybrid deployment with on-prem Exchange support',
'Secure routing, DLP enforcement, and mail flow rules',
'Outlook setup, mobile sync, and policy-based archiving',
'Compliance configuration and admin console optimization'
      ],
    },
    {
      name: "Zoho Mail & Workplace",
      logo: "https://logos-world.net/wp-content/uploads/2022/05/Zoho-Mail-Symbol.png",
      benefit:
        "Clean, ad-free, cost-effective — ideal for SMBs and mid-market firms seeking simplicity without compromise.",
      capabilities: [
 " Migration from G Suite, M365, cPanel, or legacy IMAP",
'SPF/DKIM, domain configuration, and user provisioning',
'Admin panel setup with audit logging and role control',
'Integration with Zoho CRM, Docs, Cliq, and other apps',
'Backup, policy creation, and two-factor authentication',
      ],
    },
  ];
const features = [
  {
    icon: <Rocket className="w-7 h-7 text-yellow-400" />,
    title: "Zero-Downtime Migration",
    desc: "Migrate inboxes, contacts, and calendars without disruption or data loss.",
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-yellow-400" />,
    title: "SPF, DKIM, and DMARC Compliance",
    desc: "Improve deliverability and block spoofing attempts with the right DNS records.",
  },
  {
    icon: <Users className="w-7 h-7 text-yellow-400" />,
    title: "Multi-Device Sync & Mobile Access",
    desc: "Seamless configuration across desktops, phones, and tablets — enterprise-wide.",
  },
  {
    icon: <ShieldOff className="w-7 h-7 text-yellow-400" />,
    title: "Policy-Based Security",
    desc: "Enforce DLP, retention, and archiving rules to protect IP and meet compliance.",
  },
  {
    icon: <Calendar className="w-7 h-7 text-yellow-400" />,
    title: "Integrated Productivity Tools",
    desc: "Connect email to docs, calendars, video calls, and task managers for smoother workflows.",
  },
  {
    icon: <BarChart2 className="w-7 h-7 text-yellow-400" />,
    title: "Admin Dashboards & Audit Logs",
    desc: "Full control and visibility into user activity, access, and configurations.",
  },
];

const uiFeatures = [
  {
    icon: <Target className="w-6 h-6 text-orange-500" />,
    title: "Expertise Across Platforms",
    desc: "We migrate across Google, Microsoft, Zoho, and more — with zero compatibility surprises.",
  },
  {
    icon: <Zap className="w-6 h-6 text-orange-500" />,
    title: "Certified Tools & Teams",
    desc: "Our vetted tools and trained experts ensure every mailbox lands securely and intact",
  },
  {
    icon: <Activity className="w-6 h-6 text-orange-500" />,
    title: "Smart Batch Planning",
    desc: "We organize your migration in waves — minimizing downtime and user disruption.",
  },
  {
    icon: <Globe className="w-6 h-6 text-orange-500" />,
    title: "Secure from the Start",
    desc: "Every setup includes SPF, DKIM, and MFA to protect your domain and users.",
  },
  {
    icon: <LayoutGrid className="w-6 h-6 text-orange-500" />,
    title: "Training That Sticks",
    desc: "We equip both admins and users to hit the ground running post-migration.",
  },
];


  const stats = [
    {
      value: "99%",
      label: "data integrity across mail, calendar, and contacts",
    },
    {
      value: "83%",
      label: "faster IT helpdesk resolution for email-related issues",
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
            Email Isn’t Just a Utility Anymore.
            <br />
            It’s a Productivity Multiplier
          </>
        }
        subtitle="Stop Managing Servers — Start Powering Smarter Communication."
        primaryBtn="Schedule a Meeting"
        secondaryBtn="Read Success Stories"
        bgImage="https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?cs=srgb&dl=pexels-hasan-albari-1229861.jpg&fm=jpg"
        ratings={[
          { name: "Google", rating: 4.0 },
          { name: "Clutch", rating: 4.5 },
          { name: "Glassdoor", rating: 4.5 },
        ]}
      />

      <UiImpactSection
        title={
          <>
            Email That Works as Hard as You Do
            <br />
          </>
        }
        description="Email powers collaboration. Outdated systems slow teams and invite risk. At Northsling,delivers secure, scalable cloud email to keep you connected, productive, and protected anywhere."
        points={[
          "Enterprise-grade security with encryption, threat protection, and compliance controls",
          "Seamless migration from legacy email systems with zero data loss",
          "Anywhere access across devices with built-in redundancy and uptime SLAs",
          "Collaboration-ready platforms integrated with calendars, tasks, and productivity suites",
          "Scalable infrastructure to support growing teams without added complexity",
        ]}
        stats={[
          {
            value: "94%",
            description:
              "of malware incidents come through emails, highlighting the need for secure cloud email  ",
            source: "LLCBuddy",
          },
          {
            value: "12.7%",
            description:
              " billion projected cloud email market size by 2033, indicating strong adoption   ",
            source: "MarkWide Research",
          },
        ]}
        emphasisText="Cloud Email Solutions aren’t just about sending mail — they’re about enabling secure, seamless collaboration at scale."
        titleColor="text-gray-900"
        descriptionColor="text-gray-700"
        pointColor="text-gray-800"
      />

      <ModernUIDeliver
        title={
          <>
            What Cloud
            <span className="text-yellow-400"> Email Solutions</span>Must
            Deliver Today
          </>
        }
        description="Modern email isn’t just about sending messages — it’s about security, mobility, integration, and control."
        features={features}
      />

      <NorthslingUIDesigns
        sectionTitle={
          <>
            Why Northsling for Cloud Email Migration
            <br className="hidden md:block" />
          </>
        }
        sectionSubtitle="Whether you’re moving from on-prem Exchange, cPanel, or between cloud platforms — Northsling makes the switch seamless, secure, and scalable."
        features={uiFeatures}
      />
      <PartnersSection
        title="Cloud Migration, the Northsling Way Through Our  Partners"
        subtitle="Partnering with industry leaders to deliver seamless, secure, and cost-effective migration experiences across platforms."
        partners={cloudPartners}
        themeColor="orange"
      />
      <CaseStudySection
        tag="Case Study"
        title="99% Data Integrity & 83% Faster IT Resolution: Northsling Microsoft 365 Migration for Logistics Firm"
        description="For a regional logistics company Northsling migrated 1,200 mailboxes from legacy cPanel to Microsoft 365 — with enhanced policy enforcement and zero downtime.
"
        image="https://intglobal.com/wp-content/uploads/2025/07/cloud-email-migration-1536x1024.jpg"
        stats={stats}
        ctaText="Read full case study"
        ctaLink="#"
      />
      <UxAuditSection
        logoText="NS"
        heading="Get a Free Cloud Email Migration Plan"
        points={[
     '  Current email environment and risk audit',
"Platform comparison and recommendation",
'Migration timeline and batch planning',
'Post-migration support and adoption strategy',
        ]}
        buttonText="Talk to our cloud Email Migration Experts"
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

export default CloudEmail;

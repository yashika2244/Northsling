import React from "react";
import UiImpactSection from "../Ui.jsx/UiImpactSection";
import ModernUIDeliver from "../Ui.jsx/ModernUIDeliver";
import NorthslingUIDesigns from "../Ui.jsx/NorthslingUIDesigns";
import CaseStudySection from "../Ui.jsx/CaseStudySection";
import UxAuditSection from "../Ui.jsx/UxAuditSection";
import ContactForm from "../../pages/success/ContactForm";
import HeroSection from "../Ui.jsx/HeroSectionoUi";
import WhoWeAre from "../Ui.jsx/WhoWeAre";
import { Globe, Package, Activity, Cpu, MessageSquare, MapPin, Camera, BarChart } from "lucide-react";



import WhoWeAreSection from "../Ui.jsx/WhoWeAre";
import FeatureSlider from "./FeatureSlider";
function Breeze() {


const features = [
  {
    icon: <Globe className="w-7 h-7 text-yellow-400" />,
    title: "Real-Time Location & Attendance",
    desc: "Verified with geo-tags and KYC-enabled face recognition",
  },
  {
    icon: <Package className="w-7 h-7 text-yellow-400" />,
    title: "DSR Automation & Order Capture",
    desc: "Streamlined reporting and zero-touch order logs",
  },
  {
    icon: <Activity className="w-7 h-7 text-yellow-400" />,
    title: "Target vs Achievement Dashboards",
    desc: "Transparent performance at rep, area, and zone levels",
  },
  {
    icon: <Cpu className="w-7 h-7 text-yellow-400" />, // <--- here
    title: "Smart Task Allocation",
    desc: "Role-specific workflows that adapt to team hierarchies",
  },
  {
    icon: <MessageSquare className="w-7 h-7 text-yellow-400" />,
    title: "In-App Communication",
    desc: "Instant updates, product push-outs, and alerts",
  },
  {
    icon: <MapPin className="w-7 h-7 text-yellow-400" />,
    title: "Beat & Route Planning",
    desc: "Predictive and dynamic planning based on actual ground feedback",
  },
  {
    icon: <Camera className="w-7 h-7 text-yellow-400" />,
    title: "Visit Logs & Image Captures",
    desc: "Validated market feedback with timestamped evidence",
  },
  {
    icon: <BarChart className="w-7 h-7 text-yellow-400" />,
    title: "Backend Analytics Portal",
    desc: "For CXOs, RMs, and ZMs to make real-time field decisions",
  },
];


  const stats = [
    {
      value: "8",
      label: "system recovery, resuming critical payment operations swiftly",
    },
    {
      value: "40%",
      label: "projected drop in cyber premiums, driven by improved controls",
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
      logo ="https://intglobal.com/wp-content/uploads/2025/05/Breeze_logo-1.png"
        title={
          <>
       Breeze FSM — Field Sales
            <br />
     Simplified. Growth Amplified
          </>
        }
        subtitle="Your Field Force, Finally in Sync with Your Business Strategy"
        primaryBtn="Schedule a Meeting"
        secondaryBtn="Read Success Stories"
        bgImage="https://media.istockphoto.com/id/177273605/photo/business-handshake.jpg?s=612x612&w=0&k=20&c=3tGOY-NqXTTJ1HE3KF356BfhKgJ72JMq5dhuLymf7DY="
        ratings={[
          { name: "Google", rating: 4.0 },
          { name: "Clutch", rating: 4.5 },
          { name: "Glassdoor", rating: 4.5 },
        ]}
      />

      <UiImpactSection
        title={
          <>
    Field Sales Made Simple. Targets Made Achievable
            <br />
          </>
        }
        description="Managing field sales teams with spreadsheets and manual reporting slows growth, drains productivity, and leaves blind spots. At Northsling’s Breeze FSM gives leaders real-time visibility, control, and insights—empowering reps and keeping targets within reach."
        points={[
"Real-time tracking of field teams, visits, and performance metrics",
"Order & inventory management integrated into one seamless platform",
'Automated reporting that eliminates manual data entry and delays',
'Geo-tagging & route optimization to maximize coverage and efficiency',
"Actionable analytics dashboards for smarter, faster decisions",
        ]}
        stats={[
          {
            value: "40%",
            description:
              "  increase in sales enabled by field force automation boosting revenue and productivity  ",
            source: "fortunebusinessinsights",
          },
          {
            value: "65%",
            description:
              "reduction in sales management time through automation and intelligent workflows  ",
            source: "fortunebusinessinsights",
          },
        ]}
        emphasisText="Breeze FSM isn’t just a sales tool — it’s the difference between chasing targets and consistently hitting them."
        titleColor="text-gray-900"
        descriptionColor="text-gray-700"
        pointColor="text-gray-800"
      />

      <ModernUIDeliver
        title={
          <>
          Why
            <span className="text-yellow-400"> Breeze  </span> Must
       Isn’t Just an App— It’s a <span className="text-yellow-400">  Field Growth Engine</span>
          </>
        }
      


        features={features}
      />
<FeatureSlider/>
     
    
    

  
      <ContactForm />
    </div>
  );
}

export default Breeze;

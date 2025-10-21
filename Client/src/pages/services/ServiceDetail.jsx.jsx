
import { useParams } from "react-router-dom";
import { data } from "./ProductsUI";
import React, { Suspense } from "react";
import LoadingScreen from "../../components/LoadingScreen";
// Normalize function
const normalize = (str) =>
  str.toLowerCase().replace(/\s+/g, "-").replace(/\//g, "-");

export default function ServiceDetail() {
  const { serviceId } = useParams();

  // Find category containing this service
  const categoryKey = Object.keys(data).find((cat) =>
    data[cat].services.some((s) => normalize(s) === serviceId)
  );

  if (!categoryKey)
    return (
      <div className="text-center h-screen bg-black text-white flex justify-center items-center flex-col" >
        Page for "{serviceId}" coming soon!
      </div>
    );

  // Lazy-load components based on service
  if (serviceId === "ui-ux-design") {
    const ParentUi = React.lazy(() =>
      import("../../components/Ui.jsx/ParentUi")
    );
    return (
  <Suspense fallback={<LoadingScreen />}>
      <ParentUi />
    </Suspense>

    );
  }

  if (serviceId === "website-redesign") {
    const ParentWebsite = React.lazy(() =>
      import("../../components/WebsiteRedesign/ParentWebiste")
    );
    return (
  <Suspense fallback={<LoadingScreen  />}>
        <ParentWebsite />
      </Suspense>
    );
  }

  // NEW: For CMS service
  if (serviceId === "cms-solutions") {
    const ParentCms = React.lazy(() =>
      import("../../components/cms/ParentCms")
    );
    return (
  <Suspense fallback={<LoadingScreen />}>
        <ParentCms />
      </Suspense>
    );
  }
  if (serviceId === "customer-portal-development") {
    const ParentCpd = React.lazy(() =>
      import("../../components/cpd/ParentCpd")
    );
    return (
  <Suspense fallback={<LoadingScreen />}>
        <ParentCpd/>
      </Suspense>
    );
  }
  if (serviceId === "crm-integration") {
    const ParentCrm = React.lazy(() =>
      import("../../components/crm/ParentCrm")
    );
    return (
  <Suspense fallback={<LoadingScreen  />}>
        <ParentCrm/>
      </Suspense>
    );
  }
  if (serviceId === "custom-app-development") {
    const CustomAppParent = React.lazy(() =>
      import("../../components/digital/CustomAppParent")
    );
    return (
   <Suspense fallback={<LoadingScreen  />}>
        <CustomAppParent/>
      </Suspense>
    );
  }
  if (serviceId === "legacy-modernization") {
    const Legnecy = React.lazy(() =>
      import("../../components/digital/legency")
    );
    return (
  <Suspense fallback={<LoadingScreen />}>
        <Legnecy/>
      </Suspense>
    );
  }
  if (serviceId === "business-process-management") {
    const Bussiness = React.lazy(() =>
      import("../../components/digital/Bussiness")
    );
    return (
  <Suspense fallback={<LoadingScreen  />}>
        <Bussiness/>
      </Suspense>
    );
  }
  if (serviceId === "product-engineering") {
    const Product = React.lazy(() =>
      import("../../components/digital/Product")
    );
    return (
  <Suspense fallback={<LoadingScreen  />}>
        <Product/>
      </Suspense>
    );
  }
  if (serviceId === "quality-assurance-(qa)-&-quality-control-(qc)") {
    const QAandQC = React.lazy(() =>
      import("../../components/digital/QA&QC")
    );
    return (
  <Suspense fallback={<LoadingScreen  />}>
        <QAandQC/>
      </Suspense>
    );
  }
  if (serviceId === "maintenance-and-support") {
    const MaintenaceandReport = React.lazy(() =>
      import("../../components/digital/MaintenaceandReport")
    );
    return (
  <Suspense fallback={<LoadingScreen  />}>
        <MaintenaceandReport/>
      </Suspense>
    );
  }
  // AI links
  if (serviceId === "data-lake-&-business-intelligence") {
    const Datalake = React.lazy(() =>
      import("../../components/AI/DataLake")
    );
    return (
  <Suspense fallback={<LoadingScreen />}>
        <Datalake/>
      </Suspense>
    );
  }
  if (serviceId === "gen-ai-and-agentic-ai") {
    const GenAI = React.lazy(() =>
      import("../../components/AI/GenAI")
    );
    return (
  <Suspense fallback={<LoadingScreen />}>
        <GenAI/>
      </Suspense>
    );
  }
  if (serviceId === "ai-chatbots") {
    const AiChabox = React.lazy(() =>
      import("../../components/AI/AiChatbox")
    );
    return (
  <Suspense fallback={<LoadingScreen />}>
        <AiChabox/>
      </Suspense>
    );
  }
  if (serviceId === "ai-models") {
    const AIModels = React.lazy(() =>
      import("../../components/AI/AIModels")
    );
    return (
  <Suspense fallback={<LoadingScreen />}>
        <AIModels/>
      </Suspense>
    );
  }
  if (serviceId === "advanced-analytics") {
    const AdvancedAnalytics = React.lazy(() =>
      import("../../components/AI/AdvancedAnalytics")
    );
    return (
  <Suspense fallback={<LoadingScreen />}>
        <AdvancedAnalytics/>
      </Suspense>
    );
  }
  if (serviceId === "intelligent-infrastructure-management-(iim)") {
    const Intelligent = React.lazy(() =>
      import("../../components/cloud/Intelligent")
    );
    return (
  <Suspense fallback={<LoadingScreen />}>
        <Intelligent/>
      </Suspense>
    );
  }
  if (serviceId === "performance-optimization") {
    const Performance = React.lazy(() =>
      import("../../components/cloud/Performance")
    );
    return (
  <Suspense fallback={<LoadingScreen />}>
        <Performance/>
      </Suspense>
    );
  }
  if (serviceId === "devops-excellence") {
    const Devops = React.lazy(() =>
      import("../../components/cloud/Devops")
    );
    return (
  <Suspense fallback={<LoadingScreen />}>
        <Devops/>
      </Suspense>
    );
  }
  if (serviceId === "cloud-consulting-&-migration") {
    const Cloud = React.lazy(() =>
      import("../../components/cloud/Cloud")
    );
    return (
  <Suspense fallback={<LoadingScreen />}>
        <Cloud/>
      </Suspense>
    );
  }
  if (serviceId === "cloud-email-solution") {
    const CloudEmail = React.lazy(() =>
      import("../../components/cloud/CloudEmail")
    );
    return (
  <Suspense fallback={<LoadingScreen />}>
        <CloudEmail/>
      </Suspense>
    );
  }
  // Cybersecurity links
  if (serviceId === "cybersecurity-audits-&-risk-assessments") {
    const CybersecurityAudits = React.lazy(() =>
      import("../../components/cybersecurity/CybersecurityAudits")
    );
    return (
  <Suspense fallback={<LoadingScreen />}>
        <CybersecurityAudits/>
      </Suspense>
    );
  }
  if (serviceId === "vulnerability-assessment-&-penetration-testing-(vapt)") {
    const Vulnerability = React.lazy(() =>
      import("../../components/cybersecurity/Vulnerability")
    );
    return (
  <Suspense fallback={<LoadingScreen />}>
        <Vulnerability/>
      </Suspense>
    );
  }
  if (serviceId === "governance,-risk,-and-compliance-(grc)") {
    const Governance = React.lazy(() =>
      import("../../components/cybersecurity/Governance")
    );
    return (
  <Suspense fallback={<LoadingScreen />}>
        <Governance/>
      </Suspense>
    );
  }
  if (serviceId === "cyber-insurance-&-incident-response") {
    const CyberInsurance = React.lazy(() =>
      import("../../components/cybersecurity/CyberInsurance")
    );
    return (
  <Suspense fallback={<LoadingScreen />}>
        <CyberInsurance/>
      </Suspense>
    );
  }
  if (serviceId === "email-threat-protection-&-compliance") {
    const Email = React.lazy(() =>
      import("../../components/cybersecurity/Email")
    );
    return (
  <Suspense fallback={<LoadingScreen />}>
        <Email/>
      </Suspense>
    );
  }

  // Placeholder for other services
  return (
    <div className="p-6 text-center h-screen bg-black text-white flex justify-center items-center flex-col" >
      <h1 className="text-3xl font-bold mb-4">{categoryKey}</h1>
      <p className="text-lg">
        "{serviceId.replace(/-/g, " ")}" page coming soon!
      </p>
    </div>
  );
}

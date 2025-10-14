
import { useParams } from "react-router-dom";
import { data } from "./ProductsUI";
import React, { Suspense } from "react";

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
      <div className="p-6 text-center">
        Page for "{serviceId}" coming soon!
      </div>
    );

  // Lazy-load components based on service
  if (serviceId === "ui-ux-design") {
    const ParentUi = React.lazy(() =>
      import("../../components/Ui.jsx/ParentUi")
    );
    return (
      <Suspense fallback={<div className="p-6">Loading UI/UX Design...</div>}>
        <ParentUi />
      </Suspense>
    );
  }

  if (serviceId === "website-redesign") {
    const ParentWebsite = React.lazy(() =>
      import("../../components/WebsiteRedesign/ParentWebiste")
    );
    return (
      <Suspense fallback={<div className="p-6">Loading Website Development...</div>}>
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
      <Suspense fallback={<div className="p-6">Loading CMS Development...</div>}>
        <ParentCms />
      </Suspense>
    );
  }
  if (serviceId === "customer-portal-development") {
    const ParentCpd = React.lazy(() =>
      import("../../components/cpd/ParentCpd")
    );
    return (
      <Suspense fallback={<div className="p-6">Loading CMS Development...</div>}>
        <ParentCpd/>
      </Suspense>
    );
  }
  if (serviceId === "crm-integration") {
    const ParentCrm = React.lazy(() =>
      import("../../components/crm/ParentCrm")
    );
    return (
      <Suspense fallback={<div className="p-6">Loading CMS Development...</div>}>
        <ParentCrm/>
      </Suspense>
    );
  }

  // Placeholder for other services
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">{categoryKey}</h1>
      <p className="text-lg">
        "{serviceId.replace(/-/g, " ")}" page coming soon!
      </p>
    </div>
  );
}

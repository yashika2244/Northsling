
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
  <Suspense fallback={<LoadingScreen message="Loading UI/UX Design..." />}>
      <ParentUi />
    </Suspense>

    );
  }

  if (serviceId === "website-redesign") {
    const ParentWebsite = React.lazy(() =>
      import("../../components/WebsiteRedesign/ParentWebiste")
    );
    return (
  <Suspense fallback={<LoadingScreen message="Loading website Design..." />}>
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
  <Suspense fallback={<LoadingScreen message="Loading CMS Design..." />}>
        <ParentCms />
      </Suspense>
    );
  }
  if (serviceId === "customer-portal-development") {
    const ParentCpd = React.lazy(() =>
      import("../../components/cpd/ParentCpd")
    );
    return (
  <Suspense fallback={<LoadingScreen message="Loading CPD Design..." />}>
        <ParentCpd/>
      </Suspense>
    );
  }
  if (serviceId === "crm-integration") {
    const ParentCrm = React.lazy(() =>
      import("../../components/crm/ParentCrm")
    );
    return (
  <Suspense fallback={<LoadingScreen message="Loading CRM Design..." />}>
        <ParentCrm/>
      </Suspense>
    );
  }
  if (serviceId === "custom-app-development") {
    const CustomAppParent = React.lazy(() =>
      import("../../components/digital/CustomAppParent")
    );
    return (
   <Suspense fallback={<LoadingScreen message="Loading CAD Design..." />}>
        <CustomAppParent/>
      </Suspense>
    );
  }
  if (serviceId === "legacy-modernization") {
    const Legnecy = React.lazy(() =>
      import("../../components/digital/legency")
    );
    return (
  <Suspense fallback={<LoadingScreen message="Loading Legancy Design..." />}>
        <Legnecy/>
      </Suspense>
    );
  }
  if (serviceId === "business-process-management") {
    const Bussiness = React.lazy(() =>
      import("../../components/digital/Bussiness")
    );
    return (
  <Suspense fallback={<LoadingScreen message="Loading BPD Design..." />}>
        <Bussiness/>
      </Suspense>
    );
  }
  if (serviceId === "product-engineering") {
    const Product = React.lazy(() =>
      import("../../components/digital/Product")
    );
    return (
  <Suspense fallback={<LoadingScreen message="Loading PE  Design..." />}>
        <Product/>
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

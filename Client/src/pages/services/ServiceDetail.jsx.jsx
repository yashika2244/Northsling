// import { useParams } from "react-router-dom";
// import { data } from "./ProductsUI";
// import React, { Suspense } from "react";

// // Normalize function
// const normalize = (str) => str.toLowerCase().replace(/\s+/g, "-").replace(/\//g, "-");

// export default function ServiceDetail() {
//   const { serviceId } = useParams();

//   // Find category containing this service
//   const categoryKey = Object.keys(data).find((cat) =>
//     data[cat].services.some((s) => normalize(s) === serviceId)
//   );

//   if (!categoryKey)
//     return <div className="p-6 text-center">Page for "{serviceId}" coming soon!</div>;

//   // Special lazy-loaded component for UI/UX Design
//   if (serviceId === "ui-ux-design") {
//     const ParentUi = React.lazy(() => import("../../components/Ui.jsx/ParentUi"));
//     return (
//       <Suspense fallback={<div className="p-6">Loading UI/UX Design...</div>}>
//         <ParentUi />
//       </Suspense>
//     );
//   }

//   // Placeholder for other services
//   return (
//     <div className="p-6 text-center">
//       <h1 className="text-3xl font-bold mb-4">{categoryKey}</h1>
//       <p className="text-lg">"{serviceId.replace(/-/g, " ")}" page coming soon!</p>
//     </div>
//   );
// }


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
    return <div className="p-6 text-center">Page for "{serviceId}" coming soon!</div>;

  // Lazy-load components based on service
  if (serviceId === "ui-ux-design") {
    const ParentUi = React.lazy(() => import("../../components/Ui.jsx/ParentUi"));
    return (
      <Suspense fallback={<div className="p-6">Loading UI/UX Design...</div>}>
        <ParentUi />
      </Suspense>
    );
  }

  if (serviceId === "website-redesign") {
    const ParentWebsite = React.lazy(() => import("../../components/WebsiteRedesign/ParentWebiste"));
    return (
      <Suspense fallback={<div className="p-6">Loading Website Development...</div>}>
        <ParentWebsite />
      </Suspense>
    );
  }

  // Placeholder for other services
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">{categoryKey}</h1>
      <p className="text-lg">"{serviceId.replace(/-/g, " ")}" page coming soon!</p>
    </div>
  );
}

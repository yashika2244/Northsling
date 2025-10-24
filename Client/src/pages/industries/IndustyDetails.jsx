import React, { Suspense } from "react";
import { data } from "./IndustrienPanel";
import { useParams } from "react-router-dom";
import LoadingScreen from "../../components/LoadingScreen";

// Normalize function
export const normalize = (str) =>
  str
    .toLowerCase()
    .replace(/[\/&]+/g, "-") // replace / or & with hyphen
    .replace(/\s+/g, "-") // spaces to hyphen
    .replace(/[^\w-]/g, "");

function IndustryDetails() {
  const { industryId } = useParams();

  // Find category containing this industry
  const categoryKey = Object.keys(data).find((cat) =>
    data[cat].industries.some((s) => normalize(s) === industryId)
  );

  if (!categoryKey)
    return (
      <div className="text-center h-screen bg-black text-white flex justify-center items-center flex-col">
        Page for "{industryId}" coming soon!
      </div>
    );

  // Lazy-load components based on industry
if (industryId === "dsaconnector-portal") {
  const DSA = React.lazy(() =>
    import("../../components/industriesLinks/Banking/DSA")
  );
  return (
    <Suspense fallback={<LoadingScreen />}>
      <DSA />
    </Suspense>
  );
}


  return (
    <div className="p-6 text-center h-screen bg-black text-white flex justify-center items-center flex-col">
      <h1 className="text-3xl font-bold mb-4">{categoryKey}</h1>
      <p className="text-lg">
        "{industryId.replace(/-/g, " ")}" page coming soon!
      </p>
    </div>
  );
}

export default IndustryDetails;

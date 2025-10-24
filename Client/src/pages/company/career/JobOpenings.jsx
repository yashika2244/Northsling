import { useState } from "react";

export default function JobOpenings() {
  const [department, setDepartment] = useState("");
  const [workType, setWorkType] = useState("");
  const [search, setSearch] = useState("");

  const departments = [
    "Business Analyst",
    "Growth",
    "Marketing",
    "Technology & Innovation Centre",
  ];

  const workTypes = ["Full Time", "Part Time", "Remote", "Contract"];

  const jobs = [
    {
      title: "AWS Data Engineer",
      location: "Kolkata, West Bengal",
      type: "Full Time",
      description:
        "We are seeking an experienced Data Engineer to join our team with strong ETL background...",
    },
    {
      title: "Data Analyst (Power BI)",
      location: "Kolkata, West Bengal",
      type: "Full Time",
      description:
        "Looking for a skilled analyst with Power BI/Tableau experience...",
    },
    {
      title: "Flutter Developer",
      location: "Kolkata, West Bengal",
      type: "Full Time",
      description:
        "Looking for experienced Flutter Mobile Developer for app development...",
    },
    {
      title: "Angular Developer",
      location: "Kolkata, West Bengal",
      type: "Full Time",
      description:
        "Frontend Developer (Angular)Company: Indus Net TechnologiesExperience: 4 – 8 YearsLocation:  (PAN India)Availability: Immediate to 15 Days JoinerAbout the RoleWe are looking for an experienced Fronten......",
    },
    {
      title: "Data Engineer",
      location: "Kolkata, West Bengal",
      type: "Full Time",
      description:
        "Job Title: Data EngineerExperience: 5–10 YearsLocation: Pan India Joining Time: Immediate to 15 Days MaximumAbout the Role:Indus Net Technologies is looking for an experienced Data Engineer to design,.....",
    },
  ];

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      (department ? job.title.includes(department) : true) &&
      (workType ? job.type === workType : true)
  );

  return (
    <div className="p-10  space-y-12 bg-white">
      <h1 className="text-4xl font-bold text-center text-gray-900">Current Openings</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 items-center bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm">
        <select
          onChange={(e) => setDepartment(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
        >
          <option value="">Choose Department</option>
          {departments.map((dep) => (
            <option key={dep} value={dep}>
              {dep}
            </option>
          ))}
        </select>

        <select
          onChange={(e) => setWorkType(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
        >
          <option value="">Choose Work Type</option>
          {workTypes.map((w) => (
            <option key={w} value={w}>
              {w}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search Job Title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 flex-1 text-gray-700 focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
        />
      </div>

      {/* Job Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {filteredJobs.map((job, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
          >
            <h2 className="text-xl font-semibold text-gray-900">{job.title}</h2>
            <p className="text-sm text-gray-500 mt-1">{job.location} • {job.type}</p>
            <p className="text-sm mt-3 text-gray-600 leading-relaxed">{job.description}</p>
            <button className="mt-5 inline-block px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition">
              More Details →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
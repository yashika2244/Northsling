import { Lightbulb, Laptop, Target, Package, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

export default function ClientsSection() {
  const clients = [
    {
      title: "Client One Content",
      desc: "This is the sample dummy text insert your desired text here because this is dummy text.",
      icon: <DollarSign className="w-10 h-10 text-white" />,
      color: "bg-teal-500",
    },
    {
      title: "Client Two Content",
      desc: "This is the sample dummy text insert your desired text here because this is dummy text.",
      icon: <Target className="w-10 h-10 text-white" />,
      color: "bg-lime-600",
    },
    {
      title: "Client Three Content",
      desc: "This is the sample dummy text insert your desired text here because this is dummy text.",
      icon: <Package className="w-10 h-10 text-white" />,
      color: "bg-amber-500",
    },
    {
      title: "Client Four Content",
      desc: "This is the sample dummy text insert your desired text here because this is dummy text.",
      icon: <Laptop className="w-10 h-10 text-white" />,
      color: "bg-rose-500",
    },
    {
      title: "Client Five Content",
      desc: "This is the sample dummy text insert your desired text here because this is dummy text.",
      icon: <Lightbulb className="w-10 h-10 text-white" />,
      color: "bg-blue-600",
    },
  ];

  return (
    <section className="py-20 px-6 text-center bg-white">
      {/* Heading */}
      <div className="max-w-3xl mx-auto mb-14">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Our Clients
        </h2>
        <p className="text-gray-500">
          This is the sample dummy text insert your desired text here because this is the dummy text.
        </p>
        <div className="mt-4 flex justify-center gap-2">
          <span className="h-1 w-8 bg-teal-500 rounded"></span>
          <span className="h-1 w-8 bg-lime-600 rounded"></span>
          <span className="h-1 w-8 bg-amber-500 rounded"></span>
          <span className="h-1 w-8 bg-rose-500 rounded"></span>
          <span className="h-1 w-8 bg-blue-600 rounded"></span>
        </div>
      </div>

      {/* Client Cards */}
      <div className="flex flex-wrap justify-center gap-10">
        {clients.map((client, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="max-w-xs p-6 flex flex-col items-center bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div
              className={`rounded-2xl p-6 mb-4 ${client.color} transform rotate-45 shadow-lg transition-transform duration-300 hover:rotate-0`}
            >
              <div className="-rotate-45">{client.icon}</div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {client.title}
            </h3>
            <p className="text-sm text-gray-500">{client.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

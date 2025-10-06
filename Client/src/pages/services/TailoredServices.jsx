import { motion } from 'framer-motion';
import { Monitor, Code2, FileText, Users, Palette, Database } from 'lucide-react';

export default function TailoredServices() {
  const services = [
    {
      icon: <Monitor className="w-8 h-8 text-blue-700" />,
      title: 'Website Redesigning',
      description:
        'Transform your digital presence into a high-performing asset. Our redesign solutions enhance usability, speed, and engagement—ensuring seamless customer experiences that drive conversions and business growth.',
    },
    {
      icon: <Code2 className="w-8 h-8 text-blue-700" />,
      title: 'Custom Application Development',
      description:
        'Build tailored applications that fit your unique business needs. We develop scalable, high-performance solutions that streamline operations, enhance efficiency, and drive growth—ensuring seamless integration with your existing ecosystem.',
    },
    {
      icon: <FileText className="w-8 h-8 text-blue-700" />,
      title: 'Content Management System (CMS)',
      description:
        'Take control of your content with a powerful CMS. Our solutions ensure smooth content updates, streamlined workflows, and a seamless digital experience—enhancing engagement and operational efficiency.',
    },
    {
      icon: <Users className="w-8 h-8 text-blue-700" />,
      title: 'Customer and Channel Portal',
      description:
        'Turn customer interactions into meaningful engagements. Our secure, intuitive portals provide seamless self-service, real-time insights, and personalized experiences—enhancing satisfaction and business performance.',
    },
    {
      icon: <Palette className="w-8 h-8 text-blue-700" />,
      title: 'UI/UX',
      description:
        'Design that goes beyond aesthetics—driving engagement and results. We create intuitive, user-friendly experiences that optimize customer interactions, improve retention, and maximize digital performance.',
    },
    {
      icon: <Database className="w-8 h-8 text-blue-700" />,
      title: 'Customer Relationship Management (CRM)',
      description:
        'From managing contacts to driving conversions—power up your CRM. We implement solutions that streamline workflows, personalize interactions, and provide data-driven insights to fuel business growth.',
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-800 px-6 md:px-16 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-2">Our Services</p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-12"
        >
          Tailored Services to Deliver <span className="text-blue-700">Outstanding Value</span>
        </motion.h1>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-blue-100 p-6 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                {service.icon}
                <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-base">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
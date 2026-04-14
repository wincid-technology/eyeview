import React from 'react';
import Image from 'next/image';
import {
  FaEye,
  FaRocket,
  FaUsers,
  FaCheckCircle,
  FaLightbulb,
  FaGlobe,
  FaQuoteLeft,
  FaShieldAlt,
  FaChartLine,
  FaHandsHelping
} from 'react-icons/fa';

const AboutPage = () => {
  const features = [
    {
      title: "Our Vision",
      desc: "To provide an inclusive environment for authors and readers worldwide, bridging tradition with modern narratives.",
      icon: <FaEye />,
      color: "border-[#EF8224]",
      iconColor: "text-[#EF8224]"
    },
    {
      title: "Our Mission",
      desc: "To empower authors with collaborative publishing experiences that turn manuscripts into global legacies.",
      icon: <FaRocket />,
      color: "border-[#C52B28]",
      iconColor: "text-[#C52B28]"
    },
    {
      title: "Quality Excellence",
      desc: "Strict quality assurance in editing and production to ensure an exceptional reading journey every time.",
      icon: <FaShieldAlt />,
      color: "border-black",
      iconColor: "text-black"
    },
    {
      title: "Strategic Growth",
      desc: "Using 'Needonomics' and data-driven strategies to ensure your voice reaches the right target audience.",
      icon: <FaChartLine />,
      color: "border-[#EF8224]",
      iconColor: "text-[#EF8224]"
    },
    {
      title: "Author Support",
      desc: "Providing 360-degree consultancy from the first draft to the final global distribution.",
      icon: <FaHandsHelping />,
      color: "border-[#C52B28]",
      iconColor: "text-[#C52B28]"
    },
    {
      title: "Global Reach",
      desc: "Expanding the boundaries of literature by connecting local heritage with international markets.",
      icon: <FaGlobe />,
      color: "border-black",
      iconColor: "text-black"
    }
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative py-46 px-6 overflow-hidden aboutBanner">
        <div className="absolute left-0 top-0 w-full h-full bg-black/30" />
        <div className="container mx-auto max-w-7xl relative z-10 text-center">
          <span className="text-[#ffebda] font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
            Our Story
          </span>
          <h1 className="text-white text-5xl text-shadow-black/50 text-shadow-lg md:text-8xl font-extrabold">
            About Eye View
          </h1>
        </div>
      </section>

      {/* NEW Who We Are Section (Heading & Text Content) */}
      <section className="py-16 px-6 lg:px-12 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-black text-4xl md:text-5xl font-bold mb-8">
            The Power of Imagination
          </h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              At <strong>Eye View Enterprises</strong>, we believe that every story deserves to be heard, but only the well-told ones resonate forever. We are a premier publication and consultancy firm dedicated to bridging the gap between an author's vision and a reader's heart.
            </p>
            <p>
              Driven by our passion for literary excellence, we provide a nurturing and inclusive environment for both seasoned scholars and emerging voices. We don't just publish books; we preserve cultural heritage and build identities that stand the test of time.
            </p>
            <div className="flex justify-center pt-6">
               <div className="h-1 w-24 bg-[#C52B28] rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW Six Features Section */}
      <section className="bg-gray-100 py-16 px-6 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-black text-3xl md:text-4xl font-bold">Our Core <span className="text-[#C52B28]">Pillars</span></h2>
            <p className="text-gray-500 mt-4">Defining the standards of modern publication and consultancy.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`bg-white flex flex-col justify-center text-center p-10 rounded-[2rem] border-b-8 ${feature.color} shadow-sm hover:shadow-xl transition-all duration-300 group`}
              >
                <div className={`${feature.iconColor} text-4xl flex justify-center mb-6 transition-transform group-hover:scale-110 duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Focus / Values */}
      <section className="py-24 bg-[#EF8224]/10 border-t border-gray-300">
        <div className="container mx-auto max-w-7xl text-center">
            <h2 className="text-black text-2xl font-bold mb-16">Why Global Authors Trust Us</h2>
            <div className="grid md:grid-cols-3 divide-x divide-gray-300">
            <div className="group px-12">
                <div className="w-20 h-20 bg-gray-50 shadow-lg rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#C52B28] transition-colors duration-300">
                    <FaUsers className="text-3xl text-[#C52B28] group-hover:text-white" />
                </div>
                <h4 className="font-bold text-black text-xl">Community Focus</h4>
                <p className="text-gray-500 text-base mt-2 px-4">Building lasting bonds between creators and their audience.</p>
            </div>
            <div className="group px-12">
                <div className="w-20 h-20 bg-gray-50 shadow-lg rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#EF8224] transition-colors duration-300">
                    <FaGlobe className="text-3xl text-[#EF8224] group-hover:text-white" />
                </div>
                <h4 className="font-bold text-black text-xl">Heritage Hub</h4>
                <p className="text-gray-500 text-base mt-2 px-4">Preserving the roots while reaching for global branches.</p>
            </div>
            <div className="group px-12">
                <div className="w-20 h-20 bg-gray-50 shadow-lg rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-black transition-colors duration-300">
                    <FaCheckCircle className="text-3xl text-black group-hover:text-white" />
                </div>
                <h4 className="font-bold text-black text-xl">Excellence</h4>
                <p className="text-gray-500 text-base mt-2 px-4">A standard of perfection in every page we publish.</p>
            </div>
            </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
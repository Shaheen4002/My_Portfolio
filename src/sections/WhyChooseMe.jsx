import { FaLightbulb, FaCode, FaClock, FaMobile } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const WhyChooseMe = () => {
  const { t } = useTranslation();

  const strengths = [
    {
      icon: <FaLightbulb className="text-yellow-400" size={30} />,
      title: t("Innovative Solutions"),
      description: t(
        "I create unique, tailored solutions for each project's specific needs"
      ),
      borderColor: "border-yellow-400", // Matching icon color
    },
    {
      icon: <FaCode className="text-blue-400" size={30} />,
      title: t("Clean Code"),
      description: t(
        "Well-structured, maintainable code following best practices"
      ),
      borderColor: "border-blue-400",
    },
    {
      icon: <FaClock className="text-green-400" size={30} />,
      title: t("Timely Delivery"),
      description: t(
        "Projects completed on schedule with regular progress updates"
      ),
      borderColor: "border-green-400",
    },
    {
      icon: <FaMobile className="text-purple-600" size={30} />,
      title: t("Tech Updates"),
      description: t("Mobile Apps developing service will be available soon"),
      borderColor: "border-purple-600",
    },
  ];

  return (
    <section
      className="py-12 min-h-[calc(100vh-80px)] bg-base-200 dark:bg-base-800 mx-8"
      id="why-me"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          {t("Why Work With Me?")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((strength, index) => (
            <div
              key={index}
              className={`card bg-base-100 dark:bg-base-700 p-6 shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center border-4 ${strength.borderColor}`}
            >
              <div className="mb-4 p-3 rounded-full bg-base-200 dark:bg-base-600">
                {strength.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{strength.title}</h3>
              <p className="text-base-content/80">{strength.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;

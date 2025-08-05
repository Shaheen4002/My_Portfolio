import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaLaravel,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSass,
} from "react-icons/si";
import { useTranslation } from "react-i18next";

const About = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" size={40} /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" size={40} /> },
    { name: "SCSS/Sass", icon: <SiSass className="text-pink-500" size={40} /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-cyan-400" size={40} />,
    },
    {
      name: "JavaScript",
      icon: <FaJs className="text-yellow-400" size={40} />,
    },
    { name: "React", icon: <FaReact className="text-blue-400" size={40} /> },
    {
      name: "Express.js",
      icon: (
        <SiExpress className="text-gray-800 dark:text-gray-200" size={40} />
      ),
    },
    { name: "Laravel", icon: <FaLaravel className="text-red-500" size={40} /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-600" size={40} /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-600" size={40} /> },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="text-blue-400" size={40} />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-500" size={40} />,
    },
  ];

  const { t } = useTranslation();

  return (
    <section className="py-12 min-h-screen flex items-center" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          {t("About Me")}
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          <div className="lg:w-1/2 bg-base-200 dark:bg-base-800 rounded-xl p-8 shadow-lg flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-6">{t("Who I Am")}</h3>
            <div className="space-y-4">
              <p>{t("sec1")}</p>
              <p>{t("sec2")}</p>
              <p>{t("sec3")}</p>
            </div>
          </div>

          <div className="lg:w-1/2 bg-base-200 dark:bg-base-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              {t("My Skills")}
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-3 bg-base-100 dark:bg-base-700 rounded-lg hover:scale-105 transition-transform"
                >
                  <div className="mb-1">{skill.icon}</div>
                  <span className="text-center text-sm font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

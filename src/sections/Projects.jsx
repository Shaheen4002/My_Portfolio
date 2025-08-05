import { FaGithub } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

const projects = [
  {
    id: 1,
    title: {
      en: "E-commerce Website",
      ar: "موقع تجارة إلكترونية",
    },
    description: {
      en: "A full-stack e-commerce platform with React frontend and Laravel backend using MySQL.",
      ar: "منصة تجارة إلكترونية كاملة بواجهة React وواجهة خلفية Laravel باستخدام MySQL.",
    },
    technologies: ["React", "Laravel", "MySQL", "CSS"],
    image: "/src/assets/E-com.png",
    githubLink: "#",
    liveDemo: "#",
  },
  {
    id: 2,
    title: {
      en: "Portfolio Website",
      ar: "موقعي الشخصي",
    },
    description: {
      en: "A personal portfolio website built with React and styled with Tailwind CSS.",
      ar: "موقع شخصي مبني باستخدام React ومصمم ب Tailwind CSS.",
    },
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    image: "/src/assets/portfolio.png",
    githubLink: "https://github.com/Shaheen4002/My_Portfolio",
    liveDemo: "#",
  },
  {
    id: 3,
    title: {
      en: "Blog Platform",
      ar: "منصة مدونات",
    },
    description: {
      en: "A content management system for bloggers with CRUD functionality.",
      ar: "نظام إدارة محتوى للمدونين يحتوي على وظائف CRUD.",
    },
    technologies: ["React", "Express.js", "MUI", "Mongo DB"],
    image: "/src/assets/Blog.png",
    githubLink: "#",
    liveDemo: "#",
  },
  {
    id: 4,
    title: {
      en: "Chat Web App",
      ar: "تطبيق محادثة ويب",
    },
    description: {
      en: "A chat web app that users can create accounts on it and start chatting with each other",
      ar: "تطبيق دردشة ويب يمكن للمستخدمين إنشاء حسابات عليه والبدء في الدردشة مع بعضهم البعض",
    },
    technologies: ["React", "Express.js", "Mongo DB", "Tailwind CSS"],
    image: "/src/assets/Chat.png",
    githubLink: "https://github.com/Shaheen4002/Chat-App",
    liveDemo: "#",
  },
];

const Projects = () => {
  const notify = (text) =>
    toast.info(text, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const handleLiveDemoClick = (e, hasLiveDemo) => {
    if (!hasLiveDemo) {
      e.preventDefault();
      notify(t("Live demo will be available soon!"));
    }
  };
  const handleSrcCodeClick = (e, hasSrc) => {
    if (!hasSrc) {
      e.preventDefault();
      notify(t("source code will be available soon!"));
    }
  };

  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <section className=" mx-8 py-12 min-h-screen" id="projects">
      <h2 className="text-3xl font-bold mb-8 text-center">
        {t("My Projects")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow"
          >
            <figure>
              <img
                src={project.image}
                alt={project.title[currentLanguage] || project.title.en}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">
                {project.title[currentLanguage] || project.title.en}
              </h3>
              <p>
                {project.description[currentLanguage] || project.description.en}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="badge badge-outline">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="card-actions justify-end mt-4">
                <a
                  href={project.githubLink === "#" ? "#" : project.githubLink}
                  onClick={(e) =>
                    handleSrcCodeClick(e, project.githubLink !== "#")
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-ghost gap-2"
                >
                  <FaGithub /> {t("Source Code")}
                </a>
                <a
                  href={project.liveDemo === "#" ? "#" : project.liveDemo}
                  onClick={(e) =>
                    handleLiveDemoClick(e, project.liveDemo !== "#")
                  }
                  className="btn btn-sm btn-primary"
                >
                  {t("Live Demo")}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={currentLanguage === "ar"}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </section>
  );
};

export default Projects;

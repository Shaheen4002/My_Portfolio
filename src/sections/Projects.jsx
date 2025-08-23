import { FaGithub, FaInfoCircle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: {
      en: "Stores making platform",
      ar: "منصة لتنشئ فيها متجرك الالكتروني",
    },
    description: {
      en: "A web platform that let you create your own store (Back-End Only)",
      ar: "(واجهة خلفية فقط) منصة ويب تتيح لك إنشاء متجرك الخاص.",
    },
    details: {
      en: "A web platform that let you create your own store add products to it , manage your user's orders customize it with your colors you can do all of that without any coding skills",
      ar: "منصة ويب تتيح لك إنشاء متجرك الخاص، إضافة منتجات إليه، إدارة طلبات المستخدمين، وتخصيصه بألوانك الخاصة، يمكنك القيام بكل ذلك دون الحاجة إلى مهارات برمجية.",
    },
    technologies: ["Laravel", "MySql"],
    image: "/store.png",
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
    details: {
      en: "my personal website that show who am i, my experience projects and contact info",
      ar: " موقعي الشخصي الذي يوضح من أنا، خبرتي، مشاريعي ومعلومات الاتصال بي",
    },
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    image: "/portfolio.png",
    githubLink: "https://github.com/Shaheen4002/My_Portfolio",
    liveDemo: "#",
  },
  {
    id: 3,
    title: {
      en: "E-commerce Website",
      ar: "موقع تجارة إلكترونية",
    },
    description: {
      en: "A full-stack e-commerce platform with React frontend and Laravel backend using MySQL.",
      ar: "منصة تجارة إلكترونية كاملة بواجهة React وواجهة خلفية Laravel باستخدام MySQL.",
    },
    details: {
      en: "an E-commerce store with Authentication system that you can buy products and place orders from it with admin dashboard to manage user's orders and store products",
      ar: "متجر إلكتروني مع نظام مصادقة يتيح شراء المنتجات وتقديم الطلبات، بالإضافة إلى لوحة تحكم إدارية لإدارة طلبات المستخدمين ومنتجات المتجر.",
    },
    technologies: ["React", "Laravel", "MySQL", "CSS"],
    image: "/E-com.png",
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
    details: {
      en: "A chat web app with Authentication system that let the users to create accounts and start chatting with each other also with real time messaging with socket.io server",
      ar: "تطبيق دردشة ويب مع نظام مصادقة يتيح للمستخدمين إنشاء حسابات وبدء الدردشة مع بعضهم البعض، بالإضافة إلى المراسلة في الوقت الحقيقي باستخدام خادم Socket.io.",
    },
    technologies: ["React", "Express.js", "Mongo DB", "Tailwind CSS"],
    image: "/Chat.png",
    githubLink: "https://github.com/Shaheen4002/Chat-App",
    liveDemo: "#",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

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

  const handleDetailsClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <section className="mx-8 py-12 min-h-screen" id="projects">
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
              <div className="card-actions justify-evenly mt-4">
                <button
                  onClick={() => handleDetailsClick(project)}
                  className="btn btn-sm btn-info gap-2"
                >
                  <FaInfoCircle /> {t("Details")}
                </button>
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
      {showModal && selectedProject && (
        <div className="modal modal-open">
          <div className="modal-box max-w-2xl">
            <h3 className="font-bold text-2xl mb-4">
              {selectedProject.title[currentLanguage] ||
                selectedProject.title.en}
            </h3>
            <p className="py-4">
              {selectedProject.details[currentLanguage] ||
                selectedProject.details.en}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.technologies.map((tech, index) => (
                <span key={index} className="badge badge-primary">
                  {tech}
                </span>
              ))}
            </div>
            <div className="modal-action">
              <button className="btn" onClick={closeModal}>
                {t("Close")}
              </button>
            </div>
          </div>
        </div>
      )}

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

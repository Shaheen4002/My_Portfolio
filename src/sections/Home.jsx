import { TypeAnimation } from "react-type-animation";
import heroImage from "../assets/photo_2025-07-29_14-25-54.jpg";
import { useTranslation } from "react-i18next";

const Home = ({ scrollToContact }) => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  const handleDragStart = (e) => {
    e.preventDefault();
  };

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between mx-8 gap-8 py-12 min-h-[calc(100vh-80px)] px-4 md:px-8">
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {t("Hi, I'm")}{" "}
          <span className="text-primary">{t("Shaheen Sharba")}</span>
        </h1>
        <div className="text-xl md:text-2xl mb-6 text-primary">
          <TypeAnimation
            key={currentLanguage}
            sequence={[
              t("Web Developer"),
              1000,
              t("Frontend Developer"),
              1000,
              t("Backend Developer"),
              1000,
              t("Full Stack Developer"),
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ display: "inline-block" }}
            repeat={Infinity}
          />
        </div>
        <p className="mb-8 text-lg">{t("hero")}</p>
        <div className="flex gap-4">
          <button onClick={scrollToContact} className="btn btn-primary">
            {t("Contact")}
          </button>
          <a href="#projects" className="btn btn-outline">
            {t("View Projects")}
          </a>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-end">
        <div className="avatar">
          <div className="w-64 h-64 md:w-72 md:h-72 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img
              src={heroImage}
              alt={t("Developer")}
              className="w-full h-full object-cover"
              onContextMenu={handleContextMenu}
              onDragStart={handleDragStart}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

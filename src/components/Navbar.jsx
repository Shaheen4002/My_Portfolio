import { forwardRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { CgMenuGridO } from "react-icons/cg";

const Navbar = forwardRef(({ scrollToSection, refs }, ref) => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const currentLang = i18n.language || "en";
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
  }, [i18n.language]); // Run when language changes

  const changeLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="navbar bg-base-200 bg-base-800 shadow-lg sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <CgMenuGridO className="text-white" size={25} />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <button onClick={() => scrollToSection(refs.aboutRef)}>
                {t("About")}
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection(refs.projectsRef)}>
                {t("Projects")}
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection(refs.contactRef)}>
                {t("Contact")}
              </button>
            </li>
          </ul>
        </div>
        <button
          onClick={() => scrollToSection(refs.homeRef)}
          className="btn btn-ghost text-xl"
        >
          {t("Shaheen Sharba")}
        </button>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="m-2">
            <button onClick={() => scrollToSection(refs.aboutRef)}>
              {t("About")}
            </button>
          </li>
          <li className="m-2">
            <button onClick={() => scrollToSection(refs.projectsRef)}>
              {t("Projects")}
            </button>
          </li>
          <li className="m-2">
            <button onClick={() => scrollToSection(refs.contactRef)}>
              {t("Contact")}
            </button>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-primary" onClick={changeLanguage}>
          {t("lang")}
        </button>
      </div>
    </div>
  );
});

export default Navbar;

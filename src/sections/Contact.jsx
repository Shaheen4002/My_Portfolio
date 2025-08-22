import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <section className="py-12 mx-8   min-h-[80vh]" id="contact">
      <h2 className="text-3xl font-bold mb-8 text-center">
        {t("Get In Touch")}
      </h2>

      <div className="flex justify-center md:flex-row gap-8">
        <div className="md:w-1/2">
          <div className="card bg-base-200 p-6 h-full">
            <h3 className="text-xl font-semibold mb-4">
              {t("Contact Information")}
            </h3>
            <p className="mb-6">{t("contact desc")}</p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-xl" />
                <span>shaheenbus4002@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <FaWhatsapp className="text-xl" />
                <span>{t("+963998842777")}</span>
              </div>
              <div className="flex items-center gap-4">
                <FaLocationDot className="text-xl" />
                <span>{t("Syria, Hama, Salamieh")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

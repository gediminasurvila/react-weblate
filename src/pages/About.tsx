import React from "react";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("about_us")}</h1>
      <div>{t("about_description")}</div>
    </div>
  );
};

export default About;

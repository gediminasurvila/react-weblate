import React from "react";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t("welcome_home")}</h1>
      <p>{t("welcome.description_text")}</p>
    </>
  );
};

export default Home;

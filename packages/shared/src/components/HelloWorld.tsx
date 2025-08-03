import { useTranslation } from "react-i18next";

export const HelloWorld = () => {
  const { t } = useTranslation("hello");
  return (
    <h1 className="text-5xl font-bold text-gray-800 mb-4">{t("hello")}</h1>
  );
};

import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <div className="pt-32 pb-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-bold mb-12 tracking-tight">
        {t("title")}
      </h1>
      <p className="text-xl text-muted-foreground">{t("description")}</p>
    </div>
  );
}
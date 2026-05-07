import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <div className="pt-32 pb-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <h1 className="
  text-5xl font-bold
  bg-gradient-to-r from-cyan-300 to-blue-500
  bg-clip-text text-transparent
">
        {t("title")}
      </h1>
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-xl text-muted-foreground leading-relaxed">
          {t("description")}
        </p>
      </div>
    </div>
  );
}
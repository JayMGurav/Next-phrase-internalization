import styles from "../styles/Home.module.css";

import { useTranslation } from "next-i18next";
import { useState } from "react";
import { useRouter } from "next/dist/client/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "home-page"])),
  },
});

export default function Home() {
  const { t: homePageTranslate } = useTranslation("home-page");
  const { t: commonTranslate } = useTranslation("common");
  const router = useRouter();

  const [selectedLocale, setSelectedLocale] = useState(router.locale || "en");

  const handleChange = (nextLocale) => {
    const { pathname, asPath, query } = router;
    setSelectedLocale(nextLocale);
    router.push({ pathname, query }, asPath, { locale: nextLocale });
  };

  // const name = "Jay";
  return (
    <div className={styles.container}>
      <p>
        selected locale: <strong>{router.locale}</strong>
      </p>
      <p>
        default: locale: <strong>{router.defaultLocale}</strong>
      </p>
      <br />
      <h1>{homePageTranslate("h1")}</h1>
      <p>{homePageTranslate("caption")}</p>
      <label htmlFor="local_select"> {commonTranslate("change-locale")} </label>
      <select
        id="local_select"
        value={selectedLocale}
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value="en">English - en</option>
        <option value="de">German - de</option>
        <option value="es">Spanish - es</option>
        <option value="fr">French - fr</option>
      </select>
    </div>
  );
}

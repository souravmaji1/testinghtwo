import React, { useEffect, useState } from "react";
import EnglishFlag from "../public/Flag.png"; // Import the English flag image
import SpanishFlag from "../public/spain (1).png"; // Import the Spanish flag image
import FrenchFlag from "../public/Flag (1).png"; // Import the French flag image
import Image, { StaticImageData } from "next/image";
import localFont from "next/font/local";
import { useTranslation } from "react-i18next";

import ItalianFlag from "../public/italian.png";
import RussanFlag from "../public/russain.png";
import ArbaianFlag from "../public/arabian.png";

import GenericNavbar from "./GenericNavBar";

const myFont = localFont({
  src: "../public/font/MonumentExtended-FreeForPersonalUse/MonumentExtended-Regular.otf",
});
const secondFont = localFont({
  src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Light.otf",
});
const thirdFont = localFont({
  src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Medium.otf",
});
const fourthFont = localFont({
  src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Regular.otf",
});

const LanguageSelector: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<{
    name: string;
    image: StaticImageData;
  }>({
    name: "EN", // Set English as the default language
    image: EnglishFlag,
  });

  const { t, i18n } = useTranslation();

  const handleLanguageChange = (
    language: string,
    flagImage: StaticImageData
  ) => {
    setSelectedLanguage({ name: language, image: flagImage });
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    if (
      localStorage.getItem("lang") == "en" ||
      localStorage.getItem("lang") == "" ||
      localStorage.getItem("lang") == " "
    ) {
      localStorage.setItem("lang", "en");
      handleLanguageChange("en", EnglishFlag);
    }else if(localStorage.getItem("lang") == "fr"){
      localStorage.setItem("lang", "fr");
      handleLanguageChange("fr", FrenchFlag);
    }else if(localStorage.getItem("lang") == "it"){
      localStorage.setItem("lang", "it");
      handleLanguageChange("it", ItalianFlag);
    }else if(localStorage.getItem("lang") == "ru"){
      localStorage.setItem("lang", "ru");
      handleLanguageChange("ru", RussanFlag);
    }else if(localStorage.getItem("lang") == "ar"){
      localStorage.setItem("lang", "ar");
      handleLanguageChange("ar", ArbaianFlag);
    }else if(localStorage.getItem("lang") == "es"){
      localStorage.setItem("lang", "es");
      handleLanguageChange("es", SpanishFlag);
    }
  }, []);

  return (
    <div className={`"dropdown monument" ${myFont.style.fontFamily}`}>
      <style jsx>{`
        .dropdown-item:hover {
          background-color: transparent; /* Reset the hover background color */
          color: white !important; /* Reset the hover text color */
        }
      `}</style>
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="languageDropdown"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {selectedLanguage ? (
          <>
            <Image src={selectedLanguage.image} alt={selectedLanguage.name} />
            {selectedLanguage.name}
          </>
        ) : (
          "Select Language"
        )}
      </button>
      <ul className="dropdown-menu" aria-labelledby="languageDropdown">
        <li>
          <a
            style={{
              color: "white",
              fontFamily: "__fourthFont_9c16a8",
            }}
            className="dropdown-item"
            href="#"
            onClick={() => {
              localStorage.setItem("lang", "en");
              handleLanguageChange("en", EnglishFlag);
            }}
          >
            <Image src={EnglishFlag} alt="English" />
            EN
          </a>
        </li>
        <li>
          <a
            style={{
              color: "white",
              fontFamily: "__fourthFont_9c16a8",
            }}
            className="dropdown-item"
            href="#"
            onClick={() => {
              localStorage.setItem("lang", "fr");
              handleLanguageChange("fr", FrenchFlag);
            }}
          >
            <Image src={FrenchFlag} alt="French" />
            FR
          </a>
        </li>

        <li>
          <a
            style={{
              color: "white",
              fontFamily: "__fourthFont_9c16a8",
            }}
            className="dropdown-item"
            href="#"
            onClick={() => {
              localStorage.setItem("lang", "it");
              handleLanguageChange("it", ItalianFlag);
            }}
          >
            <Image src={ItalianFlag} alt="Spanish" />
            ITA
          </a>
        </li>
        <li>
          <a
            style={{
              color: "white",
              fontFamily: "__fourthFont_9c16a8",
            }}
            className="dropdown-item"
            href="#"
            onClick={() => {
              localStorage.setItem("lang", "es");
              handleLanguageChange("es", SpanishFlag);
            }}
          >
            <Image src={SpanishFlag} alt="Spanish" />
            ES
          </a>
        </li>
        <li>
          <a
            style={{
              color: "white",
              fontFamily: "__fourthFont_9c16a8",
            }}
            className="dropdown-item"
            href="#"
            onClick={() => {
              localStorage.setItem("lang", "ru");
              handleLanguageChange("ru", RussanFlag);
            }}
          >
            <Image src={RussanFlag} alt="French" />
            RUS
          </a>
        </li>
        <li>
          <a
            style={{
              color: "white",
              fontFamily: "__fourthFont_9c16a8",
            }}
            className="dropdown-item"
            href="#"
            onClick={() => {
              localStorage.setItem("lang", "ar");
              handleLanguageChange("ar", ArbaianFlag);
            }}
          >
            <Image src={ArbaianFlag} alt="French" />
            AR
          </a>
        </li>
        {/* Add more language options as needed */}
      </ul>
    </div>
  );
};

export default LanguageSelector;

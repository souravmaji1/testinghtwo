import localFont from "next/font/local";
import logo from "../public/logs.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import React, { useCallback, useState, useEffect } from "react";
import PortalPopup from "./portalpopup";
import MenuIPadPro1291 from "./menumobile";
import Image, { StaticImageData } from "next/image";
import { useTranslation } from "react-i18next";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

import EnglishFlag from "../public/Flag.png"; // Import the English flag image
import SpanishFlag from "../public/spain (1).png"; // Import the Spanish flag image
import FrenchFlag from "../public/Flag (1).png"; // Import the French flag image
import ItalianFlag from "../public/italian.png";
import RussanFlag from "../public/russain.png";
import ArbaianFlag from "../public/arabian.png";

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

function GenericMobileNavbar() {
  const [isMenuIPadPro1291Open, setMenuIPadPro1291Open] = useState(false);

  const openMenuIPadPro1291 = useCallback(() => {
    setMenuIPadPro1291Open(true);
  }, []);

  const closeMenuIPadPro1291 = useCallback(() => {
    setMenuIPadPro1291Open(false);
  }, []);
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
    } else if (localStorage.getItem("lang") == "fr") {
      localStorage.setItem("lang", "fr");
      handleLanguageChange("fr", FrenchFlag);
    } else if (localStorage.getItem("lang") == "it") {
      localStorage.setItem("lang", "it");
      handleLanguageChange("it", ItalianFlag);
    } else if (localStorage.getItem("lang") == "ru") {
      localStorage.setItem("lang", "ru");
      handleLanguageChange("ru", RussanFlag);
    } else if (localStorage.getItem("lang") == "ar") {
      localStorage.setItem("lang", "ar");
      handleLanguageChange("ar", ArbaianFlag);
    } else if (localStorage.getItem("lang") == "es") {
      localStorage.setItem("lang", "es");
      handleLanguageChange("es", SpanishFlag);
    }
  }, []);
  return (
    <>
      <section className="absolute top-0 left-0 h-fit w-screen flex flex-row items-center justify-between p-2">
        <img src={logo.src} className="h-16 aspect-square" alt="" />
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-between">
            <Menu
              align={"end"}
              direction="bottom"
              arrow={true}
              menuButton={
                <MenuButton>
                  <div className="h-8 aspect-square rounded-full border-yellow-400 border p-[1px] mr-3">
                    <Image
                      src={selectedLanguage.image}
                      alt={selectedLanguage.name}
                      className="w-full h-full"
                    />
                  </div>
                </MenuButton>
              }
              transition
            >
              <MenuItem
                onClick={() => {
                  localStorage.setItem("lang", "en");
                  handleLanguageChange("en", EnglishFlag);
                }}
              >
                <div className="w-full h-fit flex flex-row items-center justify-start">
                  <Image
                    src={EnglishFlag}
                    alt="English"
                    className="h-6 w-6 mr-3"
                  />
                  <h5 className={` text-2xl text-white my-0`}>EN</h5>
                </div>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  localStorage.setItem("lang", "fr");
                  handleLanguageChange("fr", FrenchFlag);
                }}
              >
                <div className="w-full h-fit flex flex-row items-center justify-start">
                  <Image
                    src={FrenchFlag}
                    alt="English"
                    className="h-6 w-6 mr-3"
                  />
                  <h5 className={` text-2xl text-white my-0`}>FR</h5>
                </div>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  localStorage.setItem("lang", "es");
                  handleLanguageChange("es", SpanishFlag);
                }}
              >
                <div className="w-full h-fit flex flex-row items-center justify-start">
                  <Image
                    src={SpanishFlag}
                    alt="English"
                    className="h-6 w-6 mr-3"
                  />
                  <h5 className={` text-2xl text-white my-0`}>ES</h5>
                </div>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  localStorage.setItem("lang", "it");
                  handleLanguageChange("it", ItalianFlag);
                }}
              >
                <div className="w-full h-fit flex flex-row items-center justify-start">
                  <Image
                    src={ItalianFlag}
                    alt="English"
                    className="h-6 w-6 mr-3"
                  />
                  <h5 className={` text-2xl text-white my-0`}>IT</h5>
                </div>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  localStorage.setItem("lang", "ru");
                  handleLanguageChange("ru", RussanFlag);
                }}
              >
                <div className="w-full h-fit flex flex-row items-center justify-start">
                  <Image
                    src={RussanFlag}
                    alt="English"
                    className="h-6 w-6 mr-3"
                  />
                  <h5 className={` text-2xl text-white my-0`}>RU</h5>
                </div>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  localStorage.setItem("lang", "ar");
                  handleLanguageChange("ar", ArbaianFlag);
                }}
              >
                <div className="w-full h-fit flex flex-row items-center justify-start">
                  <Image
                    src={ArbaianFlag}
                    alt="English"
                    className="h-6 w-6 mr-3"
                  />
                  <h5 className={` text-2xl text-white my-0`}>AR</h5>
                </div>
              </MenuItem>
            </Menu>

            <HiOutlineMenuAlt3
              color="#ffffff"
              size={35}
              onClick={() => {
                openMenuIPadPro1291();
              }}
            />
          </div>
        </div>
      </section>
      {isMenuIPadPro1291Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMenuIPadPro1291}
        >
          <MenuIPadPro1291 />
        </PortalPopup>
      )}
    </>
  );
}

export default GenericMobileNavbar;
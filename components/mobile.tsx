import type { NextPage } from "next";
import { useState, useCallback } from "react";
import MenuIPadPro1291 from "../components/menumobile";
import PortalPopup from "./portalpopup";
import styles from "./mobile.module.css";

import Image from "next/image";

import Download from "../public/download.png";

import Btn from "../public/Rectangle 334.svg";
import Home from "../public/shutterstock_2152297015-[Converted] 1.png";
import Video from "../public/carbon_play-filled.svg";
import Headlogo from "../public/logs.png";
import Frame from "../public/Frame.svg";
import Stats from "../public/shutterstock_1007444929-[Converted] 1.png";
import One from "../public/one.png";
import Two from "../public/two.png";
import Bar from "../public/Frame 90.png";
import Three from "../public/three.png";
import Fou from "../public/cc.png";
import Fif from "../public/bb.png";
import Six from "../public/aa.png";
import Wallet from "../public/mingcute_wallet-4-fill.svg";
import User from "../public/Ellipse 59.svg";
import Arrow from "../public/arrow.svg";
import Green from "../public/gr.svg";
import White from "../public/wh.svg";
import Circles from "../public/Circle BG.svg";
import Star from "../public/Union.png";
import Circ from "../public/Group 8.png";
import Leftcir from "../public/Group 1000000925.png";
import Rectangle from "../public/Rectangle 349.png";
import Partner from "../public/Partners-Logos.png";
import Flower from "../public/Group 1000000920.png";
import { ConnectWallet } from "@thirdweb-dev/react";
import localFont from "next/font/local";
import React, { useEffect } from "react";
import Sliders from "../components/slider";
import Github from "../public/mdi_github.svg";
import Twitter from "../public/mdi_twitter.svg";
import Linkedin from "../public/entypo-social_linkedin-with-circle.svg";
import Notion from "../public/mingcute_notion-fill.svg";
import Footer from "../components/aboutfooter";

import Navbar from "../components/navbar";
import Mobile from "../components/mobile";
import Tradei from "../public/montra.png";
import Stakei from "../public/mobst.png";
import Abouti from "../public/mobab.png";
import Termi from "../public/termi.png";
import Joincom from "../public/Join our community.png";
import Downloadour from "../public/Download Our White Paper for In-Depth Insights.png";
import Navbs from "../public/dd.svg";
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

import Whitepaper from "../public/whites.png";

import { useTranslation } from "react-i18next";

import Homd from "../public/h.png";
import Treasury from "../public/Treasury & Tokens Ecosystem.png";
import Discoverb from "../public/Discover Our Benefits.png";
import Treasurysd from "../public/Treasury.png";
import Downloadwhite from "../public/Download Whitepaper.png";
import Starttrading from "../public/Start Trading.png";
import Seam from "../public/Seamless Financial Inclusion.png";
import Effort from "../public/Effortless Cross-Border Transactions.png";
import Watch from "../public/Watch Tutorial.png";
import Copyright from "../public/Copy Right 2023 - CMax. All Rights Reserved.png";
import Homer from "../public/hsss.png";
import Titas from "../public/Tita +24%.png";
import Tradingvol from "../public/Total Trading Volume.png";
import LanguageSelector from "./mobilelang";
import GenericMobileNavbar from "./mobileGenericNavbar";

const HomeIPadPro1291: NextPage = () => {
  const [isMenuIPadPro1291Open, setMenuIPadPro1291Open] = useState(false);

  const openMenuIPadPro1291 = useCallback(() => {
    setMenuIPadPro1291Open(true);
  }, []);

  const closeMenuIPadPro1291 = useCallback(() => {
    setMenuIPadPro1291Open(false);
  }, []);

  const { t, i18n } = useTranslation();
  // important for translation. import in every page or component
  const switchLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    /* to implement this functions globally and keep the same language when u go to another page, 
		you can store the language code (en, fr, es, it, ar, ru) in localStorage, 
		and run this function in a useEffect on top of every page, 
		with the language code that is in the local storage as a parameter */
  };

  return (
    <>
    
      <div className={styles.homeIpadPro1291}>
        <Image className={styles.homeIpadPro1291Child} alt="" src={Flower} />
        <Image className={styles.homeIpadPro1291Item} alt="" src={Circ} />
        <Image className={styles.homeIpadPro1291Inner} alt="" src={Leftcir} />
        <img
          className={styles.shutterstock2152297015ConveIcon}
          alt=""
          src="shutterstock_2152297015-[Converted] 1.png"
        />

        <div className={styles.rectangleDiv} />
        <GenericMobileNavbar />
        <div style={fourthFont.style} className={styles.unveilingANew1}>
          {" "}
          {t("firsthead")}{" "}
        </div>
        <div style={myFont.style} className={styles.discoverTheRwfa}>
          {" "}
          {t("secondhead")}{" "}
        </div>
        <div className={styles.btnParent}>
          <div className={styles.btn}>
            <img className={styles.btnChild} alt="" src="Rectangle 334.svg" />
            <div style={thirdFont.style} className={styles.startTrading}>
              <a href="/trade">
                <h5 className="text-black text-base w-full text-center">
                  {t("tradingbutton")}
                </h5>
              </a>
            </div>
          </div>
          <div className={styles.carbonplayFilledParent}>
            <Image
              className={styles.carbonplayFilledIcon1}
              alt=""
              src={Video}
            />
            <div style={fourthFont.style} className={styles.watchTutorial}>
              <h5 className="text-white text-lg mb-0">{t("watch")}</h5>
            </div>
          </div>
        </div>

        <div className={styles.homeIpadPro1291Child1} />
        <div className={styles.ellipseParent}>
          <div className={styles.groupChild} />
          <div className={styles.groupItem} />
          <div style={thirdFont.style} className={styles.downloadOurWhite1}>
            <h5 className="text-2xl text-center my-0 w-full ml-4">
              {t("downloadhead")}
            </h5>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.groupInner} />
            <div className={styles.frameParent}>
              <img className={styles.frameIcon} alt="" src="Frame.svg" />
              <div className={styles.rwfaParent}>
                <div style={myFont.style} className={styles.rwfa}></div>
                <div style={myFont.style} className={styles.whitepaper}>
                  <Image src={Whitepaper} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div style={secondFont.style} className={styles.diveIntoThe1}>
            {" "}
            📥 {t("downloadparagraph")} 🚀{" "}
          </div>
          <div className={styles.mingcutewallet4FillParent}>
            <Image
              className={styles.mingcutewallet4FillIcon1}
              alt=""
              src={Download}
            />
            <div style={thirdFont.style} className={styles.downloadWhitepaper}>
              <a href="https://moodglobalservices.notion.site/Coliseum-White-Paper-fa2c3eb3583b454a8a4d7ad8d4360391?pvs=4">
                <h5 className="text-black text-sm mb-0">
                  {t("downloadbutton")}
                </h5>
              </a>{" "}
            </div>
          </div>
        </div>

        <div className={styles.treasuryTokensEcosystemParent}>
          <div style={thirdFont.style} className={styles.treasuryTokens1}>
            <h5 className="text-3xl">{t("treasuryhead")}</h5>
          </div>
          <div style={secondFont.style} className={styles.immerseYourselfIn1}>
            {t("treasuryparagraph")}{" "}
          </div>
        </div>
        <div className={styles.discoverOurBenefitsParent}>
          <div style={thirdFont.style} className={styles.treasuryTokens1}>
            <h5 className="text-3xl">{t("discoverbenefit")}</h5>
          </div>
          <div
            style={secondFont.style}
            className={styles.elevateYourFinancial1}
          >
            {" "}
            {t("discoverparagraph")}{" "}
          </div>
        </div>
        <div className={styles.homeIpadPro1291Child2} />
        <Image className={styles.maskGroupIcon1} alt="" src={Stats} />
        <div style={thirdFont.style} className={styles.treasury}>
          {t("treasury")}
        </div>
        <div className={styles.parent}>
          <div style={thirdFont.style} className={styles.div}>
            150.000.000,00 €
          </div>
          <div style={thirdFont.style} className={styles.div1}>
            =
          </div>
          <div style={thirdFont.style} className={styles.rsc}>
            150.000.000 RSC
          </div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupChild1} />
          <div className={styles.frameGroup}>
            <img className={styles.frameIcon1} alt="" src="Frame.svg" />
            <div
              style={secondFont.style}
              className={styles.totalTradingVolume2}
            >
              <Image src={Tradingvol} alt="" />
            </div>
            <div style={thirdFont.style} className={styles.cmax24}>
              Cmax +24%
            </div>
          </div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupChild1} />
          <div className={styles.frameGroup}>
            <img className={styles.frameIcon1} alt="" src="Frame.svg" />
            <div
              style={secondFont.style}
              className={styles.totalTradingVolume2}
            >
              <Image src={Tradingvol} alt="" />
            </div>
            <div style={thirdFont.style} className={styles.tita24}>
              Tita +24%
            </div>
          </div>
        </div>
        <div className={styles.ellipseGroup}>
          <div className={styles.ellipseDiv} />
          <div className={styles.rectangleParent1}>
            <div className={styles.groupChild3} />
            <div
              style={myFont.style}
              className={styles.seamlessFinancialInclusion1}
            >
              <h5 className="text-xl my-0">{t("benefithead")}</h5>
            </div>
            <div style={secondFont.style} className={styles.joinAPlatform1}>
              {t("benefitparagraphone")}{" "}
            </div>
            <Image className={styles.groupIcon} alt="" src={One} />
          </div>
        </div>
        <div className={styles.ellipseContainer}>
          <div className={styles.ellipseDiv} />
          <div className={styles.rectangleParent1}>
            <div className={styles.groupChild3} />
            <div
              style={myFont.style}
              className={styles.seamlessFinancialInclusion1}
            >
              <h5 className="text-xl my-0">{t("benefitheadtwo")}</h5>
            </div>
            <div style={secondFont.style} className={styles.joinAPlatform1}>
              {" "}
              {t("benefitparagraphtwo")}{" "}
            </div>
            <Image className={styles.groupIcon} alt="" src={Two} />
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.frameChild} />
          <div className={styles.frameItem} />
          <div className={styles.frameChild} />
          <div className={styles.frameChild1} />
          <div className={styles.frameChild1} />
          <div className={styles.frameChild1} />
        </div>

        <div className={styles.joinOurCommunityParent}>
          <div style={thirdFont.style} className={styles.joinOurCommunity1}>
            <h5 className="text-3xl">{t("communityhead")}</h5>
          </div>
          <div style={secondFont.style} className={styles.diveIntoA1}>
            {t("communityparagraph")}{" "}
          </div>

          <div
            className={styles.social}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "290px",
              gap: "20px",
            }}
          >
            <Image className={styles.groupIte} alt="" src={Github} />
            <Image className={styles.groupIte} alt="" src={Twitter} />
            <Image className={styles.groupIte} alt="" src={Linkedin} />
            <Image className={styles.groupIte} alt="" src={Notion} />
          </div>
        </div>
        <div className={styles.rectangleParent3}>
          <div className={styles.groupChild8} />
          <Image className={styles.maskGroupIcon4} alt="" src={Headlogo} />
          <div className={styles.mediaInquiresForCmaxContParent}>
            <div style={secondFont.style} className={styles.copyRight20231}>
              <Image style={{ margin: "auto" }} src={Copyright} alt="" />
            </div>
          </div>
          <div className={styles.tradeParent}>
            <div style={fourthFont.style} className={styles.trade}>
              <a href="/">
                <Image src={Homer} alt="" />{" "}
              </a>
            </div>
            <div style={fourthFont.style} className={styles.trade}>
              <a href="/trade">
                <Image src={Tradei} alt="" />{" "}
              </a>
            </div>
            <div style={fourthFont.style} className={styles.trade}>
              <a href="/stake">
                <Image src={Stakei} alt="" />{" "}
              </a>
            </div>
            <div style={fourthFont.style} className={styles.trade}>
              <a href="/about">
                <Image src={Abouti} alt="" />{" "}
              </a>
            </div>

            <div style={fourthFont.style} className={styles.trade}>
              <a href="/profile">Profile </a>
            </div>
          </div>
        </div>
      </div>
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
};

export default HomeIPadPro1291;

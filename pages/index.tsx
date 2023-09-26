import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./home.module.css";
import Image from "next/image";
import Btn from "../public/Rectangle 334.svg";
import Home from "../public/shutterstock_2152297015-[Converted] 1.png";
import Video from "../public/carbon_play-filled.svg";
import Headlogo from "../public/logs.png";
import Frame from "../public/Frame.svg";
import Stats from "../public/shutterstock_1007444929-[Converted] 1.png";
import One from "../public/one.png";
import Two from "../public/two.png";
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
import { useState } from "react";
import Navbar from "../components/navbar";
import Mobile from "../components/mobile";
import Ipad from "../components/ipadhome";
import i18n from "../utils/i18n";

import Tradei from '../public/montra.png';
import Stakei from '../public/mobst.png';
import Abouti from '../public/mobab.png';
import Termi from '../public/termi.png';

import Homei from '../public/hm.png';
import Stakes from '../public/st.png';
import Abouta from '../public/ab.png';
import Trades from '../public/tr.png';
import Whitepaper from '../public/whites.png';


import Homd from '../public/h.png';
import Treasury from '../public/txts.png';
import Discoverb from '../public/sb.png';
import Treasurysd from '../public/Treasury.png';
import Downloadwhite from '../public/Download Whitepaper.png';
import Starttrading from '../public/Start Trading.png';
import Seam from '../public/Seamless Financial Inclusion.png';
import Effort from '../public/Effortless Cross-Border Transactions.png';
import Watch from '../public/Watch Tutorial.png';
import Copyright from '../public/Copy Right 2023 - CMax. All Rights Reserved.png';

import Titas from '../public/Tita +24%.png';
import Tradingvol from '../public/Total Trading Volume.png';


import Joincom from '../public/jc.png';
import Downloadour from '../public/webs.png';

import { Select } from '@chakra-ui/react'




import Seamless from '../public/sf1.png';
import Reduced from '../public/rf3.png';
import Smartcont from '../public/sc2.png';
import Decentyralized from '../public/dc6.png';
import Effortless from '../public/ec5.png';
import Enhanceds from '../public/es4.png';




import Languageswitch from '../components/desktop';








import { useTranslation } from "react-i18next"; // important for translation. import in every page or component

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

import GenericNavbar from "@/components/GenericNavBar";

const HomepageBlack: NextPage = () => {
  const onTradeText1Click = useCallback(() => {
    // Add your code here
  }, []);

  const onStakeText1Click = useCallback(() => {
    // Add your code here
  }, []);

  const onAboutText1Click = useCallback(() => {
    // Add your code here
  }, []);

  const onEllipseIconClick = useCallback(() => {
    // Add your code here
  }, []);

  

  // important for translation. import in every page or component
  const { t, i18n } = useTranslation();
  // important for translation. import in every page or component
  const switchLanguage = (language: string | undefined) => {
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    if (
      !localStorage.getItem("lang") ||
      localStorage.getItem("lang") == "" ||
      localStorage.getItem("lang") == " "
    )
      localStorage.setItem("lang", "en");
  }, []);

  const handleLanguageChange = () => {
    i18n.changeLanguage(localStorage.getItem("lang")?.toString());
  };

  useEffect(() => {
	handleLanguageChange()
  }, [])

  return (
    <div>
      <div className={styles.mobile}>
        <Mobile />
      </div>
      
      <div className={styles.ipad}>
        <Ipad />
      </div>

      <div className={styles.homepageBlack}>
        

        <Image className={styles.homepageBlackChild} alt="" src={Flower} />
        <div className={styles.homepageBlackItem}></div>
        <div className={styles.homepageBlackInner}></div>
        <div className={styles.ellipseDiv} />
        <div className={styles.ellipseDivtwo} />
        <div className={styles.homepageBlackChild1} />
        <div className={styles.homepageBlackChild2} />
        <Image className={styles.homepageBlackChild3} alt="" src={Circ} />
        <Image className={styles.homepageBlackChild4} alt="" src={Circ} />
        <Image className={styles.homepageBlackChild5} alt="" src={Leftcir} />
        <div className={styles.homepageBlackChild6} />
        <Image className={styles.homepageBlackChild7} alt="" src={Circles} />
        <div className={styles.rwfa}>RWFA</div>

        <div style={fourthFont.style} className={styles.unveilingANew1}>
          {t("firsthead")}
          {/*
			This is how you implement the translation text : t('_key'). 
			The key of every entry is in the translation file (firsthead, secondhead, tradingbutton ... etc)
			*/}
        </div>
        <div style={myFont.style} className={styles.discoverTheRwfa}>
         {t("secondhead")}
        </div>
        <img className={styles.homepageBlackChild8} alt="" src="Group 7.svg" />
        <div className={styles.btnParent}>
          <div className={styles.btn}>
            <Image className={styles.btnChild} alt="" src={Btn} />
            <div style={thirdFont.style} className={styles.startTrading}>
              <a href="/trade">
                <h5 className="text-black text-base w-full text-center">{t('tradingbutton')}</h5>
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
            <h5 className="text-white text-lg mb-0">{t('watch')}</h5>
            </div>
          </div>
        </div>
        <div className={styles.rectangleDiv} />
        <div className={styles.text3}>{` `}</div>
        <div className={styles.frameParent}>
          <div className={styles.groupParent}>
            <div className={styles.downloadOurWhitePaperForIParent}>
              <div style={thirdFont.style} className={styles.downloadOurWhite1}>
              <h5 className="text-4xl ">{t('downloadhead')}</h5>
              </div>
              <div style={secondFont.style} className={styles.diveIntoThe1}>
                📥    {t("downloadparagraph")} 🚀
              </div>
            </div>
            <div className={styles.mingcutewallet4FillParent}>
              <Image
                className={styles.carbonplayFilledIcon1}
                alt=""
                src={Arrow}
              />
              <div
                style={thirdFont.style}
                className={styles.downloadWhitepaper}
              >
                <a href="https://moodglobalservices.notion.site/Coliseum-White-Paper-fa2c3eb3583b454a8a4d7ad8d4360391?pvs=4">
                <h5 className="text-black text-base mb-0">{t('downloadbutton')}</h5>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.frameGroup}>
              <Image className={styles.frameIcon} alt="" src={Frame} />
              <div className={styles.rwfaParent}>
                <div style={myFont.style} className={styles.rwfa1}>
                </div>
                <div style={myFont.style} className={styles.whitepaper}>
                <Image src={Whitepaper} alt="" />
                </div> 
              </div>
            </div>
          </div>
        </div>
        <div style={thirdFont.style} className={styles.discoverOurBenefits1}>
        <h5 className="text-5xl">{t('discoverbenefit')}</h5>
        </div>
        <div style={secondFont.style} className={styles.elevateYourFinancial1}>
         {t("discoverparagraph")}
        </div>
        <Image className={styles.maskGroupIcon} alt="" src={Headlogo} />
        <div className={styles.homepageBlackChild9} />
        <div className={styles.homepageBlackChild10} />
        <div className={styles.homepageBlackChild11} />
        <div className={styles.homepageBlackChild12} />
        <div className={styles.homepageBlackChild13} />
        <div className={styles.homepageBlackChild14} />
        <div
          style={myFont.style}
          className={styles.seamlessFinancialInclusion1}
        >
          <h5 className="text-2xl my-0">{t('benefithead')}</h5>
        </div>
        <div style={myFont.style} className={styles.decentralizedControl}>
        <h5 className="text-2xl my-0">{t('benefitheadsix')}</h5>
        </div>
        <Image className={styles.groupIcon1} alt="" src={Six} />
        <div style={myFont.style} className={styles.enhancedSecurity}>
        <h5 className="text-2xl my-0">{t('benefitheadfour')}</h5>
        </div>
        <div style={myFont.style} className={styles.smartContractCapabilities1}>
        <h5 className="text-2xl my-0">{t('benefitheadthree')}</h5>
        </div>
        <div style={myFont.style} className={styles.reducedFees}>
        <h5 className="text-2xl my-0">{t('benefitheadfive')}</h5>
        </div>
        <div
          style={myFont.style}
          className={styles.effortlessCrossBorderTransa1}
        >
           <h5 className="text-2xl my-0">{t('benefitheadtwo')}</h5>
        </div>
        <div style={secondFont.style} className={styles.joinAPlatform1}>
		{t("benefitparagraphone")}
        </div>
        <div style={secondFont.style} className={styles.enjoyThePower1}>
		{t("benefitparagraphsix")}
        </div>
        <div
          style={secondFont.style}
          className={styles.experienceEnhancedSecurity1}
        >
         {t("benefitparagraphfour")}
        </div>
        <div
          style={secondFont.style}
          className={styles.leverageSmartContracts1}
        >
           {t("benefitparagraphthree")}
        </div>
        <div style={secondFont.style} className={styles.benefitFromLower1}>
		{t("benefitparagraphfive")}
        </div>
        <div style={secondFont.style} className={styles.sendAndReceive1}>
		{t("benefitparagraphtwo")}
        </div>
        <Image className={styles.groupicon1} alt="" src={One} />
        <Image className={styles.groupIcon2} alt="" src={Fou} />
        <Image className={styles.groupIcon3} alt="" src={Two} />
        <Image className={styles.groupIcon4} alt="" src={Three} />
        <Image className={styles.groupIcon5} alt="" src={Fif} />

        <div className={styles.homepageBlackChild16}>
          <Footer />
        </div>

        <div className={styles.joinOurCommunityParent}>
          <div style={thirdFont.style} className={styles.joinOurCommunity1}>
          <h5 className="text-5xl">{t('communityhead')}</h5>
          </div>
          <div style={secondFont.style} className={styles.diveIntoA1}>
		  {t("communityparagraph")}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "294px",
              gap: "20px",
            }}
          >
            <Image className={styles.groupIte} alt="" src={Github} />
            <Image className={styles.groupIte} alt="" src={Twitter} />
            <Image className={styles.groupIte} alt="" src={Linkedin} />
            <Image className={styles.groupIte} alt="" src={Notion} />
          </div>
        </div>
        <div className={styles.homepageBlackChild17} />
        <Image
          className={styles.shutterstock2152297015ConveIcon}
          alt=""
          src={Home}
        />

        <div className={styles.homeParent}>
          <div style={fourthFont.style} className={styles.home}>
            <a href="/">
            <Image style={{width:'54px'}}    src={Homei} alt='' />

            </a>
          </div>
          <div style={fourthFont.style} className={styles.trade1}>
            <a href="/trade">
            <Image style={{width:'54px'}}    src={Tradei} alt='' />

            </a>
          </div>
          <div style={fourthFont.style} className={styles.trade1}>
            <a href="/stake">
            <Image style={{width:'54px'}}    src={Stakei} alt='' />

            </a>
          </div>
          <div style={fourthFont.style} className={styles.trade1}>
            <a href="/about">
            <Image style={{width:'54px'}}    src={Abouta} alt='' />

            </a>
          </div>
          <div style={fourthFont.style} className={styles.trade1}>
           
          </div>
        </div>


        <div className={styles.mingcutewallet4FillLang}>
        <Languageswitch />
        </div>
        
        


        <div className={styles.mingcutewallet4FillGroup}>
       


          <Image className={styles.carbonplayFilledIcon1} alt="" src={Wallet} />
          <ConnectWallet
            style={{
              textTransform: "uppercase",
              background: "none",
              fontWeight: "500",
              fontFamily: "__thirdFont_3ea4f2",
              border: "none",
              color: "black",
            }}
          />

  

        </div>

       



        <img className={styles.unionIcon4} alt="" src="Union.svg" />
        <Image className={styles.unionIcon5} alt="" src={Star} />
        <Image className={styles.homepageBlackChild5} alt="" src={Leftcir} />
        <div className={styles.rectangleGroup}>
          <div className={styles.groupInner} />
          <div className={styles.groupChild1} />
          <img
            className={styles.carbonplayFilledIcon2}
            alt=""
            src="carbon:play-filled.svg"
          />
        </div>
        <div
        
          style={thirdFont.style}
          className={styles.treasuryTokens1}
        >
          <h5 className="text-5xl">{t('treasuryhead')}</h5>
            </div>
        <div style={secondFont.style} className={styles.immerseYourselfIn1}>
		{t("treasuryparagraph")}
        </div>
        <Image className={styles.maskGroupIcon6} alt="" src={Stats} />
        <div className={styles.homepageBlackChild20} />
        <Image className={styles.frameIcon3} alt="" src={Green} />
        <div style={secondFont.style} className={styles.totalTradingVolume2}>
		{t("totaltrading")}
        </div>
        <div className={styles.homepageBlackChild21} />
        <Image className={styles.frameIcon4} alt="" src={White} />
        <div style={thirdFont.style} className={styles.cmax24}>
          Cmax +24%
        </div>
        <div style={secondFont.style} className={styles.totalTradingVolume3}>
		{t("totaltrading")}
        </div>
        <div style={thirdFont.style} className={styles.tita24}>
          Tita +24%
        </div>
        <div style={thirdFont.style} className={styles.div}>
          150.000.000,00 €
        </div>
        <div style={thirdFont.style} className={styles.treasury}>
          {t('treasury')}
        </div>
        <div style={thirdFont.style} className={styles.rsc}>
          150.000.000 RSC
        </div>
        <div className={styles.div1}>=</div>
      </div>
  

    </div>
  );
};

export default HomepageBlack;

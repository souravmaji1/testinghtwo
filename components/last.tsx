import type { NextPage } from 'next';
import { useState, useCallback } from 'react';

import MenuIPadPro1291 from "../components/menumobile";
import PortalPopup from "../components/portalpopup";
import Flower from '../public/Group 1000000920.png';
import localFont from 'next/font/local';
import Headlogo from '../public/logs.png';
import Wallet from '../public/mingcute_wallet-4-fill.svg';
import User from '../public/Ellipse 59.svg';
import Circles from '../public/Group 6.png';
import Snake from '../public/Vector 19.png';
import Image from 'next/image';
import Sidecircle from '../public/Group 8.png';
import Head from 'next/head';
import Star from '../public/Union.png';
import Abouts from '../public/aboutbac.png';
import Sociallin from '../public/Group 87.svg';
import Brother from '../public/Mask Group.svg';
import { ConnectWallet } from '@thirdweb-dev/react';
import Navbar from '../components/navbar';
import Footer from '../components/aboutfooter';
import Box from '@mui/material/Box';
import About from '../public/image 1.png';
import Aboutmobile from '../components/last';
import Navbs from '../public/dd.svg';
import Github from '../public/mdi_github.svg';
import Twitter from '../public/mdi_twitter.svg';
import Linkedin from '../public/entypo-social_linkedin-with-circle.svg';
import Notion from '../public/mingcute_notion-fill.svg';
import { useTranslation } from "react-i18next";

import Tradei from '../public/montra.png';
import Stakei from '../public/mobst.png';
import Abouti from '../public/mobab.png';
import Termi from '../public/termi.png';
import Roadmap from '../public/Road Map.png';
import Abs from '../public/a.png';
import Abtus from '../public/About Us.png';
import Joincom from '../public/Join our community.png';
import Copyright from '../public/Copy Right 2023 - CMax. All Rights Reserved.png';
import Homer from '../public/hsss.png';

import F from '../public/Q1.png';
import S from '../public/Q2.png';
import T from '../public/Q3.png';
import Fo from '../public/Q4.png';
import LanguageSelector from './mobilelang';




const myFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/MonumentExtended-Regular.otf"});
const secondFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Light.otf"});
const thirdFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Medium.otf"});
const fourthFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Regular.otf"});


import styles from './last.module.css';
const AboutIPadPro1293:NextPage = () => {
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
	
	  };
  	
  	return (<>
    		<div className={styles.aboutIpadPro1293}>
      			<Image className={styles.aboutIpadPro1293Child} alt="" src={Flower} />
      			<div className={styles.aboutIpadPro1293Item} />
      			<Image className={styles.maskGroupIcon} alt="" src={Headlogo} />
      		
      			<div className={styles.joinOurCommunityParent}>
        				<div style={thirdFont.style} className={styles.joinOurCommunity1}>
							<Image src={Joincom} alt='' />
							  </div>
        				<div  style={secondFont.style}  className={styles.diveIntoA1}>{t("communityparagraph")}  </div>
        			

                        <div style={{display:'flex',alignItems:"center",justifyContent:'center',marginTop:'310px',gap:'20px'}}>
						<Image className={styles.groupIte} alt="" src={Github} />
						<Image className={styles.groupIte} alt="" src={Twitter} />
						<Image className={styles.groupIte} alt="" src={Linkedin} />
						<Image className={styles.groupIte} alt="" src={Notion} />
							</div>  


      			</div>

				  <div className={styles.languageone}>
				<LanguageSelector />
				</div>

      			<div className={styles.rectangleParent}>
        				<div className={styles.groupInner} />
        				<Image className={styles.maskGroupIcon3} alt="" src={Headlogo} />
        				<div className={styles.mediaInquiresForCmaxContParent}>
          					
          					<div className={styles.copyRight20231}>
								<Image style={{margin:"auto"}} src={Copyright} alt='' />
								  </div>
        				</div>
        				<div className={styles.tradeParent}>
						<div className={styles.trade}>< a href='/'>
							  <Image src={Homer} alt='' />
								</a>  </div>
          					<div className={styles.trade}>< a href='/trade'>
							  <Image src={Tradei} alt='' />
								</a>  </div>
          					<div className={styles.trade}>< a href='/stake'>
							  <Image src={Stakei} alt='' />
								</a>  </div>
          					<div className={styles.trade}>< a href='/about'>
							  <Image src={Abouti} alt='' />
								</a>  </div>
          				
          					<div style={{fontFamily:'sans-serif'}} className={styles.trade}>< a href='/profile'>
							  Profile
								</a>  </div>
        				</div>
      			</div>
      			<div className={styles.aboutParent} onClick={openMenuIPadPro1291}>
        				
        				<Image className={styles.rimenuFillIcon1} alt="" src={Navbs} />
      			</div>
      			<div style={myFont.style}  className={styles.aboutUs}>
					<Image src={Abtus} alt='' />
					  </div>
      			<div style={thirdFont.style}   className={styles.roadMap}> 
				<Image src={Roadmap} alt='' />
				  </div>
      			
      	
      			<div className={styles.loremIpsumDolorContainer}>
        				<p  style={secondFont.style}  className={styles.blankLine}>{t("aboutparagraph")}  </p>
        				<p  style={secondFont.style}  className={styles.blankLine}>&nbsp;</p>
        			
      			</div>
      			<div className={styles.loremIpsumDolorContainer1}>
        				<p style={secondFont.style}  className={styles.blankLine}>{t("roadmapparagraph")}   </p>
        				<p    className={styles.blankLine}>&nbsp;</p>
        				
      			</div>
      			<div className={styles.loremIpsumDolorContainer2}>
				  <div style={thirdFont.style}  className={styles.ourVision1}>{`Audit`}</div>
        				<p style={secondFont.style}   className={styles.blankLine}>{t("auditparagraph")}  </p>
        				<p className={styles.blankLine}>&nbsp;</p>
        				
      			</div>
      			<img className={styles.aboutIpadPro1293Inner} alt="" src="Vector 20.svg" />
      			
      			
      			<div className={styles.vectorContainer}>
        				<img className={styles.groupChild1} alt="" src="Vector 21.svg" />
        			
        				<div className={styles.groupParent2}>
          					<div className={styles.ellipseParent2}>
            						<div className={styles.groupChild5} />
            						<div className={styles.rectangleDiv} />
            						<div style={myFont.style}     className={styles.q1}>
										<Image src={F} alt='' />
									</div>
            						<div className={styles.distributionTokenCbcContainer}>
              							<p  style={fourthFont.style}  className={styles.blankLine}>{t("roadmapone")}  </p>
            						</div>
          					</div>
          					<div className={styles.ellipseParent2}>
            						<div className={styles.groupChild6} />
            						<div className={styles.groupChild7} />
            						<div style={myFont.style}   className={styles.q2}>
										<Image src={S} alt='' />
									</div>
            						<div className={styles.distributionTokenCbcContainer1}>
              							<p style={fourthFont.style}   className={styles.blankLine}>{t("roadmapthree")}  </p>
              						
            						</div>
          					</div>
          					<div className={styles.ellipseParent4}>
            						<div className={styles.groupChild8} />
            						<div className={styles.groupChild9} />
            						<div style={myFont.style}   className={styles.q3}>
									<Image src={Fo} alt='' />
									</div>
            						<div className={styles.distributionTokenCbcContainers}>
              							<p style={fourthFont.style}   className={styles.blankLine}>{t("roadmapfour")}  </p>
              						
            						</div>
          					</div>
          					<div className={styles.ellipseParent2}>
            						<div className={styles.groupChild10} />
            						<div className={styles.groupChild7} />
            						<div style={myFont.style}   className={styles.q2}>
										<Image src={T} alt='' />
									</div>
            						<div className={styles.distributionTokenCbcContainer3}>
              							<p style={fourthFont.style}  className={styles.blankLine}>{t("roadmaptwo")}  </p>
              						
            						</div>
          					</div>
        				</div>
        				<img className={styles.groupChild12} alt="" src="Vector 22.svg" />
        				<img className={styles.groupChild13} alt="" src="Vector 23.svg" />
        				<img className={styles.groupChild14} alt="" src="Vector 24.svg" />
        				<img className={styles.groupChild15} alt="" src="Vector 25.svg" />
      			</div>
    		</div>
    		{isMenuIPadPro1291Open && (
      			<PortalPopup
        				overlayColor="rgba(113, 113, 113, 0.3)"
        				placement="Centered"
        				
        				
        				
        				
        				
        				onOutsideClick={closeMenuIPadPro1291}
        				>
        				<MenuIPadPro1291  />
      			</PortalPopup>
    		)}</>);
};

export default AboutIPadPro1293;

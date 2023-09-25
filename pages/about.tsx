import type { NextPage } from 'next';
import { useCallback } from 'react';
import styles from './about.module.css';
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
import Footer from '../components/lastfooter';
import Box from '@mui/material/Box';
import About from '../public/image 1.png';
import Aboutmobile from '../components/last';
import IpadAbout from '../components/ipadabout';
import { useTranslation } from "react-i18next";
import Tradei from '../public/montra.png';
import Stakei from '../public/mobst.png';
import Abouti from '../public/mobab.png';
import Termi from '../public/termi.png';
import Languageswitch from '../components/desktop';
import Homei from '../public/hm.png';
import Stakes from '../public/st.png';
import Abouta from '../public/ab.png';
import Trades from '../public/tr.png';
import Roadmap from '../public/Road Map.png';
import Aboutus from '../public/aust.png';

const myFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/MonumentExtended-Regular.otf"});
const secondFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Light.otf"});
const thirdFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Medium.otf"});
const fourthFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Regular.otf"});


const HomepageAbout:NextPage = () => {
  	
  	const onHomeTextClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onTradeText1Click = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onStakeText1Click = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onEllipseIconClick = useCallback(() => {
    		// Add your code here
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
		<div>

<div className={styles.mobile}>
	  <Aboutmobile />
	</div>
	<div className={styles.ipadabout}>
	  <IpadAbout />
	</div>

    		<div className={styles.homepageAbout}>
      			<div className={styles.homepageAboutChild} />
      			<Image className={styles.homepageAboutItem} alt="" src={Circles} />
      			<div className={styles.rwfa}>RWFA</div>
      			<img className={styles.homepageAboutInner} alt="" src="Group 7.svg" />
      			<Image className={styles.maskGroupIcon} alt="" src={Headlogo} />
      			<div className={styles.rectangleDiv} />
      			<div className={styles.maskGroupParent}>
				  <div className={styles.homepageBlackChild16} >
					<Footer />
					</div>
        				
        				<div className={styles.mediaInquiresForCmaxContParent}>
          					
        				</div>
        				<div className={styles.tradeParent}>
          				
        				</div>
      			</div>

				  <div className={styles.navbars}>
				<Navbar />
			  </div>




      			<div className={styles.homeParent}>
        				<div  style={fourthFont.style}  className={styles.home} onClick={onHomeTextClick}><a href ='/'>
						<Image style={{width:'54px'}}    src={Homei} alt='' />
							</a></div>
        				<div style={fourthFont.style}  className={styles.home} onClick={onTradeText1Click}><a href ='/trade'>
						<Image style={{width:'54px'}}    src={Tradei} alt='' />
							</a></div>
        				<div style={fourthFont.style}  className={styles.home} onClick={onStakeText1Click}><a href ='/stake'>
						<Image style={{width:'54px'}}    src={Stakei} alt='' />
							</a> </div>
        				<div style={fourthFont.style}   className={styles.about1}><a href ='/about'>
						<Image style={{width:'54px'}}    src={Abouta} alt='' />
							</a></div>
						
      			</div>

				  <div className={styles.mingcutewallet4FillLang}>
        <Languageswitch />
        </div>
        
    
      			<div className={styles.mingcutewallet4FillParent}>
        				<Image className={styles.mingcutewallet4FillIcon1} alt="" src={Wallet} />
        				<div className={styles.connectWallet}>
						<ConnectWallet
						
						style={{textTransform:'uppercase',background:'none',fontWeight:'500',fontFamily:'__thirdFont_3ea4f2',border:'none'}}
						/>
						</div>
      			</div>
      			<Image className={styles.unionIcon2} alt="" src={Star} />
      			<img className={styles.unionIcon3} alt="" src="Union.svg" />
      			<div style={myFont.style} className={styles.aboutUs}>
					<Image src={Aboutus} alt='' />
				</div>
      			<div style={thirdFont.style} className={styles.ourVision1}>{`Audit`}</div>
      			<div style={thirdFont.style} className={styles.roadMap}>
					<Image src={Roadmap} alt='' />
					   </div>
      			<div className={styles.loremIpsumDolorContainer}>
        				<p style={secondFont.style} className={styles.blankLine}>{t("aboutparagraph")}  </p>
        				<p className={styles.blankLine}>&nbsp;</p>
        				
      			</div>
      			<div className={styles.loremIpsumDolorContainer1}>
        				<p style={secondFont.style} className={styles.blankLine}>{t("auditparagraph")}  </p>
        				<p style={secondFont.style} className={styles.blankLine}>&nbsp;</p>
        				
      			</div>
      			<div style={secondFont.style} className={styles.loremIpsumDolor7}>{t("roadmapparagraph")}  </div>
      		
      			<div className={styles.vectorParent}>
        				<Image className={styles.groupItem} alt="" src={Snake} />
        		
        				
        				<div className={styles.frameDiv} />
        				<div className={styles.groupChild3} />
        				<div className={styles.groupChild4} />
        				<div className={styles.groupChild5} />
        				<div className={styles.groupChild6} />
        				<div className={styles.groupChild7} />
        				<div className={styles.groupChild8} />
        				<div className={styles.groupChild9} />
        				<div className={styles.groupChild10} />
        				<div style={myFont.style}   className={styles.q1}>Q3 2023</div>
        				<div style={myFont.style}  className={styles.q3}>Q1 2024</div>
        				<div  style={myFont.style} className={styles.q2}>Q2</div>
        				<div  style={myFont.style} className={styles.q4}>Q4 2025</div>
        				<div className={styles.distributionTokenCbcContainer}>
          					<p style={fourthFont.style} className={styles.blankLine}>{t("roadmapone")}  </p>
          					
        				</div>
        				<div className={styles.distributionTokenCbcContainer1}>
          					<p style={fourthFont.style} className={styles.blankLine}> {t("roadmapthree")} </p>
          				
        				</div>
        				<div className={styles.distributionTokenCbcContainer2}>
          					<p style={fourthFont.style} className={styles.blankLine}> {t("roadmaptwo")} </p>

        				</div>
        				<div className={styles.distributionTokenCbcContainer3}>
          					<p style={fourthFont.style} className={styles.blankLine}> {t("roadmapfour")} </p>
          					
        				</div>
      			</div>
      			<Image className={styles.rectangleIcon} alt="" src={Abouts} />
      			
    		</div>
			
			</div>
			);
};

export default HomepageAbout;

import type { NextPage } from 'next';
import { useCallback } from 'react';
import styles from './trade.module.css';
import Frame from '../public/Frame.png';
import Image from 'next/image';
import Fx from '../public/fifth.png';
import Fr from '../public/fourth.png';
import Ft from '../public/sec.png';
import Fa from '../public/sixth.png';
import Fe from '../public/sec.png';
import Fs from '../public/tita.png';
import Sear from '../public/Vector.svg';
import User from '../public/Ellipse 59.svg';
import Wallet from '../public/mingcute_wallet-4-fill.svg';
import Headlogo from '../public/logs.png';
import Circles from '../public/Group 6.png';
import Star from '../public/Union.png';
import Rectangle from '../public/Rectangle 349.png';
import Flower from '../public/Group 1000000920.png';
import { ConnectWallet } from '@thirdweb-dev/react';
import localFont from 'next/font/local';
import Link from 'next/link';
import Stats from '../public/grk.png';
import Github from '../public/mdi_github.svg';
import Twitter from '../public/mdi_twitter.svg';
import Linkedin from '../public/entypo-social_linkedin-with-circle.svg';
import Notion from '../public/mingcute_notion-fill.svg';
import Sliders from '../components/slider';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Footer from '../components/aboutfooter';
import Navbar from '../components/simplenavbar';

import Trademobile from '../components/trademobile';
import Ipadtrade from '../components/ipadtrade';
import { useTranslation } from "react-i18next";

import Homei from '../public/hm.png';
import Stakes from '../public/st.png';
import Abouta from '../public/ab.png';
import Trades from '../public/tr.png';
import Trendingp from '../public/tp.png';
import Joincom from '../public/jc.png';
import Languageswitch from '../components/desktop';

const myFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/MonumentExtended-Regular.otf"});
const secondFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Light.otf"});
const thirdFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Medium.otf"});
const fourthFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Regular.otf"});

const HomepageTrade:NextPage = () => {
  	
  	const onHomeTextClick = useCallback(() => {
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
  	
  	
  	const onGroupContainer2Click = useCallback(() => {
    	  // Add your code here
  	}, []);
  	
  	
  	const onGroupContainer3Click = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onGroupContainer4Click = useCallback(() => {
    		// Add your code here
  	}, []);

	// important for translation. import in every page or component
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

<div className={styles.tade}>
	  <Trademobile />
	</div>


	<div className={styles.ipadtrade}>


<Ipadtrade />


</div>





    		<div className={styles.homepageTrade}>
      			<Image className={styles.homepageTradeChild} alt="" src={Flower} />
      			<div className={styles.homepageTradeItem} />
      			<Image className={styles.homepageTradeInner} alt="" src={Circles} />
      			<div className={styles.rwfa}>RWFA</div>
      			<img className={styles.homepageTradeChild1} alt="" src="Group 7.svg" />
      			<Image className={styles.maskGroupIcon} alt="" src={Headlogo} />
      			
      			<div className={styles.rectangleDiv} >
					<Footer />
					</div>
      			
      			
      			
      			<div className={styles.joinOurCommunityParent}>
        				<div style={thirdFont.style} className={styles.joinOurCommunity1}>
							<Image style={{margin:"auto"}} src={Joincom} alt='' />
						</div>
        				<div style={secondFont.style} className={styles.diveIntoA1}>{t("communityparagraph")}</div>
        				<div style={{display:'flex',alignItems:"center",justifyContent:'center',marginTop:'359px',gap:'20px'}}>
						<Image className={styles.groupIte} alt="" src={Github} />
						<Image className={styles.groupIte} alt="" src={Twitter} />
						<Image className={styles.groupIte} alt="" src={Linkedin} />
						<Image className={styles.groupIte} alt="" src={Notion} />
							</div>  
      			</div>

				  <div className={styles.navbars}>
				<Navbar />
			  </div>


				
      			<div className={styles.homeParent}>
        				<div style={fourthFont.style} className={styles.home} ><a href='/'>
							<Image style={{width:'54px'}}    src={Homei} alt='' />
							</a></div>
        				<div style={fourthFont.style} className={styles.trade1}><a href='/trade'>
						<Image  style={{width:'54px'}}   src={Trades} alt='' />
							</a></div>
        				<div style={fourthFont.style} className={styles.home} ><a href='/stake'>
						<Image  style={{width:'54px'}}  src={Stakes} alt='' />
							</a></div>
						<div style={fourthFont.style} className={styles.home} ><a href='/about'>
						<Image  style={{width:'54px'}}  src={Abouta} alt='' />
							</a></div>
        				
      			</div>

				  <div className={styles.mingcutewallet4FillLang}>
        <Languageswitch />
        </div>
        


      			
      			<div className={styles.mingcutewallet4FillParent}>
        				<Image className={styles.mingcutewallet4FillIcon1} alt="" src={Wallet} />
						<ConnectWallet
						
						style={{textTransform:'uppercase',background:'none',fontWeight:'500',fontFamily:'__thirdFont_3ea4f2',border:'none'}}
						/>
      			</div>
      			
      			<Image className={styles.unionIcon3} alt="" src={Star} />
      			<div className={styles.homepageTradeChild3} />
      			<div className={styles.homepageTradeChild4} />
      			<div className={styles.homepageTradeChild5} />

				 







			<div style={myFont.style} className={styles.comingSoon}>{t("comingsoon")}</div>
      			<div style={myFont.style}  className={styles.comingSoon1}>{t("comingsoon")}</div>
      			<div style={myFont.style}  className={styles.comingSoon2}>{t("comingsoon")}</div>
				  <Link href="/mint">
      			<div className={styles.rectangleParent} onClick={onGroupContainer2Click}>





					
        				<div className={styles.groupItem} />
        				<div style={myFont.style}  className={styles.titaEtf}>Tita ETF</div>
        				<div className={styles.vectorParent}>
          					<Image className={styles.vectorIcon4} alt="" src={Sear} />
          					<div style={{fontFamily:'Inter'}} className={styles.trade}>8%</div>
        				</div>
        				<Image className={styles.frameIcon2} alt="" src={Stats} />
      			</div>
				</Link>
      			<div className={styles.rectangleGroup} onClick={onGroupContainer3Click}>
        				<div className={styles.groupItem} />
        				<div className={styles.vectorGroup}>
          					
          					
        				</div>
        				<div style={myFont.style} className={styles.tusaEtf}>{t("comingsoon")}</div>
        				<Image className={styles.frameIcon3} alt="" src={Frame} />
      			</div>
      			<div className={styles.rectangleContainer} onClick={onGroupContainer4Click}>
        				<div className={styles.groupItem} />
        				<div className={styles.vectorContainer}>
          					<Image className={styles.vectorIcon4} alt="" src={''} />
          				
        				</div>
        				<div style={myFont.style} className={styles.tgermEtf}>{t("comingsoon")}</div>
        				<Image className={styles.frameIcon4} alt="" src={Frame} />
      			</div>
      			<Image className={styles.frameIcon5} alt="" src={Frame} />
      			<Image className={styles.frameIcon6} alt="" src={Frame} />
      			<Image className={styles.frameIcon7} alt="" src={Frame} />
      			<div className={styles.groupDiv}>
        				<div className={styles.groupChild2} />
        				<div className={styles.groupChild3} />
        				<div className={styles.groupChild4} />
        				<div className={styles.groupChild5} />
        				<div className={styles.groupChild6} />
        				<div className={styles.groupChild7} />
        				<div style={thirdFont.style}  className={styles.trendingProducts}> 
						<Image src={Trendingp} alt='' />
						 </div>
        				<div  style={secondFont.style}    className={styles.tita}>Tita</div>
        				<div style={secondFont.style}  className={styles.aptos}> {t("comingsoon")} </div>
        				<div style={secondFont.style}   className={styles.quant}>{t("comingsoon")} </div>
        				<div style={secondFont.style}  className={styles.pepe}>{t("comingsoon")}  </div>
        				<div style={secondFont.style}   className={styles.shibaInu}>{t("comingsoon")} </div>
        				<div style={secondFont.style}  className={styles.worldcoin}>{t("comingsoon")}  </div>
        				
        				
        				<Image className={styles.groupChild8} alt="" src={Fs} />
        				
        				<div className={styles.polygonParent}>
          					<img className={styles.frameChild} alt="" src="Polygon 3.svg" />
          					<div style={thirdFont.style}    className={styles.div9}>1,2%</div>
        				</div>
        			
      			</div>
      			
      			
    		</div>
			</div>
			
			
			);
};

export default HomepageTrade;

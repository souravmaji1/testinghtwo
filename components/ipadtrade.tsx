import type { NextPage } from 'next';
import { useCallback } from 'react';
import styles from './ipadtrade.module.css';


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
import Footer from '../components/ipadfooter';
import Navbar from '../components/simplenavbar';

import Trademobile from '../components/trademobile';
import Ipadtrade from '../components/ipadtrade';

import Tradei from '../public/montra.png';
import Stakei from '../public/mobst.png';
import Abouti from '../public/mobab.png';
import Termi from '../public/termi.png';

import Homei from '../public/hm.png';
import Stakes from '../public/st.png';
import Abouta from '../public/ab.png';
import Trades from '../public/tr.png';
import Trending from '../public/stp.png';

const myFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/MonumentExtended-Regular.otf"});
const secondFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Light.otf"});
const thirdFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Medium.otf"});
const fourthFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Regular.otf"});

import Languageswitch from '../components/desktop';

import { useTranslation } from "react-i18next";

import Joins from '../public/jocs.png';
import Homer from '../public/hsss.png';




const TradeIPadPro1292:NextPage = () => {
  	
  	const onHomeTextClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onStakeTextClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onAboutTextClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onEllipseIconClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onGroupContainer3Click = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onGroupContainer4Click = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onGroupContainer5Click = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onEllipseIcon7Click = useCallback(() => {
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
    		<div className={styles.tradeIpadPro1292}>
      			<Image className={styles.circleBgIcon} alt="" src={Circles} />
      			<div className={styles.tradeIpadPro1292Child} />
      			<img className={styles.tradeIpadPro1292Item} alt="" src="Group 1000000920.png" />
      			<div className={styles.joinOurCommunityParent}>
        				<div style={thirdFont.style}   className={styles.joinOurCommunity1}> 
						<Image style={{margin:"auto"}} src={Joins} alt='' />
						 </div>
        				<div style={secondFont.style}   className={styles.diveIntoA1}>  {t("communityparagraph")} </div>
        				<img className={styles.groupChild} alt="" src="Group 2.png" />
      			</div>
      			<Image className={styles.maskGroupIcon} alt="" src={Headlogo} />
      			<div className={styles.homeParent}>
        				<div style={fourthFont.style}  className={styles.home}><a href='/'>
						<h5 className='text-base text-white my-0 mx-1'>{t('home')}</h5>
							</a></div>
        				<div style={fourthFont.style}   className={styles.trade} ><a href='/trade'>
						<h5 className='text-base text-white my-0 mx-1'>Trade</h5>
							</a></div>
        				<div style={fourthFont.style}  className={styles.trade} ><a href='/stake'>
						<h5 className='text-base text-white my-0 mx-1'>Stake</h5>
							</a></div>
        				<div style={fourthFont.style}  className={styles.trade} ><a href='/about'>
						<h5 className='text-base text-white my-0 mx-1'>{t('about')}</h5>
							</a></div>

							<div style={fourthFont.style}  className={styles.trade} ><a href='/profile'>
						  Profile
							</a></div>
						
      			</div>

				  <div className={styles.mingcutewallet4FillLang}>
        <Languageswitch />
        </div>
      			
      			<div className={styles.mingcutewallet4FillParent}>
        				<Image className={styles.mingcutewallet4FillIcon1} alt="" src={Wallet} />
        				<div className={styles.connectWallet}>
						<ConnectWallet
						
						style={{textTransform:'uppercase',background:'none',fontWeight:'500',fontFamily:'__thirdFont_3ea4f2',border:'none',color:'black',fontSize:'13px'}}
						/>
						</div>
      			</div>
      			<img className={styles.unionIcon2} alt="" src="Union.png" />
      			<img className={styles.unionIcon3} alt="" src="Union.png" />
      	
      			<div className={styles.rectangleParent}>
        				<div className={styles.groupItem} />
        				<div className={styles.maskGroupParent}>
          					<Footer />
        				</div>
      			</div>
      			<div className={styles.rectangleGroup} onClick={onGroupContainer3Click}>
        				<div className={styles.groupInner} />
						<Link href='/mint'>
        				<div style={myFont.style}    className={styles.titaEtf}><a href='/mint'>Tita ETF</a></div>
        				<div className={styles.vectorParent}>
          					<img className={styles.vectorIcon4} alt="" src="Vector.png" />
          					<div className={styles.div}>8%</div>
        				</div>
        				<Image className={styles.frameIcon2} alt="" src={Stats} />
						</Link>
      			</div>
      			<div className={styles.rectangleContainer} onClick={onGroupContainer4Click}>
        				<div className={styles.groupInner} />
        				<div className={styles.vectorGroup}>
          					<img className={styles.vectorIcon4} alt="" src="Vector.png" />
          					
        				</div>
        				<div style={myFont.style}   className={styles.tusaEtf}> {t("comingsoon")}  </div>
        				<img className={styles.frameIcon3} alt="" src="Frame.png" />
      			</div>
      			<div className={styles.groupDiv} onClick={onGroupContainer5Click}>
        				<div className={styles.groupInner} />
        				<div className={styles.vectorContainer}>
          					<img className={styles.vectorIcon4} alt="" src="Vector.png" />
          				
        				</div>
        				<div style={myFont.style}   className={styles.tgermEtf}> {t("comingsoon")}  </div>
        				<img className={styles.frameIcon4} alt="" src="Frame.png" />
      			</div>
      			<div className={styles.rectangleParent1}>
        				<div className={styles.groupChild2} />
        				<div style={myFont.style}   className={styles.comingSoon}> {t("comingsoon")}  </div>
        				<img className={styles.frameIcon5} alt="" src="Frame.png" />
      			</div>
      			<div className={styles.rectangleParent2}>
        				<div className={styles.groupChild2} />
        				<div style={myFont.style}    className={styles.comingSoon1}>{t("comingsoon")}   </div>
        				<img className={styles.frameIcon6} alt="" src="Frame.png" />
      			</div>
      			<div className={styles.rectangleParent3}>
        				<div className={styles.groupChild2} />
        				<div style={myFont.style}   className={styles.comingSoon2}>{t("comingsoon")}   </div>
        				<img className={styles.frameIcon7} alt="" src="Frame.png" />
      			</div>
      			
      			<div className={styles.parent}>
        				<div className={styles.div3}>1</div>
        				<div className={styles.ellipseParent}>
          					<Image className={styles.frameChild} alt="" src={Fs} />
          					<div  style={secondFont.style}  className={styles.tita}>tita</div>
        				</div>
        				<div className={styles.polygonParent}>
          					<img className={styles.frameItem} alt="" src="Polygon 3.png" />
          					<div  style={thirdFont.style}   className={styles.tita}>1,2%</div>
        				</div>
      			</div>
      			<div className={styles.container}>
        				<div className={styles.div3}>2</div>
        				<div className={styles.ellipseParent}>
          				
          					<div style={secondFont.style}   className={styles.tita}> {t("comingsoon")}  </div>
        				</div>
        				<div className={styles.polygonGroup}>
          					
          					<div className={styles.tita}></div>
        				</div>
      			</div>
      			<div className={styles.parent1}>
        				<div className={styles.div3}>3</div>
        				<div className={styles.ellipseParent}>
          					
          					<div style={secondFont.style}   className={styles.tita}> {t("comingsoon")}  </div>
        				</div>
        				<div className={styles.polygonParent}>
          				
          					
        				</div>
      			</div>
      			<div className={styles.parent2}>
        				<div className={styles.div3}>4</div>
        				<div className={styles.ellipseParent}>
          					
          					<div  style={thirdFont.style}  className={styles.tita}>{t("comingsoon")}   </div>
        				</div>
        				<div className={styles.polygonGroup}>
          				
          				
        				</div>
      			</div>
      			<div className={styles.parent3}>
        				<div className={styles.div3}>5</div>
        				<div className={styles.ellipseParent}>
          				
          					<div style={secondFont.style}   className={styles.tita}>{t("comingsoon")}   </div>
        				</div>
        				<div className={styles.polygonGroup}>
          			
          			
        				</div>
      			</div>
      			<div className={styles.parent4}>
        				<div className={styles.div3}>6</div>
        				<div className={styles.ellipseParent}>
          					
          					<div style={secondFont.style}  className={styles.tita}>{t("comingsoon")}   </div>
        				</div>
        				<div className={styles.polygonParent}>
          				
          			
        				</div>
      			</div>
      			<div style={thirdFont.style}   className={styles.trendingProducts}>
					<Image src={Trending} alt='' />
					  </div>
      			
    		</div>);
};

export default TradeIPadPro1292;

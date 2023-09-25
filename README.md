<div style={secondFont.style}  className={styles.ter033}>TER → 0.33%</div>


   <div className="language-switcher" style={{background:'red'}}>
      <button onClick={() => switchLanguage('en')}>English</button>
      <button onClick={() => switchLanguage('fr')}>French</button>
      <button onClick={() => switchLanguage('es')}>Spanish</button>
      {/* Add more language buttons as needed */}
    </div>   
    

    	  <Select
		style={{borderRadius:"10px",border:"1px solid #ffe500",background:'none',color:'white',fontFamily:"__thirdFont_3ea4f2"}}
        placeholder={t('Select Language')} // Replace with your translation key
        value={selectedLanguage}
        onChange={(e) => switchLanguage(e.target.value)}
      >
        <option  value="en">
			EN
		</option>
        <option value="fr">Fr</option>
		<option value="it">It</option>
        {/* Add more language options as needed */}
      </Select>

https://codepen.io/abhishek/pen/DgNRLe
https://codepen.io/kairij/pen/PvOGpy
https://codepen.io/donth77/pen/BaqVLXd

  <meta name="google" content="notranslate" />


import type { NextPage } from 'next';
import { useCallback, useEffect } from 'react';
import {useRouter} from "next/router";
import styles from './menu.module.css';
import Headlogo from '../public/logs.png';
import { ConnectWallet } from '@thirdweb-dev/react';
import Image from 'next/image';
import Home from '../public/Home.png';
import Trade from '../public/Trade.png';
import Stake from '../public/Stake.png';
import Profile from '../public/Profile.png';
import About from '../public/About.png';




import Github from '../public/mdi_github.svg';
import Twitter from '../public/mdi_twitter.svg';
import Linkedin from '../public/entypo-social_linkedin-with-circle.svg';
import Notion from '../public/mingcute_notion-fill.svg';

import localFont from 'next/font/local';

import Wallet from '../public/mingcute_wallet-4-fill.svg';
import User from '../public/rrr.jpg';
import Circles from '../public/Group 6.png';
import Snake from '../public/Vector 19.png';

import { useTranslation } from "react-i18next";
import React from 'react';
import { useState } from 'react';

import { Select, Box, Flex } from '@chakra-ui/react';


import Engli from '../public/Mobile-land.png';

const myFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/MonumentExtended-Regular.otf"});
const secondFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Light.otf"});
const thirdFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Medium.otf"});
const fourthFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Regular.otf"});

import LanguageSelector from './selectcoun';



type MenuIPadPro1291Type = {
  	onClose?: () => void;
}

const MenuIPadPro1291:NextPage<MenuIPadPro1291Type> = ({ onClose }) => {
  	const router = useRouter();
  	
  	const onHomeTextClick = useCallback(() => {
    		router.push("/");
  	}, [router]);
  	
  	
  	const onTradeTextClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onStakeTextClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onAboutTextClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onProfileTextClick = useCallback(() => {
    		// Add your code here
  	}, []);

	  const [selectedLanguage, setSelectedLanguage] = useState('en');

	  const { t, i18n } = useTranslation();

	 

	  
  // important for translation. import in every page or component
  const switchLanguage = (language: string) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
  };

 

  // ... (return statement)


  	
  	return (
    		<div className={styles.menuIpadPro1291}>
      			<img className={styles.unionIcon1} alt="" src="Union.svg" />
      			<Image className={styles.maskGroupIcon} alt="" src={Headlogo} />
      			<div style={myFont.style}   className={styles.home} onClick={onHomeTextClick}><a href='/'>
					<Image src={Home} alt='' />
					 </a></div>
      			<div style={myFont.style}    className={styles.trade} onClick={onTradeTextClick}><a href='/trade'> 
				  <Image src={Trade} alt='' />
				
				 </a></div>
      			<div  style={myFont.style}   className={styles.stake} onClick={onStakeTextClick}><a href='/stake'> 
				  <Image src={Stake} alt='' />
				
				  </a></div>
      			<div style={myFont.style}    className={styles.about} onClick={onAboutTextClick}><a href='/profile'> 
				  <Image src={Profile} alt='' />
				
				  </a></div>
      			<div style={myFont.style}    className={styles.profile} onClick={onProfileTextClick}><a href='/about'> 
				  <Image src={About} alt='' />
				
				   </a></div>
      			<div className={styles.menuIpadPro1291Child} />
      			<div className={styles.menuIpadPro1291Item} />
      			<div className={styles.menuIpadPro1291Inner} />
      			<div className={styles.rectangleDiv} />
      			<div className={styles.mingcutewallet4FillParent}>
        				<Image className={styles.mingcutewallet4FillIcon1} alt="" src={Wallet} />
        				<div className={styles.connectWallet}>
				
						<ConnectWallet
						
						style={{textTransform:'uppercase',background:'none',fontWeight:'500',fontFamily:'__thirdFont_3ea4f2',border:'none',color:'black'}}
						/>
					
						</div>


						

      			</div>

			
				




			


	  

	


<LanguageSelector />





				
      			
    		</div>);
};

export default MenuIPadPro1291;







    .mingcutewallet4FillParent{
      position: absolute;
      top: 49px;
      left: 409.5px;
      border-radius: 10px;
      background: linear-gradient(180deg, #ffe500, #fff492);
      -webkit-backdrop-filter: blur(12px);
      backdrop-filter: blur(12px);
      display: flex;
      flex-direction: row;
      padding: 9px 0px;
      align-items: center;
      justify-content: center;
      gap: -4px;
      font-size: 14px;
      color: #1f1330;
  
    }
    .mingcutewallet4FillLang {
      position: absolute;
      top: -763px;
      left: calc(30% + 364px);
      border-radius: 10px;
      display: flex;
      flex-direction: row;
      padding: 11px 22px;
      align-items: center;
      justify-content: center;
      gap: 10px;
      font-size: 16px;
  }

   .mingcutewallet4FillParent{
      position: absolute;
      top: 49px;
      left: 512.5px;
      border-radius: 10px;
      background: linear-gradient(180deg, #ffe500, #fff492);
      -webkit-backdrop-filter: blur(12px);
      backdrop-filter: blur(12px);
      display: flex;
      flex-direction: row;
      padding: 9px 0px;
      align-items: center;
      justify-content: center;
      gap: -4px;
      font-size: 14px;
      color: #1f1330;
  
    }
	
	homepartent€{
		position: absolute;
    top: 60px;
    left: 183px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    gap: 16px;
    font-size: 16px;
	}
	.maskgroupicon{
		position: absolute;
    top: 26px;
    left: 8.76px;
    width: 90.24px;
    height: 87.25px;
    -o-object-fit: cover;
    object-fit: cover;
	}


	--trade

	 .homeParent{
        position: absolute;
        top: 60px;
        left: 100px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        gap: 2px;
        font-size: 16px;
    }













	    .mingcutewallet4FillParent{
        position: absolute;
        top: 49px;
        left: 342.5px;
        border-radius: 10px;
        background: linear-gradient(180deg, #ffe500, #fff492);
        -webkit-backdrop-filter: blur(12px);
        backdrop-filter: blur(12px);
        display: flex;
        flex-direction: row;
        padding: 9px 15px;
        align-items: center;
        justify-content: center;
        gap: 0;
        width: 30%;
        font-size: 14px;
        color: #1f1330;
    }
    .mingcutewallet4FillLang {
        position: absolute;
        top: -763px;
        left: calc(27% + 364px);
        border-radius: 10px;
        display: flex;
        flex-direction: row;
        padding: 11px 22px;
        align-items: center;
        justify-content: center;
        gap: 10px;
        font-size: 16px;
    }
    .maskGroupIcon{
        position: absolute;
    top: 26px;
    left: -3.24px;
    width: 90.24px;
    height: 87.25px;
    -o-object-fit: cover;
    object-fit: cover;
    }
    .homeParent{
        position: absolute;
        top: 60px;
        left: 86px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        gap: 0;
        font-size: 16px;
    }
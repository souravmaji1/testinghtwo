import type { NextPage } from 'next';
import { useCallback } from 'react';
import styles from './menu.module.css';
import Home from '../public/Home.png';
import Trade from '../public/Trade.png';
import Stake from '../public/Stake.png';
import Profile from '../public/Profile.png';
import About from '../public/About.png';
import Image from 'next/image';
import Headlogo from '../public/logs.png';
import { ConnectWallet } from '@thirdweb-dev/react';
import Wallet from '../public/mingcute_wallet-4-fill.svg';
import localFont from 'next/font/local';
import { useTranslation } from 'react-i18next';

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

const MenuIPadPro1291:NextPage = () => {
  	
  	const onHomeTextClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
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

	  const { t, i18n } = useTranslation();
  	
  	return (
    		<div className={styles.menuIpadPro1291}>
      			<img className={styles.unionIcon1} alt="" src="Union.svg" />
      			<div className={styles.home} onClick={onHomeTextClick}>
					<a href='/'>
					<h5 className={`text-[#F9E552] text-xl`} style={{fontFamily: myFont.style.fontFamily}}>{t('home')}</h5>
					</a>
				</div>
      			<div className={styles.trade} onClick={onTradeTextClick}>
				  <a href='/trade'>
				  <h5 className={`text-[#F9E552] text-xl`} style={{fontFamily: myFont.style.fontFamily}}>Trade</h5>
				  </a>
				</div>
      			<div className={styles.stake} onClick={onStakeTextClick}>
				  <a href='/stake'>
				  <h5 className={`text-[#F9E552] text-xl`} style={{fontFamily: myFont.style.fontFamily}}>Stake</h5>

				  </a>
				</div>
      			<div className={styles.about} onClick={onAboutTextClick}>
				  <a href='/about'>
				  <h5 className={`text-[#F9E552] text-xl`} style={{fontFamily: myFont.style.fontFamily}}>{t('about')}</h5>

				  </a>
				</div>
      			<div className={styles.profile} onClick={onProfileTextClick}>
				  <a href='/profile'>
				  <h5 className={`text-[#F9E552] text-xl`} style={{fontFamily: myFont.style.fontFamily}}>Profile</h5>

				  </a>
				</div>
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
      			<img className={styles.materialSymbolscloseIcon1} alt="" src="material-symbols:close.svg" />
      			
        


    		</div>);
};

export default MenuIPadPro1291;

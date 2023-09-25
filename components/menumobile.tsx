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
  	
  	return (
    		<div className={styles.menuIpadPro1291}>
      			<img className={styles.unionIcon1} alt="" src="Union.svg" />
      			<Image className={styles.maskGroupIcon} alt="" src={Headlogo} />
      			<div className={styles.home} onClick={onHomeTextClick}>
					<a href='/'>
					<Image style={{margin:"auto"}}  src={Home} alt='' />
					</a>
				</div>
      			<div className={styles.trade} onClick={onTradeTextClick}>
				  <a href='/trade'>
				  <Image style={{margin:"auto"}}  src={Trade} alt='' />
				  </a>
				</div>
      			<div className={styles.stake} onClick={onStakeTextClick}>
				  <a href='/stake'>
				  <Image style={{margin:"auto"}}  src={Stake} alt='' />
				  </a>
				</div>
      			<div className={styles.about} onClick={onAboutTextClick}>
				  <a href='/about'>
				  <Image style={{margin:"auto"}}  src={About} alt='' />
				  </a>
				</div>
      			<div className={styles.profile} onClick={onProfileTextClick}>
				  <a href='/profile'>
				  <Image style={{margin:"auto"}} src={Profile} alt='' />
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

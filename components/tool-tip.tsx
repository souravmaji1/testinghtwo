import type { NextPage } from 'next';
import styles from './tool.module.css';
import { useTranslation } from "react-i18next";

type ToolTipType = {
  	onClose?: () => void;
}

const ToolTip:NextPage<ToolTipType> = ({ onClose }) => {

	const { t, i18n } = useTranslation();
  	
  	return (
    		<div className={styles.toolTip} onClick={onClose}>
      			<div className={styles.toolTipChild} />
      			<div className={styles.loremIpsumDolor1}>
					<h5 className='z-50 text-center text-xl' style={{
						fontFamily: "__secondFont_72e69f, __secondFont_Fallback_72e69f"
					}}>{
						t('tooltipText')
					}</h5>
				</div>
    		</div>);
};

export default ToolTip;

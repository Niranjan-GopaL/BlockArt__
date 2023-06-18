import assets from '../assets';
import styles from '../styles/Global';


// NOTICE THIS TECHNIQUE. Maybe you want to impl new component that will be used multiple 
// times in the same component. THIS IS THE WAY TO IMLP IT.

// IF you feel another component will use this new componet ONLY  THEN MAKE IT A  SEPERATE COMP


const FeatureCard = ({ iconUrl, iconText }) =>  (

  <div className={styles.featureCard}>
    {/* featureImg is STYLED really well, check it out */}
    <img src={iconUrl} alt="icon" className={styles.featureImg} />
    <p className={styles.featureText}>{iconText}</p>

  </div>

)


const Features = () => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>

        {/* This div contains the both the texts */}
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>Technologies</h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>ProNef has been developed using a cross-platform technology, React Native.</p>
        </div>

        {/* This contains the FeatureCard we made */}
        <div className={styles.flexWrap}>
          <FeatureCard iconUrl={assets.react} iconText="React Native" />
          <FeatureCard iconUrl={assets.javascript} iconText="JavaScript" />
        </div>

      </div>
    </div>
  )
}

export default Features
import styles from '../styles/Global';
import assets from '../assets';
import Button from './Button';



const SectionWrapper = ({ title, description, showBtn, mockupImg, banner, reverse }) => {
  return (


    // Rough layout => title , description, mockupImg

    // <div>
    //   <h1>{title}</h1>
    //   <h1>{description}</h1>
    //   <img src={mockupImg}alt="mockupImg">
    // </div>



    // min-h-screen => just hover over and you'll see what it means
    // we are using those global styles (ctrl click and you'll see)

    // TEMPLATE STRINGS ARE AWESOME. THEY ALLOW US TO PASS VARIABLES ALONG WITH STRINGS
    <div className={`min-h-screen ${styles.section} 
    ${reverse ? styles.bgWhite : styles.bgPrimary} 
    ${banner}`}> {/* <------------- this gives the wavey animation */} 


    <div className={`flex items-center 
      ${reverse ? styles.boxReverseClass : styles.boxClass} 
      w-11/12 sm:w-full minmd:w-3/4`}>
        
      <div className={`${styles.descDiv} 
        ${reverse ? " fadeRightMini" : " fadeLeftMini"}
        ${reverse ? styles.textRight : styles.textLeft}`}>

        <h1 className={`
        ${reverse ? styles.blackText : styles.whiteText}
        ${styles.h1Text}`}>{title}</h1>

        <p className={`
        ${reverse ? styles.blackText : styles.whiteText}
        ${styles.descriptionText}`}>{description}</p>

        {/* If we want to show a button we'll pass true to showBtn prop .SMART!!!!! */}
        {showBtn && (
          <Button 
            assetUrl={assets.expo}
            // link="https://expo.dev/@adrianhajdin/react_native_app?serviceType=classic&distribution=expo-go"
            link = "#"
          />
        )}

      </div>

      <div
        className={`flex-1 ${styles.flexCenter}p-8 sm:px-0`}
      >
        <img src={mockupImg} alt="mockup" className={`
         ${reverse ? " fadeLeftMini" : " fadeRightMini"}
        ${styles.sectionImg}`} />
      </div>
    </div>
  </div>
  )
}

export default SectionWrapper

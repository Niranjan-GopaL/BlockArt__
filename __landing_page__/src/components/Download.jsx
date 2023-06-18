import styles from '../styles/Global';
import assets from '../assets';

const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>


        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>Download the Source Code</h1>
          <p className={`${styles.pText} ${styles.blackText}`}>Get the full source code on GitHub</p>
        </div>

        {/* You can share the source code. Populate the onClick and href ppty */}
        <button className={styles.btnPrimary} onClick={{}} href="#" >Source Code</button>

        <div className={styles.flexCenter}>
          {/* This is that badass image with 5 different mockups */}
          <img 
            src={assets.scene}
            alt="download_png"
            className={styles.fullImg}
          />
        </div>


      </div>
    </div>
  )
}

export default Download
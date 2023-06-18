import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";
import styles from "./styles/Global";

const App = () => {
    return (
        <>
            {/* Main headers */}
            <SectionWrapper
                title="You own store of Nifty NFTs. Start Selling & Growing"
                description="Buy, store, collect NFTS, exchange & earn crypto. Join 25+ million people using ProNef Marketplace."
                showBtn
                mockupImg={assets.homeHero}
                banner="banner"
            />
            <SectionWrapper
                title="Smart User Interface Marketplace"
                description="Nisi dolore eu minim velit.Officia Lorem commodo ad sit incididunt aliquip reprehenderit ea esse eiusmod sunt laborum."
                mockupImg={assets.homeCards}
                // this is not a banner section but we can make a prop called reverse
                // and based on wheather this prop is set to true we can change how the image is going to be layouted 
                reverse
            />
                
            <Features />

            <SectionWrapper
                title="Deployment"
                description="ProNef is built using Expo which runs natively on all users' devices. Add more meainngful stuff    "
                mockupImg={assets.feature}
                reverse
            />
            <SectionWrapper
                title="Creative way to showcase the store"
                description="The app contains two screens. The first screen lists all NFTs while the second one shows the details of a specific NFT."
                mockupImg={assets.mockup}
                banner="banner02"
            />

            <Download />

            <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
                <p className={`${styles.pText} ${styles.whiteText}`}>
                    Made with love by{" "}
                    <span className="bold">Laconic</span>
                </p>
            </div>

        </>
    );
};

export default App;

import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";
import styles from "./styles/Global";


/*
This is perfect example of how to make a AMAZING SHOWCASE WEBSITE QUICKKKKKKKKKKKKK!!

Few things that is easy to impl but makes it look pro :-

        ->  Animations
        ->  A prop that conditionally renders layouts differently  
        ->  TAILWIND 

*/



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

            {/* Second Section , notice that it's REVERSE (cuz we send the reverse prop) */}
            <SectionWrapper
                title="Smart User Interface Marketplace"
                description="Nisi dolore eu minim velit.Officia Lorem commodo ad sit incididunt aliquip reprehenderit ea esse eiusmod sunt laborum."
                mockupImg={assets.homeCards}
                // this is not a banner section but we can make a prop called reverse
                // and based on wheather this prop is set to true we can change how the image is going to be layouted 
                reverse
            />
                
            <Features />

            {/* This is SOO COOL. just keeping on reusing the stuff */}
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

            {/* Footer component */}
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

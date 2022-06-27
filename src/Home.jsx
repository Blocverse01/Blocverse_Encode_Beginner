import heroBg from "./images/hero-bg-image.png";
import heroPattern from "./images/pattern.svg";
import heroCards from "./images/hero-cards-full-min.png";
import ConnectWallet from "./components/auth/moralis/ConnectWalletWithWeb3Auth";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="Home-section__wrapper">
      <header className="Home-header" data-aos="fade-down">
        <div>
          <nav className="Home-nav">
            <Link to="/">
              <h3 className="logo-text">Web3Gram</h3>
              <svg
                className="lg:ml-[4.6rem] ml-10"
                width="61"
                height="9"
                viewBox="0 0 61 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.15015 6.92309C9.48759 5.10072 16.8989 3.85055 24.3822 2.78443C26.3102 2.50975 32.5707 2.07549 26.5046 2.14771C20.1597 2.22324 13.7355 2.36703 7.45613 3.36808C6.78761 3.47466 4.93449 3.76741 5.54598 4.05786C7.42975 4.95265 11.967 4.49128 13.6641 4.50887C21.1359 4.5863 28.6098 4.5354 36.0819 4.5354C41.9448 4.5354 34.7763 4.98442 34.1983 5.03947C28.1156 5.61877 32.7507 5.1566 26.7434 5.70272C25.5963 5.807 22.2658 5.71858 23.321 6.18025C25.2344 7.01738 27.4936 6.40094 29.5821 6.41902C39.5386 6.50523 49.498 6.44555 59.4548 6.44555"
                  stroke="#171105"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </Link>
          </nav>
          <div className="Home-section">
            <h3 className="hero-header">
              Your Memories, <br />
              <span>Immortalized.</span>
            </h3>
            <p className="hero-text">
              Keep your memories intact forever with this gateway to unlimited
              storage. Your photos on the Blockchain at zero cost, safelock
              those memories you cherish.{" "}
            </p>
            <div className="mt-[17.8px] lg:mt-14">
              <ConnectWallet />
            </div>
          </div>
        </div>
        <div className="flex relative justify-center md:justify-end">
          <img
            src={heroPattern}
            alt="pattern"
            className="absolute z-0 -top-[54px] lg:top-[-90px] h-[330px] lg:-right-[9.2rem] lg:h-full"
          />
          <img
            src={heroCards}
            alt="hero-cards"
            className="absolute z-1 scale-150 left-9 -top-20 lg:scale-[1.5] 2xl:scale-[1.4] lg:-left-11 2xl:-left-0 lg:top-[300px]"
          />
          <img
            src={heroBg}
            alt="hero-background"
            className="w-full h-[330px] bottom-0 lg:h-full"
          />
        </div>
      </header>
    </section>
  );
}

export default Home;

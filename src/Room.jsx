import { useParams } from "react-router";
import Moralis from "moralis";
import { useState } from "react";
import UploadImage from "./UploadImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link } from "react-router-dom";

export default function Room() {
  const { address } = useParams();
  const [canUpload, changeUploadState] = useState(false);
  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const query = new Moralis.Query("RoomImages");
  query.equalTo("owner", address);
  query.find().then((images) => {
    setImages(
      images.map((image) => ({
        imageLink: image.get("image").ipfs(),
        hash: image.get("image").hash(),
        caption: image.get("caption"),
      }))
    );
    setLoading(false);
  });

  //let user = Moralis.User.current();
  //let myRoom = user?.get("ethAddress") === address;
  return (
    <section className="Home-section__wrapper">
      <nav className="Home-nav flex justify-between items-center">
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
        <div className="flex justify-end py-4 px-3">
          <button
            onClick={() => {
              changeUploadState(true);
            }}
            className="btn"
          >
            Upload Image
            <FontAwesomeIcon className="ml-4" icon={solid("arrow-up")} />
          </button>
        </div>
      </nav>
      <div
        data-aos="fade-left"
        className="md:px-16 sm:px-6 px-5 pt-5 md:pt-[44.71px] pb-9 md:pb-20"
      >
        <div>
          <div>
            {canUpload ? (
              <div className="fixed inset-0 flex z-50 items-center backdrop-blur-sm justify-center">
                <div className="flex-1 max-w-[840px] rounded-[12px] p-4 md:p-14 mx-auto max-h-[683.3px] bg-theme-dark">
                  <div className="flex justify-end">
                    <button
                      onClick={() => changeUploadState(false)}
                      className="h-[38.53px] w-[38.53px] rounded-full bg-theme-main flex items-center justify-center"
                    >
                      <FontAwesomeIcon
                        icon={solid("times")}
                        className="text-theme-dark"
                      />
                    </button>
                  </div>
                  <UploadImage />
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="grid grid-cols-2 mt-5 mb-12 sm:grid-cols-2 gap-3 lg:gap-[42.56px] md:grid-cols-3 lg:grid-cols-4">
              {images.map((image, index) => (
                <div key={index} data-aos="fade-right" className="block">
                  <div className="relative">
                    <div className="absolute bottom-0 p-5 flex items-end justify-end top-12 md:top-36 right-0 left-0 card-gradient">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={image.imageLink}
                        className="text-white"
                      >
                        <FontAwesomeIcon
                          icon={solid("expand")}
                          className="text-2xl md:text-3xl"
                        />
                      </a>
                    </div>
                    <img
                      className="h-[180px] w-[180px] sm:h-[260px] sm:w-[260px] mx-auto md:h-[282.33px] md:w-[282.33px] object-cover"
                      src={image.imageLink}
                      alt={image.caption}
                    />
                  </div>
                  {image.caption.trim() !== "" ? (
                    <h3
                      title={image.caption}
                      className="text-white bg-theme-dark text-center line-clamp-1 leading-relaxed break-words overflow-y-hidden py-2 mt-2 px-3"
                    >
                      {image.caption}
                    </h3>
                  ) : (
                    ""
                  )}
                </div>
              ))}
            </div>
            {isLoading && (
              <div className="text-center text-3xl md:text-[60px]">
                <FontAwesomeIcon icon={solid("spinner")} spin /> Loading
              </div>
            )}
            {images.length === 0 && !isLoading && (
              <div className="text-center">
                <FontAwesomeIcon
                  icon={solid("images")}
                  className="text-7xl md:text-[120px] text-theme-dark"
                />
                <p className="text-center mt-2 text-lg md:text-xl">
                  Your gallery is empty!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

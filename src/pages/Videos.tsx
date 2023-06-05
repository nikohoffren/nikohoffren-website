import React, { useState, useContext } from "react";
import { LanguageContext } from "src/LanguageContext";

interface VideoProps {
  src: string;
}

const Video: React.FC<VideoProps> = ({ src }) => {
  const [isLoading, setIsLoading] = useState(true);

  const iframeLoaded = () => {
    setIsLoading(false);
  };

  const loader = <div>Loading...</div>;

  return (
    <div className="videos-col skeleton">
      {isLoading && loader}
      <iframe
        onLoad={iframeLoaded}
        width="560"
        height="315"
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default function Videos() {
  const { language } = useContext(LanguageContext);

  const videos = [
    "https://www.youtube.com/embed/mA1mjCzKDKU",
    "https://www.youtube.com/embed/h81OYCLoXIY",
    "https://www.youtube.com/embed/Nkt2_k8jz28",
    "https://www.youtube.com/embed/2Xk-d-1jt70",
    "https://www.youtube.com/embed/5tusnfN2luE",
    "https://www.youtube.com/embed/T55DIK6Of1g",
    "https://www.youtube.com/embed/KjLabtOeoWY",
    "https://www.youtube.com/embed/fhgeuPS2H5Q",
    "https://www.youtube.com/embed/Zk7Yp3Sdzog",
    "https://www.youtube.com/embed/Jkn9FvHAsww",
    "https://www.youtube.com/embed/T1p9X-W-K9g",
    "https://www.youtube.com/embed/ZzKBIORk_Wk",
    "https://www.youtube.com/embed/s1NTu6Ft30c",
    "https://www.youtube.com/embed/v5FRxNfK7kE",
  ];

  return (
    <>
      <section className="videos">
        <div className="extra-margin-top" />
        <h1>{language === "en" ? "VIDEOS" : "VIDEOT"}</h1>

        <div className="videos-row">
          {videos.map((videoSrc) => (
            <Video key={videoSrc} src={videoSrc} />
          ))}
        </div>
      </section>
    </>
  );
}

import React, { useContext } from "react";
import { LanguageContext } from "src/LanguageContext";

export default function Videos() {
    const { language } = useContext(LanguageContext);
    return (
        <>
            <section className="videos">
                <div className="extra-margin-top" />
                <h1>{language === "en" ? "VIDEOS" : "VIDEOT"}</h1>

                <div className="videos-row">
                    <div className="videos-col skeleton">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/mA1mjCzKDKU"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    </div>

                    <div className="videos-col skeleton">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/h81OYCLoXIY"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className="videos-col skeleton">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/Nkt2_k8jz28"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className="videos-col skeleton">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/2Xk-d-1jt70"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className="videos-col skeleton">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/5tusnfN2luE"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className="videos-col skeleton">
                        <iframe
                            width="642"
                            height="361"
                            src="https://www.youtube.com/embed/T55DIK6Of1g"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className="videos-col skeleton">
                        <iframe
                            width="642"
                            height="361"
                            src="https://www.youtube.com/embed/KjLabtOeoWY"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className="videos-col skeleton">
                        <iframe
                            width="642"
                            height="361"
                            src="https://www.youtube.com/embed/fhgeuPS2H5Q"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className="videos-col skeleton">
                        <iframe
                            width="642"
                            height="361"
                            src="https://www.youtube.com/embed/Zk7Yp3Sdzog"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className="videos-col skeleton">
                        <iframe
                            width="642"
                            height="361"
                            src="https://www.youtube.com/embed/Jkn9FvHAsww"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className="videos-col skeleton">
                        <iframe
                            width="642"
                            height="361"
                            src="https://www.youtube.com/embed/T1p9X-W-K9g"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className="videos-col skeleton">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/ZzKBIORk_Wk"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className="videos-col skeleton">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/s1NTu6Ft30c"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className="videos-col skeleton">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/v5FRxNfK7kE"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>
        </>
    );
}

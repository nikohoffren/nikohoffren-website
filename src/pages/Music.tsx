import React, { useContext } from "react";
import { LanguageContext } from "src/LanguageContext";
import ImageWithLoading from "../ImageWithLoading";

export default function Music() {
    const { language } = useContext(LanguageContext);
    return (
        <>
            <section className="music">
                <div className="extra-margin-top" />
                <h1>{language === "en" ? "MUSIC" : "MUSIIKKI"}</h1>

                <div className="row">
                    <div className="music-col">
                        <a
                            href="https://www.beatport.com/release/mystery-adoel-smidt-remix/3588760"
                            target="_blank"
                        >
                            <ImageWithLoading
                                src="ASMysteryimage.jpg"
                                alt="Mystery feat. Maya"
                            />
                        </a>
                        <h3>
                            MYSTERY feat. Maya
                            <br />
                            (Adoel Smidt Remix)
                        </h3>
                        <p>Yeiskomp Records, 2022</p>
                        <a
                            href="https://www.beatport.com/release/mystery-adoel-smidt-remix/3588760"
                            target="_blank"
                        >
                            <h4>
                                {language === "en"
                                    ? "LISTEN HERE"
                                    : "KUUNTELE TÄSTÄ"}
                            </h4>
                        </a>
                    </div>

                    <div className="music-col">
                        <a href="https://ffm.to/zone_6-nv012" target="_blank">
                            <ImageWithLoading
                                src="ZONE6image.jpg"
                                alt="ZONE 6"
                            />
                        </a>
                        <h3>
                            ZONE 6
                            <br />
                            (Adoel Smidt Remix)
                        </h3>
                        <p>Neostatics Vision, 2021</p>
                        <a href="https://ffm.to/zone_6-nv012" target="_blank">
                            <h4>
                                {language === "en"
                                    ? "LISTEN HERE"
                                    : "KUUNTELE TÄSTÄ"}
                            </h4>
                        </a>
                    </div>

                    <div className="music-col">
                        <a
                            href="https://distrokid.com/hyperfollow/nikohoffrn/underground"
                            target="_blank"
                        >
                            <ImageWithLoading
                                src="UndergroundIMAGE.png"
                                alt="UNDERGROUND"
                            />
                        </a>
                        <h3>UNDERGROUND</h3>
                        <p>Niko Hoffrén Music, 2021</p>
                        <a
                            href="https://distrokid.com/hyperfollow/nikohoffrn/underground"
                            target="_blank"
                        >
                            <h4>
                                {language === "en"
                                    ? "LISTEN HERE"
                                    : "KUUNTELE TÄSTÄ"}
                            </h4>
                        </a>
                    </div>

                    <div className="music-col">
                        <a
                            href="https://AlvedaMusic.lnk.to/Singularity"
                            target="_blank"
                        >
                            <ImageWithLoading
                                src="SINimage.jpg"
                                alt="SINGULARITY feat. Jasmine Dean"
                            />
                        </a>
                        <h3>
                            SINGULARITY
                            <br />
                            feat. Jasmine Dean
                        </h3>
                        <p>Alveda Music, 2021</p>
                        <a
                            href="https://AlvedaMusic.lnk.to/Singularity"
                            target="_blank"
                        >
                            <h4>
                                {language === "en"
                                    ? "LISTEN HERE"
                                    : "KUUNTELE TÄSTÄ"}
                            </h4>
                        </a>
                    </div>

                    <div className="music-col">
                        <a
                            href="https://soundcloud.com/nikohoffren/gareth-emery-i-saw-your-face-niko-hoffren-remix"
                            target="_blank"
                        >
                            <ImageWithLoading
                                src="ISYFimage.png"
                                alt="GARETH EMERY - I SAW YOUR FACE"
                            />
                        </a>
                        <h3>
                            GARETH EMERY - I SAW YOUR FACE
                            <br />
                            [Niko Hoffrén Remix]
                        </h3>
                        <p>Niko Hoffrén Music, 2021</p>
                        <a
                            href="https://soundcloud.com/nikohoffren/gareth-emery-i-saw-your-face-niko-hoffren-remix"
                            target="_blank"
                        >
                            <h4>
                                {language === "en"
                                    ? "LISTEN HERE"
                                    : "KUUNTELE TÄSTÄ"}
                            </h4>
                        </a>
                    </div>

                    <div className="music-col">
                        <a
                            href="https://distrokid.com/hyperfollow/nikohoffrn/encryption-original-mix"
                            target="_blank"
                        >
                            <ImageWithLoading
                                src="EncIMAGE.jpg"
                                alt="ENCRYPTION"
                            />
                        </a>
                        <h3>ENCRYPTION</h3>
                        <p>Niko Hoffrén Music, 2021</p>
                        <a
                            href="https://distrokid.com/hyperfollow/nikohoffrn/encryption-original-mix"
                            target="_blank"
                        >
                            <h4>
                                {language === "en"
                                    ? "LISTEN HERE"
                                    : "KUUNTELE TÄSTÄ"}
                            </h4>
                        </a>
                    </div>

                    <div className="music-col">
                        <a href="https://fanlink.to/sdr480" target="_blank">
                            <ImageWithLoading
                                src="SVimage.jpg"
                                alt="Static Void"
                            />
                        </a>
                        <h3>
                            STATIC VOID
                            <br />
                            [Including remixes by
                            <br />
                            Elgfrothi & Naki]
                        </h3>
                        <p>Sundance Recordings, 2021</p>
                        <a href="https://fanlink.to/sdr480" target="_blank">
                            <h4>
                                {language === "en"
                                    ? "LISTEN HERE"
                                    : "KUUNTELE TÄSTÄ"}
                            </h4>
                        </a>
                    </div>

                    <div className="music-col">
                        <a
                            href="https://www.beatport.com/track/moonchild/15455460"
                            target="_blank"
                        >
                            <ImageWithLoading
                                src="MC_REMIXimage.jpg"
                                alt="Moonchild"
                            />
                        </a>
                        <h3>
                            MOONCHILD
                            <br />
                            [Physical Vibes Remix]
                        </h3>
                        <p>Trancespired Recordings, 2021</p>
                        <a
                            href="https://www.beatport.com/track/moonchild/15455460"
                            target="_blank"
                        >
                            <h4>
                                {language === "en"
                                    ? "LISTEN HERE"
                                    : "KUUNTELE TÄSTÄ"}
                            </h4>
                        </a>
                    </div>

                    <div className="music-col">
                        <a
                            href="https://neostatics.fanlink.to/devonian_sea"
                            target="_blank"
                        >
                            <ImageWithLoading
                                src="DSimage.jpg"
                                alt="Devonian Sea"
                            />
                        </a>
                        <h3>DEVONIAN SEA</h3>
                        <p>Neostatics Sounds, 2021</p>
                        <a
                            href="https://neostatics.fanlink.to/devonian_sea"
                            target="_blank"
                        >
                            <h4>
                                {language === "en"
                                    ? "LISTEN HERE"
                                    : "KUUNTELE TÄSTÄ"}
                            </h4>
                        </a>
                    </div>

                    <div className="music-col">
                        <a href="https://fanlink.to/sdr458" target="_blank">
                            <ImageWithLoading
                                src="WITCimage.jpg"
                                alt="WAITING IN THE CLOUDS"
                            />
                        </a>
                        <h3>WAITING IN THE CLOUDS</h3>
                        <p>Sundance Recordings, 2021</p>
                        <a href="https://fanlink.to/sdr458" target="_blank">
                            <h4>
                                {language === "en"
                                    ? "LISTEN HERE"
                                    : "KUUNTELE TÄSTÄ"}
                            </h4>
                        </a>
                    </div>

                    <div className="music-col">
                        <a
                            href="https://alvedamusic.com/release/nightmare/"
                            target="_blank"
                        >
                            <ImageWithLoading
                                src="Nimage.jpg"
                                alt="Nightmare"
                            />
                        </a>
                        <h3>
                            NIGHTMARE
                            <br />
                            feat. Elisa Mammoliti
                        </h3>
                        <p>Alveda Music, 2021</p>
                        <a
                            href="https://alvedamusic.com/release/nightmare/"
                            target="_blank"
                        >
                            <h4>
                                {language === "en"
                                    ? "LISTEN HERE"
                                    : "KUUNTELE TÄSTÄ"}
                            </h4>
                        </a>
                    </div>

                    <div className="music-col">
                        <a
                            href="https://www.beatport.com/release/trance-of-eternity/3282788?fbclid=IwAR2O1kyytx8hamNY3PiXxOH5O5FYFo6VE0cweEaKD8L2ZIJdCicaSy4zl5c"
                            target="_blank"
                        >
                            <ImageWithLoading
                                src="TOEimage.jpg"
                                alt="TRANCE OF ETERNITY"
                            />
                        </a>
                        <h3>TRANCE OF ETERNITY</h3>
                        <p>
                            Liquid Emotion Recordings (Trance All Stars), 2021
                        </p>
                        <a
                            href="https://www.beatport.com/release/trance-of-eternity/3282788?fbclid=IwAR2O1kyytx8hamNY3PiXxOH5O5FYFo6VE0cweEaKD8L2ZIJdCicaSy4zl5c"
                            target="_blank"
                        >
                            <h4>
                                {language === "en"
                                    ? "LISTEN HERE"
                                    : "KUUNTELE TÄSTÄ"}
                            </h4>
                        </a>
                    </div>

                    <div className="music-col">
                        <a
                            href="https://www.beatport.com/release/morceau/3230029"
                            target="_blank"
                        >
                            <ImageWithLoading
                                src="MORimage.jpg"
                                alt="MORCEAU"
                            />
                        </a>
                        <h3>MORCEAU</h3>
                        <p>#WeAreTrance (Joyride Music), 2021</p>
                        <a
                            href="https://www.beatport.com/release/morceau/3230029"
                            target="_blank"
                        >
                            <h4>
                                {language === "en"
                                    ? "LISTEN HERE"
                                    : "KUUNTELE TÄSTÄ"}
                            </h4>
                        </a>
                    </div>

                    <div className="music-col">
                        <a
                            href="https://www.beatport.com/release/breathe-my-energy/3230985"
                            target="_blank"
                        >
                            <ImageWithLoading
                                src="BMEimage.jpg"
                                alt="BREATHE MY ENERGY"
                            />
                        </a>
                        <h3>BREATHE MY ENERGY</h3>
                        <p>Yeiskomp Records, 2020</p>
                        <a
                            href="https://www.beatport.com/release/breathe-my-energy/3230985"
                            target="_blank"
                        >
                            <h4>
                                {language === "en"
                                    ? "LISTEN HERE"
                                    : "KUUNTELE TÄSTÄ"}
                            </h4>
                        </a>
                    </div>

                    <div className="music-col">
                        <a
                            href="https://www.beatport.com/release/restless-dreams/3218268"
                            target="_blank"
                        >
                            <ImageWithLoading
                                src="RDimage.jpg"
                                alt="RESTLESS DREAMS feat. Yin"
                            />
                        </a>
                        <h3>RESTLESS DREAMS feat. Yin</h3>
                        <p>Yeiskomp Records, 2020</p>
                        <a
                            href="https://www.beatport.com/release/restless-dreams/3218268"
                            target="_blank"
                        >
                            <h4>
                                {language === "en"
                                    ? "LISTEN HERE"
                                    : "KUUNTELE TÄSTÄ"}
                            </h4>
                        </a>
                    </div>

                    <div className="music-col">
                        <a
                            href="https://www.beatport.com/release/naqada/3164955"
                            target="_blank"
                        >
                            <ImageWithLoading src="NAQimage.jpg" alt="NAQADA" />
                        </a>
                        <h3>NAQADA</h3>
                        <p>Neostatics Sounds, 2020</p>
                        <a
                            href="https://www.beatport.com/release/naqada/3164955"
                            target="_blank"
                        >
                            <h4>
                                {language === "en"
                                    ? "LISTEN HERE"
                                    : "KUUNTELE TÄSTÄ"}
                            </h4>
                        </a>
                    </div>

                    <div className="music-col">
                        <a
                            href="https://www.beatport.com/release/silent-tears/3194452?fbclid=IwAR3faLqdUgnWl9IQay7bkB2XdI0IKswZ1G-FqpYgYMeCEKVBWhJkLUHQ7ew"
                            target="_blank"
                        >
                            <ImageWithLoading
                                src="STimage.jpg"
                                alt="SILENT TEARS"
                            />
                        </a>
                        <h3>SILENT TEARS</h3>
                        <p>Yeiskomp Records, 2020</p>
                        <a
                            href="https://www.beatport.com/release/silent-tears/3194452?fbclid=IwAR3faLqdUgnWl9IQay7bkB2XdI0IKswZ1G-FqpYgYMeCEKVBWhJkLUHQ7ew"
                            target="_blank"
                        >
                            <h4>
                                {language === "en"
                                    ? "LISTEN HERE"
                                    : "KUUNTELE TÄSTÄ"}
                            </h4>
                        </a>
                    </div>

                    <div className="music-col">
                        <a
                            href="https://www.beatport.com/release/moonchild/3169933"
                            target="_blank"
                        >
                            <ImageWithLoading
                                src="MCimage.jpg"
                                alt="MOONCHILD"
                            />
                        </a>
                        <h3>MOONCHILD</h3>
                        <p>Trancespired Recordings, 2020</p>
                        <a
                            href="https://www.beatport.com/release/moonchild/3169933"
                            target="_blank"
                        >
                            <h4>
                                {language === "en"
                                    ? "LISTEN HERE"
                                    : "KUUNTELE TÄSTÄ"}
                            </h4>
                        </a>
                    </div>

                    <div className="music-col">
                        <a
                            href="https://www.beatport.com/release/sweet-darkness/3183034"
                            target="_blank"
                        >
                            <ImageWithLoading
                                src="SDimage.jpg"
                                alt="SWEET DARKNESS feat. Elania"
                            />
                        </a>
                        <h3>SWEET DARKNESS feat. Elania</h3>
                        <p>Alveda Music, 2020</p>
                        <a
                            href="https://www.beatport.com/release/sweet-darkness/3183034"
                            target="_blank"
                        >
                            <h4>
                                {language === "en"
                                    ? "LISTEN HERE"
                                    : "KUUNTELE TÄSTÄ"}
                            </h4>
                        </a>
                    </div>

                    <div className="music-col">
                        <a
                            href="https://www.beatport.com/release/the-scar/3163919"
                            target="_blank"
                        >
                            <ImageWithLoading
                                src="TSimage.jpg"
                                alt="THE SCAR"
                            />
                        </a>
                        <h3>THE SCAR</h3>
                        <p>Yeiskomp Records, 2020</p>
                        <a
                            href="https://www.beatport.com/release/the-scar/3163919"
                            target="_blank"
                        >
                            <h4>
                                {language === "en"
                                    ? "LISTEN HERE"
                                    : "KUUNTELE TÄSTÄ"}
                            </h4>
                        </a>
                    </div>

                    <div className="music-col">
                        <a
                            href="https://www.beatport.com/release/sunrise/3163888"
                            target="_blank"
                        >
                            <ImageWithLoading
                                src="SUNimage.jpg"
                                alt="SUNRISE feat. Elania"
                            />
                        </a>
                        <h3>SUNRISE feat. Elania</h3>
                        <p>Yeiskomp Records, 2020</p>
                        <a
                            href="https://www.beatport.com/release/sunrise/3163888"
                            target="_blank"
                        >
                            <h4>
                                {language === "en"
                                    ? "LISTEN HERE"
                                    : "KUUNTELE TÄSTÄ"}
                            </h4>
                        </a>
                    </div>

                    <div className="music-col">
                        <a
                            href="https://www.beatport.com/release/today/3144798"
                            target="_blank"
                        >
                            <ImageWithLoading
                                src="TODAYimage.jpg"
                                alt="TODAY"
                            />
                        </a>
                        <h3>TODAY</h3>
                        <p>Yeiskomp Records, 2020</p>
                        <a
                            href="https://www.beatport.com/release/today/3144798"
                            target="_blank"
                        >
                            <h4>
                                {language === "en"
                                    ? "LISTEN HERE"
                                    : "KUUNTELE TÄSTÄ"}
                            </h4>
                        </a>
                    </div>

                    <div className="music-col">
                        <a
                            href="https://www.beatport.com/release/aurora/3137059"
                            target="_blank"
                        >
                            <ImageWithLoading src="Aimage.jpg" alt="AURORA" />
                        </a>
                        <h3>AURORA</h3>
                        <p>Yeiskomp Records, 2020</p>
                        <a
                            href="https://www.beatport.com/release/aurora/3137059"
                            target="_blank"
                        >
                            <h4>
                                {language === "en"
                                    ? "LISTEN HERE"
                                    : "KUUNTELE TÄSTÄ"}
                            </h4>
                        </a>
                    </div>

                    <div className="music-col">
                        <a
                            href="https://www.beatport.com/release/flying-in-the-blue-sky/3132399"
                            target="_blank"
                        >
                            <ImageWithLoading
                                src="FITBSimage.jpg"
                                alt="FLYING IN THE BLUE SKY"
                            />
                        </a>
                        <h3>FLYING IN THE BLUE SKY</h3>
                        <p>Yeiskomp Records, 2020</p>
                        <a
                            href="https://www.beatport.com/release/flying-in-the-blue-sky/3132399"
                            target="_blank"
                        >
                            <h4>
                                {language === "en"
                                    ? "LISTEN HERE"
                                    : "KUUNTELE TÄSTÄ"}
                            </h4>
                        </a>
                    </div>

                    <div className="music-col">
                        <a
                            href="https://www.beatport.com/track/laomedeia/14072922"
                            target="_blank"
                        >
                            <ImageWithLoading
                                src="LAOimage.jpg"
                                alt="LAOMEDEIA"
                            />
                        </a>
                        <h3>LAOMEDEIA</h3>
                        <p>Alveda Music, 2020</p>
                        <a
                            href="https://www.beatport.com/track/laomedeia/14072922"
                            target="_blank"
                        >
                            <h4>
                                {language === "en"
                                    ? "LISTEN HERE"
                                    : "KUUNTELE TÄSTÄ"}
                            </h4>
                        </a>
                    </div>

                    <div className="music-col">
                        <a
                            href="https://www.beatport.com/track/the-wolf/14027008"
                            target="_blank"
                        >
                            <ImageWithLoading
                                src="WOLFimage.jpg"
                                alt="THE WOLF"
                            />
                        </a>
                        <h3>THE WOLF</h3>
                        <p>Alveda Music, 2020</p>
                        <a
                            href="https://www.beatport.com/track/the-wolf/14027008"
                            target="_blank"
                        >
                            <h4>
                                {language === "en"
                                    ? "LISTEN HERE"
                                    : "KUUNTELE TÄSTÄ"}
                            </h4>
                        </a>
                    </div>

                    <div className="music-col">
                        <a
                            href="https://www.beatport.com/track/mystery/14110476"
                            target="_blank"
                        >
                            <ImageWithLoading
                                src="MYSimage.jpg"
                                alt="MYSTERY feat. Maya"
                            />
                        </a>
                        <h3>MYSTERY feat. Maya</h3>
                        <p>Yeiskomp Records, 2020</p>
                        <a
                            href="https://www.beatport.com/track/mystery/14110476"
                            target="_blank"
                        >
                            <h4>
                                {language === "en"
                                    ? "LISTEN HERE"
                                    : "KUUNTELE TÄSTÄ"}
                            </h4>
                        </a>
                    </div>

                    <div className="music-col">
                        <a
                            href="https://open.spotify.com/album/63L88wiGqcWuUEDhUB6ssJ?si=XnHM1z_fS-SD5iTUQ7hG_w&dl_branch=1"
                            target="_blank"
                        >
                            <ImageWithLoading
                                src="NEPimage.jpg"
                                alt="NEPTUNE"
                            />
                        </a>
                        <h3>NEPTUNE</h3>
                        <p>Niko Hoffrén Music, 2020</p>
                        <a
                            href="https://open.spotify.com/album/63L88wiGqcWuUEDhUB6ssJ?si=XnHM1z_fS-SD5iTUQ7hG_w&dl_branch=1"
                            target="_blank"
                        >
                            <h4>
                                {language === "en"
                                    ? "LISTEN HERE"
                                    : "KUUNTELE TÄSTÄ"}
                            </h4>
                        </a>
                    </div>

                    <div className="music-col">
                        <a
                            href="https://open.spotify.com/album/2VTtflFrNPGZRpdbpRh3qM?si=fUV4Tg8dQ_2n336CeOQqTQ&dl_branch=1"
                            target="_blank"
                        >
                            <ImageWithLoading src="SIGimage.jpg" alt="SIGMA" />
                        </a>
                        <h3>SIGMA</h3>
                        <p>Niko Hoffrén Music, 2020</p>
                        <a
                            href="https://open.spotify.com/album/2VTtflFrNPGZRpdbpRh3qM?si=fUV4Tg8dQ_2n336CeOQqTQ&dl_branch=1"
                            target="_blank"
                        >
                            <h4>
                                {language === "en"
                                    ? "LISTEN HERE"
                                    : "KUUNTELE TÄSTÄ"}
                            </h4>
                        </a>
                    </div>

                    <div className="music-col">
                        <a
                            href="https://www.beatport.com/track/she/13844513"
                            target="_blank"
                        >
                            <ImageWithLoading src="SHEimage.jpg" alt="She" />
                        </a>
                        <h3>SHE</h3>
                        <p>Alveda Music, 2020</p>
                        <a
                            href="https://www.beatport.com/track/she/13844513"
                            target="_blank"
                        >
                            <h4>
                                {language === "en"
                                    ? "LISTEN HERE"
                                    : "KUUNTELE TÄSTÄ"}
                            </h4>
                        </a>
                    </div>

                    <div className="music-col">
                        <a
                            href="https://www.beatport.com/track/leave-me-again/13907261"
                            target="_blank"
                        >
                            <ImageWithLoading
                                src="LMAimage.jpg"
                                alt="LEAVE ME AGAIN"
                            />
                        </a>
                        <h3>LEAVE ME AGAIN</h3>
                        <p>Yeiskomp Records, 2020</p>
                        <a
                            href="https://www.beatport.com/track/leave-me-again/13907261"
                            target="_blank"
                        >
                            <h4>
                                {language === "en"
                                    ? "LISTEN HERE"
                                    : "KUUNTELE TÄSTÄ"}
                            </h4>
                        </a>
                    </div>

                    <div className="music-col">
                        <a
                            href="https://www.beatport.com/track/easy-to-love/13755739"
                            target="_blank"
                        >
                            <ImageWithLoading
                                src="ETLimage.jpg"
                                alt="EASY TO LOVE"
                            />
                        </a>
                        <h3>EASY TO LOVE</h3>
                        <p>Yeiskomp Records, 2020</p>
                        <a
                            href="https://www.beatport.com/track/easy-to-love/13755739"
                            target="_blank"
                        >
                            <h4>
                                {language === "en"
                                    ? "LISTEN HERE"
                                    : "KUUNTELE TÄSTÄ"}
                            </h4>
                        </a>
                    </div>

                    <div className="music-col">
                        <a
                            href="https://soundcloud.com/nikohoffren/gareth-emery-feat-annabel-youll-be-ok-niko-hoffren-remix"
                            target="_blank"
                        >
                            <ImageWithLoading
                                src="YBOimage.jpg"
                                alt="YOU'LL BE OKAY feat. Annabel"
                            />
                        </a>
                        <h3>
                            YOU'LL BE OKAY feat. Annabel <br /> (Niko Hoffrén
                            Remix)
                        </h3>
                        <p>Niko Hoffrén Music, 2020</p>
                        <a
                            href="https://soundcloud.com/nikohoffren/gareth-emery-feat-annabel-youll-be-ok-niko-hoffren-remix"
                            target="_blank"
                        >
                            <h4>
                                {language === "en"
                                    ? "LISTEN HERE"
                                    : "KUUNTELE TÄSTÄ"}
                            </h4>
                        </a>
                    </div>

                    <div className="music-col">
                        <a
                            href="https://www.beatport.com/track/dark-places/13327536"
                            target="_blank"
                        >
                            <ImageWithLoading
                                src="DARKPimage.jpg"
                                alt="DARK PLACES"
                            />
                        </a>
                        <h3>DARK PLACES</h3>
                        <p>Alveda Music, 2020</p>
                        <a
                            href="https://www.beatport.com/track/dark-places/13327536"
                            target="_blank"
                        >
                            <h4>
                                {language === "en"
                                    ? "LISTEN HERE"
                                    : "KUUNTELE TÄSTÄ"}
                            </h4>
                        </a>
                    </div>

                    <div className="music-col">
                        <a
                            href="https://open.spotify.com/album/3fUjr1Gs1YMedPH3Bfs5q1?si=nEKLQdDtSXmIUgEAjX7wgw&dl_branch=1"
                            target="_blank"
                        >
                            <ImageWithLoading
                                src="MOMimage.jpg"
                                alt="MOMENTS"
                            />
                        </a>
                        <h3>MOMENTS</h3>
                        <p>Niko Hoffrén Music, 2020</p>
                        <a
                            href="https://open.spotify.com/album/3fUjr1Gs1YMedPH3Bfs5q1?si=nEKLQdDtSXmIUgEAjX7wgw&dl_branch=1"
                            target="_blank"
                        >
                            <h4>
                                {language === "en"
                                    ? "LISTEN HERE"
                                    : "KUUNTELE TÄSTÄ"}
                            </h4>
                        </a>
                    </div>

                    <div className="music-col">
                        <a
                            href="https://open.spotify.com/album/7MGQdUhu18W3oSWKs4hVMC?si=ewiIOMa_RtqFZDFiOVRCBQ&dl_branch=1"
                            target="_blank"
                        >
                            <ImageWithLoading
                                src="PSAimage.jpg"
                                alt="PSAMATHE"
                            />
                        </a>
                        <h3>PSAMATHE</h3>
                        <p>Niko Hoffrén Music, 2020</p>
                        <a
                            href="https://open.spotify.com/album/7MGQdUhu18W3oSWKs4hVMC?si=ewiIOMa_RtqFZDFiOVRCBQ&dl_branch=1"
                            target="_blank"
                        >
                            <h4>
                                {language === "en"
                                    ? "LISTEN HERE"
                                    : "KUUNTELE TÄSTÄ"}
                            </h4>
                        </a>
                    </div>

                    <div className="music-col">
                        <a
                            href="https://open.spotify.com/album/30BMsgYwBT8uK3xKweUoDz?si=g0UeNhw-R6eA7IoVhZqDCg&dl_branch=1"
                            target="_blank"
                        >
                            <ImageWithLoading
                                src="THAimage.jpg"
                                alt="THALASSA"
                            />
                        </a>
                        <h3>THALASSA</h3>
                        <p>Niko Hoffrén Music, 2020</p>
                        <a
                            href="https://open.spotify.com/album/30BMsgYwBT8uK3xKweUoDz?si=g0UeNhw-R6eA7IoVhZqDCg&dl_branch=1"
                            target="_blank"
                        >
                            <h4>
                                {language === "en"
                                    ? "LISTEN HERE"
                                    : "KUUNTELE TÄSTÄ"}
                            </h4>
                        </a>
                    </div>

                    <div className="music-col">
                        <a
                            href="https://open.spotify.com/album/1Pcm7WF6BwO8Wldrj9Nx9u?si=IiNSnwvRSrGfbkx1p7eaFQ&dl_branch=1"
                            target="_blank"
                        >
                            <ImageWithLoading
                                src="GALimage.jpg"
                                alt="GALATEA"
                            />
                        </a>
                        <h3>GALATEA</h3>
                        <p>Niko Hoffrén Music, 2019</p>
                        <a
                            href="https://open.spotify.com/album/1Pcm7WF6BwO8Wldrj9Nx9u?si=IiNSnwvRSrGfbkx1p7eaFQ&dl_branch=1"
                            target="_blank"
                        >
                            <h4>
                                {language === "en"
                                    ? "LISTEN HERE"
                                    : "KUUNTELE TÄSTÄ"}
                            </h4>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

import Typing from 'react-typing-effect';

export default function Home() {
    return <>
    <div className="container"></div>
        {/* <img src="NHlogo.jpg" alt="Niko Hoffrén logo" className="NHlogo" /> */}
        <section class="home">
            <div className="bio-info">
                <div className="header2-hero">
                    <div className="header2-info">
                    <h1><Typing cursorClassName="red-text" speed={200} text={['I\'m Niko Hoffrén']} /></h1>
                    <h2><Typing cursorClassName="red-text" speed={200} text={['Full stack developer & music producer']} /></h2>

                        <br />
                        {/* <p class="bold">Welcome to my website! Here you can find my personal<br /> Portfolio and other info</p> */}
                        <a href="/portfolio" class="hero-button">my portfolio</a>
                    </div>

                    <div className="header2-img-box">
                        {/* <img src="react.svg" alt="Niko Hoffrén" className="back-img" /> */}
                        <img src="NHphoto2.jpg" alt="Niko Hoffrén" className="front-img" />
                    </div>
                </div>
            </div>
            <br />
            <br />
        </section>
    </>
}




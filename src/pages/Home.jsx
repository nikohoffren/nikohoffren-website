export default function Home() {
    return <>
        <div className="screen-padding" />
        {/* <img src="NHlogo.jpg" alt="Niko Hoffrén logo" className="NHlogo" /> */}
        <section class="home">


        <div className="bio-info">
            <div className="header2-hero">
                <div className="header2-info">
                    <h1>I'm <span class="red-text">Niko</span> Hoffrén</h1>
                    <h2>Full Stack Development student &<br /> Music producer</h2>
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




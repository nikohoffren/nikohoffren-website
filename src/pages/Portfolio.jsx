export default function Portfolio() {
    return <>

<section class="bio">
    <div className="extra-margin-top" />
    <h1>PORTFOLIO</h1>
    <div className="container">
        <div className="bio-info">
        <img src="NHphoto2.jpg" width="100%" id="NHphoto" alt="Picture of very hansome Niko Hoffrén" />
        <br />

            <p>I'm Niko Hoffrén, music producer and programmer born in Kuopio, Finland in 1986. In my spare time i like to play with my son, make music and code something interesting.</p>
            <p>In 2020 i started programming as a hobby with Java and my knowledge of languages and different frameworks has grown since over the years.</p>
            <p>You can find more info from the Web development section.</p>
            <p> I'm currently studying Software development in <a href="https://sakky.fi/fi" target="_blank" className="red-text">Savon Ammattiopisto</a> at Kuopio, Finland and hope to graduate in 2024.</p>
        </div>
    </div>

    <hr />
    <br />

    <div className="container">
        <h3>WEB DEVELOPMENT</h3>
        <p>Languages/Frameworks/Databases</p>
        <p>
            - Java <br />
            - C# <br />
            - HTML <br />
            - CSS <br />
            - PHP <br />
            - SQL (MySQL) <br />
            - Firebase <br />
            - JavaScript/TypeScript <br />
            - Vite/React.js <br />
            - Node.js <br />
            - Ruby (on Rails) <br />
            - Dart (Flutter) <br />
            - Python <br />
        </p>

        <div class="row">
            <div class="portfolio-col">
                <a href="https://www.hunajaholisti.fi" target="_blank"><img src="HHlahja.jpg" alt="Bottle of delicious honey from Hunajaholistin Hunaja" />
                <h3>HUNAJAHOLISTIN HUNAJA</h3>
                <p>This is a Finnish commercial website for selling honey-products. I made the site mainly with Vite/React/JavaScript.</p>
                <p class="arial">hunajaholisti.fi<br />2021 - present</p></a>
            </div>
        </div>
    </div>

    <br />
    <hr />


    <div className="container">
        <div className="bio-info">
            <h3>MUSIC PRODUCING & AUDIO ENGINEERING</h3>
            <p>I have played keyboards from when i was 5 years old and have been making music since. Past several years i've been making electronic music with FL Studio and have released tracks with labels such as Monster Tunes, Trancespired, Trance All-Stars, Alveda, Yeiskomp and many others.</p>
            <p>I have mixed and mastered tracks for artists such as <a href="https://linktr.ee/ianjamestabone" target="_blank" className="red-text">IanT</a> and <a href="https://www.darylg.net" target="_blank" className="red-text">DarylG</a>.</p>
            <p>Currently i also play keyboards in <a href="https://www.instagram.com/forsakengodsofficial/" target="_blank" className="red-text">Forsaken Gods</a>, which is a power metal band based in Helsinki. In my past career i've made music with <a href="https://www.youtube.com/watch?v=v5FRxNfK7kE&ab_channel=ElektraHelsinki-Topic" target="_blank" className="red-text">Elektra Helsinki</a>, Love & Death, Precursor and several others.</p>
        </div>
    </div>


    <hr />
    <br />

    <div className="container">
        <h3>WORKING HISTORY</h3>
        <p>You can find my complete working history in my <a href="https://www.linkedin.com/in/nikohoffren/details/experience/" target="_blank" className="red-text">LinkedIn</a></p>
    </div>

    <br />
    <hr />
    <br />

    <div className="container">
        <h3>LANGUAGES</h3>
        <p>ENGLISH - Full professional proficiency</p>
        <p>FINNISH - Native or bilingual proficiency</p>
        <p>SWEDISH - Elementary proficiency</p>
    </div>
    <br />
    <hr />
    <br />
    <br />
</section>

    </>
}

export default function HeroSection()  {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Olá, Sou João Lucas</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">Full Stack</span>{""}
                        <br />
                        Developer Jr
                    </h1>
                </div>
                <button className="btn btn-primary" onClick={window.open('./assets/CvJoaoLucas.pdf')}>Download CV</button>
            </div>
            <div className="hero--section--img">
                <img src="./img/profile-pic.png" alt="Hero Section" />
            </div>
        </section>
    );
}
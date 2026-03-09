function Hero({ lang }) {
  const isFr = lang === "fr";

  return (
    <section className="hero" id="home">
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay">
        <div className="container hero-content">
          <h2>
            {isFr ? "Votre aventure au " : "Your journey to "}
            <span className="red">Canada</span>
            {isFr ? " commence ici" : " starts here"}
          </h2>
          <p>
            {isFr
              ? "Évaluation gratuite pour immigrer, travailler, étudier ou vivre au Canada"
              : "Free assessment to immigrate, work, study, or live in Canada"}
          </p>
          <a href="#contact" className="primary-btn">
            {isFr ? "Évaluation gratuite" : "Free Assessment"}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
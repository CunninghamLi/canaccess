function Testimonials({ lang }) {
  const isFr = lang === "fr";

  const testimonials = isFr
    ? [
        {
          name: "John Doe",
          stars: "★★★★☆",
          text: "Bon service!",
        },
        {
          name: "Mary Jane",
          stars: "★★★☆☆",
          text: "Le service pourrait etre mieux.",
        },
        {
          name: "Win Technologie",
          stars: "★★★★★",
          text: "Meilleur service recu!",
        },
        {
          name: "Sophie Tremblay",
          stars: "★★★★★",
          text: "Equipe professionnelle et tres rapide. Je recommande vivement.",
        },
        {
          name: "Karim El Mansouri",
          stars: "★★★★☆",
          text: "Processus clair du debut a la fin avec un excellent accompagnement.",
        },
        {
          name: "Nadia B.",
          stars: "★★★★★",
          text: "Service humain, transparent et efficace. Merci a toute l'equipe.",
        },
        {
          name: "Alexandre G.",
          stars: "★★★★☆",
          text: "Tres bonne experience globale et suivi serieux de mon dossier.",
        },
      ]
    : [
        {
          name: "John Doe",
          stars: "★★★★☆",
          text: "Great service!",
        },
        {
          name: "Mary Jane",
          stars: "★★★☆☆",
          text: "Service could be better.",
        },
        {
          name: "Win Technologie",
          stars: "★★★★★",
          text: "Best service I received!",
        },
        {
          name: "Sophie Tremblay",
          stars: "★★★★★",
          text: "Professional and very fast team. I highly recommend them.",
        },
        {
          name: "Karim El Mansouri",
          stars: "★★★★☆",
          text: "Clear process from start to finish with excellent support.",
        },
        {
          name: "Nadia B.",
          stars: "★★★★★",
          text: "Human, transparent, and efficient service. Thank you to the whole team.",
        },
        {
          name: "Alexandre G.",
          stars: "★★★★☆",
          text: "Very good overall experience and serious follow-up on my case.",
        },
      ];

  return (
    <section className="section testimonials">
      <div className="container">
        <h2 className="section-title">
          {isFr ? "CE QUE NOS CLIENTS DISENT" : "WHAT OUR CLIENTS SAY"}
        </h2>

        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <div className="avatar">
                <span className="avatar-icon">👤</span>
              </div>
              <h3>{item.name}</h3>
              <div className="stars">{item.stars}</div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
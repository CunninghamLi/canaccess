function Services({ lang }) {
  const isFr = lang === "fr";

  const services = isFr
    ? [
        {
          title: "Immigration Permanente",
          text: "Rendez votre projet d'installation au Canada concret en explorant plus de 100 voies d'immigration.",
          button: "Mes options",
          type: "primary",
        },
        {
          title: "Permis de travail au Canada",
          text: "Verifiez si vous avez besoin d'un permis de travail temporaire canadien et comment l'obtenir.",
          button: "Permis de travail",
          type: "secondary",
        },
        {
          title: "Parrainage familial",
          text: "Decouvrez les solutions pour faire venir votre famille au Canada comme residents permanents.",
          button: "Parrainage",
          type: "secondary",
        },
        {
          title: "Citoyenneté et démarches légales",
          text: "Recevez un accompagnement clair pour la citoyennete et vos demarches legales d'immigration.",
          button: "Demarches legales",
          type: "primary",
        },
        {
          title: "Immigration entrepreneuriale et investissement",
          text: "Beneficiez de strategies adaptees pour vos projets d'affaires et d'investissement au Canada.",
          button: "Immigration",
          type: "secondary",
        },
        {
          title: "Prendre un rendez-vous",
          text: "",
          button: "Prendre rendez-vous",
          type: "primary",
        },
      ]
    : [
        {
          title: "Immigrate to Canada",
          text: "Make your goal of moving to Canada a reality by exploring over 100 available immigration pathways.",
          button: "My options",
          type: "primary",
        },
        {
          title: "Canadian Work Permits",
          text: "Find out whether you need a temporary Canadian work permit and how to get one.",
          button: "Work permits",
          type: "secondary",
        },
        {
          title: "Family Sponsorship",
          text: "Discover ways to bring your family members to Canada as permanent residents.",
          button: "Sponsorship",
          type: "secondary",
        },
        {
          title: "Citizenship and Legal Procedures",
          text: "Get clear guidance for citizenship applications and legal immigration procedures.",
          button: "Legal procedures",
          type: "primary",
        },
        {
          title: "Business Immigration and Investment",
          text: "Receive tailored strategies for your business and investment plans in Canada.",
          button: "Immigration",
          type: "secondary",
        },
        {
          title: "Book an appointment",
          text: "",
          button: "Book now",
          type: "primary",
        },
      ];

  return (
    <section className="section services">
      <div className="container">
        <h2 className="services-heading">
          {isFr
            ? "Can Access vous accompagne a chaque étape de votre projet d'immigration. Nos experts vous guident pour :"
            : "Can Access supports you at every step of your immigration project. Our experts guide you to:"}
        </h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">🍁</div>
              <h3>{service.title}</h3>
              {service.text && <p>{service.text}</p>}
              <a
                href="#contact"
                className={
                  service.type === "primary" ? "primary-btn" : "secondary-btn"
                }
              >
                {service.button}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
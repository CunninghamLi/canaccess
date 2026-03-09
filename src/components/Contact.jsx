function Contact({ lang }) {
  const isFr = lang === "fr";

  return (
    <section className="contact-section" id="contact">
      <div className="contact-left" />
      <div className="contact-right">
        <h2>
          {isFr ? "CONTACTEZ-NOUS " : "CONTACT US "}
          <span className="red">{isFr ? "DES MAINTENANT" : "NOW"}</span>
        </h2>

        <form className="contact-form">
          <input type="text" placeholder={isFr ? "NOM COMPLET *" : "FULL NAME *"} />
          <input type="email" placeholder={isFr ? "COURRIEL *" : "EMAIL *"} />
          <input type="text" placeholder={isFr ? "TELEPHONE *" : "PHONE *"} />
          <input type="text" placeholder={isFr ? "OBJET *" : "SUBJECT *"} />
          <textarea
            placeholder={isFr ? "VOTRE MESSAGE ..." : "YOUR MESSAGE ..."}
            rows="6"
          />
          <button type="submit" className="submit-btn">
            {isFr ? "SOUMETTRE" : "SUBMIT"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
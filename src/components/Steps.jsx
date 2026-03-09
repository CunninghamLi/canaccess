function Steps({ lang }) {
  const isFr = lang === "fr";

  const steps = isFr
    ? [
        {
          title: "Évaluation gratuite",
          text: "Remplissez notre formulaire rapide",
        },
        {
          title: "Analyse personnalisée",
          text: "Nos experts etudient votre dossier",
        },
        {
          title: "Accompagnement complet",
          text: "Nous vous guidons jusqu'au succes",
        },
        {
          title: "Suivi personnalisé",
          text: "Assistance tout au long du processus",
        },
        {
          title: "Résultat final",
          text: "Immigration reussie et installation au Canada",
        },
      ]
    : [
        {
          title: "Free assessment",
          text: "Complete our quick form",
        },
        {
          title: "Personalized analysis",
          text: "Our experts review your profile",
        },
        {
          title: "Full support",
          text: "We guide you all the way to success",
        },
        {
          title: "Personal follow-up",
          text: "Support throughout the entire process",
        },
        {
          title: "Final result",
          text: "Successful immigration and settlement in Canada",
        },
      ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">
          {isFr
            ? "CINQ ÉTAPES SIMPLES POUR DÉMARRER"
            : "FIVE SIMPLE STEPS TO GET STARTED"}
        </h2>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <div className="step-wrapper" key={index}>
              <div className="step-card">
                <div className="step-number">{String(index + 1).padStart(2, '0')}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="step-arrow">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Steps;
function Stats({ lang }) {
  const isFr = lang === "fr";

  const items = isFr
    ? [
        { title: "+10 ans", text: "d'expérience" },
        { title: "1000", text: "clients accompagnés" },
        { title: "Can Access", text: "cabinet d'immigration" },
        { title: "Ici pour vous aider", text: "quand vous en avez besoin" },
      ]
    : [
        { title: "+10 YEARS", text: "OF EXPERIENCE" },
        { title: "1000", text: "supported clients" },
        { title: "CAN ACCESS", text: "IMMIGRATION FIRM" },
        { title: "Here to help you", text: "when you need it" },
      ];

  return (
    <section className="stats">
      <div className="container stats-grid">
        {items.map((item, index) => (
          <div className="stat-item" key={index}>
            {index === 2 ? (
              <img src="/logo_noir.png" alt="Can Access" className="stats-logo" />
            ) : (
              <>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
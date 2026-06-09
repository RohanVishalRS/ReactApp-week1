import './App.css';

const eventsData = [
  {
    id: 1,
    title: "React Developers Meetup",
    date: "July 15, 2026",
    location: "Capital Factory, Dallas",
    description: "Explore the latest features in React, including the new compiler and server components."
  },
  {
    id: 2,
    title: "DFW Python Hackathon",
    date: "July 22, 2026",
    location: "UT Dallas Campus",
    description: "A 48-hour hackathon focused on building machine learning models for local nonprofits."
  },
  {
    id: 3,
    title: "Texas Cyber Security Summit",
    date: "August 5, 2026",
    location: "Irving Convention Center",
    description: "Industry experts discuss emerging zero-day vulnerabilities and enterprise defense strategies."
  },
  {
    id: 4,
    title: "Cloud Native Architecture",
    date: "August 12, 2026",
    location: "Plano, TX",
    description: "Workshops on Kubernetes orchestration, Docker containerization, and microservices."
  },
  {
    id: 5,
    title: "Women in Tech Mixer",
    date: "August 19, 2026",
    location: "Deep Ellum, Dallas",
    description: "Networking event for female developers, designers, and tech entrepreneurs."
  },
  {
    id: 6,
    title: "AI & Local Inference Deep Dive",
    date: "September 2, 2026",
    location: "Addison, TX",
    description: "Technical sessions on deploying large language models (LLMs) and optimizing local hardware."
  },
  {
    id: 7,
    title: "Open Source Hack Night",
    date: "September 9, 2026",
    location: "Dallas Makerspace",
    description: "Bring your laptop and contribute to popular open-source repositories alongside core maintainers."
  },
  {
    id: 8,
    title: "UX/UI Design Sprint",
    date: "September 16, 2026",
    location: "Downtown Dallas",
    description: "A collaborative workshop focusing on user research, wireframing, and Web Content Accessibility Guidelines (WCAG)."
  },
  {
    id: 9,
    title: "Web3 Developers Conference",
    date: "October 3, 2026",
    location: "Fort Worth, TX",
    description: "Learn about smart contract development, cryptographic security, and decentralized applications."
  },
  {
    id: 10,
    title: "Tech Startup Pitch Night",
    date: "October 10, 2026",
    location: "Frisco, TX",
    description: "Local tech founders pitch their early-stage startups to angel investors and venture capitalists."
  }
];

const EventCard = ({ event }) => (
    <article className="event-card">
      <h3 className="event-title">{event.title}</h3>
      <div className="event-meta">
        <span className="meta-item">📅 {event.date}</span>
        <span className="meta-item">📍 {event.location}</span>
      </div>
      <p className="event-description">{event.description}</p>
      <button className="event-button">RSVP</button>
    </article>
);

const App = () => {
  return (
      <div className="app-container">
        <header className="app-header">
          <h1 className="main-title">DFW Tech & Developer Hub</h1>
          <p className="subtitle">Discover the best workshops, meetups, and hackathons in the local engineering community.</p>
        </header>

        <main className="events-grid">
          {eventsData.map(event => (
              <EventCard key={event.id} event={event} />
          ))}
        </main>
      </div>
  );
};

export default App;
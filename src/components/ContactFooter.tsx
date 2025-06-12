export const ContactFooter = () => {
  const contacts = [
    {
      name: "LinkedIn",
      icon: "💼",
      url: "https://www.linkedin.com/in/petr-novák-1a6420214",
      description: "Professional network"
    },
    {
      name: "Email",
      icon: "📧",
      url: "mailto:novak.petr456@email.cz",
      description: "Get in touch directly"
    }
  ];

  return (
    <footer className="py-20 px-4 bg-gradient-to-t from-dungeon-950 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-pixel text-3xl md:text-4xl text-fantasy-gold mb-4">
            CONTACT MENU
          </h2>
          <p className="text-muted-foreground font-retro text-lg">
            Contact me directly:
          </p>
        </div>

        {/* Contact Grid */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {contacts.map((contact, index) => (
            <a
              key={contact.name}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rpg-card text-center group hover:scale-105 transition-all duration-300"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                {contact.icon}
              </div>
              
              <h3 className="font-pixel text-lg text-fantasy-gold mb-2">
                {contact.name}
              </h3>
              
              <p className="text-sm text-muted-foreground font-retro">
                {contact.description}
              </p>
            </a>
          ))}
        </div>

        {/* Status Bar */}
        <div className="rpg-card max-w-2xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="font-pixel text-xl text-fantasy-gold mb-4">
              CURRENT STATUS
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-4">
                <span className="text-fantasy-emerald">🟢</span>
                <span className="font-retro">Available for new opportunities</span>
              </div>
              
              <div className="flex items-center justify-center gap-4">
                <span className="text-fantasy-gold">⚡</span>
                <span className="font-retro">Fast response time: ~24 hours</span>
              </div>
              
              <div className="flex items-center justify-center gap-4">
                <span className="text-fantasy-sapphire">🌍</span>
                <span className="font-retro">Based in Praha, Czech Republic</span>
              </div>
            </div>
          </div>

          <div className="border-t border-fantasy-gold/20 pt-6">
            <p className="font-pixel text-sm text-fantasy-gold mb-2">
              "Code is poetry written in logic"
            </p>
            <p className="text-xs text-muted-foreground font-retro">
              © 2024 Petr Novák - RPG Developer CV
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-fantasy-gold via-fantasy-copper to-fantasy-gold opacity-50"></div>
      </div>
    </footer>
  );
};

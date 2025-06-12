interface Tool {
  name: string;
  icon: string;
  category: string;
  rarity: "common" | "rare" | "epic" | "legendary";
  description: string;
}

const tools: Tool[] = [
  { name: "PyCharm", icon: "💻", category: "IDE", rarity: "common", description: "Primary development environment" },
  { name: "GitLab", icon: "🦊", category: "Version Control", rarity: "common", description: "Code repository and collaboration" },
  { name: "Docker", icon: "🐳", category: "DevOps", rarity: "rare", description: "Containerization platform" },
  { name: "PyTest", icon: "🕹️", category: "API Testing", rarity: "rare", description: "API development and testing" },
  { name: "Flask", icon: "🫙", category: "Back-end", rarity: "epic", description: "Python development environment" },
  { name: "Bash", icon: "⚡", category: "Command Line", rarity: "legendary", description: "System command interface" },
  { name: "Slack", icon: "💬", category: "Communication", rarity: "common", description: "Team communication" },
  { name: "MySQL", icon: "📝", category: "Database", rarity: "rare", description: "MySQL" },
  { name: "SQLAlchemy", icon: "🧙", category: "Database", rarity: "epic", description: "SQL toolkit" },
  { name: "Vue.js", icon: "🧩", category: "Front-end", rarity: "epic", description: "Progressive JavaScript framework" }
];

const getRarityColor = (rarity: Tool['rarity']) => {
  switch (rarity) {
    case "common":
      return "border-gray-400 bg-gray-400/10";
    case "rare":
      return "border-blue-400 bg-blue-400/10";
    case "epic":
      return "border-purple-400 bg-purple-400/10";
    case "legendary":
      return "border-fantasy-gold bg-fantasy-gold/10";
  }
};

const getRarityGlow = (rarity: Tool['rarity']) => {
  switch (rarity) {
    case "common":
      return "";
    case "rare":
      return "shadow-lg shadow-blue-400/20";
    case "epic":
      return "shadow-lg shadow-purple-400/20";
    case "legendary":
      return "shadow-lg shadow-fantasy-gold/30 animate-glow-pulse";
  }
};

export const Inventory = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-pixel text-3xl md:text-4xl text-fantasy-gold mb-4">
            INVENTORY
          </h2>
          <p className="text-muted-foreground font-retro text-lg">
            Tools and technologies in my arsenal
          </p>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {Array.from(new Set(tools.map(tool => tool.category))).map(category => (
              <span
                key={category}
                className="font-pixel text-xs px-3 py-1 bg-dungeon-800 border border-fantasy-gold/20 rounded-lg text-fantasy-silver"
              >
                {category}
              </span>
            ))}
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {tools.map((tool, index) => (
            <div
              key={tool.name}
              className={`inventory-slot group ${getRarityColor(tool.rarity)} ${getRarityGlow(tool.rarity)}`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-200">
                {tool.icon}
              </div>
              
              <div className="font-pixel text-xs text-center text-fantasy-gold mb-1">
                {tool.name}
              </div>
              
              <div className="text-xs text-muted-foreground font-retro text-center">
                {tool.category}
              </div>

              {/* Tooltip on hover */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-dungeon-900 border border-fantasy-gold/30 rounded-lg text-xs font-retro text-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10 w-48">
                <div className="font-pixel text-fantasy-gold mb-1">{tool.name}</div>
                <div className="text-muted-foreground">{tool.description}</div>
                <div className={`text-xs mt-1 ${
                  tool.rarity === 'legendary' ? 'text-fantasy-gold' :
                  tool.rarity === 'epic' ? 'text-purple-400' :
                  tool.rarity === 'rare' ? 'text-blue-400' : 'text-gray-400'
                }`}>
                  {tool.rarity.toUpperCase()}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Inventory Stats */}
        <div className="mt-12 rpg-card max-w-2xl mx-auto">
          <h3 className="font-pixel text-xl text-fantasy-gold mb-6 text-center">
            INVENTORY STATS
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="font-pixel text-lg text-fantasy-gold">{tools.length}</div>
              <div className="text-xs text-muted-foreground font-retro">Total Items</div>
            </div>
            
            <div>
              <div className="font-pixel text-lg text-fantasy-gold">
                {tools.filter(t => t.rarity === 'legendary').length}
              </div>
              <div className="text-xs text-muted-foreground font-retro">Legendary</div>
            </div>
            
            <div>
              <div className="font-pixel text-lg text-fantasy-emerald">
                {Array.from(new Set(tools.map(t => t.category))).length}
              </div>
              <div className="text-xs text-muted-foreground font-retro">Categories</div>
            </div>
            
            <div>
              <div className="font-pixel text-lg text-fantasy-sapphire">∞</div>
              <div className="text-xs text-muted-foreground font-retro">Learning</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

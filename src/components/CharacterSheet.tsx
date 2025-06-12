import { useEffect, useState } from "react";

interface Skill {
  name: string;
  level: number;
  category: string;
  color: string;
}

const skills: Skill[] = [
  { name: "Python", level: 80, category: "Programming", color: "#3776ab" },
  { name: "JavaScript", level: 40, category: "Programming", color: "#f7df1e" },
  { name: "SQL", level: 90, category: "Database", color: "#336791" },
  { name: "API Testing", level: 70, category: "Testing", color: "#00758F" },
  { name: "Docker", level: 65, category: "DevOps", color: "#2496ed" },
  { name: "Git", level: 80, category: "Tools", color: "#f05032" },
  { name: "HTML/CSS", level: 30, category: "Programming", color: "#f05032" },
];

const StatBar = ({ skill, index }: { skill: Skill; index: number }) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedLevel(skill.level);
    }, index * 200 + 500);

    return () => clearTimeout(timer);
  }, [skill.level, index]);

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-pixel text-sm text-fantasy-gold">{skill.name}</span>
        <span className="font-pixel text-xs text-fantasy-silver">{skill.level}/100</span>
      </div>

      <div className="stat-bar">
        <div
          className="stat-fill transition-all duration-1000 ease-out"
          style={{
            width: `${animatedLevel}%`,
            background: `linear-gradient(90deg, ${skill.color}aa, ${skill.color})`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
        </div>
      </div>

      <div className="text-xs text-muted-foreground font-retro">
        {skill.category}
      </div>
    </div>
  );
};

export const CharacterSheet = () => {
  const [showStats, setShowStats] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowStats(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('character-sheet');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const calculateExperience = () => {
    const start = new Date(2022, 10); // November is month 10 (zero-indexed)
    const now = new Date();
    const months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
    const years = months / 12;
    return Math.ceil(years); // round up to nearest whole number
  };

  return (
    <section id="character-sheet" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-pixel text-3xl md:text-4xl text-fantasy-gold mb-4">
            CHARACTER SHEET
          </h2>
          <p className="text-muted-foreground font-retro text-lg">
            Technical skills and stats
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Main Stats */}
          <div className="rpg-card">
            <h3 className="font-pixel text-xl text-fantasy-gold mb-6 border-b border-fantasy-gold/20 pb-2">
              CORE ABILITIES
            </h3>

            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="font-pixel text-fantasy-silver">INTELLIGENCE</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className={`w-6 h-6 rounded border-2 ${
                      i < 3 ? 'bg-fantasy-sapphire border-fantasy-sapphire' : 'border-fantasy-silver/30'
                    }`}></div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="font-pixel text-fantasy-silver">CREATIVITY</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className={`w-6 h-6 rounded border-2 ${
                      i < 4 ? 'bg-fantasy-amethyst border-fantasy-amethyst' : 'border-fantasy-silver/30'
                    }`}></div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="font-pixel text-fantasy-silver">HARD-WORK</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className={`w-6 h-6 rounded border-2 ${
                      i < 5 ? 'bg-fantasy-ruby border-fantasy-ruby' : 'border-fantasy-silver/30'
                    }`}></div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="font-pixel text-fantasy-silver">PERSISTANCE</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className={`w-6 h-6 rounded border-2 ${
                      i < 5 ? 'bg-fantasy-emerald border-fantasy-emerald' : 'border-fantasy-silver/30'
                    }`}></div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="font-pixel text-fantasy-silver">TEAMWORK</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className={`w-6 h-6 rounded border-2 ${
                      i < 4 ? 'bg-fantasy-gold border-fantasy-gold' : 'border-fantasy-silver/30'
                    }`}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="rpg-card">
            <h3 className="font-pixel text-xl text-fantasy-gold mb-6 border-b border-fantasy-gold/20 pb-2">
              TECHNICAL SKILLS
            </h3>

            <div className="space-y-4">
              {skills.map((skill, index) => (
                <StatBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* Experience Summary */}
        <div className="rpg-card mt-8">
          <h3 className="font-pixel text-xl text-fantasy-gold mb-6 border-b border-fantasy-gold/20 pb-2">
            EXPERIENCE SUMMARY
          </h3>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-dungeon-800 rounded-lg p-4 border border-fantasy-gold/20">
              <div className="font-pixel text-2xl text-fantasy-gold mb-2">{calculateExperience()}</div>
              <div className="text-muted-foreground font-retro">Years of experience</div>
            </div>

            <div className="bg-dungeon-800 rounded-lg p-4 border border-fantasy-emerald/20">
              <div className="font-pixel text-2xl text-fantasy-emerald mb-2">50+</div>
              <div className="text-muted-foreground font-retro">Completed projects</div>
            </div>

            <div className="bg-dungeon-800 rounded-lg p-4 border border-fantasy-sapphire/20">
              <div className="font-pixel text-2xl text-fantasy-sapphire mb-2">10+</div>
              <div className="text-muted-foreground font-retro">Technologies used</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

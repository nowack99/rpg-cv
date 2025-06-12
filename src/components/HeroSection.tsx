import { useEffect, useState } from "react";

export const HeroSection = () => {
  const [showContent, setShowContent] = useState(false);

  // Calculate level based on birth date
  const birthDate = new Date(1999, 11, 27); // Months are 0-indexed
  const today = new Date();
  const ageInMs = today.getTime() - birthDate.getTime();
  const ageInYears = ageInMs / (1000 * 60 * 60 * 24 * 365.25);
  const level = Math.floor(ageInYears);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-8 h-8 bg-fantasy-gold rounded-sm animate-pulse"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-fantasy-emerald rounded-sm animate-pulse delay-300"></div>
        <div className="absolute bottom-40 left-20 w-4 h-4 bg-fantasy-ruby rounded-sm animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-10 w-10 h-10 bg-fantasy-sapphire rounded-sm animate-pulse delay-1000"></div>
      </div>

      <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
        showContent ? 'animate-fade-in' : 'opacity-0'
      }`}>
        {/* Character Avatar */}
        <div className="mb-8 relative">
          <div className="w-32 h-32 mx-auto mb-6 relative">
            <img
              src="/uploads/2357864e-107b-4d88-9761-bc97484c34c7.png"
              alt="Petr Novák - Avatar"
              className="w-full h-full rounded-lg border-4 border-fantasy-gold shadow-2xl object-cover"
              style={{
                imageRendering: 'pixelated',
                filter: 'contrast(1.1) brightness(1.1)'
              }}
            />
            <div className="absolute -inset-1 bg-gradient-to-r from-fantasy-gold via-fantasy-copper to-fantasy-gold rounded-lg opacity-75 animate-glow-pulse -z-10"></div>
          </div>

          <div className="inline-block bg-fantasy-gradient border-2 border-fantasy-gold/50 rounded-lg px-4 py-2 mb-4">
            <span className="font-pixel text-fantasy-gold text-sm">LVL {level} DEVELOPER</span>
          </div>
        </div>

        {/* Character Info */}
        <div className="rpg-card max-w-2xl mx-auto mb-8">
          <h1 className="font-pixel text-4xl md:text-6xl text-fantasy-gold mb-4 drop-shadow-lg">
            PETR NOVÁK
          </h1>

          <div className="space-y-3 text-lg md:text-xl">
            <div className="flex items-center justify-center gap-4">
              <span className="font-pixel text-fantasy-silver">LOCATION:</span>
              <span className="text-fantasy-gold">Prague, Czech Republic</span>
            </div>

            <div className="flex items-center justify-center gap-4">
              <span className="font-pixel text-fantasy-silver">CLASS:</span>
              <span className="text-fantasy-emerald">Back-end Developer</span>
            </div>

            <div className="flex items-center justify-center gap-4">
              <span className="font-pixel text-fantasy-silver">GUILD:</span>
              <span className="text-fantasy-sapphire">Software Engineers</span>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-fantasy-gold/20">
            <p className="text-muted-foreground leading-relaxed">
              Experienced developer with a passion for clean code and innovative solutions.
              Specializing in backend development with Python and modern web technologies.
              Always ready for new challenges and continuous learning.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="bg-gradient-to-r from-fantasy-emerald to-fantasy-sapphire hover:from-fantasy-sapphire hover:to-fantasy-emerald font-pixel text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
            START QUEST
          </button>

          <button className="bg-gradient-to-r from-fantasy-gold to-fantasy-copper hover:from-fantasy-copper hover:to-fantasy-gold font-pixel text-dungeon-950 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
            VIEW STATS
          </button>
        </div>
      </div>
    </section>
  );
};

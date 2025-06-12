import { useEffect, useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { CharacterSheet } from "@/components/CharacterSheet";
import { QuestLog } from "@/components/QuestLog";
import { Inventory } from "@/components/Inventory";
import { ContactFooter } from "@/components/ContactFooter";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate game loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-dungeon-gradient flex items-center justify-center">
        <div className="text-center animate-pulse">
          <div className="font-pixel text-fantasy-gold text-2xl mb-4">LOADING GAME...</div>
          <div className="w-64 h-2 bg-dungeon-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-fantasy-gold to-fantasy-copper animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dungeon-gradient">
      {/* Background pattern overlay */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #ffd700 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, #ffd700 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10">
        <HeroSection />
        <CharacterSheet />
        <QuestLog />
        <Inventory />
        <ContactFooter />
      </div>
    </div>
  );
};

export default Index;

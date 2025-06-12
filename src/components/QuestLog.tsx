import { useState } from "react";

interface Quest {
  id: string;
  title: string;
  description: string;
  status: "completed" | "in-progress" | "planned";
  reward: string;
  difficulty: "easy" | "medium" | "hard" | "legendary";
}

const quests: Quest[] = [
  {
    id: "1",
    title: "Legacy Code Refactoring",
    description: "Refactoring legacy Python code and applying modern best practices",
    status: "completed",
    reward: "+500 XP, Clean Code Achievement",
    difficulty: "hard"
  },
  {
    id: "2",
    title: "REST API Development",
    description: "Developing scalable REST API for an e-commerce platform",
    status: "in-progress",
    reward: "+750 XP, API Master Badge",
    difficulty: "medium"
  },
  {
    id: "3",
    title: "Learn And Do Something On Front-end",
    description: "Learning that everything is not about back-end",
    status: "completed",
    reward: "+600 XP, Frontend Warrior Title",
    difficulty: "medium"
  },
  {
    id: "4",
    title: "Database Optimization Quest",
    description: "Optimizing database queries and improving performance by 300%",
    status: "completed",
    reward: "+400 XP, Performance Hero Medal",
    difficulty: "hard"
  },
  {
    id: "5",
    title: "Learn Rust Programming",
    description: "Learning the Rust language for systems programming",
    status: "planned",
    reward: "+800 XP, Memory Safety Guardian",
    difficulty: "legendary"
  },
  {
    id: "6",
    title: "Microservices Architecture",
    description: "Designing and implementing a microservices architecture using Docker",
    status: "planned",
    reward: "+900 XP, Architecture Master",
    difficulty: "legendary"
  }
];

const getStatusIcon = (status: Quest['status']) => {
  switch (status) {
    case "completed":
      return "✅";
    case "in-progress":
      return "⚔️";
    case "planned":
      return "📋";
  }
};

const getStatusColor = (status: Quest['status']) => {
  switch (status) {
    case "completed":
      return "text-fantasy-emerald";
    case "in-progress":
      return "text-fantasy-gold";
    case "planned":
      return "text-fantasy-silver";
  }
};

const getDifficultyColor = (difficulty: Quest['difficulty']) => {
  switch (difficulty) {
    case "easy":
      return "text-fantasy-emerald";
    case "medium":
      return "text-fantasy-gold";
    case "hard":
      return "text-fantasy-ruby";
    case "legendary":
      return "text-fantasy-amethyst";
  }
};

const QuestItem = ({ quest }: { quest: Quest }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="quest-item cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
      <div className="flex items-start gap-3">
        <div className="text-2xl mt-1">{getStatusIcon(quest.status)}</div>
        
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h4 className="font-pixel text-sm text-fantasy-gold">{quest.title}</h4>
            <span className={`font-pixel text-xs px-2 py-1 rounded ${getDifficultyColor(quest.difficulty)} bg-dungeon-800`}>
              {quest.difficulty.toUpperCase()}
            </span>
          </div>
          
          <p className="text-muted-foreground text-sm mb-2 font-retro">
            {quest.description}
          </p>
          
          <div className="flex items-center justify-between">
            <span className={`font-pixel text-xs ${getStatusColor(quest.status)}`}>
              {quest.status.replace('-', ' ').toUpperCase()}
            </span>
            
            {isExpanded && (
              <div className="text-xs text-fantasy-copper font-retro">
                {quest.reward}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const QuestLog = () => {
  const [filter, setFilter] = useState<'all' | Quest['status']>('all');
  
  const filteredQuests = filter === 'all' 
    ? quests 
    : quests.filter(quest => quest.status === filter);

  const completedCount = quests.filter(q => q.status === 'completed').length;
  const inProgressCount = quests.filter(q => q.status === 'in-progress').length;
  const plannedCount = quests.filter(q => q.status === 'planned').length;

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-dungeon-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-pixel text-3xl md:text-4xl text-fantasy-gold mb-4">
            QUEST LOG
          </h2>
          <p className="text-muted-foreground font-retro text-lg">
            Projects, achievements and upcoming challenges
          </p>
        </div>

        {/* Quest Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
          <div className="bg-fantasy-gradient border border-fantasy-emerald/30 rounded-lg p-4 text-center">
            <div className="font-pixel text-xl text-fantasy-emerald">{completedCount}</div>
            <div className="text-xs text-muted-foreground font-retro">Completed</div>
          </div>
          
          <div className="bg-fantasy-gradient border border-fantasy-gold/30 rounded-lg p-4 text-center">
            <div className="font-pixel text-xl text-fantasy-gold">{inProgressCount}</div>
            <div className="text-xs text-muted-foreground font-retro">In progress</div>
          </div>
          
          <div className="bg-fantasy-gradient border border-fantasy-silver/30 rounded-lg p-4 text-center">
            <div className="font-pixel text-xl text-fantasy-silver">{plannedCount}</div>
            <div className="text-xs text-muted-foreground font-retro">Planned</div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {(['all', 'completed', 'in-progress', 'planned'] as const).map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`font-pixel text-xs px-4 py-2 rounded-lg border transition-all duration-200 ${
                filter === status
                  ? 'bg-fantasy-gold text-dungeon-950 border-fantasy-gold'
                  : 'bg-dungeon-800 text-fantasy-silver border-fantasy-silver/30 hover:border-fantasy-gold/50'
              }`}
            >
              {status === 'all' ? 'ALL' : status.replace('-', ' ').toUpperCase()}
            </button>
          ))}
        </div>

        {/* Quest List */}
        <div className="grid md:grid-cols-2 gap-4">
          {filteredQuests.map((quest) => (
            <QuestItem key={quest.id} quest={quest} />
          ))}
        </div>
      </div>
    </section>
  );
};

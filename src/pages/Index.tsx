import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import HomeSection from '@/components/HomeSection';
import RulesSection from '@/components/RulesSection';
import GameSection from '@/components/GameSection';
import GameSession, { Character } from '@/components/GameSession';

const characters: Character[] = [
  {
    id: 1,
    name: 'Вредное трение',
    role: 'prosecutor',
    abilities: ['Анализ улик', 'Психологическое давление', 'Призыв к справедливости'],
    level: 1,
    avatar: '⚖️'
  },
  {
    id: 2,
    name: 'Вредное трение',
    role: 'prosecutor',
    abilities: ['Разоблачение лжи', 'Магический детектор', 'Неопровержимые факты'],
    level: 1,
    avatar: '🔍'
  },
  {
    id: 3,
    name: 'Полезное трение',
    role: 'defender',
    abilities: ['Щит доверия', 'Контраргументация', 'Эмпатическая связь'],
    level: 1,
    avatar: '🛡️'
  },
  {
    id: 4,
    name: 'Полезное трение',
    role: 'defender',
    abilities: ['Озарение правды', 'Защитное поле', 'Второй шанс'],
    level: 1,
    avatar: '✨'
  },
  {
    id: 5,
    name: 'Шипы',
    role: 'witness',
    abilities: ['Память событий', 'Проницательность', 'Детализация'],
    level: 1,
    avatar: '🔩'
  },
  {
    id: 6,
    name: 'Смазка',
    role: 'witness',
    abilities: ['Видение прошлого', 'Телепатия', 'Чтение энергии'],
    level: 1,
    avatar: '💧'
  },
  {
    id: 7,
    name: 'Подшипники',
    role: 'witness',
    abilities: ['Вращение времени', 'Механическая память', 'Балансировка фактов'],
    level: 1,
    avatar: '⚙️'
  }
];

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartGame = (character: Character) => {
    setGameStarted(true);
  };

  const handleBackToSelection = () => {
    setGameStarted(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold glow-text">Суд над Силой Трения</h1>
            <div className="flex gap-4">
              <Button
                variant={activeSection === 'home' ? 'default' : 'ghost'}
                onClick={() => {
                  setActiveSection('home');
                  setGameStarted(false);
                }}
                className="gap-2"
              >
                <Icon name="Home" size={18} />
                Главная
              </Button>
              <Button
                variant={activeSection === 'rules' ? 'default' : 'ghost'}
                onClick={() => {
                  setActiveSection('rules');
                  setGameStarted(false);
                }}
                className="gap-2"
              >
                <Icon name="BookOpen" size={18} />
                Правила
              </Button>
              <Button
                variant={activeSection === 'game' ? 'default' : 'ghost'}
                onClick={() => {
                  setActiveSection('game');
                  setGameStarted(false);
                }}
                className="gap-2"
              >
                <Icon name="Gamepad2" size={18} />
                Игра
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {activeSection === 'home' && <HomeSection onNavigate={setActiveSection} />}
        {activeSection === 'rules' && <RulesSection />}
        {activeSection === 'game' && !gameStarted && (
          <GameSection
            characters={characters}
            selectedCharacter={selectedCharacter}
            onSelectCharacter={setSelectedCharacter}
            onStartGame={handleStartGame}
          />
        )}
        {activeSection === 'game' && gameStarted && selectedCharacter && (
          <GameSession character={selectedCharacter} onBack={handleBackToSelection} />
        )}
      </main>

      <footer className="border-t border-border mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>⚡ Суд над Силой Трения — Ролевая игра ⚡</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

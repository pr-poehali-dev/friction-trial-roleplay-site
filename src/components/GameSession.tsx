import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

export interface Character {
  id: number;
  name: string;
  role: 'prosecutor' | 'defender' | 'witness';
  abilities: string[];
  level: number;
  avatar: string;
}

interface GameSessionProps {
  character: Character;
  onBack: () => void;
}

const GameSession = ({ character, onBack }: GameSessionProps) => {
  const [gameLog, setGameLog] = useState<string[]>([
    `Игра началась с персонажем ${character.name}`,
    'Суд над Силой Трения объявляется открытым!',
    '⚖️ Судья: Прошу всех занять свои места.',
    `${character.role === 'prosecutor' ? '🔥 Вы выступаете обвинителем!' : character.role === 'defender' ? '🛡️ Вы выступаете защитником!' : '👁️ Вы выступаете свидетелем!'}`,
  ]);
  const [usedAbilities, setUsedAbilities] = useState<number[]>([]);
  const [round, setRound] = useState(1);
  const [opponentAction, setOpponentAction] = useState<string | null>(null);

  const getRoleName = (role: string) => {
    switch (role) {
      case 'prosecutor': return 'Обвинитель';
      case 'defender': return 'Защитник';
      case 'witness': return 'Свидетель';
      default: return role;
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'prosecutor': return 'bg-destructive';
      case 'defender': return 'bg-primary';
      case 'witness': return 'bg-accent';
      default: return 'bg-secondary';
    }
  };

  const generateOpponentResponse = (role: string, usedAbility: string) => {
    const responses = {
      prosecutor: [
        '🛡️ Защитник: Это не доказательство, а предположение!',
        '🛡️ Защитник: Позвольте мне возразить на этот аргумент.',
        '🛡️ Защитник: Суд, прошу принять во внимание контраргумент!'
      ],
      defender: [
        '⚖️ Обвинитель: У меня есть улики, опровергающие это!',
        '⚖️ Обвинитель: Факты говорят об обратном!',
        '⚖️ Обвинитель: Это попытка ввести суд в заблуждение!'
      ],
      witness: [
        '⚖️ Судья: Интересное свидетельство. Стороны, ваши комментарии?',
        '🔥 Обвинитель: Это подтверждает нашу позицию!',
        '🛡️ Защитник: Благодарим свидетеля за объективность!'
      ]
    };
    
    const roleResponses = responses[role as keyof typeof responses];
    return roleResponses[Math.floor(Math.random() * roleResponses.length)];
  };

  const useAbility = (abilityIndex: number) => {
    const ability = character.abilities[abilityIndex];
    const newLog = [
      ...gameLog,
      `\n--- Раунд ${round} ---`,
      `${character.avatar} ${character.name} использует: "${ability}"`,
    ];
    
    const response = generateOpponentResponse(character.role, ability);
    newLog.push(response);
    newLog.push('⚖️ Судья: Заседание продолжается...');
    
    setGameLog(newLog);
    setUsedAbilities([...usedAbilities, abilityIndex]);
    setRound(round + 1);
    setOpponentAction(response);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <Button variant="outline" onClick={onBack} className="gap-2">
          <Icon name="ArrowLeft" size={18} />
          Назад к выбору
        </Button>
        <div className="flex items-center gap-3">
          <Badge variant="outline">Раунд {round}</Badge>
          <Badge className={getRoleColor(character.role)} variant="default">
            {getRoleName(character.role)}
          </Badge>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="glow border-primary">
          <CardHeader>
            <CardTitle className="flex items-center gap-4">
              <span className="text-5xl">{character.avatar}</span>
              <div>
                <div>{character.name}</div>
                <div className="text-sm text-muted-foreground font-normal">
                  Уровень {character.level} • {getRoleName(character.role)}
                </div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Выберите способность для использования в суде:
            </p>
            <div className="grid gap-2">
              {character.abilities.map((ability, idx) => (
                <Button
                  key={idx}
                  onClick={() => useAbility(idx)}
                  disabled={usedAbilities.includes(idx)}
                  variant={usedAbilities.includes(idx) ? 'outline' : 'default'}
                  className="justify-start gap-2"
                >
                  <Icon name="Sparkles" size={16} />
                  {ability}
                  {usedAbilities.includes(idx) && ' ✓'}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="max-h-[600px] flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Scroll" size={24} />
              Журнал судебного процесса
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto">
            <div className="space-y-2">
              {gameLog.map((log, idx) => (
                <div
                  key={idx}
                  className="bg-muted p-3 rounded-lg text-sm animate-fade-in"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  {log}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GameSession;
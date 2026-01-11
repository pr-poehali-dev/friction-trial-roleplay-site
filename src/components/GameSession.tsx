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
  ]);
  const [usedAbilities, setUsedAbilities] = useState<number[]>([]);

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

  const useAbility = (abilityIndex: number) => {
    const ability = character.abilities[abilityIndex];
    setGameLog([...gameLog, `${character.name} использует способность: ${ability}`]);
    setUsedAbilities([...usedAbilities, abilityIndex]);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <Button variant="outline" onClick={onBack} className="gap-2">
          <Icon name="ArrowLeft" size={18} />
          Назад к выбору
        </Button>
        <Badge className={getRoleColor(character.role)} variant="default">
          {getRoleName(character.role)}
        </Badge>
      </div>

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
                {usedAbilities.includes(idx) && ' (Использована)'}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Scroll" size={24} />
            Журнал игры
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {gameLog.map((log, idx) => (
              <div
                key={idx}
                className="bg-muted p-3 rounded-lg text-sm animate-fade-in"
              >
                {log}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GameSession;

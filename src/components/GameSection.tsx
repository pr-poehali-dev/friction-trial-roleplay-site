import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import type { Character } from './GameSession';

interface GameSectionProps {
  characters: Character[];
  selectedCharacter: Character | null;
  onSelectCharacter: (character: Character) => void;
  onStartGame: (character: Character) => void;
}

const GameSection = ({ characters, selectedCharacter, onSelectCharacter, onStartGame }: GameSectionProps) => {
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

  const renderCharacterCard = (char: Character) => (
    <Card
      key={char.id}
      className={`card-hover cursor-pointer ${selectedCharacter?.id === char.id ? 'glow ring-2 ring-primary' : ''}`}
      onClick={() => onSelectCharacter(char)}
    >
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="text-5xl mb-2">{char.avatar}</div>
          <Badge className={getRoleColor(char.role)}>
            {getRoleName(char.role)}
          </Badge>
        </div>
        <CardTitle>{char.name}</CardTitle>
        <CardDescription>Уровень {char.level}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="text-sm font-semibold">Способности:</p>
          <ul className="space-y-1">
            {char.abilities.map((ability, idx) => (
              <li key={idx} className="text-xs flex items-center gap-2">
                <Icon name="Sparkles" size={12} className="text-primary" />
                {ability}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold glow-text mb-4">Выбор персонажа</h2>
        <p className="text-muted-foreground">
          Выберите героя и начните своё путешествие в мире магического правосудия
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">Все</TabsTrigger>
          <TabsTrigger value="prosecutor">Обвинители</TabsTrigger>
          <TabsTrigger value="defender">Защитники</TabsTrigger>
          <TabsTrigger value="witness">Свидетели</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {characters.map((char) => renderCharacterCard(char))}
          </div>
        </TabsContent>

        <TabsContent value="prosecutor" className="mt-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {characters.filter(c => c.role === 'prosecutor').map((char) => renderCharacterCard(char))}
          </div>
        </TabsContent>

        <TabsContent value="defender" className="mt-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {characters.filter(c => c.role === 'defender').map((char) => renderCharacterCard(char))}
          </div>
        </TabsContent>

        <TabsContent value="witness" className="mt-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {characters.filter(c => c.role === 'witness').map((char) => renderCharacterCard(char))}
          </div>
        </TabsContent>
      </Tabs>

      {selectedCharacter && (
        <Card className="glow border-primary animate-scale-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-4">
              <span className="text-5xl">{selectedCharacter.avatar}</span>
              <div>
                <div>{selectedCharacter.name}</div>
                <div className="text-sm text-muted-foreground font-normal">
                  {getRoleName(selectedCharacter.role)}
                </div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm font-semibold mb-2">Способности персонажа:</p>
              <div className="grid gap-2">
                {selectedCharacter.abilities.map((ability, idx) => (
                  <div key={idx} className="bg-muted p-3 rounded-lg flex items-center gap-2">
                    <Icon name="Sparkles" size={16} className="text-primary" />
                    <span className="text-sm">{ability}</span>
                  </div>
                ))}
              </div>
            </div>
            <Button 
              className="w-full magic-gradient text-white glow gap-2" 
              size="lg"
              onClick={() => onStartGame(selectedCharacter)}
            >
              <Icon name="Play" size={20} />
              Начать игру с {selectedCharacter.name}
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default GameSection;

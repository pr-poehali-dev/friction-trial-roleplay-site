import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

interface Character {
  id: number;
  name: string;
  role: 'prosecutor' | 'defender' | 'witness';
  abilities: string[];
  level: number;
  avatar: string;
}

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

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold glow-text">Суд над Силой Трения</h1>
            <div className="flex gap-4">
              <Button
                variant={activeSection === 'home' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('home')}
                className="gap-2"
              >
                <Icon name="Home" size={18} />
                Главная
              </Button>
              <Button
                variant={activeSection === 'rules' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('rules')}
                className="gap-2"
              >
                <Icon name="BookOpen" size={18} />
                Правила
              </Button>
              <Button
                variant={activeSection === 'game' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('game')}
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
        {activeSection === 'home' && (
          <div className="space-y-12 animate-fade-in">
            <section className="text-center py-16 space-y-6">
              <div className="inline-block animate-float">
                <div className="text-8xl mb-6">⚡</div>
              </div>
              <h2 className="text-5xl font-bold glow-text mb-4">
                Добро пожаловать в мир магического правосудия
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                В мире, где физические законы подчиняются магии, сила трения предстала перед судом.
                Выберите свою роль и защитите свою точку зрения в эпическом судебном противостоянии!
              </p>
              <div className="flex gap-4 justify-center mt-8">
                <Button
                  size="lg"
                  onClick={() => setActiveSection('game')}
                  className="magic-gradient text-white glow gap-2"
                >
                  <Icon name="Sparkles" size={20} />
                  Начать игру
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => setActiveSection('rules')}
                  className="gap-2"
                >
                  <Icon name="BookOpen" size={20} />
                  Изучить правила
                </Button>
              </div>
            </section>

            <section className="grid md:grid-cols-3 gap-6">
              <Card className="card-hover glow">
                <CardHeader>
                  <div className="text-4xl mb-2">⚖️</div>
                  <CardTitle>Обвинители</CardTitle>
                  <CardDescription>
                    Мастера аргументации и логики
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Используют силу доказательств и неопровержимых фактов для обвинения силы трения в замедлении прогресса цивилизации.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover glow">
                <CardHeader>
                  <div className="text-4xl mb-2">🛡️</div>
                  <CardTitle>Защитники</CardTitle>
                  <CardDescription>
                    Хранители баланса и справедливости
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Защищают силу трения, доказывая её необходимость для стабильности мира и жизни разумных существ.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover glow">
                <CardHeader>
                  <div className="text-4xl mb-2">👁️</div>
                  <CardTitle>Свидетели</CardTitle>
                  <CardDescription>
                    Носители знаний и опыта
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Предоставляют уникальные свидетельства и факты, влияя на исход судебного разбирательства.
                  </p>
                </CardContent>
              </Card>
            </section>
          </div>
        )}

        {activeSection === 'rules' && (
          <div className="space-y-8 animate-fade-in max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold glow-text mb-4">Правила игры</h2>
              <p className="text-muted-foreground">
                Изучите механики и станьте мастером судебных баталий
              </p>
            </div>

            <Tabs defaultValue="gameplay" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="gameplay">Геймплей</TabsTrigger>
                <TabsTrigger value="roles">Роли</TabsTrigger>
                <TabsTrigger value="abilities">Способности</TabsTrigger>
              </TabsList>

              <TabsContent value="gameplay" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Target" size={24} />
                      Цель игры
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Выберите персонажа и участвуйте в судебном процессе над Силой Трения.
                      Обвинители стремятся доказать вину, защитники — невиновность, а свидетели предоставляют критически важные факты.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Zap" size={24} />
                      Развитие персонажа
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Каждый персонаж начинает с 1 уровня и тремя базовыми способностями.
                      За успешные аргументы и действия персонаж получает опыт и открывает новые способности.
                    </p>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm">
                        <strong>Система прогресса:</strong> Уровни 1-10, каждый новый уровень открывает усиленную версию способности или новую магическую силу.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Users" size={24} />
                      Игровой процесс
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ol className="list-decimal list-inside space-y-2">
                      <li>Выберите роль: обвинитель, защитник или свидетель</li>
                      <li>Выберите персонажа с уникальными способностями</li>
                      <li>Используйте способности в нужный момент процесса</li>
                      <li>Взаимодействуйте с другими игроками</li>
                      <li>Развивайте персонажа и открывайте новые силы</li>
                    </ol>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="roles" className="space-y-4">
                <Card className="border-destructive">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      ⚖️ Обвинители
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="font-semibold">Особенности роли:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Высокий урон аргументами и логическими построениями</li>
                      <li>Способность выявлять слабости в защите</li>
                      <li>Бонусы к анализу улик и доказательств</li>
                      <li>Могут накладывать эффект "Сомнение" на противников</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-primary">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      🛡️ Защитники
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="font-semibold">Особенности роли:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Высокая защита от критики и обвинений</li>
                      <li>Способность восстанавливать репутацию</li>
                      <li>Бонусы к контраргументации</li>
                      <li>Могут создавать защитные барьеры для союзников</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-accent">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      👁️ Свидетели
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="font-semibold">Особенности роли:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Нейтральная позиция с влиянием на обе стороны</li>
                      <li>Уникальные знания и факты</li>
                      <li>Способность менять ход процесса</li>
                      <li>Могут раскрывать скрытую информацию</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="abilities" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Sparkles" size={24} />
                      Система способностей
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Каждый персонаж обладает тремя уникальными способностями, которые можно развивать и усиливать.
                    </p>
                    <div className="space-y-3">
                      <div className="bg-muted p-3 rounded-lg">
                        <p className="font-semibold text-sm mb-1">Активные способности</p>
                        <p className="text-xs text-muted-foreground">
                          Используются в критические моменты процесса для изменения ситуации в свою пользу
                        </p>
                      </div>
                      <div className="bg-muted p-3 rounded-lg">
                        <p className="font-semibold text-sm mb-1">Пассивные способности</p>
                        <p className="text-xs text-muted-foreground">
                          Постоянные бонусы к характеристикам персонажа
                        </p>
                      </div>
                      <div className="bg-muted p-3 rounded-lg">
                        <p className="font-semibold text-sm mb-1">Ультимативные способности</p>
                        <p className="text-xs text-muted-foreground">
                          Мощные способности с долгой перезарядкой, способные переломить ход процесса
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {activeSection === 'game' && (
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
                  {characters.map((char) => (
                    <Card
                      key={char.id}
                      className={`card-hover cursor-pointer ${selectedCharacter?.id === char.id ? 'glow ring-2 ring-primary' : ''}`}
                      onClick={() => setSelectedCharacter(char)}
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
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="prosecutor" className="mt-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {characters.filter(c => c.role === 'prosecutor').map((char) => (
                    <Card
                      key={char.id}
                      className={`card-hover cursor-pointer ${selectedCharacter?.id === char.id ? 'glow ring-2 ring-primary' : ''}`}
                      onClick={() => setSelectedCharacter(char)}
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
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="defender" className="mt-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {characters.filter(c => c.role === 'defender').map((char) => (
                    <Card
                      key={char.id}
                      className={`card-hover cursor-pointer ${selectedCharacter?.id === char.id ? 'glow ring-2 ring-primary' : ''}`}
                      onClick={() => setSelectedCharacter(char)}
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
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="witness" className="mt-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {characters.filter(c => c.role === 'witness').map((char) => (
                    <Card
                      key={char.id}
                      className={`card-hover cursor-pointer ${selectedCharacter?.id === char.id ? 'glow ring-2 ring-primary' : ''}`}
                      onClick={() => setSelectedCharacter(char)}
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
                  ))}
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
                  <Button className="w-full magic-gradient text-white glow gap-2" size="lg">
                    <Icon name="Play" size={20} />
                    Начать игру с {selectedCharacter.name}
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
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
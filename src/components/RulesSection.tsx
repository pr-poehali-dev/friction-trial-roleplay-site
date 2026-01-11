import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const RulesSection = () => {
  return (
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
  );
};

export default RulesSection;

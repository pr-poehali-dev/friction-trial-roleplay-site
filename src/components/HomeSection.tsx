import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface HomeSectionProps {
  onNavigate: (section: string) => void;
}

const HomeSection = ({ onNavigate }: HomeSectionProps) => {
  return (
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
            onClick={() => onNavigate('game')}
            className="magic-gradient text-white glow gap-2"
          >
            <Icon name="Sparkles" size={20} />
            Начать игру
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => onNavigate('rules')}
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
  );
};

export default HomeSection;

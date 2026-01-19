import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const cards = [
    { id: 1, name: 'Основная карта', balance: 245780, currency: '₽', last4: '4242', gradient: 'from-primary to-accent' },
    { id: 2, name: 'Сбережения', balance: 89420, currency: '₽', last4: '8899', gradient: 'from-accent to-primary' },
  ];

  const recentTransactions = [
    { id: 1, name: 'Spotify Premium', category: 'Подписки', amount: -299, icon: 'Music', color: 'bg-green-500/20 text-green-400', date: '19.01.2026' },
    { id: 2, name: 'Зарплата', category: 'Доход', amount: 120000, icon: 'TrendingUp', color: 'bg-emerald-500/20 text-emerald-400', date: '15.01.2026' },
    { id: 3, name: 'Супермаркет', category: 'Продукты', amount: -3450, icon: 'ShoppingCart', color: 'bg-orange-500/20 text-orange-400', date: '18.01.2026' },
    { id: 4, name: 'Кофейня', category: 'Рестораны', amount: -380, icon: 'Coffee', color: 'bg-amber-500/20 text-amber-400', date: '17.01.2026' },
  ];

  const categories = [
    { name: 'Продукты', spent: 12500, limit: 15000, color: 'bg-orange-500' },
    { name: 'Транспорт', spent: 4200, limit: 8000, color: 'bg-blue-500' },
    { name: 'Развлечения', spent: 8900, limit: 10000, color: 'bg-purple-500' },
  ];

  const formatAmount = (amount: number) => {
    const formatted = new Intl.NumberFormat('ru-RU').format(Math.abs(amount));
    return amount < 0 ? `-${formatted} ₽` : `+${formatted} ₽`;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Обзор</h2>
          <p className="text-muted-foreground mt-1">Ваша финансовая сводка</p>
        </div>
        <Link to="/transactions">
          <Button className="gap-2">
            <Icon name="Plus" size={18} />
            Добавить операцию
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {cards.map((card) => (
          <Card 
            key={card.id} 
            className={`relative overflow-hidden border-0 bg-gradient-to-br ${card.gradient} shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group`}
          >
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
            <CardContent className="relative p-6 text-white">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <p className="text-sm opacity-80 mb-1">{card.name}</p>
                  <p className="text-3xl font-bold tracking-tight">
                    {new Intl.NumberFormat('ru-RU').format(card.balance)} {card.currency}
                  </p>
                </div>
                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-md group-hover:bg-white/30 transition-colors">
                  <Icon name="CreditCard" size={24} />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-2 font-mono text-lg tracking-wider">
                  <span>••••</span>
                  <span>••••</span>
                  <span>••••</span>
                  <span>{card.last4}</span>
                </div>
                <Icon name="Waves" size={32} className="opacity-30" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Доход</p>
                <p className="text-2xl font-bold text-emerald-400">+120 000 ₽</p>
              </div>
              <div className="p-3 bg-emerald-500/20 rounded-xl">
                <Icon name="ArrowUpRight" size={24} className="text-emerald-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Расходы</p>
                <p className="text-2xl font-bold text-red-400">-45 230 ₽</p>
              </div>
              <div className="p-3 bg-red-500/20 rounded-xl">
                <Icon name="ArrowDownRight" size={24} className="text-red-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Баланс</p>
                <p className="text-2xl font-bold text-primary">335 200 ₽</p>
              </div>
              <div className="p-3 bg-primary/20 rounded-xl">
                <Icon name="Wallet" size={24} className="text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-bold">Последние операции</CardTitle>
              <Link to="/transactions">
                <Button variant="ghost" size="sm">
                  Все операции
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-4 rounded-xl border border-border/30 hover:bg-muted/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${transaction.color} group-hover:scale-110 transition-transform`}>
                    <Icon name={transaction.icon as any} size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{transaction.name}</p>
                    <p className="text-sm text-muted-foreground">{transaction.category} • {transaction.date}</p>
                  </div>
                </div>
                <p className={`font-bold text-lg ${transaction.amount < 0 ? 'text-red-400' : 'text-emerald-400'}`}>
                  {formatAmount(transaction.amount)}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Бюджет</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {categories.map((category) => (
              <div key={category.name} className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{category.name}</span>
                  <Badge variant="secondary" className="text-xs">
                    {Math.round((category.spent / category.limit) * 100)}%
                  </Badge>
                </div>
                <Progress 
                  value={(category.spent / category.limit) * 100} 
                  className="h-2"
                />
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{new Intl.NumberFormat('ru-RU').format(category.spent)} ₽</span>
                  <span>{new Intl.NumberFormat('ru-RU').format(category.limit)} ₽</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

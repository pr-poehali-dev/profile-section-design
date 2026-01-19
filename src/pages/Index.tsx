import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

export default function Index() {
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  const transactions = [
    { id: 1, name: 'Spotify Premium', category: 'Подписки', amount: -299, icon: 'Music', color: 'bg-green-500/20 text-green-400' },
    { id: 2, name: 'Зарплата', category: 'Доход', amount: 120000, icon: 'TrendingUp', color: 'bg-emerald-500/20 text-emerald-400' },
    { id: 3, name: 'Супермаркет', category: 'Продукты', amount: -3450, icon: 'ShoppingCart', color: 'bg-orange-500/20 text-orange-400' },
    { id: 4, name: 'Кофейня', category: 'Рестораны', amount: -380, icon: 'Coffee', color: 'bg-amber-500/20 text-amber-400' },
    { id: 5, name: 'Такси', category: 'Транспорт', amount: -620, icon: 'Car', color: 'bg-blue-500/20 text-blue-400' },
    { id: 6, name: 'Netflix', category: 'Подписки', amount: -799, icon: 'Tv', color: 'bg-red-500/20 text-red-400' },
  ];

  const categories = [
    { name: 'Продукты', spent: 12500, limit: 15000, color: 'bg-orange-500' },
    { name: 'Транспорт', spent: 4200, limit: 8000, color: 'bg-blue-500' },
    { name: 'Развлечения', spent: 8900, limit: 10000, color: 'bg-purple-500' },
  ];

  const cards = [
    { id: 1, name: 'Основная карта', balance: 245780, currency: '₽', last4: '4242', gradient: 'from-primary to-accent' },
    { id: 2, name: 'Сбережения', balance: 89420, currency: '₽', last4: '8899', gradient: 'from-accent to-primary' },
  ];

  const formatAmount = (amount: number) => {
    const formatted = new Intl.NumberFormat('ru-RU').format(Math.abs(amount));
    return amount < 0 ? `-${formatted} ₽` : `+${formatted} ₽`;
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Финансы
            </h1>
            <p className="text-muted-foreground mt-1">Январь 2026</p>
          </div>
          <Button variant="outline" className="gap-2 border-border/50 hover:border-primary/50 transition-all">
            <Icon name="Plus" size={18} />
            Добавить
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <Card 
              key={card.id} 
              className={`relative overflow-hidden border-0 bg-gradient-to-br ${card.gradient} shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group`}
              style={{ animationDelay: `${idx * 100}ms` }}
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
                <CardTitle className="text-xl font-bold">Транзакции</CardTitle>
                <div className="flex gap-2">
                  {['day', 'week', 'month'].map((period) => (
                    <Button
                      key={period}
                      variant={selectedPeriod === period ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setSelectedPeriod(period)}
                      className="text-xs"
                    >
                      {period === 'day' ? 'День' : period === 'week' ? 'Неделя' : 'Месяц'}
                    </Button>
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {transactions.map((transaction, idx) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between p-4 rounded-xl border border-border/30 hover:bg-muted/50 transition-all duration-300 group animate-fade-in"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${transaction.color} group-hover:scale-110 transition-transform`}>
                      <Icon name={transaction.icon as any} size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{transaction.name}</p>
                      <p className="text-sm text-muted-foreground">{transaction.category}</p>
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
              {categories.map((category, idx) => (
                <div key={category.name} className="space-y-3 animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
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
              
              <div className="pt-4 mt-4 border-t border-border/30">
                <Button variant="outline" className="w-full gap-2 hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all">
                  <Icon name="PieChart" size={16} />
                  Подробная статистика
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}

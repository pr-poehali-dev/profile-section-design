import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface CategoryData {
  category: string;
  icon: string;
  color: string;
  jan: number;
  feb: number;
  mar: number;
  apr: number;
  may: number;
  jun: number;
  jul: number;
  aug: number;
  sep: number;
  oct: number;
  nov: number;
  dec: number;
  total: number;
}

export default function Summary() {
  const currentYear = new Date().getFullYear();
  const [viewType, setViewType] = useState<'expense' | 'income'>('expense');

  const expenseData: CategoryData[] = [
    {
      category: 'Продукты',
      icon: 'ShoppingCart',
      color: 'text-orange-500',
      jan: 25000, feb: 28000, mar: 26500, apr: 27000, may: 29000, jun: 30000,
      jul: 31000, aug: 28500, sep: 27500, oct: 29500, nov: 0, dec: 0,
      total: 282000,
    },
    {
      category: 'Транспорт',
      icon: 'Car',
      color: 'text-blue-500',
      jan: 5000, feb: 5500, mar: 6000, apr: 5200, may: 5800, jun: 6200,
      jul: 6500, aug: 6000, sep: 5500, oct: 5900, nov: 0, dec: 0,
      total: 57600,
    },
    {
      category: 'Развлечения',
      icon: 'Music',
      color: 'text-purple-500',
      jan: 8000, feb: 7500, mar: 9000, apr: 8500, may: 10000, jun: 12000,
      jul: 15000, aug: 14000, sep: 9500, oct: 8000, nov: 0, dec: 0,
      total: 101500,
    },
    {
      category: 'Рестораны',
      icon: 'Coffee',
      color: 'text-amber-500',
      jan: 12000, feb: 11000, mar: 13500, apr: 12500, may: 14000, jun: 15000,
      jul: 16000, aug: 15500, sep: 13000, oct: 14500, nov: 0, dec: 0,
      total: 137000,
    },
    {
      category: 'Подписки',
      icon: 'Tv',
      color: 'text-red-500',
      jan: 2500, feb: 2500, mar: 2500, apr: 2500, may: 2800, jun: 2800,
      jul: 2800, aug: 2800, sep: 2800, oct: 2800, nov: 0, dec: 0,
      total: 26800,
    },
  ];

  const incomeData: CategoryData[] = [
    {
      category: 'Зарплата',
      icon: 'TrendingUp',
      color: 'text-emerald-500',
      jan: 120000, feb: 120000, mar: 120000, apr: 120000, may: 125000, jun: 125000,
      jul: 125000, aug: 125000, sep: 130000, oct: 130000, nov: 0, dec: 0,
      total: 1240000,
    },
    {
      category: 'Фриланс',
      icon: 'Briefcase',
      color: 'text-blue-500',
      jan: 35000, feb: 42000, mar: 38000, apr: 45000, may: 50000, jun: 48000,
      jul: 52000, aug: 47000, sep: 43000, oct: 49000, nov: 0, dec: 0,
      total: 449000,
    },
    {
      category: 'Инвестиции',
      icon: 'PieChart',
      color: 'text-purple-500',
      jan: 5000, feb: 4500, mar: 6000, apr: 5500, may: 7000, jun: 6500,
      jul: 8000, aug: 7500, sep: 6000, oct: 7000, nov: 0, dec: 0,
      total: 63000,
    },
  ];

  const data = viewType === 'expense' ? expenseData : incomeData;
  const months = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
  const monthKeys: (keyof Omit<CategoryData, 'category' | 'icon' | 'color' | 'total'>)[] = 
    ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

  const monthTotals = monthKeys.map((key, index) => ({
    month: months[index],
    total: data.reduce((sum, cat) => sum + cat[key], 0),
  }));

  const formatAmount = (amount: number) => {
    if (amount === 0) return '—';
    return new Intl.NumberFormat('ru-RU').format(amount) + ' ₽';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Сводная</h2>
          <p className="text-muted-foreground mt-1">
            Финансовая отчётность за {currentYear} год
          </p>
        </div>
        <div className="flex gap-2">
          <Badge
            variant={viewType === 'expense' ? 'default' : 'outline'}
            className="cursor-pointer px-4 py-2 gap-2"
            onClick={() => setViewType('expense')}
          >
            <Icon name="ArrowDownRight" size={14} />
            Расходы
          </Badge>
          <Badge
            variant={viewType === 'income' ? 'default' : 'outline'}
            className="cursor-pointer px-4 py-2 gap-2"
            onClick={() => setViewType('income')}
          >
            <Icon name="ArrowUpRight" size={14} />
            Доходы
          </Badge>
        </div>
      </div>

      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl font-bold flex items-center gap-2">
            <Icon name="Calendar" size={20} />
            {viewType === 'expense' ? 'Расходы' : 'Доходы'} по категориям за {currentYear} год
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-48 font-bold">Категория</TableHead>
                  {months.map((month) => (
                    <TableHead key={month} className="text-right font-bold min-w-24">
                      {month}
                    </TableHead>
                  ))}
                  <TableHead className="text-right font-bold min-w-32 bg-muted/50">
                    Итого
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((row) => (
                  <TableRow key={row.category} className="hover:bg-muted/30">
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <Icon name={row.icon as any} size={16} className={row.color} />
                        {row.category}
                      </div>
                    </TableCell>
                    {monthKeys.map((key, index) => (
                      <TableCell key={index} className="text-right tabular-nums">
                        {formatAmount(row[key])}
                      </TableCell>
                    ))}
                    <TableCell className="text-right font-bold tabular-nums bg-muted/30">
                      {formatAmount(row.total)}
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow className="bg-muted/50 font-bold border-t-2">
                  <TableCell>Итого за месяц</TableCell>
                  {monthTotals.map((month, index) => (
                    <TableCell key={index} className="text-right tabular-nums">
                      {formatAmount(month.total)}
                    </TableCell>
                  ))}
                  <TableCell className="text-right tabular-nums bg-muted/70">
                    {formatAmount(data.reduce((sum, cat) => sum + cat.total, 0))}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-border/50 bg-card/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Средний месяц
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatAmount(
                data.reduce((sum, cat) => sum + cat.total, 0) / 
                monthTotals.filter(m => m.total > 0).length
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Максимальный месяц
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatAmount(Math.max(...monthTotals.map(m => m.total)))}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {monthTotals.find(m => m.total === Math.max(...monthTotals.map(m => m.total)))?.month}
            </p>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Минимальный месяц
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatAmount(Math.min(...monthTotals.filter(m => m.total > 0).map(m => m.total)))}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {monthTotals.find(m => m.total === Math.min(...monthTotals.filter(m => m.total > 0).map(m => m.total)))?.month}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

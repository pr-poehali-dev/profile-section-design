import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Transactions() {
  const { toast } = useToast();
  const [operationType, setOperationType] = useState<'expense' | 'income'>('expense');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [newCategory, setNewCategory] = useState('');

  const [categories, setCategories] = useState({
    expense: [
      { id: 'food', name: 'Продукты', icon: 'ShoppingCart', color: 'bg-orange-500' },
      { id: 'transport', name: 'Транспорт', icon: 'Car', color: 'bg-blue-500' },
      { id: 'entertainment', name: 'Развлечения', icon: 'Music', color: 'bg-purple-500' },
      { id: 'restaurants', name: 'Рестораны', icon: 'Coffee', color: 'bg-amber-500' },
      { id: 'subscriptions', name: 'Подписки', icon: 'Tv', color: 'bg-red-500' },
    ],
    income: [
      { id: 'salary', name: 'Зарплата', icon: 'TrendingUp', color: 'bg-emerald-500' },
      { id: 'freelance', name: 'Фриланс', icon: 'Briefcase', color: 'bg-blue-500' },
      { id: 'investments', name: 'Инвестиции', icon: 'PieChart', color: 'bg-purple-500' },
    ],
  });

  const handleAddCategory = () => {
    if (!newCategory.trim()) return;

    const newCat = {
      id: newCategory.toLowerCase().replace(/\s+/g, '-'),
      name: newCategory,
      icon: 'FolderOpen',
      color: 'bg-gray-500',
    };

    setCategories({
      ...categories,
      [operationType]: [...categories[operationType], newCat],
    });

    setNewCategory('');
    toast({
      title: 'Категория добавлена',
      description: `Категория "${newCategory}" успешно создана`,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!amount || !category || !date) {
      toast({
        title: 'Ошибка',
        description: 'Заполните все обязательные поля',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Операция добавлена',
      description: `${operationType === 'expense' ? 'Расход' : 'Доход'} на сумму ${amount} ₽`,
    });

    setAmount('');
    setCategory('');
    setDescription('');
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground">Операции</h2>
        <p className="text-muted-foreground mt-1">Добавьте расход или доход</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Новая операция</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Tabs value={operationType} onValueChange={(v) => setOperationType(v as 'expense' | 'income')}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="expense" className="gap-2">
                    <Icon name="ArrowDownRight" size={16} />
                    Расход
                  </TabsTrigger>
                  <TabsTrigger value="income" className="gap-2">
                    <Icon name="ArrowUpRight" size={16} />
                    Доход
                  </TabsTrigger>
                </TabsList>

                <TabsContent value={operationType} className="space-y-4 mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="amount">Сумма *</Label>
                      <div className="relative">
                        <Input
                          id="amount"
                          type="number"
                          placeholder="0"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          className="pr-8"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                          ₽
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="date">Дата *</Label>
                      <Input
                        id="date"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Категория *</Label>
                    <Select value={category} onValueChange={setCategory}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите категорию" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories[operationType].map((cat) => (
                          <SelectItem key={cat.id} value={cat.id}>
                            <div className="flex items-center gap-2">
                              <div className={`p-1 rounded ${cat.color}/20`}>
                                <Icon name={cat.icon as any} size={14} className={`${cat.color.replace('bg-', 'text-')}`} />
                              </div>
                              {cat.name}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Описание</Label>
                    <Input
                      id="description"
                      placeholder="Например: Покупка продуктов в супермаркете"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full gap-2"
                    size="lg"
                  >
                    <Icon name="Plus" size={18} />
                    Добавить {operationType === 'expense' ? 'расход' : 'доход'}
                  </Button>
                </TabsContent>
              </Tabs>
            </form>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Категории</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Доступные категории</Label>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {categories[operationType].map((cat) => (
                  <div
                    key={cat.id}
                    className="flex items-center gap-3 p-3 rounded-lg border border-border/30 hover:bg-muted/50 transition-all"
                  >
                    <div className={`p-2 rounded-lg ${cat.color}/20`}>
                      <Icon name={cat.icon as any} size={18} className={`${cat.color.replace('bg-', 'text-')}`} />
                    </div>
                    <span className="font-medium">{cat.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-border/30 space-y-3">
              <Label htmlFor="newCategory">Добавить категорию</Label>
              <div className="flex gap-2">
                <Input
                  id="newCategory"
                  placeholder="Название категории"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAddCategory()}
                />
                <Button
                  type="button"
                  size="icon"
                  onClick={handleAddCategory}
                  disabled={!newCategory.trim()}
                >
                  <Icon name="Plus" size={18} />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

interface Category {
  id: number;
  name: string;
  type: 'expense' | 'income';
  icon: string;
  color: string;
}

interface Bank {
  id: number;
  name: string;
  logo: string;
}

export default function Reference() {
  const [categories, setCategories] = useState<Category[]>([
    { id: 1, name: 'Продукты', type: 'expense', icon: 'ShoppingCart', color: 'bg-red-500' },
    { id: 2, name: 'Транспорт', type: 'expense', icon: 'Car', color: 'bg-blue-500' },
    { id: 3, name: 'Развлечения', type: 'expense', icon: 'Gamepad2', color: 'bg-purple-500' },
    { id: 4, name: 'Зарплата', type: 'income', icon: 'Briefcase', color: 'bg-green-500' },
    { id: 5, name: 'Инвестиции', type: 'income', icon: 'TrendingUp', color: 'bg-emerald-500' },
  ]);

  const [banks, setBanks] = useState<Bank[]>([
    { id: 1, name: 'Сбербанк', logo: '🟢' },
    { id: 2, name: 'Тинькофф', logo: '🟡' },
    { id: 3, name: 'Альфа-Банк', logo: '🔴' },
  ]);

  const [newCategory, setNewCategory] = useState({ name: '', type: 'expense' as 'expense' | 'income', icon: 'Tag', color: 'bg-gray-500' });
  const [newBank, setNewBank] = useState({ name: '', logo: '🏦' });

  const handleAddCategory = () => {
    if (newCategory.name.trim()) {
      setCategories([...categories, { ...newCategory, id: Date.now() }]);
      setNewCategory({ name: '', type: 'expense', icon: 'Tag', color: 'bg-gray-500' });
    }
  };

  const handleDeleteCategory = (id: number) => {
    setCategories(categories.filter(c => c.id !== id));
  };

  const handleAddBank = () => {
    if (newBank.name.trim()) {
      setBanks([...banks, { ...newBank, id: Date.now() }]);
      setNewBank({ name: '', logo: '🏦' });
    }
  };

  const handleDeleteBank = (id: number) => {
    setBanks(banks.filter(b => b.id !== id));
  };

  const expenseCategories = categories.filter(c => c.type === 'expense');
  const incomeCategories = categories.filter(c => c.type === 'income');

  const iconOptions = ['Tag', 'ShoppingCart', 'Car', 'Home', 'Utensils', 'Plane', 'Gamepad2', 'Shirt', 'Heart', 'Briefcase', 'TrendingUp', 'Gift'];
  const colorOptions = [
    { name: 'Красный', value: 'bg-red-500' },
    { name: 'Синий', value: 'bg-blue-500' },
    { name: 'Зелёный', value: 'bg-green-500' },
    { name: 'Жёлтый', value: 'bg-yellow-500' },
    { name: 'Фиолетовый', value: 'bg-purple-500' },
    { name: 'Розовый', value: 'bg-pink-500' },
    { name: 'Изумрудный', value: 'bg-emerald-500' },
    { name: 'Оранжевый', value: 'bg-orange-500' },
  ];

  return (
    <div className="max-w-5xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Справочник</h1>
        <p className="text-muted-foreground mt-1">Управление категориями и банками</p>
      </div>

      <Tabs defaultValue="expenses" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="expenses">Расходы</TabsTrigger>
          <TabsTrigger value="income">Доходы</TabsTrigger>
          <TabsTrigger value="banks">Банки</TabsTrigger>
        </TabsList>

        <TabsContent value="expenses" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Категории расходов</CardTitle>
              <CardDescription>Добавляйте и управляйте категориями расходов</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>Название категории</Label>
                    <Input
                      placeholder="Например: Продукты"
                      value={newCategory.name}
                      onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Иконка</Label>
                    <select
                      className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm"
                      value={newCategory.icon}
                      onChange={(e) => setNewCategory({ ...newCategory, icon: e.target.value })}
                    >
                      {iconOptions.map(icon => (
                        <option key={icon} value={icon}>{icon}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label>Цвет</Label>
                    <select
                      className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm"
                      value={newCategory.color}
                      onChange={(e) => setNewCategory({ ...newCategory, color: e.target.value })}
                    >
                      {colorOptions.map(color => (
                        <option key={color.value} value={color.value}>{color.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <Button 
                  onClick={handleAddCategory} 
                  className="w-full bg-gradient-to-r from-primary to-accent"
                >
                  <Icon name="Plus" size={16} className="mr-2" />
                  Добавить категорию расхода
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {expenseCategories.map(category => (
                  <div 
                    key={category.id} 
                    className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 ${category.color} rounded-lg`}>
                        <Icon name={category.icon as any} size={20} className="text-white" />
                      </div>
                      <span className="font-medium text-foreground">{category.name}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDeleteCategory(category.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Icon name="Trash2" size={16} />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="income" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Категории доходов</CardTitle>
              <CardDescription>Добавляйте и управляйте категориями доходов</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>Название категории</Label>
                    <Input
                      placeholder="Например: Зарплата"
                      value={newCategory.name}
                      onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value, type: 'income' })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Иконка</Label>
                    <select
                      className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm"
                      value={newCategory.icon}
                      onChange={(e) => setNewCategory({ ...newCategory, icon: e.target.value })}
                    >
                      {iconOptions.map(icon => (
                        <option key={icon} value={icon}>{icon}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label>Цвет</Label>
                    <select
                      className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm"
                      value={newCategory.color}
                      onChange={(e) => setNewCategory({ ...newCategory, color: e.target.value })}
                    >
                      {colorOptions.map(color => (
                        <option key={color.value} value={color.value}>{color.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <Button 
                  onClick={() => {
                    setNewCategory({ ...newCategory, type: 'income' });
                    handleAddCategory();
                  }}
                  className="w-full bg-gradient-to-r from-primary to-accent"
                >
                  <Icon name="Plus" size={16} className="mr-2" />
                  Добавить категорию дохода
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {incomeCategories.map(category => (
                  <div 
                    key={category.id} 
                    className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 ${category.color} rounded-lg`}>
                        <Icon name={category.icon as any} size={20} className="text-white" />
                      </div>
                      <span className="font-medium text-foreground">{category.name}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDeleteCategory(category.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Icon name="Trash2" size={16} />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="banks" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Банки</CardTitle>
              <CardDescription>Управление списком банков для операций</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Название банка</Label>
                    <Input
                      placeholder="Например: Сбербанк"
                      value={newBank.name}
                      onChange={(e) => setNewBank({ ...newBank, name: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Эмодзи (лого)</Label>
                    <Input
                      placeholder="🏦"
                      value={newBank.logo}
                      onChange={(e) => setNewBank({ ...newBank, logo: e.target.value })}
                      maxLength={2}
                    />
                  </div>
                </div>

                <Button 
                  onClick={handleAddBank}
                  className="w-full bg-gradient-to-r from-primary to-accent"
                >
                  <Icon name="Plus" size={16} className="mr-2" />
                  Добавить банк
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {banks.map(bank => (
                  <div 
                    key={bank.id} 
                    className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{bank.logo}</span>
                      <span className="font-medium text-foreground">{bank.name}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDeleteBank(bank.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Icon name="Trash2" size={16} />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

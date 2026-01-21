import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';

export default function UIKit() {
  const [switchChecked, setSwitchChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">UI Kit FinTrack</h1>
            <p className="text-muted-foreground mt-1">Библиотека всех компонентов интерфейса</p>
          </div>
          <Link to="/">
            <Button variant="outline">
              <Icon name="ArrowLeft" size={16} className="mr-2" />
              Вернуться
            </Button>
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Цветовая палитра</CardTitle>
            <CardDescription>Основные цвета приложения</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div>
                <div className="h-20 rounded-lg bg-primary mb-2 shadow-lg"></div>
                <p className="text-sm font-medium text-foreground">Primary</p>
                <p className="text-xs text-muted-foreground">Основной</p>
              </div>
              <div>
                <div className="h-20 rounded-lg bg-accent mb-2 shadow-lg"></div>
                <p className="text-sm font-medium text-foreground">Accent</p>
                <p className="text-xs text-muted-foreground">Акцент</p>
              </div>
              <div>
                <div className="h-20 rounded-lg bg-muted mb-2 shadow-lg"></div>
                <p className="text-sm font-medium text-foreground">Muted</p>
                <p className="text-xs text-muted-foreground">Второстепенный</p>
              </div>
              <div>
                <div className="h-20 rounded-lg bg-destructive mb-2 shadow-lg"></div>
                <p className="text-sm font-medium text-foreground">Destructive</p>
                <p className="text-xs text-muted-foreground">Ошибка</p>
              </div>
              <div>
                <div className="h-20 rounded-lg bg-gradient-to-r from-primary to-accent mb-2 shadow-lg"></div>
                <p className="text-sm font-medium text-foreground">Gradient</p>
                <p className="text-xs text-muted-foreground">Градиент</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Кнопки</CardTitle>
            <CardDescription>Все варианты и состояния</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">Варианты</h3>
              <div className="flex flex-wrap gap-3">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="link">Link</Button>
                <Button className="bg-gradient-to-r from-primary to-accent">Gradient</Button>
              </div>
            </div>

            <Separator />

            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">С иконками</h3>
              <div className="flex flex-wrap gap-3">
                <Button>
                  <Icon name="Plus" size={16} className="mr-2" />
                  Добавить
                </Button>
                <Button variant="outline">
                  <Icon name="Download" size={16} className="mr-2" />
                  Скачать
                </Button>
                <Button variant="destructive">
                  <Icon name="Trash2" size={16} className="mr-2" />
                  Удалить
                </Button>
                <Button variant="ghost">
                  <Icon name="Settings" size={16} className="mr-2" />
                  Настройки
                </Button>
              </div>
            </div>

            <Separator />

            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">Размеры</h3>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm">Small</Button>
                <Button>Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon">
                  <Icon name="Settings" size={20} />
                </Button>
              </div>
            </div>

            <Separator />

            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">Состояния</h3>
              <div className="flex flex-wrap gap-3">
                <Button>Normal</Button>
                <Button disabled>Disabled</Button>
                <Button onClick={() => {
                  setLoading(true);
                  setTimeout(() => setLoading(false), 2000);
                }}>
                  {loading ? (
                    <>
                      <Icon name="Loader2" size={16} className="mr-2 animate-spin" />
                      Loading...
                    </>
                  ) : (
                    'Click me'
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Поля ввода</CardTitle>
            <CardDescription>Input компоненты</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Default Input</Label>
                <Input placeholder="Введите текст" />
              </div>
              <div className="space-y-2">
                <Label>Disabled Input</Label>
                <Input placeholder="Disabled" disabled />
              </div>
              <div className="space-y-2">
                <Label>С иконкой (Email)</Label>
                <div className="relative">
                  <Icon 
                    name="Mail" 
                    size={18} 
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  />
                  <Input 
                    type="email" 
                    placeholder="email@example.com" 
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>С иконкой (Поиск)</Label>
                <div className="relative">
                  <Icon 
                    name="Search" 
                    size={18} 
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  />
                  <Input 
                    placeholder="Поиск..." 
                    className="pl-10"
                  />
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-2 max-w-md">
              <Label>Textarea</Label>
              <Textarea 
                placeholder="Введите ваше сообщение..." 
                className="min-h-[100px] resize-none"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Badges</CardTitle>
            <CardDescription>Метки и индикаторы</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">Варианты</h3>
              <div className="flex flex-wrap gap-3">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
            </div>

            <Separator />

            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">С иконками</h3>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-green-500 hover:bg-green-600">
                  <Icon name="Check" size={14} className="mr-1" />
                  Активен
                </Badge>
                <Badge className="bg-orange-500 hover:bg-orange-600">
                  <Icon name="Clock" size={14} className="mr-1" />
                  Ожидание
                </Badge>
                <Badge variant="destructive">
                  <Icon name="X" size={14} className="mr-1" />
                  Отклонён
                </Badge>
                <Badge className="bg-blue-500 hover:bg-blue-600">
                  <Icon name="Info" size={14} className="mr-1" />
                  Информация
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Switch</CardTitle>
            <CardDescription>Переключатели</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
              <div>
                <p className="font-medium text-foreground">Уведомления</p>
                <p className="text-sm text-muted-foreground">Получать уведомления на email</p>
              </div>
              <Switch checked={switchChecked} onCheckedChange={setSwitchChecked} />
            </div>
            <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
              <div>
                <p className="font-medium text-foreground">Тёмная тема</p>
                <p className="text-sm text-muted-foreground">Использовать тёмное оформление</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg opacity-50">
              <div>
                <p className="font-medium text-foreground">Disabled</p>
                <p className="text-sm text-muted-foreground">Недоступный переключатель</p>
              </div>
              <Switch disabled />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Лоадеры</CardTitle>
            <CardDescription>Индикаторы загрузки</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">Спиннеры</h3>
              <div className="flex flex-wrap items-center gap-6">
                <Icon name="Loader2" size={24} className="animate-spin text-primary" />
                <Icon name="Loader2" size={32} className="animate-spin text-accent" />
                <Icon name="Loader2" size={40} className="animate-spin text-muted-foreground" />
              </div>
            </div>

            <Separator />

            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">В кнопках</h3>
              <div className="flex flex-wrap gap-3">
                <Button disabled>
                  <Icon name="Loader2" size={16} className="mr-2 animate-spin" />
                  Загрузка...
                </Button>
                <Button variant="outline" disabled>
                  <Icon name="Loader2" size={16} className="mr-2 animate-spin" />
                  Отправка...
                </Button>
              </div>
            </div>

            <Separator />

            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">Скелетоны</h3>
              <div className="space-y-3">
                <div className="h-4 bg-muted rounded-lg animate-pulse w-3/4"></div>
                <div className="h-4 bg-muted rounded-lg animate-pulse w-full"></div>
                <div className="h-4 bg-muted rounded-lg animate-pulse w-2/3"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Карточки</CardTitle>
            <CardDescription>Card компоненты</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Простая карточка</CardTitle>
                  <CardDescription>С заголовком и описанием</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Базовая карточка для отображения контента
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-primary to-accent rounded-lg">
                      <Icon name="Wallet" size={20} className="text-white" />
                    </div>
                    <div>
                      <CardTitle>С иконкой</CardTitle>
                      <CardDescription>Визуальный акцент</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-foreground">42,000 ₽</p>
                  <p className="text-sm text-muted-foreground mt-1">Текущий баланс</p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Иконки</CardTitle>
            <CardDescription>Часто используемые иконки Lucide</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
              {[
                'Home', 'User', 'Settings', 'Search', 'Bell', 'Mail', 
                'Phone', 'Calendar', 'Download', 'Upload', 'Trash2', 
                'Edit', 'Check', 'X', 'Plus', 'Minus', 'ArrowLeft', 
                'ArrowRight', 'Menu', 'MoreVertical', 'Heart', 'Star',
                'Lock', 'Unlock', 'Eye', 'EyeOff', 'Key', 'Shield',
                'Wallet', 'CreditCard', 'DollarSign', 'TrendingUp'
              ].map(icon => (
                <div key={icon} className="flex flex-col items-center gap-2 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <Icon name={icon as any} size={24} className="text-foreground" />
                  <p className="text-xs text-muted-foreground text-center truncate w-full">{icon}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Типографика</CardTitle>
            <CardDescription>Заголовки и текстовые стили</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-foreground">Heading 1</h1>
              <p className="text-sm text-muted-foreground mt-1">text-4xl font-bold</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground">Heading 2</h2>
              <p className="text-sm text-muted-foreground mt-1">text-3xl font-bold</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-foreground">Heading 3</h3>
              <p className="text-sm text-muted-foreground mt-1">text-2xl font-semibold</p>
            </div>
            <div>
              <p className="text-base text-foreground">Body text - обычный текст параграфа для основного контента приложения</p>
              <p className="text-sm text-muted-foreground mt-1">text-base text-foreground</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Small text - дополнительная информация и второстепенные детали</p>
              <p className="text-xs text-muted-foreground mt-1">text-sm text-muted-foreground</p>
            </div>
            <div>
              <p className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Gradient Text
              </p>
              <p className="text-sm text-muted-foreground mt-1">Градиентный текст для акцентов</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

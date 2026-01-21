import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { useTheme } from '@/contexts/ThemeContext';

export default function Settings() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="max-w-4xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Настройки</h1>
        <p className="text-muted-foreground mt-1">Управление параметрами приложения</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Внешний вид</CardTitle>
          <CardDescription>Настройка темы оформления</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
            <div className="space-y-1">
              <Label htmlFor="theme-toggle" className="text-base font-medium">
                Тёмная тема
              </Label>
              <p className="text-sm text-muted-foreground">
                Переключение между светлой и тёмной темой
              </p>
            </div>
            <Switch
              id="theme-toggle"
              checked={theme === 'dark'}
              onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setTheme('light')}
              className={`p-4 border-2 rounded-lg transition-all ${
                theme === 'light'
                  ? 'border-primary bg-primary/10'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <Icon name="Sun" size={20} className="text-orange-500" />
                <span className="font-medium text-foreground">Светлая</span>
              </div>
              <div className="bg-white rounded-md p-3 space-y-2">
                <div className="h-2 bg-gray-200 rounded"></div>
                <div className="h-2 bg-gray-200 rounded w-3/4"></div>
              </div>
            </button>

            <button
              onClick={() => setTheme('dark')}
              className={`p-4 border-2 rounded-lg transition-all ${
                theme === 'dark'
                  ? 'border-primary bg-primary/10'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <Icon name="Moon" size={20} className="text-blue-500" />
                <span className="font-medium text-foreground">Тёмная</span>
              </div>
              <div className="bg-gray-900 rounded-md p-3 space-y-2">
                <div className="h-2 bg-gray-700 rounded"></div>
                <div className="h-2 bg-gray-700 rounded w-3/4"></div>
              </div>
            </button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Уведомления</CardTitle>
          <CardDescription>Настройка уведомлений и оповещений</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
            <div>
              <Label className="text-base font-medium">Email уведомления</Label>
              <p className="text-sm text-muted-foreground">Получать уведомления на почту</p>
            </div>
            <Switch />
          </div>

          <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
            <div>
              <Label className="text-base font-medium">Push уведомления</Label>
              <p className="text-sm text-muted-foreground">Уведомления в браузере</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
            <div>
              <Label className="text-base font-medium">Уведомления о транзакциях</Label>
              <p className="text-sm text-muted-foreground">Оповещения о новых операциях</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Конфиденциальность</CardTitle>
          <CardDescription>Управление данными и безопасностью</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
            <div>
              <Label className="text-base font-medium">Двухфакторная аутентификация</Label>
              <p className="text-sm text-muted-foreground">Дополнительная защита аккаунта</p>
            </div>
            <Switch />
          </div>

          <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
            <div>
              <Label className="text-base font-medium">Автоматический выход</Label>
              <p className="text-sm text-muted-foreground">Выход после 30 минут неактивности</p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Язык и регион</CardTitle>
          <CardDescription>Настройка языка и формата данных</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Язык интерфейса</Label>
              <select className="w-full h-11 rounded-md border border-input bg-background px-3 text-sm">
                <option>Русский</option>
                <option>English</option>
                <option>Español</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label>Валюта</Label>
              <select className="w-full h-11 rounded-md border border-input bg-background px-3 text-sm">
                <option>₽ Российский рубль</option>
                <option>$ Доллар США</option>
                <option>€ Евро</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-destructive/50">
        <CardHeader>
          <CardTitle className="text-destructive">Опасная зона</CardTitle>
          <CardDescription>Необратимые действия с данными</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Separator />
          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div>
              <h3 className="font-semibold text-foreground">Экспорт данных</h3>
              <p className="text-sm text-muted-foreground">Скачать все данные в формате JSON</p>
            </div>
            <Button variant="outline">
              <Icon name="Download" size={16} className="mr-2" />
              Экспорт
            </Button>
          </div>

          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div>
              <h3 className="font-semibold text-foreground">Очистить историю</h3>
              <p className="text-sm text-muted-foreground">Удалить все транзакции</p>
            </div>
            <Button variant="destructive">
              <Icon name="Trash2" size={16} className="mr-2" />
              Очистить
            </Button>
          </div>

          <div className="flex items-center justify-between p-4 border border-destructive rounded-lg">
            <div>
              <h3 className="font-semibold text-destructive">Удалить аккаунт</h3>
              <p className="text-sm text-muted-foreground">Безвозвратное удаление всех данных</p>
            </div>
            <Button variant="destructive">
              <Icon name="AlertTriangle" size={16} className="mr-2" />
              Удалить аккаунт
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

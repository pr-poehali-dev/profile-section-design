import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Support() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Support request:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="max-w-4xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Поддержка</h1>
        <p className="text-muted-foreground mt-1">Мы всегда готовы помочь вам</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Свяжитесь с нами</CardTitle>
            <CardDescription>Заполните форму и мы ответим в ближайшее время</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Имя</Label>
                <div className="relative">
                  <Icon 
                    name="User" 
                    size={18} 
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  />
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="Ваше имя"
                    className="pl-10 h-11"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Icon 
                    name="Mail" 
                    size={18} 
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  />
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="your@email.com"
                    className="pl-10 h-11"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Тема обращения</Label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => handleChange('subject', e.target.value)}
                  placeholder="Краткое описание проблемы"
                  className="h-11"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Сообщение</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder="Подробно опишите вашу проблему или вопрос..."
                  className="min-h-[150px] resize-none"
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary to-accent"
              >
                <Icon name="Send" size={16} className="mr-2" />
                Отправить сообщение
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Контактная информация</CardTitle>
              <CardDescription>Другие способы связи с нами</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Icon name="Mail" size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a 
                    href="mailto:support@fintrack.ru" 
                    className="text-primary hover:underline"
                  >
                    support@fintrack.ru
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    Ответим в течение 24 часов
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Icon name="Phone" size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Телефон</h3>
                  <a 
                    href="tel:+78001234567" 
                    className="text-primary hover:underline"
                  >
                    8 (800) 123-45-67
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    Пн-Пт с 9:00 до 18:00 МСК
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Icon name="MessageCircle" size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Онлайн-чат</h3>
                  <Button variant="link" className="h-auto p-0 text-primary">
                    Открыть чат
                  </Button>
                  <p className="text-sm text-muted-foreground mt-1">
                    Мгновенные ответы на вопросы
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Часто задаваемые вопросы</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <button className="w-full text-left p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                <h4 className="font-medium text-foreground">Как добавить транзакцию?</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Перейдите в раздел "Операции" и нажмите кнопку "Добавить"
                </p>
              </button>

              <button className="w-full text-left p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                <h4 className="font-medium text-foreground">Как изменить пароль?</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  В профиле найдите раздел "Изменение пароля"
                </p>
              </button>

              <button className="w-full text-left p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                <h4 className="font-medium text-foreground">Как экспортировать данные?</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  В разделе "Сводная" нажмите кнопку экспорта
                </p>
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

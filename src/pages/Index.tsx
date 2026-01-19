import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    firstName: 'Александр',
    lastName: 'Иванов',
    email: 'alex.ivanov@email.com',
  });

  const [tempProfile, setTempProfile] = useState(profile);

  const handleSave = () => {
    setProfile(tempProfile);
    setIsEditing(false);
    toast({
      title: 'Профиль сохранён',
      description: 'Ваши данные успешно обновлены',
    });
  };

  const handleCancel = () => {
    setTempProfile(profile);
    setIsEditing(false);
  };

  const getInitials = () => {
    return `${profile.firstName[0]}${profile.lastName[0]}`;
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Профиль</h1>
          <p className="text-muted-foreground">Управляйте своими личными данными</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-2 shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Личная информация</CardTitle>
                  <CardDescription>Обновите свои персональные данные</CardDescription>
                </div>
                {!isEditing && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsEditing(true)}
                    className="hover:bg-accent/10"
                  >
                    <Icon name="Pencil" size={18} />
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6 pb-6 border-b">
                <Avatar className="h-20 w-20 ring-4 ring-primary/10">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-primary text-primary-foreground text-2xl font-semibold">
                    {getInitials()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-semibold">{profile.firstName} {profile.lastName}</h3>
                  <p className="text-sm text-muted-foreground">{profile.email}</p>
                  <Badge variant="secondary" className="mt-2">
                    <Icon name="CheckCircle2" size={12} className="mr-1" />
                    Подтверждён
                  </Badge>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Имя</Label>
                    <Input
                      id="firstName"
                      value={isEditing ? tempProfile.firstName : profile.firstName}
                      onChange={(e) => setTempProfile({ ...tempProfile, firstName: e.target.value })}
                      disabled={!isEditing}
                      className="transition-all duration-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Фамилия</Label>
                    <Input
                      id="lastName"
                      value={isEditing ? tempProfile.lastName : profile.lastName}
                      onChange={(e) => setTempProfile({ ...tempProfile, lastName: e.target.value })}
                      disabled={!isEditing}
                      className="transition-all duration-200"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={isEditing ? tempProfile.email : profile.email}
                    onChange={(e) => setTempProfile({ ...tempProfile, email: e.target.value })}
                    disabled={!isEditing}
                    className="transition-all duration-200"
                  />
                </div>
              </div>

              {isEditing && (
                <div className="flex gap-3 pt-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <Button onClick={handleSave} className="flex-1 hover:scale-[1.02] transition-transform">
                    <Icon name="Check" size={16} className="mr-2" />
                    Сохранить
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleCancel}
                    className="flex-1 hover:scale-[1.02] transition-transform"
                  >
                    <Icon name="X" size={16} className="mr-2" />
                    Отменить
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-base">Статистика</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon name="Wallet" size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Счетов</p>
                      <p className="text-xl font-bold">3</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon name="TrendingUp" size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Транзакций</p>
                      <p className="text-xl font-bold">142</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon name="Calendar" size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">С нами</p>
                      <p className="text-xl font-bold">6 мес.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-base">Быстрые действия</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="ghost" className="w-full justify-start hover:bg-accent/10 transition-colors">
                  <Icon name="Shield" size={16} className="mr-2" />
                  Безопасность
                </Button>
                <Button variant="ghost" className="w-full justify-start hover:bg-accent/10 transition-colors">
                  <Icon name="Bell" size={16} className="mr-2" />
                  Уведомления
                </Button>
                <Button variant="ghost" className="w-full justify-start hover:bg-accent/10 transition-colors">
                  <Icon name="FileText" size={16} className="mr-2" />
                  Отчёты
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

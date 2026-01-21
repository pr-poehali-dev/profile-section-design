import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Icon from '@/components/ui/icon';

const pageTitles: Record<string, string> = {
  '/': 'Дашборд',
  '/transactions': 'Операции',
  '/summary': 'Сводная',
  '/categories': 'Справочник',
  '/analytics': 'Аналитика',
  '/profile': 'Профиль',
  '/settings': 'Настройки',
  '/support': 'Поддержка',
  '/ui-kit': 'UI Kit'
};

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [user] = useState({
    name: 'Александр Иванов',
    email: 'alex.ivanov@email.com',
    avatar: '',
  });

  const getInitials = () => {
    const names = user.name.split(' ');
    return names.map(n => n[0]).join('');
  };

  const pageTitle = pageTitles[location.pathname] || 'FinTrack';

  return (
    <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Icon name="Menu" size={20} />
          </Button>
          <div>
            <h2 className="text-2xl font-bold text-foreground">{pageTitle}</h2>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Icon name="Bell" size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-3 hover:bg-muted/50">
                <Avatar className="h-9 w-9 ring-2 ring-primary/20">
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white text-sm font-semibold">
                    {getInitials()}
                  </AvatarFallback>
                </Avatar>
                <div className="hidden md:block text-left">
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                </div>
                <Icon name="ChevronDown" size={16} className="text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Мой аккаунт</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigate('/profile')}>
                <Icon name="User" size={16} className="mr-2" />
                Профиль
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate('/settings')}>
                <Icon name="Settings" size={16} className="mr-2" />
                Настройки
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600" onClick={() => navigate('/login')}>
                <Icon name="LogOut" size={16} className="mr-2" />
                Выйти
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
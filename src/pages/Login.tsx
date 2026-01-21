import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/20 to-background p-4">
      <div className="w-full max-w-md">
        <div className="bg-card rounded-2xl shadow-2xl border border-border/50 p-8">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-2xl">
              <Icon name="Wallet" size={32} className="text-white" />
            </div>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              Добро пожаловать
            </h1>
            <p className="text-muted-foreground">Войдите в свой аккаунт FinTrack</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                Электронная почта
              </Label>
              <div className="relative">
                <Icon 
                  name="Mail" 
                  size={18} 
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <Input
                  id="email"
                  type="email"
                  placeholder="example@mail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12 bg-background/50 border-border/50 focus:border-primary"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground">
                Пароль
              </Label>
              <div className="relative">
                <Icon 
                  name="Lock" 
                  size={18} 
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Введите пароль"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 h-12 bg-background/50 border-border/50 focus:border-primary"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon name={showPassword ? 'EyeOff' : 'Eye'} size={18} />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer text-muted-foreground hover:text-foreground transition-colors">
                <input type="checkbox" className="w-4 h-4 rounded border-border/50" />
                <span>Запомнить меня</span>
              </label>
              <Link 
                to="/forgot-password" 
                className="text-primary hover:text-accent transition-colors font-medium"
              >
                Забыли пароль?
              </Link>
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg shadow-primary/30"
            >
              Войти
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-muted-foreground">
              Нет аккаунта?{' '}
              <Link 
                to="/register" 
                className="text-primary hover:text-accent transition-colors font-semibold"
              >
                Зарегистрироваться
              </Link>
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-border/50">
            <p className="text-center text-sm text-muted-foreground mb-4">
              Или войдите через
            </p>
            <div className="grid grid-cols-2 gap-3">
              <Button 
                type="button" 
                variant="outline" 
                className="h-11 border-border/50 hover:bg-muted/50"
              >
                <Icon name="Github" size={20} className="mr-2" />
                Github
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                className="h-11 border-border/50 hover:bg-muted/50"
              >
                <Icon name="Chrome" size={20} className="mr-2" />
                Google
              </Button>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          Продолжая, вы соглашаетесь с{' '}
          <Link to="/terms" className="text-primary hover:underline">
            условиями использования
          </Link>{' '}
          и{' '}
          <Link to="/privacy" className="text-primary hover:underline">
            политикой конфиденциальности
          </Link>
        </p>
      </div>
    </div>
  );
}

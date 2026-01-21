import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Password reset requested for:', email);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/20 to-background p-4">
      <div className="w-full max-w-md">
        <div className="bg-card rounded-2xl shadow-2xl border border-border/50 p-8">
          {!isSubmitted ? (
            <>
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-2xl">
                  <Icon name="KeyRound" size={32} className="text-white" />
                </div>
              </div>

              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  Забыли пароль?
                </h1>
                <p className="text-muted-foreground">
                  Введите email и мы отправим инструкции по восстановлению
                </p>
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

                <Button 
                  type="submit" 
                  className="w-full h-12 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-lg font-semibold shadow-lg shadow-primary/30"
                >
                  Отправить инструкции
                </Button>
              </form>

              <div className="mt-6 text-center">
                <Link 
                  to="/login" 
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon name="ArrowLeft" size={16} />
                  Вернуться к входу
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl">
                  <Icon name="MailCheck" size={32} className="text-white" />
                </div>
              </div>

              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  Проверьте почту
                </h1>
                <p className="text-muted-foreground">
                  Мы отправили инструкции по восстановлению пароля на
                </p>
                <p className="text-primary font-semibold mt-2">
                  {email}
                </p>
              </div>

              <div className="bg-muted/30 rounded-xl p-6 mb-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg mt-1">
                    <Icon name="Mail" size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Письмо отправлено
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Проверьте входящие и папку "Спам"
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg mt-1">
                    <Icon name="Clock" size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Ссылка действительна 1 час
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      После этого нужно будет запросить новую
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="w-full h-11 border-border/50"
                >
                  Отправить повторно
                </Button>
                
                <Link to="/login">
                  <Button 
                    variant="ghost"
                    className="w-full h-11"
                  >
                    <Icon name="ArrowLeft" size={16} className="mr-2" />
                    Вернуться к входу
                  </Button>
                </Link>
              </div>
            </>
          )}
        </div>

        {!isSubmitted && (
          <div className="mt-6 text-center">
            <p className="text-muted-foreground text-sm">
              Нет аккаунта?{' '}
              <Link 
                to="/register" 
                className="text-primary hover:text-accent transition-colors font-semibold"
              >
                Зарегистрироваться
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

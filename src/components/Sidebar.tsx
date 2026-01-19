import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { cn } from '@/lib/utils';

export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { path: '/', icon: 'LayoutDashboard', label: 'Дашборд' },
    { path: '/transactions', icon: 'ArrowLeftRight', label: 'Операции' },
    { path: '/summary', icon: 'Table', label: 'Сводная' },
    { path: '/categories', icon: 'FolderOpen', label: 'Категории' },
    { path: '/analytics', icon: 'PieChart', label: 'Аналитика' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-card border-r border-border/50 flex flex-col">
      <div className="p-6 border-b border-border/50">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-primary to-accent rounded-xl">
            <Icon name="Wallet" size={24} className="text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              FinTrack
            </h1>
            <p className="text-xs text-muted-foreground">Финансовый учёт</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200",
                isActive
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon name={item.icon as any} size={20} />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border/50">
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-muted/30">
          <Icon name="HelpCircle" size={20} className="text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Помощь</span>
        </div>
      </div>
    </aside>
  );
}
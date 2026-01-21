import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: (collapsed: boolean) => void;
}

export default function Sidebar({ isCollapsed, onToggle }: SidebarProps) {
  const location = useLocation();

  const menuItems = [
    { path: '/', icon: 'LayoutDashboard', label: 'Дашборд' },
    { path: '/transactions', icon: 'ArrowLeftRight', label: 'Операции' },
    { path: '/summary', icon: 'Table', label: 'Сводная' },
    { path: '/categories', icon: 'FolderOpen', label: 'Справочник' },
    { path: '/analytics', icon: 'PieChart', label: 'Аналитика' },
  ];

  return (
    <aside 
      className={cn(
        "fixed left-0 top-0 h-screen bg-card border-r border-border/50 flex flex-col transition-all duration-300",
        isCollapsed ? "w-20" : "w-64"
      )}
    >
      <div className={cn(
        "border-b border-border/50 transition-all duration-300",
        isCollapsed ? "p-4" : "p-6"
      )}>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="p-2 bg-gradient-to-br from-primary to-accent rounded-xl flex-shrink-0">
              <Icon name="Wallet" size={24} className="text-white" />
            </div>
            {!isCollapsed && (
              <div className="min-w-0">
                <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent truncate">
                  FinTrack
                </h1>
                <p className="text-xs text-muted-foreground truncate">Финансовый учёт</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
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
                  : "hover:bg-muted/50 text-muted-foreground hover:text-foreground",
                isCollapsed && "justify-center"
              )}
              title={isCollapsed ? item.label : undefined}
            >
              <Icon name={item.icon as any} size={20} className="flex-shrink-0" />
              {!isCollapsed && <span className="font-medium truncate">{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border/50 space-y-2">
        <Link
          to="/support"
          className={cn(
            "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200",
            location.pathname === '/support'
              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
              : "hover:bg-muted/50 text-muted-foreground hover:text-foreground",
            isCollapsed && "justify-center"
          )}
          title={isCollapsed ? 'Поддержка' : undefined}
        >
          <Icon name="MessageCircle" size={20} className="flex-shrink-0" />
          {!isCollapsed && <span className="text-sm font-medium truncate">Поддержка</span>}
        </Link>

        <Button
          variant="ghost"
          onClick={() => onToggle(!isCollapsed)}
          className={cn(
            "w-full flex items-center gap-3 px-4 py-3 h-auto hover:bg-muted/50",
            isCollapsed && "justify-center"
          )}
          title={isCollapsed ? 'Развернуть' : 'Свернуть'}
        >
          <Icon 
            name={isCollapsed ? "ChevronRight" : "ChevronLeft"} 
            size={20} 
            className="flex-shrink-0"
          />
          {!isCollapsed && <span className="text-sm font-medium truncate">Свернуть</span>}
        </Button>
      </div>
    </aside>
  );
}
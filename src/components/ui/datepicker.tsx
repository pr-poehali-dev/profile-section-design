import React, { useState } from 'react';
import { Button } from './button';
import Icon from './icon';
import { cn } from '@/lib/utils';
import { Popover, PopoverContent, PopoverTrigger } from './popover';

interface DatePickerProps {
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  placeholder?: string;
  className?: string;
}

export function DatePicker({ value, onChange, placeholder = 'Выберите дату', className }: DatePickerProps) {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(value);
  const [currentMonth, setCurrentMonth] = useState(value || new Date());

  const monthNames = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
  ];

  const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    
    let firstDayOfWeek = firstDay.getDay() - 1;
    if (firstDayOfWeek < 0) firstDayOfWeek = 6;

    const days: (Date | null)[] = [];
    
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }

    return days;
  };

  const handleDateSelect = (date: Date | null) => {
    if (!date) return;
    setSelectedDate(date);
    onChange?.(date);
    setOpen(false);
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const isSameDay = (date1: Date | undefined, date2: Date | null) => {
    if (!date1 || !date2) return false;
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  const isToday = (date: Date | null) => {
    if (!date) return false;
    const today = new Date();
    return isSameDay(today, date);
  };

  const formatDate = (date: Date | undefined) => {
    if (!date) return placeholder;
    return date.toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const days = getDaysInMonth(currentMonth);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            'w-full justify-start text-left font-normal h-11',
            !selectedDate && 'text-muted-foreground',
            className
          )}
        >
          <Icon name="Calendar" size={16} className="mr-2" />
          {formatDate(selectedDate)}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <div className="p-4 space-y-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="icon"
              onClick={handlePrevMonth}
              className="h-8 w-8"
            >
              <Icon name="ChevronLeft" size={16} />
            </Button>
            <div className="font-semibold text-foreground">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleNextMonth}
              className="h-8 w-8"
            >
              <Icon name="ChevronRight" size={16} />
            </Button>
          </div>

          <div className="grid grid-cols-7 gap-1">
            {weekDays.map(day => (
              <div
                key={day}
                className="text-center text-xs font-medium text-muted-foreground h-8 flex items-center justify-center"
              >
                {day}
              </div>
            ))}

            {days.map((day, index) => (
              <Button
                key={index}
                variant="ghost"
                onClick={() => handleDateSelect(day)}
                disabled={!day}
                className={cn(
                  'h-8 w-8 p-0 font-normal',
                  !day && 'invisible',
                  isSameDay(selectedDate, day) && 'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground',
                  isToday(day) && !isSameDay(selectedDate, day) && 'border border-primary',
                )}
              >
                {day?.getDate()}
              </Button>
            ))}
          </div>

          <div className="flex gap-2 pt-2 border-t border-border/50">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleDateSelect(new Date())}
              className="flex-1"
            >
              Сегодня
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSelectedDate(undefined);
                onChange?.(undefined);
                setOpen(false);
              }}
              className="flex-1"
            >
              Очистить
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

import React from 'react';
import { Plus, CheckSquare, DollarSign, FileText } from 'lucide-react';

interface QuickAction {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  onClick: () => void;
}

interface QuickActionsProps {
  onAddTask: () => void;
  onAddTransaction: () => void;
}

const QuickActions: React.FC<QuickActionsProps> = ({ onAddTask, onAddTransaction }) => {
  const actions: QuickAction[] = [
    {
      title: 'Add Task',
      description: 'Create a new task',
      icon: CheckSquare,
      color: 'bg-blue-500 hover:bg-blue-600',
      onClick: onAddTask,
    },
    {
      title: 'Add Expense',
      description: 'Record an expense',
      icon: DollarSign,
      color: 'bg-green-500 hover:bg-green-600',
      onClick: onAddTransaction,
    },
    {
      title: 'Add Income',
      description: 'Record income',
      icon: Plus,
      color: 'bg-purple-500 hover:bg-purple-600',
      onClick: () => onAddTransaction(),
    },
    {
      title: 'Quick Note',
      description: 'Jot down a note',
      icon: FileText,
      color: 'bg-orange-500 hover:bg-orange-600',
      onClick: () => console.log('Add note'),
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-4">
        {actions.map((action, index) => (
          <button
            key={index}
            onClick={action.onClick}
            className={`${action.color} text-white p-4 rounded-lg transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md`}
          >
            <action.icon className="h-6 w-6 mx-auto mb-2" />
            <p className="font-medium text-sm">{action.title}</p>
            <p className="text-xs opacity-90">{action.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
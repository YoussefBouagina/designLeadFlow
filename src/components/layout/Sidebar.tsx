import { Link } from 'react-router-dom';
import {
  LayoutDashboard,
  FileText,
  Users,
  CheckSquare,
  Bell,
  Calendar,
  UserCircle,
  MessagesSquare,
  ClipboardList,
  UserCheck,
  FileSpreadsheet,
  Settings,
  Target
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: FileText, label: 'Notes', path: '/notes' },
  { icon: Users, label: 'Leads', path: '/leads' },
  { icon: CheckSquare, label: 'Task', path: '/tasks' },
  { icon: Bell, label: 'Reminder', path: '/reminders' },
  { icon: Calendar, label: 'Meeting', path: '/meetings' },
  { icon: UserCircle, label: 'Customer', path: '/customers' },
  { icon: UserCheck, label: 'Staff', path: '/staff' },
  { icon: MessagesSquare, label: 'Chat', path: '/chat' },
  { icon: ClipboardList, label: 'Leave', path: '/leave' },
  { icon: UserCheck, label: 'Attendance', path: '/attendance' },
  { icon: FileSpreadsheet, label: 'Invoice', path: '/invoice' },
  { icon: Settings, label: 'General Setting', path: '/settings' },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-sidebar shadow-lg">
      <div className="p-6 flex items-center justify-center">
        <div className="flex items-center gap-2">
          <Target className="w-8 h-8 text-violet-600" />
          <span className="text-xl font-bold text-violet-600">LeadFlow</span>
        </div>
      </div>
      <nav className="px-4 py-2">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-violet-50 hover:text-violet-600 transition-colors mb-1"
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};
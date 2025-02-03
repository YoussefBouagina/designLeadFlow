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
  Settings
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
    <aside className="w-64 bg-white border-r border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold">LOGO</h1>
      </div>
      <nav className="p-4">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
          >
            <item.icon className="w-5 h-5 text-blue-600" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};
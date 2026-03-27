import { NavLink, Outlet } from "react-router-dom";
import { PenLine, Pencil, Trash2 } from "lucide-react";
import { useClerk } from "@clerk/clerk-react";

const navItems = [
  { to: "/", label: "Post Article", icon: PenLine },
  { to: "/edit", label: "Edit Article", icon: Pencil },
  { to: "/remove", label: "Remove Article", icon: Trash2 },
];

const App = () => {
  const { signOut } = useClerk();
  return (
    <div className="min-h-screen flex bg-gray-50">
      <aside className="w-56 bg-white border-r border-gray-200 p-4 flex flex-col gap-1">
        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2">
          Articles
        </div>
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-2.5 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? "bg-blue-50 text-blue-700"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`
            }
          >
            <Icon size={16} />
            {label}
          </NavLink>
        ))}
        <button
          onClick={() => signOut()}
          className="text-sm text-gray-500 hover:text-gray-900"
        >
          Sign out
        </button>
      </aside>

      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Horeca Georgia Control Panel
        </h1>
        <div className="max-w-360 mx-auto px-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default App;

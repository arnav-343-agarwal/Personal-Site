export default function Sidebar() {
    return (
      <aside className="w-64 h-full bg-neutral-900 border-r border-neutral-800 p-6">
        <h2 className="text-lg font-semibold mb-4">Sidebar</h2>
        <ul className="space-y-3 text-sm text-gray-300">
          <li>Dashboard</li>
          <li>Profile</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </aside>
    );
  }
  
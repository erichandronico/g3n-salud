import { FaClipboard, FaFileMedical, FaChartBar, FaBell, FaCog } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MainMenu = ({ collapsed }: { collapsed: boolean }) => {
  const navigate = useNavigate();
  const navItems = [
    { icon: <FaClipboard />, label: "Pre-Ingreso", path: "/" },
    { icon: <FaFileMedical />, label: "Ficha Clínica", path: "ficha-clinica" },
    { icon: <FaChartBar />, label: "Estadísticas", path: "estadisticas" },
    { icon: <FaBell />, label: "Notificaciones", path: "notificaciones" },
    { icon: <FaCog />, label: "Configuración",  path: "configuracion" },
  ];

  return (
    <div
      className={`transition-all duration-300 ease-in-out transform ${
        collapsed ? "w-16" : "w-64"
      } overflow-hidden bg-slate-50 p-2 border-r border-slate-200 hidden md:block`}
    >
      <nav className="space-y-2">
        {navItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className="flex items-center gap-2 px-3 py-2 rounded text-sky-700 hover:bg-slate-100"
            onClick={() => navigate(item.path)}
          >
            <span className="text-lg">{item.icon}</span>
            {!collapsed && <span className="text-sm">{item.label}</span>}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default MainMenu;

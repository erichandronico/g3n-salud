import { useState } from "react";
import { MainHeader } from "./MainHeader";
import { NotificationList } from "../../Notifications/NotificationList";
import type { NotificationItem } from "../../Notifications/NotificationList.types";
import MainMenu from "./MainMenu";

const notifications: NotificationItem[] = [
  {
    type: "default",
    description: "Pre-ingreso aprobado para Juan Pérez. Diagóstico: alta presión arterial.",
    time: "15 min",
  },
  {
    type: "alert",
    description: "Paciente Juan Pérez ha sido ingresado a la UCI por intercurrencia. Diagóstico: hipertensión.",
    time: "1 h",
  },
  {
    type: "default",
    description: "Evaluación nutricional B",
    time: "3 h",
  },
  {
    type: "default",
    description: "Paciente Karol Lucero ha sido ingresado en la sala de emergencias. Diagóstico: hipocondria.",
    time: "8 h",
  },
];


export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [rightPanelOpen, setRightPanelOpen] = useState(true);

  return (
    <div className="min-h-screen flex flex-col font-inter bg-slate-50 text-gray-800">
      <MainHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} rightPanelOpen={rightPanelOpen} setRightPanelOpen={setRightPanelOpen} />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <MainMenu collapsed={!menuOpen} />

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-6">
          <NotificationList items={notifications} />
          {children}
        </main>

        {/* Right panel */}
        <div
          className={`transition-all duration-300 ease-in-out transform ${
            rightPanelOpen ? 'w-72 opacity-100' : 'w-0 opacity-0'
          } overflow-hidden bg-gray-100 p-4 border-l border-slate-200 hidden md:block`}
        >
          <h2 className="text-base font-semibold mb-2">Notificaciones</h2>
          <NotificationList items={notifications} />

        </div>
      </div>
    </div>
  );
};

import mainLogo from '../../assets/logo-medic-home.svg'
import UserMenu from "../../UserMenu/UserMenu";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export const MainHeader = ({
  menuOpen,
  setMenuOpen,
  rightPanelOpen,
  setRightPanelOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
  rightPanelOpen: boolean;
  setRightPanelOpen: (value: boolean) => void;
}) => {
  return (
    <header className="flex items-center justify-between bg-white text-sky-600 px-4 py-3 shadow-sm">
      <div className="flex items-center gap-2">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-sm md:text-base hover:bg-sky-500/30 p-1.5 rounded md:inline"
        >
          {menuOpen ? <FiChevronLeft /> : <FiChevronRight />}
        </button>
        {mainLogo ? (
          <img src={mainLogo} alt="Medic-Home" className="h-6 md:h-8" />
        ) : (
          <span className="text-lg font-medium tracking-tight">Medic-Home</span>
        )}
      </div>
      <div className="flex items-center gap-3">
        <UserMenu
          user={{ name: "Dr. House", email: "house@medic-home.cl" }}
          onLogout={() => console.log("Cerrar sesión")}
          onProfileClick={() => console.log("Perfil")}
        />
        <button
          onClick={() => setRightPanelOpen(!rightPanelOpen)}
          className="text-sm md:text-base hover:bg-sky-500/30 p-1.5 rounded"
        >
          {rightPanelOpen ? <FiChevronRight /> : <FiChevronLeft />}
        </button>
      </div>
    </header>
  );
};
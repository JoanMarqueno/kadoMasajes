import { NavLink } from "react-router-dom";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

export function NavLinkDesktop({ to, children }: NavLinkProps) {
  return (
    <div className="relative my-1 p-1 text-base md:text-lg md:mx-4 md:my-0 underline-effect">
      <NavLink
        to={to}
        className={({ isActive }) =>
          `transition duration-200 tracking-wide hover:text-color-letra-card ${
            isActive ? "font-bold text-color-letra-card" : "text-color-letra-nav"
          }`
        }
        aria-label={`Navegar a ${children}`}
        title={`Navegar a ${children}`}
      >
        <span className="inline-block">{children}</span>
      </NavLink>
    </div>
  );
}

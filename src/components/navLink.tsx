import { useLocation } from "react-router-dom";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

export function NavLinkDesktop({ to, children }: NavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <div className="relative my-1 p-1 text-lg md:mx-4 md:my-0 underline-effect">
      <a
        href={to}
        className={`transition duration-150 ${
          isActive ? "font-bold text-text-color-nav" : ""
        }`}
        aria-label={`Navegar a ${children}`}
        title={`Navegar a ${children}`}
      >
        <span className="inline-block">{children}</span>
      </a>
    </div>
  );
}

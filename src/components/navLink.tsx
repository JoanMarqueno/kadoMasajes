import { useLocation } from "react-router-dom";
import ScrollLink from "./scrollLink";

interface NavLinkProps {
    to: string;
    children: React.ReactNode;
}

export function NavLinkDesktop({ to, children }: NavLinkProps) {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <div className="relative my-1 p-1 text-lg md:mx-4 md:my-0 underline-effect">
          <ScrollLink to={to} className={`transition duration-150 ${isActive ? 'font-bold text-text-color-nav ' : ''}`}>
            <span className="inline-block ">{children}</span>
          </ScrollLink>
        </div>
      );
}

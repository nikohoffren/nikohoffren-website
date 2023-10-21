import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

interface CustomLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function CustomLink({
  to,
  children,
  ...props
}: CustomLinkProps) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  const activeClass = isActive ? "border-b-2 border-gray-700 pb-1" : "";

  return (
    <Link to={to} className={`block ${activeClass}`} {...props}>
      {children}
    </Link>
  );
}

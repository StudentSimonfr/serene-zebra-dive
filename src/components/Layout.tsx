"use client";

import React from "react";
import { Link } from "react-router-dom";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Button } from "@/components/ui/button";
import { Home, Search, Scan } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <Link to="/" className="text-2xl font-bold text-primary">
            BookApp
          </Link>
          <nav className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link to="/">
                <Home className="h-5 w-5" />
                <span className="sr-only">Accueil</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link to="/search">
                <Search className="h-5 w-5" />
                <span className="sr-only">Recherche</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link to="/scan">
                <Scan className="h-5 w-5" />
                <span className="sr-only">Scanner</span>
              </Link>
            </Button>
          </nav>
        </div>
      </header>
      <main className="flex-1 container py-8">{children}</main>
      <MadeWithDyad />
    </div>
  );
};

export default Layout;
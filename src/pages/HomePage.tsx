"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Scan } from "lucide-react";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)] p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Bienvenue sur BookApp
      </h1>
      <p className="text-xl text-muted-foreground mb-12 text-center max-w-md">
        Votre compagnon pour découvrir et gérer vos livres préférés.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-lg">
        <Card className="text-center">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-2">
              <Search className="h-6 w-6" /> Rechercher un livre
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Trouvez des livres par titre, auteur ou ISBN.
            </p>
            <Button asChild>
              <Link to="/search">Commencer la recherche</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-2">
              <Scan className="h-6 w-6" /> Scanner un livre
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Utilisez la caméra pour scanner le code-barres d'un livre.
            </p>
            <Button asChild>
              <Link to="/scan">Ouvrir le scanner</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
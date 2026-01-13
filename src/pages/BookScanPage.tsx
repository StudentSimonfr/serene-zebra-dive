"use client";

import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

const BookScanPage = () => {
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleScan = (data: string | null) => {
    if (data) {
      setScanResult(data);
      setError(null); // Clear any previous errors
    }
  };

  const handleError = (err: Error) => {
    console.error(err);
    setError("Erreur lors de l'accès à la caméra ou du scan. Assurez-vous d'avoir autorisé l'accès à la caméra.");
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-3xl font-bold mb-6">Scanner un livre</h2>
      <p className="text-muted-foreground mb-8 text-center max-w-md">
        Pointez la caméra vers le code-barres (ISBN) d'un livre.
      </p>

      <Card className="w-full max-w-md mb-8">
        <CardContent className="p-4">
          <div className="relative w-full h-64 bg-gray-200 flex items-center justify-center overflow-hidden rounded-md">
            <QrReader
              onResult={(result, error) => {
                if (!!result) {
                  handleScan(result?.getText());
                }

                if (!!error) {
                  handleError(error as Error);
                }
              }}
              constraints={{ facingMode: "environment" }}
              scanDelay={500}
              videoContainerStyle={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
              videoStyle={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
            <div className="absolute inset-0 border-4 border-primary opacity-50 pointer-events-none"></div>
          </div>
        </CardContent>
      </Card>

      {error && (
        <Alert variant="destructive" className="w-full max-w-md mb-4">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Erreur de scan</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {scanResult && (
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Résultat du scan</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground break-words">Code-barres détecté : <span className="font-semibold text-foreground">{scanResult}</span></p>
            <p className="mt-2 text-sm text-gray-500">
              (Dans une application complète, ce code serait utilisé pour rechercher le livre.)
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default BookScanPage;
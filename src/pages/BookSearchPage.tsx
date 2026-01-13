"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search } from "lucide-react";

interface Book {
  id: string;
  title: string;
  author: string;
  isbn: string;
}

const mockBooks: Book[] = [
  { id: "1", title: "Le Petit Prince", author: "Antoine de Saint-Exupéry", isbn: "978-2070612758" },
  { id: "2", title: "1984", author: "George Orwell", isbn: "978-2070368231" },
  { id: "3", title: "Le Seigneur des Anneaux", author: "J.R.R. Tolkien", isbn: "978-2070612376" },
  { id: "4", title: "Harry Potter à l'école des sorciers", author: "J.K. Rowling", isbn: "978-2070592944" },
  { id: "5", title: "L'Alchimiste", author: "Paulo Coelho", isbn: "978-2290314412" },
];

const BookSearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<Book[]>([]);

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      setResults([]);
      return;
    }
    const filteredBooks = mockBooks.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.isbn.includes(searchTerm)
    );
    setResults(filteredBooks);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-3xl font-bold mb-6">Rechercher un livre</h2>
      <div className="flex w-full max-w-md space-x-2 mb-8">
        <Input
          type="text"
          placeholder="Titre, auteur ou ISBN..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}
        />
        <Button onClick={handleSearch}>
          <Search className="h-4 w-4 mr-2" /> Rechercher
        </Button>
      </div>

      <div className="w-full max-w-md">
        {results.length > 0 ? (
          <div className="space-y-4">
            {results.map((book) => (
              <Card key={book.id}>
                <CardHeader>
                  <CardTitle>{book.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Auteur: {book.author}</p>
                  <p className="text-muted-foreground">ISBN: {book.isbn}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          searchTerm.trim() !== "" && (
            <p className="text-center text-muted-foreground">Aucun livre trouvé pour "{searchTerm}".</p>
          )
        )}
      </div>
    </div>
  );
};

export default BookSearchPage;
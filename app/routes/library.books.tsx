import type { MetaFunction, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Library Books" },
    { name: "description", content: "Browse our library's book collection" },
  ];
};

type Book = {
  id: number;
  title: string;
  author: string;
};

export const loader: LoaderFunction = async () => {
  // In a real app, you would fetch this data from a database or API
  const books: Book[] = [
    { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 2, title: "1984", author: "George Orwell" },
    { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  ];
  return { books };
};

export default function Books() {
  const { books } = useLoaderData<{ books: Book[] }>();

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Library Books</h1>
      <ul className="space-y-2">
        {books.map((book) => (
          <li key={book.id} className="border p-2 rounded">
            <h2 className="font-semibold">{book.title}</h2>
            <p className="text-sm text-gray-600">by {book.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
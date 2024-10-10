import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useState } from "react";


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};



export default function Index() {

    const [count, setCount] = useState(0);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
       <Link to="/library"> <div className="text-2xl">Welcome this is Fosberg Portfolio {count}</div></Link>
      </div>
    </div>
  );
}

const resources = [
 {
    title: "Fosberg",
 }
];

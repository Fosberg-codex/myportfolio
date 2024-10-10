import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Library Page" },
    { name: "description", content: "Welcome to the library page!" },
  ];
};

export default function Library() {
  return (
    <div className="">
        {/* <div style={{fontSize:32}} className="text-5xl font-bold">Remix is cool</div> */}
        <div  className="text-blue-900 text-7xl font-bold">Remix is cool</div> 
        
    </div>
  );
}
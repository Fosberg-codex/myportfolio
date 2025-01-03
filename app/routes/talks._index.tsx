import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useState } from "react";
import Nav from "~/components/nav";
import { useViewCounter } from "~/hooks/pgviews";
import {GitHub, Linkedin, Twitter, Target, Monitor, Smartphone, Eye, EyeOff, Circle}  from "react-feather";

export const meta: MetaFunction = () => {
  return [
    { title: "Talks-Fosberg" },
    { name: "Conference talks and presentaions", content: "About my conference talks and presentaions" },
  ];
};

export default function Talks() {
    const [count, setCount] = useState(0);
    const [langs, setLangs] = useState(false);
    const [more, setMore] = useState(false);

    const views = useViewCounter();

  return (
    <div className="min-h-screen text-txtcolor bg-bgcolor">
      <Nav/>
      <div className="flex justify-center mt-6 ">
        <div className="w-full px-4  md:w-1/2 lg:w-1/2 xl:w-1/2">
          <div className="flex flex-col justify-center">
            <div className="mt-4 mb-6 text-xs sm:text-sm flex flex-row items-center gap-2 text-white">
              <div>Find me on</div>
              <Link to='https://github.com/Fosberg-codex'><GitHub color="#fff" size={18} /></Link>
              <Link to='https://www.linkedin.com/in/fosberg-addai-53a6991a7/'><Linkedin color="#fff" size={18} /></Link>
              <Link to='https://x.com/FosbergAddai'><Twitter color="#fff" size={18} /></Link>
            </div>
       
            <h1 className="text-xl sm:text-2xl font-semibold text-white mb-4">Talks and presentations</h1>
            <div className="mt-4">
              {talks.map((talk) => (
                <div key={talk.id} className="flex flex-col justify-center gap-1 mb-4 border-b border-gray-800 pb-4 text-white">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                    <div className="text-gray-200 text-xs sm:text-sm">{talk.date}</div>
                    <Link to={`${talk.link}`} className="underline text-sm sm:text-base cursor-pointer">{talk.title}</Link>
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm mt-1">{talk.description}</div>
                  <div className="text-xs sm:text-sm text-gray-200 mt-1">Organised by: <Link className="underline" to={`${talk.orglink}`}>{talk.organizedBy}</Link></div>
                  <div className="flex flex-wrap justify-start items-center mt-2 gap-2 text-[10px] sm:text-xs">
                    <div className="bg-black/90 py-1 px-2 rounded-full text-gray-400">{talk.status}</div>
                    <div className="cursor-pointer text-white">Type: {talk.mode}</div>
                    <div className="text-gray-200">Location: {talk.location}</div>
                  </div>
                </div>
              ))}
            </div>
           
            <div className="text-white mt-4 mb-4 cursor-pointer text-sm sm:text-base">
              Reach out: <Link to='/mailto:fosberg1addai@gmail.com' className="text-txtcolor underline">Email</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const talks = [
  {
    id: 1,
    title: 'Decentralised AI with ICP',
    link: 'https://x.com/i/spaces/1rmxPoePoeyJN',
    description: 'Was on the panel session about decentralized AI with Plutofloww on ICP',
    date: 'Dec 20th 2024',
    location: 'Twitter Spaces',
    mode: 'virtual',
    status: 'happened',
    organizedBy: 'ICP Hubs Africa',
    orglink: 'https://x.com/i/spaces/1rmxPoePoeyJN'
  }, 
  {
    id: 2,
    title: 'Dymistifying ML workflows with prossa and Essential Open-Source Tools',
    link: 'https://2024.pythonho.com/schedule/schedule/',
    description: 'Speaking about the prossa package, PlutoFlow and Essential Open-Source Tools',
    date: 'Jul 5th 2024',
    location: 'Ghana, Ho',
    mode: 'in person',
    status: 'happened',
    organizedBy: 'PyHo',
    orglink: 'https://2024.pythonho.com/'
  },
];
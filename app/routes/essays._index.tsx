import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useState } from "react";
import Nav from "~/components/nav";
import {GitHub, Linkedin, Twitter, Target, Monitor, Smartphone, Eye, EyeOff, Circle}  from "react-feather";

export const meta: MetaFunction = () => {
  return [
    { title: "Essays-Fosberg" },
    { name: "My writings", content: "About Fosberg and his essays" },
  ];
};

export default function Essays() {
    const [count, setCount] = useState(0);
    const [langs, setLangs] = useState(false);
    const [more, setMore] = useState(false);

  return (
    <div className="min-h-screen text-txtcolor bg-bgcolor">
      <Nav/>
      <div className="flex justify-center mt-4">
        <div className="w-full px-4  md:w-1/2 lg:w-1/2 xl:w-1/2">
          <div className="flex flex-col justify-center">
            <div className="mt-4 mb-6 text-xs sm:text-sm flex flex-row items-center gap-2 text-white">
              <div>Find me on</div>
              <Link to='https://github.com/Fosberg-codex'><GitHub color="#fff" size={18} /></Link>
              <Link to='https://www.linkedin.com/in/fosberg-addai-53a6991a7/'><Linkedin color="#fff" size={18} /></Link>
              <Link to='https://x.com/FosbergAddai'><Twitter color="#fff" size={18} /></Link>
            </div>

            <div className="text-lg sm:text-xl font-semibold mb-4 text-white"><span className="bg-black py-1 px-2 rounded-md">#</span> Tech and life</div>
            <div className="">
              {essays1.map((essay) => (
                <div key={essay.id} className="flex flex-col justify-center gap-1 mb-4 border-b border-gray-800 pb-2">
                  <div className="flex flex-row gap-2 sm:gap-6 items-center">
                    <div className="text-gray-200 text-xs sm:text-sm">{essay.date}</div>
                    <Link to={`${essay.link}`} className="underline text-sm sm:text-md cursor-pointer">{essay.title}</Link>
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm">{essay.description}</div>
                </div>
              ))}
            </div>
            <div className="text-lg sm:text-xl font-semibold mt-4 mb-4 text-white"><span className="bg-black py-1 px-2 rounded-md">#</span> Tech in Africa</div>
            <div className="">
              {essays2.length > 0 ? essays2.map((essay) => (
                <div key={essay.id} className="flex flex-col justify-center gap-1 mb-4 border-b border-gray-800 pb-2">
                  <div className="flex flex-row gap-2 sm:gap-6 items-center">
                    <div className="text-gray-200 text-xs sm:text-sm">{essay.date}</div>
                    <Link to={`${essay.link}`} className="underline text-sm sm:text-md cursor-pointer">{essay.title}</Link>
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm">{essay.description}</div>
                </div>
              )) : (
                <div className="text-gray-200 mb-4 text-xs sm:text-sm">Oops!! Not published any Research article</div>
              )}
            </div>
            <div className="font-semibold text-white mb-4 text-sm sm:text-base">Read old articles: <span className="text-xs sm:text-sm text-txtcolor underline">Visit Medium blogs</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

const essays1 = [
  {
    id: 1,
    title:'Transitioning Into Data Science',
    link:'/essays/dsguide',
    description:'The word “data”, “data science”, and “big data” is being used a lot recently...',
    date:'Apr 2nd 2022'
  },
  // {
  //   id: 2,
  //   title:'Why XGBoost performs better than other deep learning models?',
  //   link:'/essays/XB Boost',
  //   description:'Dream crave the mean of the tasks and so many yields in a single day...',
  //   date:'Sept 12th 2024'
  // },
  // {
  //   id: 3,
  //   title:'Is the American dream all it takes?',
  //   link:'/essays/dream',
  //   description:'Dream crave the mean of the tasks and so many yields in a single day...',
  //   date:'May 12th 2024'
  // }
]

const essays2 = [
  {
    id: 1,
    title:'African Transformation',
    link:'/essays/africant',
    description:'Dream crave the mean of the tasks and so many yields in a single day...',
    date:'Nov 20th 2021'
  },
]
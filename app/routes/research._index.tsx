import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useState } from "react";
import Nav from "~/components/nav";
import {GitHub, Linkedin, Twitter, Copy, Circle}  from "react-feather";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Essays() {
    const [count, setCount] = useState(0);
    const [langs, setLangs] = useState(false);
    const [more, setMore] = useState(false);

    const Interest = ['Machine Learning','AI in health','AI agents','Deep learning', 'Javascript bundling', 'Compilers','cryptography','LLMs']

  return (
    <div className="min-h-screen text-txtcolor bg-bgcolor">
      <Nav/>
      <div className="flex justify-center mt-4">
        <div className="w-full px-4 md:w-1/2 lg:w-1/2 xl:w-1/2">
          <div className="flex flex-col justify-center">
            <div className="mt-4 mb-4 text-xs sm:text-sm flex flex-row items-center gap-2 text-white">
              <div>Find me on</div>
              <Link to='/'><GitHub color="#fff" size={16} className="sm:w-[18px] sm:h-[18px]" /></Link>
              <Link to='/'><Linkedin color="#fff" size={16} className="sm:w-[18px] sm:h-[18px]" /></Link>
              <Link to='/'><Twitter color="#fff" size={16} className="sm:w-[18px] sm:h-[18px]" /></Link>
            </div>
            <div className="text-lg sm:text-xl font-semibold mb-2 text-white">Research Interest</div>
            <div className="flex flex-row flex-wrap items-center gap-2 text-gray-100">
              {Interest.map((lang, index) => (
                <div key={index} className="rounded-full bg-bgcolor2 text-xs px-2 py-1">{lang}</div>
              ))}
            </div>

            <div className="text-lg sm:text-xl font-semibold mt-4 text-white">Works</div>

            {works.map((project) => (
              <div key={project.id} className="flex flex-col justify-center gap-2 hover:border hover:border-gray-700 text-white bg-black/90 my-4 px-2 py-2 rounded-md text-xs sm:text-sm">
                <Link to={`${project.link}`} className="text-base sm:text-lg font-semibold text-txtcolor underline">{project.title}</Link>
                <div className="">{project.description}</div>
                <div className="flex flex-row items-center justify-between gap-2 text-white">
                  <div className="flex items-center gap-2">
                    <div className="">
                      Cite paper
                    </div>
                    <div className="cursor-pointer" onClick={() => {
                      navigator.clipboard.writeText(project.cite);
                      alert('Citation copied to clipboard! Type: Vancouver style');
                    }}><Copy color="#fff" size={12} className="sm:w-[14px] sm:h-[14px]" /></div>
                  </div>
                  
                  <Link to={project.github ? `${project.github}` : ''}>{project.github ? <GitHub color="white" size={15} className="sm:w-[17px] sm:h-[17px]" /> : ''}</Link>
                  <div className="flex flex-row gap-2 items-center">
                    <div>{project.published ? 'Published' : project.published ? 'Not published' : ''}</div>
                    <div>{project.published ? <Circle color="#17FFA6" fill='#17FFA6' size={11} className="sm:w-[13px] sm:h-[13px]" /> : project.published ? <Circle fill='yellow' color="yellow" size={11} className="sm:w-[13px] sm:h-[13px]" /> : ''}</div>
                  </div>
                </div>
                <div className="flex flex-row flex-wrap mt-1 items-center gap-2 text-white">
                  {project.tags.map((stack, index) => (
                    <div key={index} className="rounded-full bg-bgcolor text-gray-300 text-xs px-2 py-1">{stack}</div>
                  ))}
                </div>
              </div>
            ))}

            <div className="text-lg sm:text-xl font-semibold mt-2 mb-4 text-white">Research articles</div>
            {essays1.length > 0 ? essays1.map((essay) => (
              <div key={essay.id} className="flex text-xs sm:text-sm flex-col justify-center gap-1 mb-4 border-b border-gray-800 pb-2">
                <div className="flex flex-row gap-2 sm:gap-6 items-center">
                  <div className="text-gray-200">{essay.date}</div>
                  <Link to={`${essay.link}`} className="underline cursor-pointer">{essay.title}</Link>
                </div>
                <div className="text-gray-400 text-xs sm:text-sm">{essay.description}</div>
              </div>
            )) : (
              <div className="text-gray-200 mb-4 text-xs sm:text-sm">Oops!! Not published any Research article</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const works = [
  {
    id: 1,
    title: 'Investigating the detection of breast cancer with deep transfer learning using ResNet18 and ResNet34',
    description: 'Dream crave the mean of the tasks and so many yields in a single day...',
    link: '/essays/LLMs',
    published: true,
    date: 'Jul 5th 2024',
    github: 'https://github.com/African-Marketplace-3/African-Marketplace-3',
    cite: 'Subaar C, Fosberg T., et al. 2024. Biomed. Phys. Eng. Express 10: 035029.',
    tags: ['Deep Learning', 'Residual Networks', 'Transfer Learning']
  }
]

const essays1 = [
  {
    id: 1,
    title: 'African Transformation',
    link: '/essays/africant',
    description: 'Dream crave the mean of the tasks and so many yields in a single day...',
    date: 'Jul 5th 2024'
  },
  {
    id: 2,
    title: 'Why XGBoost performs better than other deep learning models?',
    link: '/essays/XB Boost',
    description: 'Dream crave the mean of the tasks and so many yields in a single day...',
    date: 'Sept 12th 2024'
  },
]
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useState } from "react";
import Nav from "~/components/nav";
import {GitHub, Linkedin, Twitter, Target, Monitor, Smartphone, Eye, EyeOff, Circle}  from "react-feather";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
    const [count, setCount] = useState(0);
    const [langs, setLangs] = useState(false);
    const [more, setMore] = useState(false);

  return (
    <div className="min-h-screen text-txtcolor bg-bgcolor">
      <Nav/>
      <div className="flex justify-center mt-4 ">
        <div className="w-full  md:w-1/4 lg:w-1/2 xl:w-1/2 border">
          <div className="flex flex-col justify-center">
            {more ? (
              <>
                <div className="flex flex-col justify-center gap-2 mt-4">
                  <div className="text-sm sm:text-base"> 
                    I am Fosberg, a recent Computing Physics graduate from KNUST. In school, I created machine learning models and software applications to solve complex physics simulations. Just before completion, I decided to focus on building tools for scientists, developers, and specific niches. Fast forward, I created https://www.lernexe.com/ with my colleague, an AI platform to help students learn, which we engineered to support over 5,000 weekly visitors. Being passionate about problem-solving and research, I would have hated myself if I hadn't published my final year college research: https://iopscience.iop.org/article/10.1088/2057-1976/ad3cdf.
                    As my philosophy evolved to focus on building solutions faster and safer. I again built (https://africabase.vercel.app), a unified datasets hub for Africa, owned by Africans, which I am currently managing. I work on machine learning almost every day, from computer vision to exploring new ML techniques. I created Prossa, a python package(https://prossa.vercel.app) to help solve the pain points in data preprocessing, which is often said to take up 70% of the ML workflow. This is what I will discuss more at the conference.
                    I have created many cool projects that I have either abandoned or not shipped, but they have greatly contributed to my learning. Now, my goal is to give back to the community that inspired me to build these projects. Currently, I am building Plutofloww, a no-code/minimal-code platform that helps data scientists and ML engineers run inferences on their models on the web and allows enterprises to use AI with an API. 
                    <span onClick={() => setMore(!more)} className="text-white cursor-pointer ml-1">read less..</span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="text-sm sm:text-base">
                  I am Fosberg, a software Engineer and machine learning engineer who cares about problem solving while maintaining code best practices 
                  <span onClick={() => setMore(!more)} className="text-white cursor-pointer ml-1">read more..</span>
                </div>
              </>
            )}

            <div className="mt-4 text-xs sm:text-sm flex flex-row items-center gap-2 text-white">
              <div>Find me on</div>
              <Link to='/'><GitHub color="#fff" size={18} /></Link>
              <Link to='/'><Linkedin color="#fff" size={18} /></Link>
              <Link to='/'><Twitter color="#fff" size={18} /></Link>
            </div>

            {langs ? (
              <>
                <div onClick={() => setLangs(!langs)} className="flex cursor-pointer flex-row items-center gap-2 mt-4 text-sm">
                  <div className="">I am fine!!</div>
                  <EyeOff color="white" size={17} />
                </div>
                <div className="flex flex-col gap-2 justify-center mt-2 px-2 py-2 rounded-md bg-black/90 text-xs sm:text-sm">
                  <div className="font-semibold">Languages</div>
                  <div className="flex flex-row flex-wrap items-center gap-2 text-gray-400">
                    {stacks.languages.map((lang, index) => (
                      <div key={index} className="rounded-full bg-bgcolor2 text-xs px-2 py-1">{lang}</div>
                    ))}
                  </div>
                  <div className="font-semibold">Frameworks</div>
                  <div className="flex flex-row flex-wrap items-center gap-2 text-gray-400">
                    {stacks.packages.map((pack, index) => (
                      <div key={index} className="rounded-full bg-bgcolor2 text-xs px-2 py-1">{pack}</div>
                    ))}
                  </div>
                  <div className="font-semibold">Tools</div>
                  <div className="flex flex-row flex-wrap items-center gap-2 text-gray-400">
                    {stacks.tools.map((tool, index) => (
                      <div key={index} className="rounded-full bg-bgcolor2 text-xs px-2 py-1">{tool}</div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div onClick={() => setLangs(!langs)} className="flex flex-row items-center cursor-pointer gap-2 mt-4">
                  <div className="text-lg font-semibold text-white">Curious? <span className="text-txtcolor underline font-normal text-sm">view the tools i use the most</span></div>
                  <Eye color="#90c3be" size={17} />
                </div>
              </>
            )}

            
              <Link to='' className=" font-semibold text-white cursor-pointer text-md "> Recent article: <span className="text-xs font-normal text-txtcolor   underline">Why XGBoost performs better than other deep learning models?</span></Link>
            
            <div className="text-2xl font-semibold mt-4 text-white">Projects</div>
            <div className="">
              {projects.map((project) => (
                <div key={project.id} className="flex flex-col justify-center gap-2 hover:border hover:border-gray-700 text-white bg-black/90 my-4 px-2 py-2 rounded-md text-sm">
                  <Link to={`${project.link}`} className="text-lg font-semibold text-txtcolor">{project.name}</Link>
                  <div className="">{project.description}</div>
                  <div className="flex flex-row items-center justify-between gap-2 text-white">
                    <Link to={`${project.why}`} className="underline">Why this?</Link>
                    <div className="flex flex-row flex-wrap items-center gap-2 text-white">
                      <div>type</div>
                      {project.type.map((typa, index) => (
                        <div key={index} className="rounded-full bg-bgcolor text-white text-xs px-2 py-1">
                          {typa === 'mobile' ? <Smartphone color="#9ca3af" size={16} /> : typa === 'web' ? <Monitor color="#9ca3af" size={16} /> : ''}
                        </div>
                      ))}
                    </div>
                    <Link to={project.github ? `${project.github}` : ''}>{project.github ? <GitHub color="white" size={17} /> : ''}</Link>
                    <div className="flex flex-row gap-2 items-center">
                      <div>{project.status === 'alive' ? 'live' : project.status === 'in progress' ? 'building' : ''}</div>
                      <div>{project.status === 'alive' ? <Circle color="#17FFA6" fill='#17FFA6' size={13} /> : project.status === 'in progress' ? <Circle fill='yellow' color="yellow" size={13} /> : ''}</div>
                    </div>
                  </div>
                  <div className="flex flex-row flex-wrap mt-1 items-center gap-2 text-white">
                    {project.stacks.map((stack, index) => (
                      <div key={index} className="rounded-full bg-bgcolor text-gray-300 text-xs px-2 py-1">{stack}</div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="font-semibold text-white">Experiences:  <span className="text-sm mb-4  text-txtcolor underline">view my experiences on LinkedIn</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const projects = [
 {
    id: 1,
    name: "Plutoflow",
    description: "A no-code/minimal-code platform that helps data scientists and ML engineers run inferences on their models on the web",
    stacks:['Next.js','Typecript','FastAPI','pytorch','onxx runtime'],
    link:'www.plutoflow.com',
    why: "www.bleech.com",
    type: ['web'],
    github: "https://github.com/fosberg/plutoflow",
    status:'in progress',
 },
 {
  id: 2,
  name: "Africabase",
  description: "A datasets platform which hosts AFrica datasets ",
  stacks:['Next.js','Typecript','node.js','express.js'],
  link:'www.africabase.com',
  why: "www.afhere.com",
  type: ['web'],
  github: "https://github.com/fosberg/plutoflow",
  status:'alive',
  users:8,
},
{
  id: 3,
  name: "Farnager",
  description: "A farm managemnet app for farmers with advanced AI in analytics features",
  stacks:['React Native','Typecript','node.js','express.js','MongoDB','Pytorch'],
  link:'www.africabase.com',
  why: "www.afhere.com",
  type: ['mobile'],
  github: "",
  status:'in progress',
},
{
  id: 4,
  name: "Prossa",
  description: "An open-source python framework for checking and recommending datasets",
  stacks:['Prossa','Numpy','Pandad','Astro.js'],
  link:'www.prossa.com',
  why: "www.afhere.com",
  type: ['web'],
  github: "",
  status:'alive',
},
{
  id: 5,
  name: "HymnRaise App",
  description: "A COC hymn book app with intuitive look, built for churches in Ghana",
  stacks:['React Native','NativeWind','Typescript'],
  link:'www.prossa.com',
  why: "www.afhere.com",
  type: ['web'],
  github: "www.prossa.com/ui",
  status:'alive',
}
];


const stacks = {
  languages: ['Typescript','Javascript','Python', 'C++', 'Rust'],
  packages:['Next.js','Remix.js','React Native','Pytorch','Sklearn','Prossa','FastAI','Numpy', 'Prossa','Electron.js','PyQT','Mongoose'],
  tools:['Figma','PhotoShop'],
}
  

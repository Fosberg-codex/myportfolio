import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useState } from "react";
import Nav from "~/components/nav";
import {GitHub, Linkedin, Twitter, ExternalLink, Monitor, Smartphone, Eye, EyeOff, Circle, Download, ArrowRight}  from "react-feather";

export const meta: MetaFunction = () => {
  return [
    { title: "Get to know-Fosberg" },
    { name: "This is about me", content: "About Fosberg and his projects" },
  ];
};

export default function Index() {
    const [count, setCount] = useState(0);
    const [langs, setLangs] = useState(false);
    const [more, setMore] = useState(false);

  return (
    <div className="min-h-screen text-txtcolor bg-bgcolor">
      <Nav/>
      <div className="flex justify-center mt-4  ">
        <div className="w-full px-4  md:w-1/4 lg:w-1/2 xl:w-1/2 ">
          <div className="flex flex-col justify-center">
            {more ? (
              <>
                <div className="flex flex-col justify-center gap-2 mt-4">
                  <div className="text-sm sm:text-base"> 
                    I am Fosberg, I am into software engineering and machine learning engineering. I care about problem solving while maintaining code best practices. I read Computing Physics at the university. In school, I created machine learning models and software applications to solve complex physics simulations. Just before completion, I decided to focus on building tools for scientists, developers, students and specific niches. Fast forward, I created <Link className="underline text-gray-300" to="https://www.lernexe.com/">Lernexe</Link> with my colleague, an AI platform that helps students learn while not relegating their ability to reason, before ChatGPT was built, which we engineered to support over 5,000 weekly visitors. Being passionate about problem-solving and research, I would have hated myself if I hadn't published my final year college research:  <Link className="underline text-gray-300" to="https://iopscience.iop.org/article/10.1088/2057-1976/ad3cdf">Paper</Link>.
                    As my philosophy evolved to focus on building solutions faster and safer. My love for fishing data led me to again build <Link className="underline text-gray-300" to="https://africabase.vercel.app">AfricaBase</Link>, a unified datasets hub for Africa, owned by Africans, which I am currently managing. I work on machine learning tasks almost every day, from computer vision to exploring new ML techniques. I created Prossa, a python package <Link className="underline text-gray-300" to="https://prossa.vercel.app">Prossa</Link> to help solve the pain points in data preprocessing, which is often said to take up 70% of the ML workflow. From design, frontend, backend, DevOps and MLOps I have been there.
                    I have created many cool projects that I have either abandoned or not shipped, but they have greatly contributed to my learning. Now, my goal is to give back to the community that inspired me to build these  and also help businesses ship fast. Currently, I am building  <Link className="underline text-gray-300" to='https://www.plutofloww.com/'>Plutofloww</Link>, a no-code/minimal-code platform that helps data scientists and ML engineers run inferences on their ML on web, an expirement and a side project. 
                    <span onClick={() => setMore(!more)} className="text-white cursor-pointer ml-1">Read less..</span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="text-sm sm:text-base">
                I am Fosberg, I am into software engineering and machine learning engineering. I care about problem solving while maintaining code best practices 
                  <span onClick={() => setMore(!more)} className="text-white cursor-pointer ml-1">read more..</span>
                </div>
              </>
            )}

            <div className="flex justify-between items-center mt-4">
            <div className=" text-xs sm:text-sm flex flex-row items-center gap-2 text-white">
              <div>Find me on</div>
              <Link to='https://github.com/Fosberg-codex'><GitHub color="#fff" size={18} /></Link>
              <Link to='https://www.linkedin.com/in/fosberg-addai-53a6991a7/'><Linkedin color="#fff" size={18} /></Link>
              <Link to='https://x.com/FosbergAddai'><Twitter color="#fff" size={18} /></Link>
            </div>
            <Link to='https://drive.google.com/file/d/1IKYb_vCQWZZX3qkCsIcwMQ8S2WrmO2bs/view?usp=sharing' className="text-xs sm:text-sm text-white flex flex-row gap-2 items-center">
              <div className="text-gray-300 hover:text-white">Resume</div>
              <div><Download color="#fff" size={16} /></div>
            </Link>
            </div>

            {langs ? (
              <>
                <div onClick={() => setLangs(!langs)} className="flex cursor-pointer flex-row items-center gap-2 mt-4 text-sm">
                  <div className="">I am fine!!</div>
                  <EyeOff color="white" size={13} />
                </div>
                <div className="flex flex-col gap-2 justify-center mt-2 px-2 py-2 rounded-md bg-black/90 text-xs sm:text-sm">
                  <div className="font-semibold">Languages</div>
                  <div className="flex flex-row flex-wrap items-center gap-2 text-gray-200">
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
                  <div className="text-lg font-semibold text-white">Curious? <span className="text-txtcolor underline font-normal text-sm">view my stack</span></div>
                  <Eye color="#90c3be" size={13} />
                </div>
              </>
            )}

            
              {/* <Link to='' className=" font-semibold text-white cursor-pointer text-md "> Recent article: <span className="text-xs font-normal text-txtcolor   underline">Why XGBoost performs better than other deep learning models?</span></Link>
             <div className="flex flex-row gap-1 items-center">
             <Link to='/talks' className="text-white text-sm mt-1 cursor-pointer">Conference presentations: (1) </Link>
             <ArrowRight color="white" size={14} />
             </div> */}
             

            <div className="text-2xl font-semibold mt-4 text-white">Projects</div>
            <div className="">
              {projects.map((project) => (
                <div key={project.id} className="flex flex-col justify-center gap-2 hover:border hover:border-gray-700 text-white bg-black/90 my-4 px-2 py-2 rounded-md text-sm">
                  <Link to={`${project.link}`} className="text-lg font-semibold text-txtcolor flex items-center gap-1">
                  <div>{project.name}</div>
                  <ExternalLink color="#90c3be" size={14} />
                  </Link>
                  <div className="text-md">{project.description}</div>
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

              <div className="font-semibold text-white mb-4">Experiences:  <span className="text-sm   text-txtcolor underline">view my experiences on LinkedIn</span></div>
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
    name: "Plutofloww",
    description: "A no-code/minimal-code platform that helps data scientists and ML engineers run inferences on their models on the web",
    stacks:['Next.js','Typecript','FastAPI','pytorch','onxx runtime'],
    link:'https://plutofloww.com/',
    why: "https://plutofloww.com/about",
    type: ['web'],
    github: "https://github.com/Fosberg-codex/onnxview",
    status:'alive',
    // status:'in progress',
 },
 {
  id: 2,
  name: "Africabase",
  description: "A datasets platform which hosts datasets in Africa, starting with Ghana ",
  stacks:['Next.js','Typecript','Node.js','Express.js'],
  link:'https://africabase.vercel.app/',
  why: "https://ionized-drink-a0a.notion.site/A-Unified-Base-For-Africa-02f30158d73045f68ff108c09995ad52?pvs=4",
  type: ['web'],
  github: "https://github.com/fosberg/plutoflow",
  status:'alive',
  users:8,
},
{
  id: 3,
  name: "Farnager.com Web",
  description: "A farm managemnet app for farmers: ruminant farming, poultry, fisheries and crop life cycle management. On the road to use data to build in app AI tools and LLM. Will be out on playstore soon",
  stacks:['Next.js','Typecript','node.js','express.js','MongoDB','Pytorch'],
  link:'https://www.farnager.com/',
  why: "https://www.farnager.com/aboutwa",
  type: ['web'],
  github: "",
  status:'alive',
},
{
  id: 3,
  name: "Farnager App",
  description: "A farm managemnet app for farmers: ruminant farming, poultry, fisheries and crop life cycle management. On the road to use data to build in app AI tools and LLM. Will be out on playstore soon",
  stacks:['React Native','Typecript','node.js','express.js','MongoDB','Pytorch'],
  link:'mailto:fosberg1addai@gmail.com',
  why: "mailto:fosberg1addai@gmail.com",
  type: ['mobile'],
  github: "",
  status:'in progress',
},
{
  id: 4,
  name: "Prossa",
  description: "An open-source python framework for checking and recommending datasets",
  stacks:['Prossa','Numpy','Pandas'],
  link:'https://prossa.plutofloww.com/',
  why: "https://github.com/Fosberg-codex/prossa",
  type: ['web'],
  github: "",
  status:'alive',
},
{
  id: 5,
  name: "HymnRaise App",
  description: "A Church hymn book app with intuitive look, built for the churches of christ  in Ghana. Will be release on playstore soon",
  stacks:['React Native','NativeWind','Typescript', 'expo go'],
  link:'mailto:fosberg1addai@gmail.com',
  why: "mailto:fosberg1addai@gmail.com",
  type: ['mobile'],
  github: "https://github.com/Fosberg-codex/hymnraise",
  status:'in progress',
},
{
  id: 5,
  name: "DataAI",
  description: "Ask any question about your tabular dataset in Natural language",
  stacks:['ReAct','OpenAI','Anthropic'],
  link:'https://github.com/Fosberg-codex/dataAI',
  why: "https://github.com/Fosberg-codex/dataAI",
  type: ['web'],
  github: "https://github.com/Fosberg-codex/dataAI",
  status:'alive',
},
{
  id: 5,
  name: "AgentsHiive",
  description: "A hub for open-source and close source AI agents",
  stacks:['React.js','Next.js','Django Rest','SuperBase', 'Postgres SQL'],
  link:'https://agentshive.vercel.app/',
  why: "https://agentshive.vercel.app/about",
  type: ['web'],
  github: "https://github.com/Fosberg-codex/1000agents",
  status:'in progress',
}
];


const stacks = {
  languages: ['Typescript','Javascript','Python', 'C++', 'Rust'],
  packages:['Next.js','Remix.js','SvelteKit.js','Astro.js','React Native','Django','Django Ninja','Pytorch','Sklearn','Prossa','FastAI','Numpy', 'Prossa','Electron.js','Crew AI','PyQT','Mongoose','tailwind css (styling)'],
  tools:['Figma','PhotoShop','Mongo DB','Azure DevOps', 'Superbase'],
}
  

import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useState } from "react";
import Nav from "~/components/nav";
import { useViewCounter } from "~/hooks/pgviews";
import {GitHub, Linkedin, Twitter, Eye}  from "react-feather";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function EssaysDsguide() {
    const [count, setCount] = useState(0);
    const [langs, setLangs] = useState(false);
    const [more, setMore] = useState(false);

    const views = useViewCounter();

  return (
    <div className="min-h-screen text-txtcolor bg-bgcolor">
      <Nav/>
      <div className="flex justify-center mt-6  ">
        <div className="w-full px-4 lg:w-1/2 md:w-1/2 max-w-4xl">
          <div className="flex flex-col justify-center">
            <div className="mt-2 mb-2 lg:mt-2 lg:mb-2 md:mt-2 md:mb-2 text-xs sm:text-sm flex flex-row items-center gap-2 text-white">
              <div>Find me on</div>
              <Link to='https://github.com/Fosberg-codex'><GitHub color="#fff" size={18} /></Link>
              <Link to='https://www.linkedin.com/in/fosberg-addai-53a6991a7/'><Linkedin color="#fff" size={18} /></Link>
              <Link to='https://x.com/FosbergAddai'><Twitter color="#fff" size={18} /></Link>
            </div>
       
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-4 mb-4 text-white">Transitioning Into Data Science</h1>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4 mb-4">
              <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
                <div className="py-1 px-2 rounded-full bg-black/90 text-gray-300">#datascience</div>
                <div className="py-1 px-2 rounded-full bg-black/90 text-gray-300">#ml</div>
                <div className="py-1 px-2 rounded-full bg-black/90 text-gray-300">#algorithms</div>
              </div>
              <div className="text-gray-300 text-xs sm:text-sm">Date: Apr 2nd, 2022</div>
              <div className="flex flex-row items-center text-gray-300 text-xs sm:text-sm">
                <div className="mr-1">views</div>
                <Eye color="white" size={14} />
                <div className="ml-2">{views}</div>
              </div>
            </div>
            <div className="mt-2 text-justify text-sm sm:text-base">
            The word “data”, “data science”, and “big data” is being used a lot recently, because we have seen exponential growth in the opportunities these words offer. Data is facts and statistics collected together for reference or analysis. <Link to='https://www.endava.com/en/blog/Engineering/2021/Data-is-everything#:~:text=It%20has%20generally%20been%20acknowledged,rely%20on%20in%20the%20process.' className="underline">Data is everything</Link> for an individual and a whole nation. As humans, Data of the past is kept from experiences as we learn from everyday scenarios. For the past years, it has become one of the relevant materials for solving problems. Researchers in all areas leverage so much data for their qualitative and quantitative research and I believe we have by chance leveraged data in our learning processes.
            </div>
            <div className="mt-2 text-justify text-sm sm:text-base">
            Looking at how relevant and important data has been for humanity there was a need to understand the processes of getting data and know-how best these can be explored to solve most of the complex problems we faced. That is where data science comes in. <span className="font-semibold">Data science</span>  is an <Link className="underline" to="https://en.wikipedia.org/wiki/Interdisciplinarity">interdisciplinary</Link> field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from noisy, structured, and unstructured data, and apply knowledge and actionable insights from data across a broad range of application domains. Data science is related to <Link className="underline" to='https://en.wikipedia.org/wiki/Data_mining'>data mining, </Link><Link className="underline" to='https://en.wikipedia.org/wiki/Machine_learning'>machine learning,</Link>  and <Link className="underline" to='https://en.wikipedia.org/wiki/Machine_learning'>big data</Link>. It is indeed an interdisciplinary field ranging in a variety of areas such as sciences( computational sciences, biological, health) engineering and automation, social sciences/humanity, Business, environmental sanitation, etc. These days, it is interesting to know that most field of study and work uses a pinch of data science approach in problem-solving.
            </div>
            <div className="mt-2 text-justify text-sm sm:text-base">
            In the <Link className="underline" to='https://towardsdatascience.com/the-evolution-of-data-science-as-i-remember-it-54cf4e602bd5'>21st century, data and data science</Link>  has gained a lot of popularity and there has been an increase in its skill demand. It has made technologies more powerful to an extent that the world is using data through artificial intelligence to solve complex problems.
            </div>
            <div className="mt-2 text-justify text-sm sm:text-base">
            If you want to delve into data science or you want to know something about it I believe you will enjoy this article.
            </div>
            <div className="mt-2 text-justify text-sm sm:text-base">
           <span className="text-gray-300 font-semibold"> The Data Science cycle.</span> 
            </div>
            <div className="mt-2 text-justify text-sm sm:text-base">
            <span className="font-semibold">Data cleaning:</span>  This is most often the first stage. Data cleaning is the process of fixing or removing incorrect, corrupted, incorrectly formatted, duplicate, or incomplete data within a dataset. As data scientists, you should be ready to embrace any data as it comes. Be prepared to clean data for analysis and interpretation.
            </div>
            <div className="mt-2 text-justify text-sm sm:text-base">
            <span className="font-semibold">Statistics:</span> Working with unfamiliar data lets you put statistical methods into practice, you should get at least an average statistical background to understand and know the operations that you should go through for better decision making.
            </div>
            <div className="mt-2 text-justify text-sm sm:text-base">
            <span className="font-semibold">Machine learning:</span> You should be familiar with the use and development of computer systems that can learn and adapt without following explicit instructions, by using algorithms and statistical models to analyze and draw inferences from patterns in data. Mostly for making better decisions.
            </div>
            <div className="mt-2 text-justify text-sm sm:text-base">
            <span className="font-semibold">Visualization:</span> Representing your data visually is crucial to communicating its meaning with your audience. Very few people can look at a spreadsheet or table and draw quick, clear conclusions about what the data says. But anyone can compare the size of bars on a bar chart, or follow the trend on a line graph. That is why Data scientists spend time producing a whole variety of visualizations to give more meaning to data.
            </div>
            <div className="mt-2 text-justify text-sm sm:text-base">
            <span className="font-semibold">Data cleaning:</span> This is one of the important parts of the cycle because all insights drawn will now be communicated to stakeholders. You should analyze and design how you interpret your data to stakeholders or team members.
            </div>
            <div className="mt-2 text-justify text-sm sm:text-base">
            There are in dept skills to every stage in the cycle and I recommend you go and watch the data science full course by FreeCodeCamp.org on <Link className="underline" to="https://www.youtube.com/watch?v=ua-CiDNNj30">youtube.</Link> 
            </div>
            <div className="mt-2 text-justify text-sm sm:text-base">
              <p className="text-gray-300 font-semibold mb-1">Careers in Data Science:</p>
             Data Analyst, Data engineer, Data scientist, Machine Learning Engineer, Machine learning scientist, Solution architect.
            </div>

          
            <div className="mt-2 text-justify text-sm sm:text-base">
            However, there are other minor data science career roles that are not on the list. Data science job descriptions are not straightforward these days because employers sometimes, do not know the category of professionals they need for the right job. For instance, the machine learning engineer role description will be a typical data scientist or engineer role and vice versa. I would strongly advise that in your path to becoming and practicing data science, work more in at least all the areas listed above.
            </div>
            <div className="text-white mt-4 mb-4 text-sm sm:text-base">
              Discuss with me: <Link to='/mailto:fosberg1addai@gmail.com' className="text-txtcolor underline">Email</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
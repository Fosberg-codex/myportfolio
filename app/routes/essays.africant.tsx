import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useState } from "react";
import Nav from "~/components/nav";
import { useViewCounter } from "~/hooks/pgviews";
import {GitHub, Linkedin, Twitter, Eye}  from "react-feather";

export const meta: MetaFunction = () => {
  return [
    { title: "Essays-Digital transformation: The African role." },
    { name: "Digital transformation: The African role.", content: "Article on Digital transformation: The African role." },
  ];
};

export default function EssaysAfricant() {
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
       
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-4 mb-4 text-white">Digital transformation: The African role.</h1>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4 mb-4">
              <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
                <div className="py-1 px-2 rounded-full bg-black/90 text-gray-300">#africa</div>
                <div className="py-1 px-2 rounded-full bg-black/90 text-gray-300">#tech</div>
                <div className="py-1 px-2 rounded-full bg-black/90 text-gray-300">#startups</div>
              </div>
              <div className="text-gray-300 text-xs sm:text-sm">Date: Vov 20th, 2021</div>
              <div className="flex flex-row items-center text-gray-300 text-xs sm:text-sm">
                <div className="mr-1">views</div>
                <Eye color="white" size={14} />
                <div className="ml-2">{views}</div>
              </div>
            </div>
            <div className="mt-2 text-justify text-sm sm:text-base">
              Our age is based on concepts and deep thinking. From the Agricultural age(farmers) 18th Century through to the conceptual age (concept workers) 21st century. As of January 2021, Southern Africa was the region with the highest internet penetration rate in Africa, at 62 percent. The share of people using the internet in this area of Africa was even above the world average (59.5 percent). In contrast, Eastern and Middle Africa recorded the lowest rates, 24 percent, and 26 percent, respectively. Africa is rising in numbers about internet usage <Link className="text-gray-200" to='https://statista.com/statistics/1176668/internet-penetration-rate-in-africa-by-region/#:~:text=The%20share%20of%20people%20using,percent%20and%2026%20percent%2C%20respectively.'>(by Statistica.)</Link> but not to the utilization and manufacturing of technology. There seems to be no policy to walk us into the future we learned about. A country's success in the conceptual age is solely based on how well it finances science and technology which is the main driver in digital transformation.
            </div>
            <div className="mt-2 text-justify text-sm sm:text-base">
            Our age is based on concepts and deep thinking. From the Agricultural age(farmers) 18th Century through to the conceptual age (concept workers) 21st century. As of January 2021, Southern Africa was the region with the highest internet penetration rate in Africa, at 62 percent. The share of people using the internet in this area of Africa was even above the world average (59.5 percent). In contrast, Eastern and Middle Africa recorded the lowest rates, 24 percent, and 26 percent, respectively. Africa is rising in numbers about internet usage <Link className="text-gray-200" to='https://statista.com/statistics/1176668/internet-penetration-rate-in-africa-by-region/#:~:text=The%20share%20of%20people%20using,percent%20and%2026%20percent%2C%20respectively.'>(by Statistica.)</Link>  but not to the utilization and manufacturing of technology. There seems to be no policy to walk us into the future we learned about. A country’s success in the conceptual age is solely based on how well it finances science and technology which is the main driver in digital transformation

            This age brings a lot of opportunities to fit in. Now we see data science, AI and big data, software utilization, and many more in the Tech ecosystem and we are making history to avoid climate disasters through green energy. All disciplines are utilizing and engineering technology in the other part of the world.

            </div>
            <div className="mt-2 text-justify text-sm sm:text-base">
            But digital transformation is not about technology, it is also about the process. It must be centered around producing, collecting, and using high-quality, reproducible data. How do we go through all these processes without the skill to inform and upscale?
            It is apparent in another part of the world, the new code for a country’s progression is their technologies and how extremely well the are digitally transformed.
            </div>
            <div className="mt-2 text-justify text-sm sm:text-base">
            Should technology and the digital space be for the IT guys as you always claim? Now companies and other specialties utilize technology to make life easy. For Example, Bolt was made to make anyone get a ride from where ever he is and rentit was created to ease your search for a house to rent, it was an idea, but now a product. Occasionally it may look like our jobs are magically snatched, but the trend is different now. We can be part of the change!
            </div>
            <div className="mt-2 text-justify text-sm sm:text-base">
            As we are evolving and trying to utilize technology to the fullest, we can learn to educate our clueless people. We can solely offer to become beta testers and survey advocates to encourage young creators and problem solvers. A problem solved on the philosophies of science and technology is a big note on our continent.
            </div>
            <div className="mt-2 text-justify text-sm sm:text-base">
            In my opinion, I advocate there is a need to raise our mindsets, equip ourselves, edify our misinformed, and create innovative opportunities in the digital space for Africa. So much is happening and am optimistic ample is on the way.
            </div>
            <div className="mt-2 text-justify text-sm sm:text-base">
            Creating awareness, utilizing technology, and solving problems technically can be an opportune way to accelerate our transformation process. For us futurists, the future is about big data, robotics, and IoT( Internet of Things), and others, and it will continue to act as a technological innovator and accelerator for the foreseeable future.
            </div>
            <div className="mt-2 text-justify text-sm sm:text-base">
            Our drive should be measured towards African growth. Sometimes Tech startups suffer owing to the level of low fidelity responses to change and innovations in the tech ecosystem. Some companies almost get collapsed and those who thrive spend a quite huge pile on educating our digitally incognizant people till they are acquainted with what they should know earlier. I credit this should be less cumbersome and less costive.
            </div>
            <div className="mt-2 text-justify text-sm sm:text-base">
            We need to speed up, move faster than the algorithms, and even control the algorithms. Our contribution to Fintech, Biotech, Agritech, Cyber security, and other areas of technology are so much vital in our role to transform our countries digitally. Once again, it starts from an idea then it becomes a product.
            </div>

          
            <div className="mt-2 text-justify text-sm sm:text-base">
              Creating awareness, utilizing technology, and solving problems technically can be an opportune way to accelerate our transformation process. For us futurists, the future is about big data, robotics, and IoT( Internet of Things), and others, and it will continue to act as a technological innovator and accelerator for the foreseeable future.
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
import { useState } from "react";
import { NavLink } from "@remix-run/react";

export default function Nav() {
    const [count, setCount] = useState(0);

    return (
        <div className="flex bg-bgcolor text-txtcolor justify-center">
            <div className="flex flex-col justify-center items-start gap-1 w-full px-4  md:w-3/4 lg:w-1/2 xl:w-1/2 mt-4 sm:mt-8">
                <div className="flex flex-start text-2xl sm:text-3xl md:text-4xl font-semibold">Fosberg Addai</div>
                <div className="flex-start flex flex-row justify-start items-center gap-4 sm:gap-6 md:gap-8 text-white text-sm sm:text-base">
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "text-txtcolor border-b-2 border-white" : isActive ? "text-white font-semibold border-b-2 border-white" : ""
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/essays"
                        className={({ isActive, isPending }) =>
                            isPending ? "text-txtcolor border-b-2 border-white" : isActive ? "text-white font-semibold border-b-2 border-white" : ""
                        }
                    >
                        Essays
                    </NavLink>
                    <NavLink
                        to="/research"
                        className={({ isActive, isPending }) =>
                            isPending ? "text-txtcolor border-b-2 border-white" : isActive ? "text-white font-semibold border-b-2 border-white" : ""
                        }
                    >
                        Research
                    </NavLink>
                </div>
            </div>
        </div>
    );
}


// with the image

// return (
//     <div className="flex bg-bgcolor text-txtcolor justify-center">
//         <div className="flex flex-row items-center gap-4 px-4 py-4 w-full md:w-3/4 lg:w-1/2 xl:w-1/2">
//             <img src={Fosberg} width='60' height='60' alt="Fosberg Addai" className="rounded-full border border-txtcolor" />
//             <div className="flex flex-col justify-center items-start">
//                 <div className="text-2xl sm:text-3xl md:text-4xl font-semibold">Fosberg Addai</div>
//                 <div className="flex flex-row justify-start items-center gap-4 sm:gap-6 md:gap-8 text-white text-sm sm:text-base mt-2">
//                     <NavLink
//                         to="/"
//                         className={({ isActive, isPending }) =>
//                             isPending ? "text-txtcolor border-b-2 border-white" : isActive ? "text-white font-semibold border-b-2 border-white" : ""
//                         }
//                     >
//                         About
//                     </NavLink>
//                     <NavLink
//                         to="/essays"
//                         className={({ isActive, isPending }) =>
//                             isPending ? "text-txtcolor border-b-2 border-white" : isActive ? "text-white font-semibold border-b-2 border-white" : ""
//                         }
//                     >
//                         Essays
//                     </NavLink>
//                     <NavLink
//                         to="/research"
//                         className={({ isActive, isPending }) =>
//                             isPending ? "text-txtcolor border-b-2 border-white" : isActive ? "text-white font-semibold border-b-2 border-white" : ""
//                         }
//                     >
//                         Research
//                     </NavLink>
//                 </div>
//             </div>
//         </div>
//     </div>)}

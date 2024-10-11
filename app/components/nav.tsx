import { NavLink } from "@remix-run/react";

export default function Nav() {
  return (
    <div className="flex bg-bgcolor text-txtcolor justify-center px-4 sm:px-0">
      <div className="flex flex-col justify-center items-start gap-1 w-full sm:w-5/6 md:w-3/4 lg:w-2/3 xl:w-1/2 mt-4 sm:mt-8">
        <div className="flex flex-start text-2xl sm:text-3xl md:text-4xl font-semibold">Fosberg Addai</div>
        <div className="flex-start flex flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 text-white text-sm sm:text-base">
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
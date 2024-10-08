import Link from "next/link";
import DarkModeSwitcher from "./darkModeSwitcher";
import DropdownMessage from "./messageBar";
import DropdownNotification from "./notification";
import DropdownProfile from "./profile";
import Image from "next/image";
import { HamButton } from "./hamButton";

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  return (
    <header className="sticky flex top-0 z-10 w-full bg-white drop-shadow-md dark:bg-gray-600 dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-lg md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* ham button  */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="block p-1.5 lg:hidden"
          >
            <HamButton sidebarOpen={props.sidebarOpen} />
          </button>

          {/* logo  */}
          <Link className="block flex-shrink-0 lg:hidden" href="/">
            <Image
              width={100}
              height={100}
              src={"/logo.png"}
              alt="Logo"
              priority
            />
          </Link>
        </div>

        <div className="hidden sm:block">
          <span className="text-2xl text-cyan-700 dark:text-cyan-400 pr-2">
            ViduzX | Xanvia
          </span>
        </div>

        <div className="flex items-center gap-3 lg:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            <DarkModeSwitcher />
            <DropdownNotification />
            <DropdownMessage />
          </ul>
          <DropdownProfile />
        </div>
      </div>
    </header>
  );
};

export default Header;

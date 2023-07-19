import Logo from "./logo";
import { BsDiscord, BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top area: Blocks */}

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-zinc-200">
          {/* Social as */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <a
                href="#0"
                className="flex justify-center items-center text-zinc-600 hover:text-purple-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Twitter"
              >
                <BsDiscord size={15} className="w-full h-full p-2.5" />
              </a>
            </li>
            <li className="ml-4">
              <a
                href="#0"
                className="flex justify-center items-center text-zinc-600 hover:text-purple-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Github"
              >
                <BsTwitter size={15} className="w-full h-full p-2.5" />
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-zinc-600 mr-4">
            &copy; HypnosETH.fi. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

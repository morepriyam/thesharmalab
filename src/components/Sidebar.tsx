"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsOpen2(!isOpen2);
  };

  const closeSidebar = () => {
    setIsOpen2(false);
  };

  const handleContextMenu = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>,
  ) => {
    event.preventDefault();
  };

  const links = [
    { name: "About Us", url: "/aboutus" },
    { name: "Research", url: "/research" },
    { name: "People", url: "/people" },
    { name: "Publications", url: "/publications" },
    { name: "Teaching", url: "/teaching" },
    { name: "Contact Us", url: "/contact" },
  ];

  return (
    <div className="flex">
      {!isOpen2 && (
        <div className="relative w-full p-4 sm:hidden">
          <div className="absolute right-4 top-4">
            <button
              onClick={toggleSidebar}
              data-drawer-toggle="default-sidebar"
              type="button"
              className="inline-flex items-center text-sm"
            >
              <svg
                className="h-7 w-7"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-center text-xl">
            <span className="font-mono font-bold">The Sharma Lab</span>
          </div>
        </div>
      )}

      <aside
        className={`fixed left-0 top-0 z-40 h-screen w-64 transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="relative h-full overflow-y-auto px-3 py-4">
          <div className="absolute left-6 top-24">
            <Image
              src="/pfwlogo.webp"
              alt="Purdue University Fort Wayne Logo"
              width={150}
              height={60}
              draggable={false}
              onContextMenu={handleContextMenu}
            />
          </div>
          <ul className="absolute mt-48 space-y-2">
            <li>
              <Link
                onClick={closeSidebar}
                href={"/"}
                className={`block rounded-lg p-2 font-mono font-bold ${
                  pathname === "/"
                    ? "text-lg text-gray-900"
                    : "transition-all duration-100 hover:text-lg"
                }`}
              >
                The Sharma Lab
              </Link>
            </li>
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.url}
                  className={`block rounded-lg p-2 font-medium ${
                    pathname === link.url
                      ? "text-lg text-gray-950"
                      : "text-gray-400 transition-all duration-100 hover:text-lg hover:text-gray-950"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {isOpen2 && (
        <div className="fixed inset-0 z-50 flex flex-col items-end justify-start bg-white bg-opacity-100 sm:hidden">
          <button onClick={toggleSidebar} className="p-4 text-3xl">
            &times;
          </button>
          <div className="relative flex h-full w-full items-center justify-center">
            <div className="absolute top-28"></div>
            <ul className="flex flex-col items-center space-y-4 text-xl">
              <li>
                <Link
                  onClick={closeSidebar}
                  href={"/"}
                  className="block p-3 font-mono font-bold"
                >
                  The Sharma Lab
                </Link>
              </li>
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    onClick={closeSidebar}
                    href={link.url}
                    className={`block p-3 font-medium ${
                      pathname === link.url
                        ? "text-gray-950"
                        : "text-gray-400 transition-all duration-100 hover:text-gray-950"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

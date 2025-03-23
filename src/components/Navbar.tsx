"use client";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { NavActionLink } from "./ui/NavActionBtn";
import { useState } from "react";
import { CTABtn } from "./ui/CTABtn";

export const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <nav className="border-b-[1px] border-slate-300 py-1.5 px-4 flex justify-between items-center">
      <Link to={"/"}>
        <img src="/HSG logo.avif" width={90} />
      </Link>
      <ActionBtns className="hidden lg:flex" />
      <Menu
        className="cursor-pointer lg:hidden size-7"
        onClick={() => setIsSidebarOpen(true)}
      />
      <SideBar
        className={`${isSidebarOpen ? "flex" : "hidden"} lg:hidden`}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </nav>
  );
};

const ActionBtns = ({ className }: { className?: string }) => {
  return (
    <div className={`font-bold ${className}`}>
      <NavActionLink to="/">Home</NavActionLink>
      <NavActionLink to="/testprep">TestPrep</NavActionLink>
      <NavActionLink to="/study-destination">Study Destinations</NavActionLink>
      <NavActionLink to="scholarships">ScholarShips</NavActionLink>
      <NavActionLink to="testimonials">Testimonials</NavActionLink>
      <NavActionLink to="blogs">Blogs</NavActionLink>
      <NavActionLink to="contact">Contact</NavActionLink>
      <NavActionLink to="more">More</NavActionLink>

      <CTABtn to="book-a-session" className="mx-3">
        Book a Session
      </CTABtn>
    </div>
  );
};

const SideBar = ({
  className,
  setIsSidebarOpen,
}: {
  className?: string;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={`z-[1000] fixed top-0 right-0 bg-white drop-shadow-lg min-h-screen flex flex-col px-8 py-8 ${className}`}
    >
      <X
        className="absolute top-5 right-4 size-7 cursor-pointer"
        onClick={() => setIsSidebarOpen(false)}
      />
      <NavActionLink setIsSidebarOpen={setIsSidebarOpen} to="/">Home</NavActionLink>
      <NavActionLink setIsSidebarOpen={setIsSidebarOpen} to="/testprep">TestPrep</NavActionLink>
      <NavActionLink setIsSidebarOpen={setIsSidebarOpen} to="/study">Study Destenations</NavActionLink>
      <NavActionLink setIsSidebarOpen={setIsSidebarOpen} to="/scholarships">ScholarShips</NavActionLink>
      <NavActionLink setIsSidebarOpen={setIsSidebarOpen} to="/testimonials">Testimonials</NavActionLink>
      <NavActionLink setIsSidebarOpen={setIsSidebarOpen} to="/blogs">Blogs</NavActionLink>
      <NavActionLink setIsSidebarOpen={setIsSidebarOpen} to="/contact">Contact</NavActionLink>
      <NavActionLink setIsSidebarOpen={setIsSidebarOpen} to="/test" className="flex items-center gap-1">
        <p>More</p>
        <ChevronDown />
      </NavActionLink>

      <CTABtn to="/book-a-session" className="my-10">
        Book a session
      </CTABtn>
    </div>
  );
};

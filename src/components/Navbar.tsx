import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { NavActionLink } from "./ui/NavActionBtn";
import { CTABtn } from "./ui/CTABtn";
import { useAtom } from "jotai";
import { sideBarAtom } from "@/store";

export const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useAtom(sideBarAtom);

  return (
    <nav className="sticky z-[1] bg-white top-0 border-b-[1px] border-slate-300 py-1.5 px-4 flex justify-between items-center">
      <Link to={"/"}>
        <img src="/HSG logo.avif" width={90} />
      </Link>
      <div className="flex items-center gap-4">
        <ActionBtns className="hidden xl:flex" />
        <CTABtn
          to="book-a-session"
          className="hidden md:block xl:hidden border-[2px] bg-cta text-white"
        >
          Book a Free Session
        </CTABtn>
        <Menu
          className="cursor-pointer xl:hidden size-7"
          onClick={() => setIsSidebarOpen(true)}
        />
        <SideBar
          className={`${isSidebarOpen ? "flex" : "hidden"} xl:hidden`}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </div>
    </nav>
  );
};

const ActionBtns = ({ className }: { className?: string }) => {
  return (
    <div className={`items-center ${className}`}>
      <NavActionLink to="/">Home</NavActionLink>
      <NavActionLink to="/testprep">TestPrep</NavActionLink>
      <NavActionLink to="/study-destination">Study Destinations</NavActionLink>
      <NavActionLink to="scholarships">ScholarShips</NavActionLink>
      <NavActionLink to="testimonials">Testimonials</NavActionLink>
      <NavActionLink to="blogs">Blogs</NavActionLink>
      <NavActionLink to="contact">Contact</NavActionLink>
      <NavActionLink to="more">More</NavActionLink>

      <CTABtn to="book-a-session" className="mx-4 bg-cta text-white">
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
      className={`fixed top-0 right-0 bg-white drop-shadow-lg min-h-screen flex flex-col ${className}`}
    >
      <div className="flex py-4 px-8">
        <CTABtn to="/book-a-session" className="bg-cta text-white py-3">
          Book a session
        </CTABtn>
        <X
          className="relative left-4 top-2 size-7 cursor-pointer"
          onClick={() => setIsSidebarOpen(false)}
        />
      </div>
      <div className="flex flex-col px-6">
        <NavActionLink to="/">Home</NavActionLink>
        <NavActionLink to="/testprep">TestPrep</NavActionLink>
        <NavActionLink to="/study">Study Destenations</NavActionLink>
        <NavActionLink to="/scholarships">ScholarShips</NavActionLink>
        <NavActionLink to="/testimonials">Testimonials</NavActionLink>
        <NavActionLink to="/blogs">Blogs</NavActionLink>
        <NavActionLink to="/contact">Contact</NavActionLink>
        <NavActionLink to="/test" className="flex items-center gap-1">
          <p>More</p>
          <ChevronDown />
        </NavActionLink>
      </div>
    </div>
  );
};

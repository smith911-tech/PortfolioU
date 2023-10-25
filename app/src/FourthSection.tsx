import { GoProjectSymlink } from "react-icons/go";
export default function FourthSection(){
    return (
      <main className="px-5 py-4 sm634:py-5 sm634:px-8">
        <p className=" font-semibold sm634:text-[30px] text-2xl text-[white] flex items-center gap-2">
          Projects
          <GoProjectSymlink className="text-[#EB4A4A] animate-spin" />
        </p>
      </main>
    );
}
import { BookMarked } from "lucide-react";

export function Header() {
  return (
   <header className=" fixed top-0 left-0 flex items-center justify-between p-8 w-full h-20 border border-l-0 border-t-0 border-r-0 border-b-slate-800">

    <div className="flex items-center gap-2">
      <img className="w-7" src="https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/tailwind-css-icon.png" alt="TailwindCSS" />
      <span className="font-bold text-lg text-zinc-50 hover:text-blue-400 ease-in duration-300 cursor-pointer">
        Learning tailwindcss
      </span>
    </div>

    <a target="_blank" href="https://tailwindcss.com/">
      <BookMarked className="font-bold text-zinc-50 hover:text-blue-400 ease-in duration-300 cursor-pointer" />
    </a>
   </header>
  )
}
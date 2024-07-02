import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto flex items-center justify-center px-4 py-4 text-white">
      <div className="flex items-center justify-between flex-1 max-w-[1280px]">
        <div className="w-48px h-48px">Logo</div>
        <nav aria-label="Main Navigation">
          <ul className="flex flex-end gap-[30px] flex-row">
            <li>Home</li>
            <li>about</li>
            <li className="ml-[80px]">Login</li>
          </ul>
        </nav>
      </div>
    </main>
  );
}

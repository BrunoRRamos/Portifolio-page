import { ButtonHeader } from "../componentsSys/headerButton";

export function Header() {
  return (
    <div className="flex flex-col h-screen w-2/4 bg-black items-center py-24 ">
      <h1 className="text-white text-5xl font-bold">Bruno Ramos</h1>
      <h2 className="text-white">Full Stack developer</h2>

      <nav className="mt-16">
        <ul className="[&>li]:text-white">
          <li>ABOUT</li>
          <li>EXPERIENCE</li>
          <li>PROJECTS</li>
        </ul>
      </nav>

      <ul className="[&>li]:text-white">
        <li>GitHub</li>
        <li>LinkedIn</li>
        <li>Email</li>
        <li>GitLab</li>
      </ul>
    </div>
  );
}

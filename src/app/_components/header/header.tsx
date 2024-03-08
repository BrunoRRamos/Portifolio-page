export function Header() {
  return (
    <div className="flex flex-col h-screen w-2/4 bg-black items-start py-24 ">
      <h1 className="text-slate-200 text-5xl font-bold">Bruno Ramos</h1>
      <h2 className="text-slate-200 mt-1.5">Full Stack developer</h2>
      <p className="text-slate-300 leading-normal max-w-xs mt-4">
        Responsive, Interactive, Eficient
      </p>

      <nav>
        <ul className="[&>li]:text-white mt-16 w-max h-min">
          <li>ABOUT</li>
          <li>EXPERIENCE</li>
          <li>PROJECTS</li>
        </ul>
      </nav>

      <ul className="[&>li]:text-white mt-16">
        <li>GitHub</li>
        <li>LinkedIn</li>
        <li>Email</li>
        <li>GitLab</li>
      </ul>
    </div>
  );
}

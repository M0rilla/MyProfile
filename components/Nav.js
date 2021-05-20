import { useRouter } from "next/router";

export default function Nav() {
    const router = useRouter();

    return (
        <nav className="nav bg-gray-900 text-white">
        <ul className="flex space-x-2 justify-center">                             
          <li className={router.pathname == "/" ? "active" : ""}>
            <a href="/" className="block px-4 py-2 rounded-md">Home</a>
          </li>
          <li className={router.pathname == "/experiences/experiences" ? "active" : ""}>
            <a href="/experiences/experiences" className="block px-4 py-2 rounded-md">Experiences</a></li>
          <li className={router.pathname == "/skills/skills" ? "active" : ""}>
            <a href="/skills/skills" className="block px-4 py-2 rounded-md">Skills</a>
            </li>
          <li className={router.pathname == "/resume/resume" ? "active" : ""}>
            <a href="/resume/resume" className="block px-4 py-2 rounded-md">Resume</a>
          </li>
          <li>
            <a className="block px-4 py-2 rounded-md">Soon...</a>
            </li>                                                           
        </ul>
      </nav>
    )
}


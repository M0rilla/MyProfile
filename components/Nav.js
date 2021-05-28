import { useRouter } from "next/router";

export default function Nav() {
    const router = useRouter();

    return (
      <nav className="nav bg-gray-900">
        <ul className="flex justify-center">                             
          <li className={router.pathname == "/" ? "active" : ""}>
            <a href="/" className="block px-4 py-2 rounded-md">Home</a>
          </li>
          <li className={router.pathname == "/experiences" ? "active" : ""}>
            <a href="/experiences" className="block px-4 py-2 rounded-md">Experiences</a></li>
          <li className={router.pathname == "/skills" ? "active" : ""}>
            <a href="/skills" className="block px-4 py-2 rounded-md">Skills</a>
            </li>
          <li className={router.pathname == "/resume" ? "active" : ""}>
            <a href="/resume" className="block px-4 py-2 rounded-md">Resume</a>
          </li>                                                                   
        </ul>
      </nav>
    )
}


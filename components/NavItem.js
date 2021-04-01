export default function NavItem({ href,children }) {
    return (
      <li>
        <a
          href={href}
          className="block px-4 py-2 rounded-md"
        >
          {children}
        </a>
      </li>
    )
  }
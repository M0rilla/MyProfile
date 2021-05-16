  
export default function Nav({ children }) {
    return (
      <nav className="nav p-4">
        <ul className="flex space-x-2">
          {children}
        </ul>
      </nav>
    )
  }
  
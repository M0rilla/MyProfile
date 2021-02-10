import Nav from '../../components/Nav'
import NavItem from '../../components/Navitem'
import skList from './skList'
import skListItem from './skListItem'

export default function Skills({ skills }) {
  return (
    <div className="divide-y divide-gray-100">
      <Nav>
        <NavItem href="/featured" isActive>Featured</NavItem>
        <NavItem href="/popular">Popular</NavItem>
        <NavItem href="/recent">Recent</NavItem>
      </Nav>
      <skList>      
        {skills.map((skill) => (
          <skListItem key={skill.id} skill={skill} />
        ))}
      </skList>
    </div>
  )
}
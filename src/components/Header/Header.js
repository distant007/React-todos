import NewTaskForm from '../NewTaskForm'
import './Header.css'
const Header = (props) => {
  return (
    <header className="header">
      <h1>todos</h1>
      <NewTaskForm addItem={props.addItem} />
    </header>
  )
}
export default Header

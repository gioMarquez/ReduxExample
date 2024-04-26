//Importando Hook UseSelector
import { useSelector } from "react-redux"

const Header = () => {
    const user = useSelector((state) => state.user)

  return (
    <header>
        <h1>Redux Toolkit Example</h1>
        <ul>
            <li>Name: {user.name}</li>
            <li>Email: {user.email}</li>
            <li>UserName: {user.name}</li>
        </ul>
    </header>
  )
}

export default Header
import { HeaderProps } from "../types/Header.types"
const Header = ({header}:HeaderProps) => {
  return (
    <div className='header'>
        <h1>
            {header}
        </h1>
    </div>
  )
}

export default Header
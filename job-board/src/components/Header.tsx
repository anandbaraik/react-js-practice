type HeaderProps = {
    header : string
};
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
interface HeaderProps {
  
  name: string
}
export function Header(props: HeaderProps){


  return (
    <header>
      <span className="category">Categoria:<span> {props.name}</span></span>
    </header>
  )
}
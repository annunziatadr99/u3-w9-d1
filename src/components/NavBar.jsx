const NavBar = props =>(

    <div className="navbar">
        <div className="logo">
            <img src={props.Logo} alt="" />
        </div>
  <a href={props.href} className="active">{props.textHref}</a>
  <a href={props.href1} >{props.textHref1}</a>
  <a href={props.href2} >{props.textHref2}</a>
  <a href={props.href3} >{props.textHref3}</a>
</div>
)
export default NavBar;
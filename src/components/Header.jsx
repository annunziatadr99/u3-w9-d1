const Header = props =>(
    <div className="header">
  <h1>{props.textH1}</h1>
  <img src={props.UrlImg} alt={props.descrizioneImg}/>
  <p>{props.textparag}</p>
</div>
)
export default Header
const Main = props =>(
    
    <>
    <div className="main">
    <div>
        <h2>
            {props.textH2}
        </h2>
    </div>


    

    <label htmlFor={props.id}>{props.labelText}</label>
    <input type="text"  name="nome" required/>


    <label htmlFor={props.id}>{props.labelText2}</label>
    <input type="email"  name="email" required/>

   
    <button  type="submit">{props.btnText}</button>
    </div>
</>
)
export default Main;
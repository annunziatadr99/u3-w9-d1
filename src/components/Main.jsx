const Main = props =>(
    
    <>
    <div>
        <h2>
            Completa il Form e dicci cosa possiamo migliorare, il tuo parere per noi è fondamentale
        </h2>
    </div>


    <form action="form" method="post">

    <label htmlFor="nome">Nome:</label>
    <input type="text"  name="nome" required/>


    <label htmlFor="email">Email:</label>
    <input type="email"  name="email" required/>

   
    <button  type="submit">Invia</button>
</form>
</>
)
export default Main;
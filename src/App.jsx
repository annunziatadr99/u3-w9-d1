// area degli import, possiamo importare file presenri nella cartella src o altri componenti
// import di foto che generano una  variabile chiamata "logo" 


// l'import del css viene semplicemente caricato come css globale
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Main from './components/Main';
// quindi questo file (app.jsx) è il nostro file principale per importare React components
// qui sotto gia avremo il nostro primo componente

//JSX è una sintassi simil HTML che permettere di inserire codice dinamico (JS) direttamente in quello che sembra HTML e ci permetterà di combinare struttura e logica insieme
// principali differenze con HTML:
// - class diventa className (per evitare conflitti)
// tutti i tag hanno bisogn della chiusura </img> / </p>
// l'attributo del laber FOR diventa htmlFor

// tutto quello che è un valore STINGA in JSX ha bisogno delle parentesi graffe {}
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <Main/>
    </div>
  );
}

export default App;

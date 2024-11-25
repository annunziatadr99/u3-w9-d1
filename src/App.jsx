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
      <NavBar Logo="https://banner2.cleanpng.com/20180323/jze/av0kb33vl.webp" href="https://www.google.it/?hl=it" textHref="Home" href1="https://www.youtube.com/" textHref1="Contact" href2="https://www.instagram.com/" textHref2="About" href3="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F%3Flocale%3Dit_IT%26refsrc%3Ddeprecated" textHref3="Privacy"/>

      <Header textH1="Questo è il nostro miglior Prodotto!" UrlImg="https://www.winelivery.com/_next/image?url=https%3A%2F%2Fcdn.winelivery.com%2Fpublic%2Fproducts%2Fimages%2F65c1f0bb90f19620fad10cd8.jpeg&w=3840&q=75" descrizioneImg="La mia immagine" textparag="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, beatae iure culpa sunt alias sequi? Quo, tenetur facere aperiam quia beatae quidem sint rem est neque repudiandae dolorum in! Mollitia!
  Aperiam expedita ullam natus harum, amet rerum, ex sequi quaerat nihil, esse saepe dolores cumque deserunt maxime sint adipisci rem nostrum neque quo possimus officiis soluta ipsum. Unde, sint possimus.
  Sed amet voluptatum vel tempora asperiores vero veritatis delectus esse blanditiis dolores ex ipsam fugit illum enim, mollitia earum veniam iure odio fuga aliquid, culpa quasi ullam aliquam. Fugit, doloribus."/>

      <Main id="name" labelText="Nome" labelText2="Email" type="submit" btnText="Conferma" textH2="Completa il Form e dicci cosa possiamo migliorare, il tuo parere per noi è fondamentale"/>
    </div>
  );
}

export default App;

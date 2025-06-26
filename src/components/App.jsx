import Nav from "../components/Nav.jsx";
import Main from "../components/Main.jsx";
import About from "../components/About.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <>
      <Nav />  
      <Main />
      <section id="projects" className="min-h-screen"> {<About />} </section>
      <section id="contact" className="min-h-screen"> {<Contact />} </section>
    </>
  );
}

export default App;

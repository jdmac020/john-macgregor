import './App.css';
import functions from './appFunctions';
import logo from '../../images/BlackLogoNoBackground.png'

const logoAlt = 'A solid black wizard holding a staff in one hand and summoning an object with the other above the name John MacGregor and the slogan "build with magic"';
const footerText = functions.footerText();
const headerText = functions.headerText();

function App() {
  return (
      <div className='app-grid-container'>
        <header>{headerText}</header>
        <main>
          <img src={logo} alt={logoAlt}/>
          <h2>Hello World</h2>
          <p>This will soon be the space to learn all about a certain software developer named John MacGregor.</p>
          <p>Till then, just enjoy things.</p>
        </main>
        <footer>&copy; {footerText}</footer>
      </div>
  );
}

export default App;

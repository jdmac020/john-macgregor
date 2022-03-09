import './app.css';
import Home from '../home/home';
import functions from './appFunctions';
import About from '../about/about';

const footerText = functions.footerText();
const headerText = functions.headerText();

function App() {
  return (
      <div className='app-grid-container'>
        <div className='left-gutter'></div>
        <header>{headerText}</header>
        <main>
          {/* <Home/> */}
          <About/>
        </main>
        <footer>&copy; {footerText}</footer>
        <div className='right-gutter'></div>
      </div>
  );
}

export default App;

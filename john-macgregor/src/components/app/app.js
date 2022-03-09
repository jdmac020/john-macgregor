import { Link } from 'react-router-dom';
import './app.css';
import functions from './appFunctions';

const footerText = functions.footerText();

function App({ child }) {
  return (
      <div className='app-grid-container'>
        <div className='left-gutter'></div>
        <header>
          <Link to='/'>Home</Link> - <Link to='/about'>About</Link>
        </header>
        <main>
          {child}
        </main>
        <footer>&copy; {footerText}</footer>
        <div className='right-gutter'></div>
      </div>
  );
}

export default App;

import { Link } from 'react-router-dom';
import './app.css';

const year = new Date().getFullYear();

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
        <footer>&copy; {year} <a href='mailto:john.macgregor@john-macgregor.dev'>Johnathan MacGregor</a></footer>
        <div className='right-gutter'></div>
      </div>
  );
}

export default App;

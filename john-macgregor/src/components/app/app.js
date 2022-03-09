import './app.css';
import functions from './appFunctions';

const footerText = functions.footerText();
const headerText = functions.headerText();

function App({ child }) {
  return (
      <div className='app-grid-container'>
        <div className='left-gutter'></div>
        <header>{headerText}</header>
        <main>
          {child}
        </main>
        <footer>&copy; {footerText}</footer>
        <div className='right-gutter'></div>
      </div>
  );
}

export default App;

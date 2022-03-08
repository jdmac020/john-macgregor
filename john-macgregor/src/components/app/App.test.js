import { render, screen } from '@testing-library/react';
import App from './App';
import functions from './appFunctions';

const year = new Date().getFullYear();

describe('component tests', () => {
  test('renders logo image', () => {
    render(<App />);
    const logoImage = screen.getByAltText('A solid black wizard holding a staff in one hand and summoning an object with the other above the name John MacGregor and the slogan "build with magic"');
    expect(logoImage).toBeInTheDocument();
    expect(logoImage.getAttribute('src')).toBe('BlackLogoNoBackground.png');
  });
})

describe('appFunctions', () => {
  test('getFooterText', () => {
    const text = functions.footerText();
    text.includes(year);
    text.includes('Johnathan MacGregor');
    text.includes('&copy;');
  });
})

import { render, screen } from '@testing-library/react';
import App from './app';
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
  test('get footer text', () => {
    const text = functions.footerText();
    expect(text.includes(year)).toBe(true);
    expect(text.includes('Johnathan MacGregor')).toBe(true);
  });

  test('get header text', () => {
    const text = functions.headerText();
    expect(text.includes('Home')).toBe(true);
  });
})

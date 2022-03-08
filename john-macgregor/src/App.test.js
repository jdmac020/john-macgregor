import { render, screen } from '@testing-library/react';
import App from './App';

test('renders logo image', () => {
  render(<App />);
  const logoImage = screen.getByAltText('A solid black wizard holding a staff in one hand and summoning an object with the other above the name John MacGregor and the slogan "build with magic"');
  expect(logoImage).toBeInTheDocument();
  expect(logoImage.getAttribute('src')).toBe('BlackLogoNoBackground.png');
});

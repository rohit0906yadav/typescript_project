import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('pokemon project testing',()=>{
  test('renders heading and button', () => {
    render(<App />);
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
  
    const loadMoreButton = screen.getByRole('button',{name:'Load More'})
    expect(loadMoreButton).toBeInTheDocument();
  });

  test('render api calling',()=>{
    
  });
  
})
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import App from './App';
import Departments from './components/Departments';
import Pieces from './components/Pieces';
import store from './redux/configureStore';

describe('it tests the Home Component (Departments)', () => {
  it('renders the Component', () => {
    render(<Provider store={store}><App /></Provider>);
    const appComponent = screen.getByTestId('app-1');
    expect(appComponent).toBeInTheDocument();
  });

  it('renders the search department input', () => {
    render(<Provider store={store}><Departments /></Provider>);
    const searchInputDepartment = screen.getByTestId('search-1');
    expect(searchInputDepartment).toBeInTheDocument();
  });

  it('renders the search pieces input', () => {
    render(<BrowserRouter><Provider store={store}><Pieces /></Provider></BrowserRouter>);
    const searchInput = screen.getByTestId('search-2');
    expect(searchInput).toBeInTheDocument();
  });
});

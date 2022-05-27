import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import App from './App';
import Department from './components/Department';
import Departments from './components/Departments';
import Pieces from './components/Pieces';
import { createMemoryHistory } from 'history';
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

  it('renders the search pieces input', async () => {
    render(<Provider store={store}><Pieces /></Provider>);
    const searchInput = await screen.getByTestId('search-2');
    await waitFor(() => {
      expect(searchInput).toBeInTheDocument();
    });
  });

  it('Validates that when departments is rendered data is loaded', () => {
    const depData={'id': '1', 'name': 'Test', 'imageUrl': 'url', 'count': '100'}
    render(<Provider store={store}><Department depData /></Provider>);
    const departmentContainer = screen.getByTestId('container-a');
    const departmentsCount = departmentContainer.children.length;
    expect(departmentsCount).toBeGreaterThan(0);
  });

  it('Validates that department search input is filtering data', () => {
    render(<Provider store={store}><App /></Provider>);
    const searchInputDepartment = screen.getByTestId('search-1');
    const departmentContainer = screen.getByTestId('container-a');
    const beforeCount = departmentContainer.children.length;
    searchInputDepartment.value = "Art";
    fireEvent.change(searchInputDepartment);
    const afterCount = departmentContainer.children.length;
    expect(afterCount).toBeLessThan(beforeCount);
  });

  it('When user selects the first department, application navigates to pieces page', () => {
    render(<Provider store={store}><App /></Provider>);
    const history = createMemoryHistory();
    const departmentContainer = screen.getByTestId('container-a');
    const departmentButton = departmentContainer.childNodes[0][0];
    const id = departmentButton.id;
    fireEvent.click(departmentButton);
    const destinationUrl = `/pieces/id:${id}`;
    expect(history.location.pathname).toBe(destinationUrl);

  });

  it('When user selects the first department, the pieces page is loaded', () => {
    render(<Provider store={store}><App /></Provider>);
    const departmentContainer = screen.getByTestId('container-a');
    const firstElement = departmentContainer.childNodes[0];
    const departmentButton = firstElement.childNodes[0];
    const id = departmentButton.childNodes[0].id;
    fireEvent.click(departmentButton);
    const piecestContainer = screen.getByTestId('container-b');
    expect(piecestContainer).toBeInTheDocument();
  });

  it('When user selects the first department, the pieces page contains search input', () => {
    render(<Provider store={store}><App /></Provider>);
    const departmentContainer = screen.getByTestId('container-a');
    const firstElement = departmentContainer.childNodes[0];
    const departmentButton = firstElement.childNodes[0];
    const id = departmentButton.childNodes[0].id;
    fireEvent.click(departmentButton);
    const searchInputPieces = screen.getByTestId('search-2');
    expect(searchInputPieces).toBeInTheDocument();
  });
});

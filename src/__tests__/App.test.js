import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../redux/store';

describe('Test Router behaviour', () => {
  it('When Dragons in navbar is clicked, it renders the Dragons Section', () => {
    // ARRANGE

    const { container } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    // ACT
    const dragonsLink = screen.getByText('Dragons');
    fireEvent.click(dragonsLink);

    // ASSERT
    const body = container.querySelector('body');
    expect(body).toMatchSnapshot();
  });
});

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Dragon from '../components/Dragon';

// ARRANGE
const dragons = [
  {
    id: 'dragon 5',
    name: 'dragonite',
    type: 'big capsule',
    description: 'ready to go to space',
    reserved: false,
  },
];

describe('Test render the Dragon Component', () => {
  it('Dragons section renders a hardcoded object, passed as a prop', () => {
    // ACT
    const { container } = render(
      <Provider store={store}>
        <Dragon key={dragons[0].id} dragon={dragons[0]} />
      </Provider>,
    );

    // ASSERT
    expect(container).toMatchSnapshot();
  });
});

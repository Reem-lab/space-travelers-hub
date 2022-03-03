/* eslint-disable no-unused-vars */
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import Rockets from '../components/Rockets';
import store from '../redux/store';

describe('Test the Rockets list', () => {
  it('renders correctly', () => {
    const rocket = [
      {
        id: '12',
        rocket_name: 'falcony',
        description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth',
      },
    ];

    const { container } = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    const message = screen.getByText('No Rockets Found ❗❕');
    expect(message).toMatchSnapshot();
  });
});

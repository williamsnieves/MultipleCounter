import {Counter} from '../src/Counter';
import {render, screen} from '@testing-library/react-native';

test('Counter contents initial value 0 and increment the value', () => {
  const dummyData = {
    id: 1,
    value: 0,
    increment: jest.fn(),
    decrement: jest.fn(),
  };
  render(<Counter {...dummyData} />);
  expect(screen.getByText('0')).toBeDefined();
  render(<Counter {...{...dummyData, value: 1}} />);
  expect(screen.getByText('1')).toBeDefined();
});

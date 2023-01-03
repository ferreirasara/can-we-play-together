import renderer from 'react-test-renderer';
import Root from '../root/Root';

it('renders correctly', () => {
  const filters = renderer
    .create(<Root />)
    .toJSON();
  expect(filters).toMatchSnapshot();
});
import renderer from 'react-test-renderer';
import SearchForm from '../SearchForm';

it('renders correctly', () => {
  const filters = renderer
    .create(<SearchForm handleSubmit={() => { }} loading={false} />)
    .toJSON();
  expect(filters).toMatchSnapshot();
});
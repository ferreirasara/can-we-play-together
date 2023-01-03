import renderer from 'react-test-renderer';
import InfoModal from '../InfoModal';

it('renders correctly', () => {
  const filters = renderer
    .create(<InfoModal size='small' />)
    .toJSON();
  expect(filters).toMatchSnapshot();
});
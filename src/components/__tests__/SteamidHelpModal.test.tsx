import renderer from 'react-test-renderer';
import SteamidHelpModal from '../SteamidHelpModal';

it('renders correctly', () => {
  const filters = renderer
    .create(<SteamidHelpModal />)
    .toJSON();
  expect(filters).toMatchSnapshot();
});
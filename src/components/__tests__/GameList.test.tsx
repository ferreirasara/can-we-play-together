import renderer from 'react-test-renderer';
import GameList from '../GameList';

it('renders correctly', () => {
  const header_image = 'https://cdn.akamai.steamstatic.com/steam/apps/246620/header.jpg?t=1663763693'
  const filters = renderer
    .create(
      <GameList
        games={[
          { appid: 1, categories: ['tag1', 'tag2'], header_image, name: 'Game for test 1' },
          { appid: 2, categories: ['tag1', 'tag2'], header_image, name: 'Game for test 2' },
          { appid: 3, categories: ['tag1', 'tag2'], header_image, name: 'Game for test 3' },
        ]}
      />
    ).toJSON();
  expect(filters).toMatchSnapshot();
});
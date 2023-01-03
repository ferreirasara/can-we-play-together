import renderer from 'react-test-renderer';
import GameCard from '../GameCard';

it('renders correctly', () => {
  const filters = renderer
    .create(
      <GameCard
        appid={0}
        imageUrl={'https://cdn.akamai.steamstatic.com/steam/apps/246620/header.jpg?t=1663763693'}
        tags={['tag1', 'tag2', 'tag3']}
        title={'Game for test'}
        key={'game_test'}
      />
    ).toJSON();
  expect(filters).toMatchSnapshot();
});
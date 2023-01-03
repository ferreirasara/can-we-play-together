import renderer from 'react-test-renderer';
import GithubLink from '../GithubLink';

it('renders correctly', () => {
  const filters = renderer
    .create(<GithubLink />)
    .toJSON();
  expect(filters).toMatchSnapshot();
});
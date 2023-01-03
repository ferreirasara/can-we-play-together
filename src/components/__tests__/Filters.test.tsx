import renderer from 'react-test-renderer';
import Filters from '../Filters';

it('renders correctly', () => {
  const filters = renderer
    .create(
      <Filters
        tags={['tag1', 'tag2', 'tag3', 'tag4']}
        handleCleanFilters={() => { }}
        handleSelectCategory={() => { }}
        selectedCategories={['tag1']}
      />
    ).toJSON();
  expect(filters).toMatchSnapshot();
});
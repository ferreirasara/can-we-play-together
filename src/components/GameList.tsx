import { Alert, Box } from "@mui/material";
import { GameDetails } from "../services/player";
import GameCard from "./GameCard";
import { uniq, flatten } from 'lodash';
import Filters from "./Filters";
import { useMemo, useState } from "react";
import { amplitudeEvent } from "../utils/utils";

type GameListProps = {
  games?: GameDetails[]
}
export default function GameList({ games }: GameListProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const tags = uniq(flatten(games?.map(game => game?.categories)));

  const handleSelectCategory = (category: string, selected: boolean) => {
    amplitudeEvent('Select/deselect category', { category })
    if (selected) {
      setSelectedCategories([...selectedCategories?.filter(cur => cur !== category)])
    } else {
      setSelectedCategories(uniq([...selectedCategories, category]))
    }
  }

  const filteredGames = useMemo(() => {
    if (selectedCategories?.length) {
      return games?.filter(game => selectedCategories?.every(cur => game?.categories?.includes(cur)))
    } else {
      return games;
    }
  }, [games, selectedCategories])

  const foundedGames: number = filteredGames?.length || 0;
  const foundedGamesMessage = `Found ${foundedGames} game${foundedGames > 1 ? 's' : ''}${selectedCategories?.length ? ' for this filters' : ''}!`

  return (
    <>
      <Filters
        tags={tags}
        handleSelectCategory={handleSelectCategory}
        handleCleanFilters={() => setSelectedCategories([])}
        selectedCategories={selectedCategories}
      />
      <Box
        p={1}
        sx={{
          maxHeight: '50vh',
          overflowY: 'auto',
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          rowGap={2}
          px={1}
        >
          {filteredGames?.length
            ? <Alert severity="success" sx={{ width: '100%' }}>{foundedGamesMessage}</Alert>
            : <Alert severity="warning" sx={{ width: '100%' }}>Found 0 games for this filters :(</Alert>}
          {filteredGames?.map(game =>
            <GameCard
              title={game?.name}
              imageUrl={game?.header_image}
              tags={game?.categories}
              appid={game?.appid}
            />
          )}
        </Box>
      </Box>
    </>
  )
}
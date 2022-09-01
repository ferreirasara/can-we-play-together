import { Box } from "@mui/material";
import { GameDetails } from "../services/player";
import GameCard from "./GameCard";
import { uniq, flatten, intersection } from 'lodash';
import Filters from "./Filters";
import { useEffect, useMemo, useState } from "react";

type GameListProps = {
  games?: GameDetails[]
}
export default function GameList({ games }: GameListProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const tags = uniq(flatten(games?.map(game => game?.categories)));

  const handleSelectCategory = (category: string, selected: boolean) => {
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

  return (
    <>
      <Filters
        tags={tags}
        handleSelectCategory={handleSelectCategory}
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
        >
          {filteredGames?.map(game =>
            <GameCard
              title={game?.name}
              imageUrl={game?.header_image}
              description={game?.short_description}
              tags={game?.categories}
            />
          )}
        </Box>
      </Box>
    </>
  )
}
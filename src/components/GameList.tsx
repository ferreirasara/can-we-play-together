import { Box } from "@mui/material";
import GameCard from "./GameCard";

export default function GameList() {
  return (
    <Box
      sx={{
        padding: { xs: 1, sm: 2 },
        maxHeight: '60vh',
        overflowY: 'auto',
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <GameCard
          title="Guild Wars 2"
          imageUrl="https://cdn.cloudflare.steamstatic.com/steam/apps/1284210/header.jpg?t=1661291821"
          tags={[
            "MMORPG",
            "Adventure",
            "RPG",
            "Fantasy",
            "3D",
          ]}
        />
      </Box>
    </Box>
  )
}
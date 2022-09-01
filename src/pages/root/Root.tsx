import { Box, Paper, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import GameList from "../../components/GameList";
import SearchForm from "../../components/SearchForm";
import { GameDetails, getPlayerOwnedGames } from "../../services/player";

export default function Root() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  const [loading, setLoading] = useState<boolean>(false);
  const [userId1, setUserId1] = useState<string>();
  const [userId2, setUserId2] = useState<string>();
  const [games, setGames] = useState<GameDetails[]>();

  const handleClick = async () => {
    setLoading(true);
    try {
      const games = await getPlayerOwnedGames(userId1 || '', userId2 || '');
      setGames(games);
    } catch (error: any) {
      console.log(error);
    }
    setLoading(false);
  }

  return (
    <Box
      height='100vh'
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Paper
        elevation={0}
        sx={{
          borderRadius: '16px',
          maxWidth: 700,
          maxHeight: isDesktop ? 'auto' : '90%',
          display: 'flex',
          flexDirection: 'column',
          my: isDesktop ? 12 : 0,
          p: 2,
        }}
      >
        <SearchForm
          handleClick={handleClick}
          loading={loading}
          onChangeUserId1={(value) => setUserId1(value)}
          onChangeUserId2={(value) => setUserId2(value)}
        />
        <GameList games={games} />
      </Paper>
    </Box >
  );
}

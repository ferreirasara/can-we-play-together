import { Alert, Box, Link, Paper, Snackbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import GameList from "../../components/GameList";
import SearchForm from "../../components/SearchForm";
import { GameDetails, getPlayerOwnedGames } from "../../services/player";

export default function Root() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  const [loading, setLoading] = useState<boolean>(false);
  const [games, setGames] = useState<GameDetails[]>();
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>('');

  const handleClick = async (userId1: string, userId2: string) => {
    setGames([]);
    setLoading(true);
    try {
      const games = await getPlayerOwnedGames(userId1 || '', userId2 || '');

      if (!games?.success) {
        setSnackbarOpen(true);
        setSnackbarMessage(games?.message || 'An error occurred.');
      } else {
        setGames(games?.gamesInCommon);
      }
    } catch (error: any) {
      console.log(error);
      setSnackbarOpen(true);
      setSnackbarMessage(error?.message);
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
          maxHeight: isDesktop ? 'auto' : '85%',
          display: 'flex',
          flexDirection: 'column',
          my: isDesktop ? 12 : 0,
          p: 2,
        }}
      >
        <SearchForm
          handleClick={handleClick}
          loading={loading}
        />
        {games?.length ? <GameList games={games} /> : null}
      </Paper>
      <Box
        position="absolute"
        bottom={5}
      >
        <Typography color="#FFF">
          Developed by <Link underline="none" target="_blank" rel="noopener" href="https://github.com/ferreirasara">Sara Ferreira</Link>
        </Typography>
      </Box>
      <Snackbar
        anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="error"
          variant="filled"
          sx={{ maxWidth: '100%' }}
        >
          <Typography>{snackbarMessage}</Typography>
        </Alert>
      </Snackbar>
    </Box >
  );
}

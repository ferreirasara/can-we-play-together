import { Box, Paper, useMediaQuery, useTheme } from "@mui/material";
import GameList from "../../components/GameList";
import SearchForm from "../../components/SearchForm";

export default function Root() {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))

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
        }}
      >
        <SearchForm />
        <GameList />
      </Paper>
    </Box >
  );
}

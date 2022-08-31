import { Box, Button, TextField } from "@mui/material";

export default function SearchForm() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={2}
      p={2}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={2}
      >
        <TextField fullWidth id="user1" label="Username 1" variant="outlined" />
        <TextField fullWidth id="user2" label="Username 2" variant="outlined" />
      </Box>
      <Button fullWidth variant="contained" size="large">Search</Button>
    </Box >
  );
}

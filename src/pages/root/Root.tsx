import { Box, Container, TextField } from "@mui/material";

export default function Root() {
  return (
    <Box sx={{ bgcolor: '#212121', height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <TextField id="user1" label="Username 1" variant="outlined" />
      <TextField id="user2" label="Username 2" variant="outlined" />
    </Box>
  )
}
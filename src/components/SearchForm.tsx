import { LoadingButton } from "@mui/lab";
import { Alert, Box, CircularProgress, TextField, Typography } from "@mui/material";
import { useState } from "react";
import SteamidHelpModalButton from "./SteamidHelpModal";

type SearchFormProps = {
  handleSubmit: (userId1: string, userId2: string) => void
  loading: boolean
}
export default function SearchForm({
  handleSubmit,
  loading,
}: SearchFormProps) {
  const [userId1, setUserId1] = useState<string>();
  const [userId2, setUserId2] = useState<string>();
  const [error, setError] = useState<string>();
  const [errorAlertVisible, setErrorAlertVisible] = useState<boolean>(false);

  const handleButtonClick = () => {
    if (!userId1 || !userId2) {
      setErrorAlertVisible(true);
      setError('You must fill both fields.')
    } else if (userId1 === userId2) {
      setErrorAlertVisible(true);
      setError('The usernames must be different.');
    } else {
      setErrorAlertVisible(false);
      handleSubmit(userId1, userId2);
    }
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={2}
      p={1}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={2}
      >
        <TextField
          disabled={loading}
          fullWidth
          id="user1"
          label="Your username"
          variant="outlined"
          required
          error={!!(error && !userId1)}
          onChange={(value) => setUserId1(value?.currentTarget?.value)}
        />
        <TextField
          disabled={loading}
          fullWidth
          id="user2"
          label="Your friend's username"
          variant="outlined"
          required
          error={!!(error && !userId2)}
          onChange={(value) => setUserId2(value?.currentTarget?.value)}
        />
      </Box>
      <SteamidHelpModalButton />
      {errorAlertVisible ? <Alert onClose={() => setErrorAlertVisible(false)} severity="error">{error}</Alert> : null}
      <LoadingButton
        type="submit"
        loading={loading}
        loadingIndicator={
          <Box display="flex" alignItems="center" gap={1}>
            <CircularProgress size={15} />
            <Typography>Analyzing...</Typography>
          </Box>
        }
        fullWidth
        variant="contained"
        size="large"
        onClick={handleButtonClick}
      >
        Can we play together?
      </LoadingButton>
    </Box >
  );
}

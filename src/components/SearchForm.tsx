import { LoadingButton } from "@mui/lab";
import { Box, TextField } from "@mui/material";
import { useState } from "react";

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

  return (
    <Box
      display="flex"
      flexDirection="column"
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
          label="Your steamid"
          variant="outlined"
          required
          error={!!(error && !userId1)}
          helperText={(!userId1 && error) || ""}
          onChange={(value) => setUserId1(value?.currentTarget?.value)}
        />
        <TextField
          disabled={loading}
          fullWidth
          id="user2"
          label="Your friend's steamid"
          variant="outlined"
          required
          error={!!(error && !userId2)}
          helperText={(!userId2 && error) || ""}
          onChange={(value) => setUserId2(value?.currentTarget?.value)}
        />
      </Box>
      <LoadingButton
        type="submit"
        loading={loading}
        loadingIndicator="Analyzing..."
        fullWidth
        variant="contained"
        size="large"
        onClick={() => {
          if (!userId1 || !userId2) {
            setError('You must fill this field.')
          } else {
            handleSubmit(userId1, userId2)
          }
        }}
      >
        Can we play together?
      </LoadingButton>
    </Box >
  );
}

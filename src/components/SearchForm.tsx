import { LoadingButton } from "@mui/lab";
import { Box, TextField } from "@mui/material";

type SearchFormProps = {
  handleClick: () => void
  loading: boolean
  onChangeUserId1: (value: string) => void
  onChangeUserId2: (value: string) => void
}
export default function SearchForm({
  handleClick,
  loading,
  onChangeUserId1,
  onChangeUserId2,
}: SearchFormProps) {
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
          label="Username 1"
          variant="outlined"
          onChange={(value) => onChangeUserId1(value?.currentTarget?.value)}
        />
        <TextField
          disabled={loading}
          fullWidth
          id="user2"
          label="Username 2"
          variant="outlined"
          onChange={(value) => onChangeUserId2(value?.currentTarget?.value)}
        />
      </Box>
      <LoadingButton
        loading={loading}
        fullWidth
        variant="contained"
        size="large"
        onClick={handleClick}
      >
        Search
      </LoadingButton>
    </Box >
  );
}

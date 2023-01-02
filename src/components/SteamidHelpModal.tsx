import CloseIcon from '@mui/icons-material/Close';
import { Box, Dialog, DialogContent, DialogTitle, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import { amplitudeEvent } from '../utils/utils';

type SteamidHelpModalTitleProps = {
  onClose: () => void
}
function SteamidHelpModalTitle({ onClose }: SteamidHelpModalTitleProps) {
  return (
    <DialogTitle sx={{ m: 0, p: 2 }}>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        gap={1}
      >
        <Typography variant="h5">How to find my steamid?</Typography>
        <IconButton aria-label="close" onClick={onClose}        >
          <CloseIcon />
        </IconButton>
      </Box>
    </DialogTitle>
  )
}

function SteamidHelpModalContent() {
  return (
    <DialogContent sx={{ p: 2 }} >
      <p>
        <Typography>If you have a custom URL, you can use this name here. If not, follow the instructions below:</Typography>
      </p>
      <p>
        <ol>
          <li><Typography variant="body2">Open the Steam application and log in.</Typography></li>
          <li><Typography variant="body2">Open your profile by clicking the button at the top of the screen — <i>it's your profile name in big letters</i>.</Typography></li>
          <li><Typography variant="body2">You should see a URL appear below the button.Your Steam ID is the long string of numbers in that URL.</Typography></li>
          <li><Typography variant="body2">If you don't see it, open the steam settings.</Typography></li>
          <li><Typography variant="body2">In the menu that opens, click <i>"Interface"</i> in the left sidebar.</Typography></li>
          <li><Typography variant="body2">Check the box labeled <i>"Display Steam URL address bar when available."</i></Typography></li>
          <li><Typography variant="body2">Click <i>"OK"</i>, and then go to your profile again.</Typography></li>
          <li><Typography variant="body2">The long number at the end of the URL — <i>which should now appear</i> — is your Steam ID.</Typography></li>
        </ol>
      </p>
      <p>
        <Typography>Supported types:</Typography>
      </p>
      <p>
        <ul>
          <li><Typography variant="button">steamID</Typography></li>
          <li><Typography variant="button">steamID3</Typography></li>
          <li><Typography variant="button">steamID64 (Dec)</Typography></li>
          <li><Typography variant="button">steamID64 (Hex)</Typography></li>
        </ul>
      </p>
    </DialogContent>
  )
}

type SteamidHelpModalProps = {
  steamidHelpModalOpen: boolean
  onClose: () => void
}
function SteamidHelpModal({ steamidHelpModalOpen, onClose }: SteamidHelpModalProps) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog
      fullScreen={fullScreen}
      onClose={onClose}
      open={steamidHelpModalOpen}
      PaperProps={{ sx: { borderRadius: '16px' } }}
    >
      <SteamidHelpModalTitle onClose={onClose} />
      <SteamidHelpModalContent />
    </Dialog>
  )
}

export default function SteamidHelpModalButton() {
  const [steamidHelpModalOpen, setSteamidHelpModalOpen] = useState<boolean>(false);

  return (
    <>
      <Typography
        variant="caption"
        onClick={() => {
          setSteamidHelpModalOpen(true)
          amplitudeEvent('Steamid help modal')
        }}
        sx={{
          cursor: "pointer",
          color: "#1976d2"
        }}
      >
        How can I find my steamid?
      </Typography>
      <SteamidHelpModal
        steamidHelpModalOpen={steamidHelpModalOpen}
        onClose={() => setSteamidHelpModalOpen(false)}
      />
    </>
  )
}
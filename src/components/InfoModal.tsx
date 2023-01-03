import { GitHub, InfoOutlined } from "@mui/icons-material";
import CloseIcon from '@mui/icons-material/Close';
import { Avatar, Box, Dialog, DialogContent, DialogTitle, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import { amplitudeEvent, openLink } from "../utils/utils";
import StarOutlineIcon from '@mui/icons-material/StarOutline';

type InfoModalTitleProps = {
  onClose: () => void
}
function InfoModalTitle({ onClose }: InfoModalTitleProps) {
  return (
    <DialogTitle sx={{ m: 0, p: 2 }}>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        gap={1}
      >
        <Typography variant="h5">Info about Can We Play Together</Typography>
        <IconButton aria-label="close" onClick={onClose}        >
          <CloseIcon />
        </IconButton>
      </Box>
    </DialogTitle>
  )
}

type InfoListItemProps = {
  icon: React.ReactNode
  link: string
  primaryText: string
  secondaryText: string
  onClick: () => void,
}
function InfoListItem({ icon, link, primaryText, secondaryText, onClick }: InfoListItemProps) {
  const listIemStyle = {
    borderRadius: '16px',
    '&:hover': {
      backgroundColor: '#454545',
      cursor: "pointer"
    },
  }

  return (
    <ListItem
      sx={listIemStyle}
      onClick={() => {
        openLink(link)
        onClick()
      }}
    >
      <ListItemAvatar>
        <Avatar>
          {icon}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={primaryText}
        secondary={secondaryText}
      />
    </ListItem>
  )
}

function InfoModalContent() {
  return (
    <DialogContent sx={{ p: 2 }} >
      <List>
        <InfoListItem
          icon={<GitHub />}
          link='https://github.com/ferreirasara/can-we-play-together'
          primaryText="Frontend Repo"
          secondaryText="ferreirasara/can-we-play-together"
          onClick={() => amplitudeEvent('Frontend github link')}
        />
        <InfoListItem
          icon={<GitHub />}
          link='https://github.com/ferreirasara/can-we-play-together'
          primaryText="Backend Repo"
          secondaryText="ferreirasara/can-we-play-together-api"
          onClick={() => amplitudeEvent('Backend github link')}
        />
        <InfoListItem
          icon={<StarOutlineIcon />}
          link='https://freeicons.io/profile/103766'
          primaryText="Favicon"
          secondaryText="Icon by Satawat Foto Anukul on freeicons.io"
          onClick={() => amplitudeEvent('Favicon link')}
        />
      </List>
    </DialogContent>
  )
}

type InfoModalProps = {
  infoModalOpen: boolean
  onClose: () => void
}
function InfoModal({ infoModalOpen, onClose }: InfoModalProps) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog
      fullScreen={fullScreen}
      onClose={onClose}
      open={infoModalOpen}
      PaperProps={{ sx: { borderRadius: '16px' } }}
    >
      <InfoModalTitle onClose={onClose} />
      <InfoModalContent />
    </Dialog>
  )
}

type InfoModalButtonProps = {
  size: "small" | "medium" | "large"
}
export default function InfoModalButton({ size }: InfoModalButtonProps) {
  const [infoModalOpen, setInfoModalOpen] = useState<boolean>(false);

  return (
    <>
      <IconButton
        size={size}
        onClick={() => {
          setInfoModalOpen(true)
          amplitudeEvent('Open info modal');
        }}
      >
        <InfoOutlined />
      </IconButton>
      <InfoModal
        infoModalOpen={infoModalOpen}
        onClose={() => setInfoModalOpen(false)}
      />
    </>
  )
}
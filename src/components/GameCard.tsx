import { Card, Box, CardContent, Typography, CardMedia, useTheme, Chip, useMediaQuery } from "@mui/material";

type GameTitleProps = {
  title: string
}
function GameTitle({ title }: GameTitleProps) {
  return (
    <CardContent>
      <Typography variant="h5">{title}</Typography>
    </CardContent>
  )
}

type GameTagsProps = {
  tags: string[]
}
function GameTags({ tags }: GameTagsProps) {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      gap={1}
      p={1}
    >
      {tags?.map(tag => <Chip label={tag} />)}
    </Box>
  )
}

type GameImageProps = {
  imageUrl: string
}
function GameImage({ imageUrl }: GameImageProps) {
  return (
    <CardMedia
      component="img"
      sx={{ height: 151 }}
      image={imageUrl}
    />
  )
}

export type GameCardProps = {
  title: string
  imageUrl: string
  tags: string[]
}
export default function GameCard({ imageUrl, tags, title }: GameCardProps) {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <Card sx={{ display: 'flex', flexDirection: isDesktop ? 'row' : 'column-reverse' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <GameTitle title={title} />
        <GameTags tags={tags} />
      </Box>
      <GameImage imageUrl={imageUrl} />
    </Card>
  )
}
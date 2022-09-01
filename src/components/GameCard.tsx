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
      {tags?.map((tag, index) => <Chip label={tag} key={index} />)}
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
      sx={{ height: 215 * 0.7, width: 460 * 0.7 }}
      image={imageUrl}
    />
  )
}

export type GameCardProps = {
  title: string
  imageUrl: string
  tags: string[]
  description: string
}
export default function GameCard({ imageUrl, tags, title, description }: GameCardProps) {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <Card sx={{
      display: 'flex',
      flexDirection: isDesktop ? 'row' : 'column-reverse',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      p: 1,
    }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <GameTitle title={title} />
        <GameTags tags={tags} />
      </Box>
      <GameImage imageUrl={imageUrl} />
    </Card>
  )
}
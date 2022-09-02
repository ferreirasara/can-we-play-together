import { Card, Box, CardContent, Typography, CardMedia, useTheme, Chip, useMediaQuery, Link } from "@mui/material";

type GameTitleProps = {
  appId: number
  title: string
}
function GameTitle({ appId, title }: GameTitleProps) {
  return (
    <CardContent>
      <Typography variant="h5">
        <Link color="#FFF" href={`https://store.steampowered.com/app/${appId}`} underline="none" target="_blank" rel="noopener">
          {title}
        </Link>
      </Typography>
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
  appId: number
  title: string
  imageUrl: string
  tags: string[]
  description: string
}
export default function GameCard({ imageUrl, tags, title, description, appId }: GameCardProps) {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: isDesktop ? 'row' : 'column-reverse',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        p: 1,
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <GameTitle title={title} appId={appId} />
        <GameTags tags={tags} />
      </Box>
      <GameImage imageUrl={imageUrl} />
    </Card>
  )
}
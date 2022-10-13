export const getGameUrl = (appid: number): string => {
  return `https://store.steampowered.com/app/${appid}`
}

export const openLink = (link: string): void => {
  window.open(link, "_blank")
}
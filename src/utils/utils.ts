export const getGameUrl = (appId: number): string => {
  return `https://store.steampowered.com/app/${appId}`
}

export const openLink = (link: string): void => {
  window.open(link, "_blank")
}
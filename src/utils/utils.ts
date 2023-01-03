import * as amplitude from '@amplitude/analytics-browser';

export const amplitudeEvent = (eventName: string, eventProperties?: Record<string, any>) => {
  if (!process.env.REACT_APP_AMPLITUDE_ID) return;
  amplitude.init(process.env.REACT_APP_AMPLITUDE_ID);
  amplitude.track(eventName, eventProperties);
}

export const getGameUrl = (appid: number): string => {
  return `https://store.steampowered.com/app/${appid}`
}

export const openLink = (link: string): void => {
  window.open(link, "_blank")
}


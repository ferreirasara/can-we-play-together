import axios from "axios";

export type Response = {
  success: boolean
  gamesInCommon?: GameDetails[]
  message?: string
}

export type GameDetails = {
  appId: number,
  name: string,
  short_description: string,
  categories: string[]
  header_image: string,
  genres: string[],
}

const baseUrl = process.env.NODE_ENV === 'production'
  ? 'https://can-we-play-together.onrender.com/gamesInCommon'
  : 'http://localhost:8080/gamesInCommon'

export const getPlayerOwnedGames = async (userId1: string, userId2: string): Promise<Response> => {
  try {
    const response = await axios.get(`${baseUrl}/${userId1}/${userId2}`);
    const data: Response = response?.data;

    return data;
  } catch (error: any) {
    if (error?.response) {
      console.log(`[getPlayerOwnedGames] ${error?.response?.data?.message}`);
      return {
        success: false,
        message: error?.response?.data?.message,
      };
    } else {
      console.log(`[getPlayerOwnedGames] ${error?.message}`);
      return {
        success: false,
        message: error?.message,
      };
    }
  }
}
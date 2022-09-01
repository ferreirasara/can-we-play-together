import axios from "axios";

export type GameDetails = {
  name: string,
  short_description: string,
  categories: string[]
  header_image: string,
  genres: string[],
}

const baseUrl = process.env.NODE_ENV === 'production'
  ? 'https://can-we-play-together.onrender.com/gamesInCommon'
  : 'http://localhost:8080/gamesInCommon'

export const getPlayerOwnedGames = async (userId1: string, userId2: string): Promise<GameDetails[]> => {
  try {
    const response = await axios.get(`${baseUrl}/${userId1}/${userId2}`)

    return response?.data?.gamesInCommon;
  } catch (e: any) {
    console.log(`[getPlayerOwnedGames] ${e?.message}`);
    return [];
  }
}
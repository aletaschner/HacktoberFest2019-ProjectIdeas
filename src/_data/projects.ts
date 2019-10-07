import { ProjectIdea } from "src/_models/project-idea";
import { Category } from "src/_models/category";
import { Language } from "src/_models/language";

export const ProjectIdeas: ProjectIdea[] = [
  {
    title: "Hacktoberfest 2019 Project Ideas",
    author: { name: "Alexandre Täschner", username: "aletaschner" },
    categories: [Category.Website],
    description:
      "Help people see their ideais developed by exposing them in an environment of people willing to contribute to open source powered by an website and a github repository",
    recommendedLanguages: [Language.Javascript],
    url: "https://github.com/aletaschner/HacktoberFest2019-ProjectIdeas"
  },
  {
    title: "Track current music trends with the Spotify API",
    author: { name: "Sriram Iyer", username: "ramiyer1998" },
    categories: [Category.Service, Category.ApiRest],
    description:
      "Use the Spotify API to gather data on the hottest grends in music right now, whether it be artists, genres, etc. and write software that can calculate how in tune with current trends a user is when asking for their Spotify username.",
    recommendedLanguages: [Language.Python]
  },
  {
    title: "Get weather and weather forecasts for multiple cities.",
    author: { name: "Jeffersson semin", username: "JefferssonSemin" },
    categories: [Category.Service, Category.ApiRest],
    description:
      "Using this kind of requests you can get weather data in any location on the earth. The current weather data are updated online based on data from more than 40,000 weather stations.",
    recommendedLanguages: [Language.Python, Language.Javascript]
  }
];

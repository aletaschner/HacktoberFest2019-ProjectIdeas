import {ProjectIdea} from 'src/_models/project-idea';
import {Category} from 'src/_models/category';
import {Language} from 'src/_models/language';

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
    title: "Build a pokedex as your hello world app",
    author: { name: "You", username: "yourusername" },
    categories: [Category.Software, Category.Website],
    description:
      "Many people build hello world applications like a todo list when learning new frameworks or languages. A fun alternative is to build a pokedex instead.",
    recommendedLanguages: [Language.Javascript]
  },
  {
    title: "Get weather and weather forecasts for multiple cities.",
    author: { name: "Jeffersson semin", username: "JefferssonSemin" },
    categories: [Category.Service, Category.ApiRest],
    description:
      "Using this kind of requests you can get weather data in any location on the earth. The current weather data are updated online based on data from more than 40,000 weather stations.",
    recommendedLanguages: [Language.Python, Language.Javascript]
  },
  {
    title: "Employee attendance by face recognition",
    author: { name: "Ankit kumar", username: "PrajapatiAnkit" },
    categories: [Category.AI, Category.MachineLearning],
    description:"Facial Recognition Attendance System is basically an automated identification system that can recognize any individual whose facial features are stored in the database",
    recommendedLanguages: [Language.Python, Language.Javascript]
  },
  {
    title: "Customizable Stock Price Viewer",
    author: { name: "M. Oliveira", username: "m-oliv" },
    categories: [Category.Service, Category.ApiRest, Category.Website],
    description:
      "Build a simple web page in which you input the ID of a company from a stock market (example: 'APPL') and you get a chart with stock price over a period of time. If you can show the chart for multiple companies, even better. This could be done as a front-end only project (using an external API) or, if you feel adventurous, you can add a back-end that collects stock price data and saves it in a DB. The front-end would then use REST to retrieve the data from the back-end.",
    recommendedLanguages: [Language.Python, Language.Javascript]
  },
  {
    title: "Twitter Scheduler",
    author: { name: "M. Oliveira", username: "m-oliv" },
    categories: [Category.Service, Category.Website],
    description:
      "Build a web page in which you can schedule tweets to be published to one or more accounts. Bonus points if you can add GIFs and such. This feature exists on tweetdeck, but it could be a very nice exercise of redesign.",
    recommendedLanguages: [Language.Javascript]
  },
  {
    title: "Secure Command line based Peer-to-Peer Instant Messaging Service",
    author: { name: "J. Rawlani", username: "tmw9" },
    categories: [Category.Software, Category.Product],
    description: 
      "A Simple Command line based chat interface, secured with End-to-End Encryption Techniques(like Elliptic Curve Cryptography), to communicate with users all around the globe using just IP address of the user",
    recommendedLanguages: [Language.Python, Language.Go]
  },
  {
    title: "Tech for the non-tech savvy",
    author: { name: "Aditi", username: "mystic-potato" },
    categories: [Category.Software, Category.App],
    description: 
      "An app that takes care of all of the user needs without requiring the user to have technical skills. E.g.If user wants to send message but dosen't know how he can just ask app do do it.",
    recommendedLanguages: [Language.Kotlin, Language.Ruby]
  },
  {
    title: "Simple and easy system for support small social services",
    author: { name: "Eliton Gadotti", username: "1eliton" },
    categories: [Category.Website, Category.Product, Category.Software],
    description: 
      "As we can imagine, the social services (especially the litle ones) does not have a focus on systems or bureaucracy, but (in general) in helping people on their necessity. The idea is to build a system that can help the leaders of a community to maintain all documents, beneficiaries, services, social actions, volunteers and schedulle keep under control.",
    recommendedLanguages: [Language.Python]
  },
  {
    title: "Simple command line based Software Engineer interview question practice",
    author: { name: "Sanchit Mishra", username: "sanchittechnogeek" },
    categories: [Category.Website, Category.Product, Category.Software],
    description: 
      "A Command line based python program which randomly shows the user some of the previous popular software engineering interview question and allows them to select any of them and solve it under a given time along with matching the required test cases.",
    recommendedLanguages: [Language.Python]
  },
  {
    title: "Online rental property guestbook",
    author: { name: "Mac B", username: "Maciox55" },
    categories: [Category.Website, Category.Software],
    description: 
      "Sometimes when you rent a house or room on AirBnB they have a guestbook where you can sign in, why not put it online and make it available to anyone anywhere.",
    recommendedLanguages: [Language.Javascript]
   },
    title: "Stock Prices Predictor",
    author: { name: "Anuj kumar shukla", username: "anujshuklaas" },
    categories: [Category.Website, Category.Product, Category.Software],
    description: 
      "This is another interesting machine learning project idea for data scientists/machine learning engineers working or planning to work with finance domain. Stock prices predictor is a system that learns about the performance of a company and predicts future stock prices",
    recommendedLanguages: [Language.Python]
   },
   {
    title: "Read Me My Book App, hardcopy pages to be converted into pdf form",
    author: { name: "Ankit kumar", username: "poruss" },
    categories: [Category.Product, Category.Software],
    description: 
      "Nowadays we can’t carry books everywhere, it becomes difficult to carry books every day and read. Here we come up with this solution, this read me my book application helps the hardcopy of books to convert into pdf form. In this application user just needs to click picture using their mobile phone camera of the hardcopy pages and it will be converted into pdf form",
    recommendedLanguages: [Language.Python]
  },
  {
    title: "Twitter Chatbot",
    author: { name: "M. Oliveira", username: "m-oliv" },
    categories: [Category.Service, Category.AI],
    description:
      "Build a chatbot that interacts with people on twitter. Bonus points if you make it smart by using basic AI.",
    recommendedLanguages: [Language.Javascript]
  },
  {
    title: "Fitness for the lazy",
    author: { name: "Kshitij Srivastava", username: "kshitijsriv" },
    categories: [Category.App, Category.Product, Category.Software],
    description: 
      "Tracking your calories can be get difficult. To feed this data each time you eat gets quite tedious. The idea is to build an app which can detect the amount of calories from the image of a food item and add to your daily caloric intake. It also suggests how you can plan your meal for the rest of your day to stay within your caloric intake limits.",
    recommendedLanguages: [Language.Java]
  }
   {
    title: "#Hacktoberfest Automating app",
    author: { name: "Bhavesh Goel", username: "bhaveshgoel07" },
    categories: [Category.Product, Category.Software],
    description: 
      "As you know doing the same task again and again can be quite frustrating so this app that I would want to develop will automate all the tasks using scripts and sometimes touch recording and will be easy to program.",
    recommendedLanguages: [Language.Python, Language.JAVA]
  }
  {
    title: "Spot the Runner",
    author: { name: "C. Day", username: "charliemday"},
    categories: [Category.AI, Category.Software],
    description:
      "As Marathon runners cross the finish line, their name is called out, however this is done manually. Utilising Computer Vision, spot the runner's number tag to automate a callout and track their time".
    recommendedLanguages: [Language.Python]
  }
];

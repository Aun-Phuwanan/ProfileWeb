import NewsAPI from "newsapi";
const newsapi = new NewsAPI("5b6be9dc1040493392b718e2a80704ce");

export default defineEventHandler(async (event) => {
  const category = event.context.params.id;
  const news = await newsapi.v2
    .topHeadlines({
      category: category,
      language: "en",
      country: "us",
    })
    .then((response) => {
      return response;
    });
  // console.log(news);
  return { news };
});

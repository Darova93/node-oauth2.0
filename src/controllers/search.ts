export default {
  searchMovie: (req : any, res : any) => {
    if (!req.params.title) {
      res.send(`Required information is missing`);
    } else {
      res.send(`Hello m`);
      //    TMDBService.searchTMDB('movie', req.params.title).then((data) => {
      //        res.send(data);
      //    }).catch((err) => {
      //        res.send(err.message);
      //    });
    }
  },
};
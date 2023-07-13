import moviesServices from "../services/index.js";

const getMovies = async (req, res) => {
  const response = await moviesServices();
  res.status(200).json(response);
};

export default getMovies;

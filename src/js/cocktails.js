const getAllCocktails = async() => {
  const data = await fetch("../services/cocktails.json")
    .then(data => data.json())
    .then(data => data);
  return data;
};

export default getAllCocktails;

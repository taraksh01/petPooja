const useLocation = async (city) => {
  const coOrdinates = await fetch(
    `https://geocode.maps.co/search?q=${city}&api_key=${process.env.GEOCODE_API_KEY}`
  );
  const json = await coOrdinates?.json();
  return json.length > 0 ? json[0] : "Error";
};

export default useLocation;

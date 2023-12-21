const useLocation = async (city) => {
  const coOrdinates = await fetch(`https://geocode.maps.co/search?q=${city}`);
  const json = await coOrdinates?.json();
  return json.length > 0 ? json[0] : "Error";
};

export default useLocation;

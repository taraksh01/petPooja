export const filterData = (searchText, restaurants) => {
  const newRestaurants = restaurants?.filter((res) =>
    res?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );

  return newRestaurants;
};

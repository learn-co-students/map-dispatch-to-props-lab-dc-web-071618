export const addRestaurant = restaurant => {
  console.log("addRestaurant", restaurant);
  return {
    type: "ADD_RESTAURANT",
    restaurant
  };
};

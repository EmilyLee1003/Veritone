export const addItemToList = (data) => {
  console.log("action is called", data);
  return {
    type: "Add_Item_To_List",
    data,
  };
};

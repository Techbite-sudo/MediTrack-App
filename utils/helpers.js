export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
};

export const calculateTotal = (items) => {
  // Replace with actual pricing logic
  return items.reduce((total, item) => total + item.quantity * 10, 0);
};

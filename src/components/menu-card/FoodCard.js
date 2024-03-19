export const FoodCard = ({ item }) => {
  const { name, description, cost } = item;
  return (
    <div className="w-[600px] mb-4">
      <div className="font-bold">{name}</div>
      <div className="italic">{description}</div>
      <div className="text-orange-400 font-bold">{cost} /-</div>
      <hr></hr>
    </div>
  );
};

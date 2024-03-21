import { Form } from "./Form";

export const FoodCard = ({ item }) => {
  const { name, description, cost } = item;
  return (
    <div className="w-[600px] mb-4 flex justify-between border-b border-gray-400">
      <div>
        <div className="font-bold">{name}</div>
        <div className="italic">{description}</div>
        <div className="text-orange-400 font-bold">{cost} /-</div>
      </div>

      <Form item={item} />
    </div>
  );
};

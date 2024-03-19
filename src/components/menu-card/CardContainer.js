import { FoodCard } from "./FoodCard";

export const CardContainer = () => {
  const items = [
    { name: "Sushi", description: "Finest fish and veggies", cost: 250 },
    { name: "Schnitzel", description: "A german speciality!", cost: 450 },
    {
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      cost: 180,
    },
    { name: "Green Bowl!", description: "Healthy...and green...", cost: 330 },
  ];
  return (
    <div className="flex justify-center">
      <div className="bg-white mt-[60vh] p-4 m-5 rounded-lg">
        {items.map((item) => (
          <FoodCard key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
};

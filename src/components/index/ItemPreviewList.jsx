import React from "react";
import ItemPreview from "./ItemPreview";

const items = [
  {
    id: "hjfHFk59H",
    title:
      "MacBook Air Laptop: Apple M1 Chip, (13” , 8GB RAM, 256GB SSD Storage)A2337 / MGN93LL/A , MGN93PA/A , MGN63LL/A, MGND3LL/A",
    imageUrl:
      "https://appleasia.lk/wp-content/uploads/2021/07/Apple-MacBook-Air-M1-Space-Grey-Latest-Price-In-Sri-Lanka-1-min-600x600.jpeg",
    price: 400000,
    deliveryFee: 0,
    condition: "New",
    category: "Computer",
  },
  {
    id: "H8L95j6t4H",
    title: "IPhone 12 64GB - 1 Year Genxt Warranty",
    imageUrl:
      "https://geniusmobile.lk/wp-content/uploads/2019/11/A5EFS1912as17oispO.jpg",
    price: 180000,
    deliveryFee: 2000,
    condition: "Used",
    category: "Mobile phone",
  },
];

export default function ItemPreviewList(props) {
  return (
    <div>
      {items.map((item) => (
        <ItemPreview
          key={item.id}
          title={item.title}
          imageUrl={item.imageUrl}
          price={item.price}
          deliveryFee={item.deliveryFee}
          condition={item.condition}
          category={item.category}
        />
      ))}
    </div>
  );
}

import React from "react";
import ItemPreview from "./ItemPreview";

export default function ItemPreviewList(props) {
  return (
    <ItemPreview
      title="MacBook Air Laptop: Apple M1 Chip, (13” , 8GB RAM, 256GB SSD Storage)
      A2337 / MGN93LL/A , MGN93PA/A , MGN63LL/A, MGND3LL/A"
      imageUrl="https://appleasia.lk/wp-content/uploads/2021/07/Apple-MacBook-Air-M1-Space-Grey-Latest-Price-In-Sri-Lanka-1-min-600x600.jpeg"
      price={400000}
      deliveryFee={0}
    />
  );
}

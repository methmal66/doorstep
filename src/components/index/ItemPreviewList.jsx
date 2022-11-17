import React from "react";
import ItemPreview from "./ItemPreview";
import { items } from "../../db";

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

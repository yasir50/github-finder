import React from "react";
import CardData from "./Card";
import { products } from "../Products/ProductsData";
export default function Products() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          rowGap: "40px",
          columnGap: "60px",
          justifyContent: "center",
        }}
      >
        {products.map((item, index) => {
          return (
            <>
              <CardData
                key={index}
                title={item.title.slice(0, 20)}
                imgSrc={item.image}
                desc={item.description.slice(0, 100)}
                productId={item.id}
              />
            </>
          );
        })}
      </div>
    </>
  );
}

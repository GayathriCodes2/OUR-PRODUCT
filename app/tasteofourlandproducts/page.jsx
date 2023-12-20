// pages/index.js
import React from 'react';
import ProductCard from "@components/productcard";

const Page = () => {
  const products = [
    {
      id: 1,
      productImage: '/Tirunelveli-Halwa.jpg',
      productName: 'Tirunelveli - Halwa',
      description: 'Description for Product 1',
      category: "TasteOfOurLand",
      quantity1: null,
      price1: 11,
      quantity1Unit: "g",
      quantity2: null,
      price2: 11,
      quantity2Unit: "g",
      quantity3: null,
      price3: 8,
      quantity3Unit: "g",
      isOrganic: true,
      isAvailableOn: true,
    }, {
      id: 2,
      productImage: '/Thoothukudi-Macaroons.jpg',
      productName: 'Thoothukudi - Macaroons',
      description: 'Description for Product 1',
      category: "TasteOfOurLand",
      quantity1: null,
      price1: 11,
      quantity1Unit: "g",
      quantity2: null,
      price2: 11,
      quantity2Unit: "g",
      quantity3: null,
      price3: 8,
      quantity3Unit: "g",
      isOrganic: true,
      isAvailableOn: true,
    }, {
      id: 3,
      productImage: '/Peanut-candy.jpg',
      productName: 'Kovilpatti - Kadalai mittai',
      description: 'Description for Product 1',
      category: "TasteOfOurLand",
      quantity1: null,
      price1: 11,
      quantity1Unit: "g",
      quantity2: null,
      price2: 11,
      quantity2Unit: "g",
      quantity3: null,
      price3: 8,
      quantity3Unit: "g",
      isOrganic: true,
      isAvailableOn: true,
    }, {
      id: 4,
      productImage: '/Banana-chips.jpg',
      productName: 'Nagercoil - Chips',
      description: 'Description for Product 1',
      category: "TasteOfOurLand",
      quantity1: null,
      price1: 11,
      quantity1Unit: "g",
      quantity2: null,
      price2: 11,
      quantity2Unit: "g",
      quantity3: null,
      price3: 8,
      quantity3Unit: "g",
      isOrganic: true,
      isAvailableOn: true,
    },{
      id: 5,
      productImage: '/Kai-Murukku.png',
      productName: 'Kai - Murukku',
      description: 'Description for Product 1',
      category: "TasteOfOurLand",
      quantity1: null,
      price1: 11,
      quantity1Unit: "g",
      quantity2: null,
      price2: 11,
      quantity2Unit: "g",
      quantity3: null,
      price3: 8,
      quantity3Unit: "g",
      isOrganic: true,
      isAvailableOn: true,
    },{
      id: 6,
      productImage: '/Seydubganallor-Mixture.png',
      productName: 'Seydunganallor - Mixture',
      description: 'Description for Product 1',
      category: "TasteOfOurLand",
      quantity1: null,
      price1: 11,
      quantity1Unit: "g",
      quantity2: null,
      price2: 11,
      quantity2Unit: "g",
      quantity3: null,
      price3: 8,
      quantity3Unit: "g",
      isOrganic: true,
      isAvailableOn: true,
    }
  ];
  return (
    <div>
      <h1 className="text-2xl font-semibold my-4">Taste of our land</h1>
      <img src='/download-removebg-preview.png' alt="Temple Image" className="h-96 w-96 lg:hidden mx-auto" />
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Page;

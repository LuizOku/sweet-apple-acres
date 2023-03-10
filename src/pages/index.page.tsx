import React from "react";

import Head from "next/head";
import Image from "next/image";
import { toast } from "react-toastify";

import { Hero, Filter, Card } from "@/components";
import { getProducts } from "@/api/products";
import { ProductT, ProductQueryParamsT } from "@/shared/types/product.type";
import { CardsContainer, NoResults } from "./styles";

export default function Home() {
  const [products, setProducts] = React.useState<ProductT[]>([]);
  const [searchParams, setSearchParams] = React.useState<
    ProductQueryParamsT | undefined
  >();

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getProducts(searchParams);
        setProducts(res);
      } catch (error) {
        console.error(error);
        toast("Error when searching for products", {
          hideProgressBar: true,
          autoClose: 2000,
          type: "error",
        });
      }
    };
    fetchProducts();
  }, [searchParams]);

  const handleFilter = (query: ProductQueryParamsT) => {
    setSearchParams(query);
  };

  return (
    <>
      <Head>
        <title>Sweet Apple Acres</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Filter onSearch={(query: ProductQueryParamsT) => handleFilter(query)} />
      <CardsContainer layout>
        {products.length > 0 ? (
          products.map((prod, index) => (
            <Card
              testId={`product-card-${index}`}
              key={prod.id}
              product={prod}
            />
          ))
        ) : (
          <div>
            <Image src="/Search.png" alt="Search" width={475} height={360} />
            <NoResults>No Results found</NoResults>
          </div>
        )}
      </CardsContainer>
    </>
  );
}

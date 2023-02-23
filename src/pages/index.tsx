import React from "react";
import Head from "next/head";
import { Header, Hero, Filter, Card } from "@/components";
import { CardsContainer } from "./styles";
import { getProducts } from "@/api/products";
import { ProductT, ProductQueryParamsT } from "@/shared/types/product.type";

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
      {products.length > 0 ? (
        <CardsContainer layout>
          {products.map((prod) => (
            <Card key={prod.id} product={prod} />
          ))}
        </CardsContainer>
      ) : (
        <span>Can&apos;t find that product :c</span>
      )}
    </>
  );
}

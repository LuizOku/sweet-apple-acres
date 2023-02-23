import { ProductQueryParamsT } from "@/shared/types/product.type";
import { colors } from "@/styles/theme";
import React from "react";
import Button from "../Button";
import Input from "../Input";

import { FilterContainer, Title } from "./styles";

type FilterT = {
  onSearch: (searchParams: ProductQueryParamsT) => void;
};

const Filter = ({ onSearch }: FilterT) => {
  const searchRef = React.useRef<HTMLInputElement>(null);
  const minRatingRef = React.useRef<HTMLInputElement>(null);
  const maxRatingRef = React.useRef<HTMLInputElement>(null);
  const minPriceRef = React.useRef<HTMLInputElement>(null);
  const maxPriceRef = React.useRef<HTMLInputElement>(null);

  const handleSearchClick = () => {
    const searchParams = {
      search: searchRef.current?.value,
      minRating: minRatingRef.current?.value,
      maxRating: maxRatingRef.current?.value,
      minPrice: minPriceRef.current?.value,
      maxPrice: maxPriceRef.current?.value,
    } as ProductQueryParamsT;
    onSearch(searchParams);
  };

  return (
    <FilterContainer>
      <Title>Search for your products</Title>
      <section>
        <Input ref={searchRef} placeholder="Keyword" />
      </section>
      <section>
        <Input ref={minRatingRef} placeholder="Min Rating" type="number" />
        <Input ref={maxRatingRef} placeholder="Max Rating" type="number" />
      </section>
      <section>
        <Input ref={minPriceRef} placeholder="Min Price" type="number" />
        <Input ref={maxPriceRef} placeholder="Max Price" type="number" />
      </section>
      <section>
        <Button
          background={colors.primary}
          color={colors.white}
          onClick={handleSearchClick}
        >
          Search
        </Button>
      </section>
    </FilterContainer>
  );
};

export default Filter;

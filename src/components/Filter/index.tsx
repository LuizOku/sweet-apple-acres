import React from "react";

import { ProductQueryParamsT } from "@/shared/types/product.type";
import { colors } from "@/styles/theme";
import Button from "../Button";
import Input from "../Input";
import { FilterContainer, Title, Form } from "./styles";

type FilterT = {
  onSearch: (searchParams: ProductQueryParamsT) => void;
};

const Filter = ({ onSearch }: FilterT) => {
  const formRef = React.useRef() as React.MutableRefObject<HTMLFormElement>;

  const handleSearchClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchParams = {
      search: formRef.current?.search?.value,
      minRating: formRef.current?.minRating?.value,
      maxRating: formRef.current?.maxRating?.value,
      minPrice: formRef.current?.minPrice?.value,
      maxPrice: formRef.current?.maxPrice?.value,
    } as ProductQueryParamsT;
    onSearch(searchParams);
  };

  return (
    <FilterContainer>
      <Title>Search for your products</Title>
      <Form ref={formRef} onSubmit={(e) => handleSearchClick(e)}>
        <section>
          <Input name="search" placeholder="Keyword" />
        </section>
        <section>
          <Input name="minRating" placeholder="Min Rating" type="number" />
          <Input name="maxRating" placeholder="Max Rating" type="number" />
        </section>
        <section>
          <Input name="minPrice" placeholder="Min Price" type="number" />
          <Input name="maxPrice" placeholder="Max Price" type="number" />
        </section>
        <section>
          <Button
            testId="filter-button"
            background={colors.primary}
            color={colors.white}
            type="submit"
          >
            Search
          </Button>
        </section>
      </Form>
    </FilterContainer>
  );
};

export default Filter;

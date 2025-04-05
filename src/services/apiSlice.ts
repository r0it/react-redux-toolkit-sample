import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type BaseApiResponse = {
  success: boolean;
  message: string;
  total: number;
  skip: number;
  limit: number;
}

type Quote = {
  id: number;
  author: string;
  quote: string;
}

type QuotesApiResponse = BaseApiResponse & {
  quotes: Quote[];
}

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
}

type ProductsApiResponse = BaseApiResponse & {
  products: Product[];
}

export type { Quote, Product };

const BASE_URL = "https://dummyjson.com/";

export const apiSlice = createApi({
    reducerPath: "dummyApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: ["Quotes", "Products"],
    endpoints: (builder) => ({
        getQuotes: builder.query<QuotesApiResponse, number>({
            query: (limit) => {
                if(limit < 1) throw new Error("Limit must be greater than 1");
                return {
                    url: `quotes?limit=${limit.toString()}`,
                    method: "GET",
                }
            },
            providesTags: (_result, _error, id) => [{ type: "Quotes", id }],
        }),
        getProducts: builder.query<ProductsApiResponse, number>({
            query: (limit) => {
                if(limit < 1) throw new Error("Limit must be greater than 1");
                return {
                    url: `products?limit=${limit.toString()}`,
                    method: "GET",
                }
            },
            providesTags: (_result, _error, id) => [{ type: "Products", id }],
        }),
    })
});

export const { useGetQuotesQuery, useGetProductsQuery } = apiSlice;
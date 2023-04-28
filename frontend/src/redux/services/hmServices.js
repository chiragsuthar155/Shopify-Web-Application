import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const hmServicesApi = createApi({
  reducerPath: "hmServicesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", process.env.REACT_APP_RAPID_API_HM_KEY);
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getSearchResults: builder.query({
      query: () =>
        "/products/list?country=us&lang=en&currentpage=0&pagesize=30&categories=men_all&concepts=H%26M%20MAN",
    }),
    getWomenResults: builder.query({
      query: () =>
        "products/list?country=us&lang=en&currentpage=0&pagesize=30&categories=ladies_all",
    }),
    getProductDetails: builder.query({
      query: ({ clothCode }) =>
        `/products/detail?lang=en&country=us&productcode=${clothCode}`,
    }),
    getSportsWear: builder.query({
      query: () =>
        "products/list?country=us&lang=en&currentpage=0&pagesize=30&categories=sportswear",
    }),
    getBeautyProducts: builder.query({
      query: () =>
        "products/list?country=us&lang=en&currentpage=0&pagesize=30&categories=beauty_all",
    }),
    getHomeAppliances: builder.query({
      query: () =>
        "products/list?country=us&lang=en&currentpage=0&pagesize=30&categories=home_all",
    }),
    getBabyProducts: builder.query({
      query: () =>
        "products/list?country=us&lang=en&currentpage=0&pagesize=30&categories=kids_all",
    }),
  }),
});

export const {
  useGetSearchResultsQuery,
  useGetProductDetailsQuery,
  useGetWomenResultsQuery,
  useGetSportsWearQuery,
  useGetBeautyProductsQuery,
  useGetHomeAppliancesQuery,
  useGetBabyProductsQuery,
} = hmServicesApi;

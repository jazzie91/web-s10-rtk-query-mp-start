import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const quotesApi = createApi ({
    reducerPath: 'quotesApi',
    headQuery: fetchBaseQuery({baseUrl:'http://localhost:9009/api'}),
    tagTypes: ['Quotes'],
     endpoints: builder => ({
     getQuotes: builder.query ({
        query: () => 'quotes',
        provideTags: ['Quotes'],
     }),
     createQuote: builder.mutation({
        query: quote => ({
            url: 'quotes',
            method: 'POST',
            body: quote
        }),
        invalidateTags: ['Quotes'],
     }),
     toggleFake: builder.mutation({
        query: ({id, quote}) => ({
            url: `quotes/${id}`,
            method: 'PUT',
            body: quote,
        }),
        invalidateTags: ['Quotes'],
     }),
     deleteQuote: builder.mutation({
        query: id => ({
            url: `quotes/${id}`,
            method: 'DELETE',
        }),
        invalidateTags: ['Quotes'],
     }),  
     }),
})

export const {
  useGetQuotesQuery, useToggleFakeMutation, useCreateQuoteMutation, useDeleteQuoteMutation,   
} = quotesApi

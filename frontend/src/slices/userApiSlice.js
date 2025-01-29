import { apiSlice } from "./apiSlice";

const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    sign: build.mutation({
      query: (data) => ({
        url: `/api/users`,
        method: "POST",
        body: data,
      }),
    }),
    login: build.mutation({
      query: (data) => ({
        url: `/api/users/auth`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useSignMutation, useLoginMutation } = userApiSlice;

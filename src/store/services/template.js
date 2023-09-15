import { wrapperAPI } from "../helper/wrapperApi";

export const tempsApi = wrapperAPI.injectEndpoints({
  reducerPath: "TempsApi",
  endpoints: (builder) => ({
    getAllTemps: builder.query({
      providesTags: ["temp"],
      query: () => "temp",
    }),
    getOneTemp: builder.query({
      query: (id) => "temp/" + id,
    }),
    deleteTemp: builder.mutation({
      invalidatesTags: ["temp"],
      query: (id) => ({
        url: "temp/" + id,
        method: "Delete",
      }),
    }),
    createTemp: builder.mutation({
      invalidatesTags: ["temp"],
      query: (body) => ({
        url: "temp",
        method: "POST",
        body,
      }),
    }),
    updateTemp: builder.mutation({
      invalidatesTags: ["temp"],
      query: ({ id, body }) => ({
        url: "temp/" + id,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetAllTempsQuery,
  useGetOneTempQuery,
  useDeleteTempMutation,
  useCreateTempMutation,
  useUpdateTempMutation,
} = tempsApi;

import { api } from "@/redux/api/apiSlice";

const feedbackApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getFeedback: builder.query({
      query: () => `/api/v1/feedbacks`,
      providesTags: ["Feedback"],
    }),
    addFeedBack: builder.mutation({
      query: ({ userId, data }) => {
        return {
          url: "/api/v1/feedbacks/create-feedback",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Feedback"],
    }),
  }),
});

export const { useGetFeedbackQuery, useAddFeedBackMutation } = feedbackApi;

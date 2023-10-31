import { api } from "@/redux/api/apiSlice";

const blogApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => `/api/v1/blogs`,
      providesTags: ["Blog"],
    }),

    addBlog: builder.mutation({
      query: ({userId, data}) => {
        return {
          url: `/api/v1/blogs/create-blog`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Blog"],
    }),
    deleteBlog: builder.mutation<any, string>({
      query: (id) => ({
        url: `/api/v1/blogs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Blog"],
    }),
    updateBlog: builder.mutation({
      query: (blogData) => {
        // console.log(blogData.id);
        return {
          url: `/api/v1/blogs/${blogData.id}`,
          method: "PATCH",
          body: blogData,
        };
      },
      invalidatesTags: ["Blog"],
    }),
  }),
});

export const {
  useGetBlogsQuery,
  useAddBlogMutation,
  useDeleteBlogMutation,
  useUpdateBlogMutation,
} = blogApi;

import { api } from "@/redux/api/apiSlice";
interface UserProfile {
  [x: string]: any;
  email: string;
  role: string;
  name: string;
  profileImage: string;
  phoneNumber: string;
}

const serviceApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createService: builder.mutation({
      query: (serviceData) => ({
        url: "/api/v1/services/create-service",
        method: "POST",
        body: serviceData,
      }),
    }),
    getService: builder.query({
      query: () => `/api/v1/services`,
      providesTags: ["Service"],
    }),

    getSingleService: builder.query({
      query: (id) => `/api/v1/services/${id}`,
      providesTags: ["Service"],
    }),

    updateService: builder.mutation({
      query: (service) => ({
        url: `/api/v1/services/${service.id}`,
        method: "PATCH",
        body: service,
      }),
      invalidatesTags: ["Service"],
    }),
    deleteService: builder.mutation({
      query: (serviceId) => ({
        url: `/api/v1/services/${serviceId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Service"],
    }),

    getServiceByCategory: builder.query({
      query: ({ minPrice, maxPrice, category, search }) => {
        let url = "/api/v1/services";

        let queryParameters = "";

        if (minPrice) {
          queryParameters += `&minPrice=${minPrice}`;
        }

        if (maxPrice) {
          queryParameters += `&maxPrice=${maxPrice}`;
        }

        if (category) {
          queryParameters += `&category=${category}`;
        }

        if (search) {
          queryParameters += `&search=${search}`;
        }

        if (queryParameters) {
          url += `?${queryParameters.substring(1)}`;
        }

        return {
          url,
          method: "GET",
          providesTags: ["Service"],
        };
      },
    }),
  }),
});

export const {
  useCreateServiceMutation,
  useGetServiceQuery,
  useDeleteServiceMutation,
  useGetServiceByCategoryQuery,
  useGetSingleServiceQuery,
  useUpdateServiceMutation,
} = serviceApi;

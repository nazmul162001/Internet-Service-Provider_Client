import React, { useState, useEffect, ReactElement } from "react";
import { Select } from "antd";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import type { SelectProps } from "antd";
import { Input } from "antd";
import RootLayout from "@/components/Layouts/RootLayouts";
import { useBookingMutation } from "../../../redux/feature/booking/bookingApiSlice";
const { TextArea } = Input;
import { toast } from "react-toastify";
import { useGetProfileQuery } from "@/redux/feature/user/userApiSlice";
import { useRouter } from "next/router";
import { useGetSingleServiceQuery } from "@/redux/feature/service/serviceApiSlice";
import {
  useDeleteCartMutation,
  useGetCartQuery,
} from "@/redux/feature/cart/cartApiSlice";

const options = [
  { value: "wifiInternet", label: "Wifi Internet" },
  { value: "mobileConnection", label: "Mobile Connection" },
  { value: "tvBox", label: "Tv Box" },
  { value: "smartHome", label: "Smart Home" },
  { value: "satelliteTv", label: "Satellite TV" },
  { value: "internet", label: "Internet" },
  { value: "broadband", label: "Broadband" },
  { value: "business", label: "Business" },
];

const Booking = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  const { id } = router.query;
  const { data: getSingleData } = useGetSingleServiceQuery(id);
  const { data: cartData } = useGetCartQuery({});
  const [deleteCart] = useDeleteCartMutation();
  // console.log(cartData?.data)

  const [booking] = useBookingMutation();
  const { data: profile } = useGetProfileQuery({});
  const userId = profile?.data?.id;
  const serviceId = id;

  const filteredCart = cartData?.data?.filter(
    (item: any) => item?.serviceId === id
  );

  // Initialize a variable to store the cart item ID
  let cartItemId: any;

  if (Array.isArray(filteredCart) && filteredCart.length > 0) {
    // Find the first matching item and get its ID
    cartItemId = filteredCart[0]?.id;
  }

  // Now, `cartItemId` contains the ID of the first matching item (or undefined if no match found)
  console.log("Matching cart item ID:", cartItemId);

  // handle add booking

  const onSubmit = async (data: any) => {
    const stringUserId = String(userId);
    const stringServiceId = String(serviceId);

    try {
      // Perform the booking
      const bookingResponse = await booking({
        data: { ...data, userId: stringUserId, serviceId: stringServiceId },
      }).unwrap();

      // If the booking is successful, proceed to delete the cart item
      if (bookingResponse && filteredCart) {
        // Check if `id` is a valid string before attempting to delete
        if (typeof id === "string") {
          // Delete the cart item after successful booking
          await deleteCart(cartItemId);
        } else {
          console.error("Invalid ID for cart item deletion");
        }

        // Show a success message and navigate to the confirmation page
        toast.success("Booking and Cart item deletion successful", {
          position: "bottom-right",
          autoClose: 3000,
        });
        router.push("/service/booking/confirm");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="w-full h-screen my-10 px-5 flex justify-center">
      <div className="w-full md:w-[95%] flex justify-center h-full bg-white ">
        <div className="w-full md:w-[60%]">
          <div className="text-center py-4 border-b-2 border-gray-300">
            <p className="text-lg">
              Customer Registration Form (Internet Internet Service )for All
            </p>
            <p className="text-sm font-sans text-[#6c757d]">
              (Fields with <span className="font-bold text-red-500">*</span> are
              must required)
            </p>
          </div>
          {/* booking form  */}
          <form className="my-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full h-full ">
              <div className="w-full grid grid-cols-12 mb-4">
                <label className="grid col-span-4 items-center" htmlFor="name">
                  <div className="font-sans font-medium ">
                    {" "}
                    Full Name{" "}
                    <span className="font-bold text-red-500 text-lg">*</span>
                  </div>
                </label>
                <div className="col-span-8">
                  <Controller
                    name="name"
                    control={control}
                    defaultValue={profile?.data?.name || ""}
                    rules={{ required: "Full Name is Required" }}
                    render={({ field }) => (
                      <div>
                        <input
                          {...field}
                          className="border-2 w-full py-2 px-2 border-gray-300"
                          type="text"
                          placeholder="Your Full Name"
                        />
                        {/* {errors.name && (
                          //@ts-ignore
                          <p className="text-red-500 mt-1">
                            {errors.name.message}
                          </p>
                        )} */}
                      </div>
                    )}
                  />
                </div>
              </div>

              <div className="w-full grid grid-cols-12 mb-4">
                <label className="grid col-span-4 items-center" htmlFor="name">
                  <div className="font-sans font-medium ">
                    Phone Number
                    <span className="font-bold text-red-500 text-lg">*</span>
                  </div>
                </label>
                <div className="col-span-8">
                  <Controller
                    name="phoneNumber"
                    control={control}
                    defaultValue={profile?.data?.phoneNumber || ""}
                    rules={{ required: "Phone Number is Required" }}
                    render={({ field }) => (
                      <div>
                        <input
                          {...field}
                          className="border-2 w-full py-2 px-2 border-gray-300"
                          type="text"
                          placeholder="Your Phone Number"
                        />
                        {/* {errors.phoneNumber && (
                          //@ts-ignore
                          <p className="text-red-500 mt-1">
                            {errors.phoneNumber.message}
                          </p>
                        )} */}
                      </div>
                    )}
                  />
                </div>
              </div>

              <div className="w-full grid grid-cols-12 mb-4">
                <label
                  className="grid col-span-4 items-center"
                  htmlFor="email-address"
                >
                  <div className="font-sans font-medium ">
                    {" "}
                    Email Address{" "}
                    <span className="font-bold text-red-500 text-lg">*</span>
                  </div>
                </label>
                <div className="col-span-8">
                  <Controller
                    name="email"
                    control={control}
                    defaultValue={profile?.data?.email || ""}
                    rules={{ required: "Email is Required" }}
                    render={({ field }) => (
                      <div>
                        <input
                          {...field}
                          className="border-2 w-full py-2 px-2 border-gray-300"
                          type="email"
                          placeholder="Your Email Address"
                        />
                        {/* {errors.email && (
                          //@ts-ignore
                          <p className="text-red-500 mt-1">
                            {errors.email.message}
                          </p>
                        )} */}
                      </div>
                    )}
                  />
                </div>
              </div>

              <div className="w-full grid grid-cols-12 mb-4">
                <label
                  className="grid col-span-4 items-center"
                  htmlFor="district"
                >
                  <div className="font-sans font-medium ">
                    {" "}
                    District{" "}
                    <span className="font-bold text-red-500 text-lg">*</span>
                  </div>
                </label>
                <div className="col-span-8">
                  <Controller
                    name="district"
                    control={control}
                    rules={{ required: "District is required" }}
                    render={({ field }) => (
                      <div>
                        <input
                          {...field}
                          className="border-2 w-full py-2 px-2 border-gray-300"
                          type="text"
                          placeholder="Your District"
                        />
                        {/* {errors.district && (
                          //@ts-ignore
                          <p className="text-red-500 mt-1">
                            {errors.district.message}
                          </p>
                        )} */}
                      </div>
                    )}
                  />
                </div>
              </div>

              <div className="w-full grid grid-cols-12 mb-4">
                <label
                  className="grid col-span-4 items-center"
                  htmlFor="upazila"
                >
                  <div className="font-sans font-medium ">
                    {" "}
                    Upazila/Thana{" "}
                    <span className="font-bold text-red-500 text-lg">*</span>
                  </div>
                </label>
                <div className="col-span-8">
                  <Controller
                    name="thana"
                    control={control}
                    rules={{ required: "Thana/Upazilla is required" }}
                    render={({ field }) => (
                      <div>
                        <input
                          {...field}
                          className="border-2 w-full py-2 px-2 border-gray-300"
                          type="text"
                          placeholder="Your Upazila"
                        />
                        {/* {errors.thana && (
                          //@ts-ignore
                          <p className="text-red-500 mt-1">
                            {errors.thana.message}
                          </p>
                        )} */}
                      </div>
                    )}
                  />
                </div>
              </div>

              <div className="w-full grid grid-cols-12 mb-4">
                <label
                  className="grid col-span-4 items-center"
                  htmlFor="address"
                >
                  <div className="font-sans font-medium ">
                    {" "}
                    Address{" "}
                    <span className="font-bold text-red-500 text-lg">*</span>
                  </div>
                </label>
                <div className="col-span-8">
                  <Controller
                    name="address"
                    control={control}
                    rules={{ required: "Address is required" }}
                    render={({ field }) => (
                      <div>
                        <TextArea
                          {...field}
                          className="border-2 w-full py-2 px-2 border-gray-300"
                          placeholder="Your Address"
                          autoSize={{ minRows: 3, maxRows: 5 }}
                        />
                        {/* {errors.address && (
                          //@ts-ignore
                          <p className="text-red-500 mt-1">
                            {errors.address.message}
                          </p>
                        )} */}
                      </div>
                    )}
                  />
                </div>
              </div>

              <div className="w-full grid grid-cols-12 mb-4">
                <label
                  className="grid col-span-4 items-center"
                  htmlFor="package"
                >
                  <div className="font-sans font-medium ">
                    {" "}
                    Category/Package{" "}
                    <span className="font-bold text-red-500 text-lg">*</span>
                  </div>
                </label>
                <div className="col-span-8">
                  <Controller
                    name="category"
                    control={control}
                    rules={{ required: "Category is required" }}
                    render={({ field }) => (
                      <div>
                        <Select
                          {...field}
                          options={options}
                          placeholder="Select Your Service"
                          className="border-2 w-full border-gray-300"
                        />
                        {/* {errors.category && (
                          //@ts-ignore
                          <p className="text-red-500 mt-1">
                            {errors.category.message}
                          </p>
                        )} */}
                      </div>
                    )}
                  />
                </div>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 text-white my-5 bg-[#112164] hover-bg-[#0d99e5]"
              >
                Booking Service
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;

Booking.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

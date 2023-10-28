import React from "react";
import { ReactElement, useEffect } from "react";
import { Image } from "antd";
import { Rate, Tabs } from "antd";
import type { TabsProps } from "antd";
import Review from "@/components/review/review";
import PrimaryButton from "@/components/Button/PrimaryButton";
import RootLayout from "@/components/Layouts/RootLayouts";
import { useRouter } from "next/router";
import { useGetSingleServiceQuery } from "../../redux/feature/service/serviceApiSlice";
import { toast } from "react-toastify";
import {
  useAddToCartMutation,
  useGetCartQuery,
} from "@/redux/feature/cart/cartApiSlice";
import { useGetProfileQuery } from "@/redux/feature/user/userApiSlice";
import { getAccessToken } from "@/redux/api/apiSlice";

const ServiceDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: getSingleData } = useGetSingleServiceQuery(id);
  const { data: profile } = useGetProfileQuery({});
  // console.log(profile?.data?.id)
  const userId = profile?.data?.id;
  const [addToCart] = useAddToCartMutation();
  const { data: cartData, error: cartError } = useGetCartQuery({});
  const token = getAccessToken();

  // handle add to cart
  const handleAddToCart = (id: any) => {
    const isItemInCart = cartData?.data?.some(
      (item: any) => item.serviceId === id
    );
    if (!token) {
      toast.error("Please login first", {
        position: "bottom-right",
        autoClose: 3000,
      });
    } else if (isItemInCart) {
      toast.error("Service is already in the cart", {
        position: "bottom-right",
        autoClose: 3000,
      });
    } else {
      addToCart({ serviceId: id, userId: userId })
        .then(() => {
          toast.success("Service added to the cart", {
            position: "bottom-right",
            autoClose: 3000,
          });
        })
        .catch((error: any) => {
          console.log("Error adding to cart:", error);
        });
    }
  };

  const handleBooking = (id: any) => {
    if (!token) {
      toast.error("Please login first", {
        position: "bottom-right",
        autoClose: 3000,
      });
    } else {
      router.push(`/service/booking/${id}`);
    }
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Review",
      children: <Review />,
    },
  ];

  return (
    <section className="overflow-hidden bg-white py-11 font-poppins">
      <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 md:w-1/2 ">
            <div className="sticky top-0 z-50 overflow-hidden ">
              <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                <Image
                  alt="image/"
                  width={100}
                  height={100}
                  src={
                    getSingleData?.data?.images
                      ? getSingleData?.data?.images
                      : "/bg.png"
                  }
                  className="h-[60vh] w-full rounded"
                />
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 ">
            <div className="lg:pl-20">
              <div className="mb-8 ">
                <span className="text-lg font-medium text-rose-500 dark:text-rose-200">
                  New
                </span>
                <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                  {getSingleData?.data?.name}
                </h2>
                <div className="flex items-center mb-6">
                  <ul className="flex mr-2">
                    <li>
                      <Rate disabled defaultValue={4} />
                    </li>
                  </ul>
                  <p className="text-xs dark:text-gray-400 ">
                    (2 customer reviews)
                  </p>
                </div>
                <p className="max-w-md mb-2 text-gray-700 dark:text-gray-400">
                  Category: {getSingleData?.data?.category}
                </p>
                <p className="max-w-md mb-2 text-gray-700 dark:text-gray-400">
                  Location: {getSingleData?.data?.location}
                </p>
                <p className="max-w-md mb-2 text-gray-700 dark:text-gray-400">
                  Channel: {getSingleData?.data?.channel}
                </p>
                <p className="max-w-md mb-2 text-gray-700 dark:text-gray-400">
                  HD Channel: {getSingleData?.data?.hdChannel}
                </p>
                <p className="max-w-md mb-2 text-gray-700 dark:text-gray-400">
                  Connection Cost: {getSingleData?.data?.connectionCost}
                </p>
                <p className="inline-block mb-8 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                  <span>${getSingleData?.data?.price}</span>
                </p>
              </div>
              <div className="flex flex-wrap justify-center md:justify-normal items-center gap-2 ">
                <button
                  onClick={() => handleBooking(id)}
                  className="px-5 bg_one py-2 w-48 text-white hover:bg-[#1F3BB1]"
                >
                  Booking
                </button>

                <button
                  onClick={() => handleAddToCart(id)}
                  className="px-5 bg_two py-2 w-48 text-white hover:bg-[#4DDFFD]"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* review  */}
      <Review serviceId={id} userId={userId} />
    </section>
  );
};

export default ServiceDetails;

ServiceDetails.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

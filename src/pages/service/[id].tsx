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
  const { data: cart } = useGetCartQuery({});
  // console.log(getSingleData)
  const userId = profile?.data?.id;
  const [addToCart] = useAddToCartMutation();
  const { data: cartData, error: cartError } = useGetCartQuery({});
  const token = getAccessToken();
  const currentUserId = profile?.data?.id;
  // handle add to cart
  const handleAddToCart = (id: any) => {
    const isItemInCart = cartData?.data?.some(
      (item: any) => item.serviceId === id
    );
    const filteredCart = cart?.data?.some(
      (item: any) => item.userId === currentUserId
    );

    if (!token) {
      toast.error("Please login first", {
        position: "bottom-right",
        autoClose: 3000,
      });
    } else if (isItemInCart && filteredCart) {
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="w-full flex justify-center items-center">
            <Image
              alt="image/"
              width={350}
              height={350}
              src={
                getSingleData?.data?.images
                  ? getSingleData?.data?.images
                  : "/bg.png"
              }
              className="w-full h-full rounded"
            />
          </div>
          <div className="w-full px-4">
            <div className="">
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
                    ({getSingleData?.data?.reviews?.length} customer reviews)
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
      <Review serviceId={id} userId={userId} getSingleData={getSingleData} />
    </section>
  );
};

export default ServiceDetails;

ServiceDetails.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

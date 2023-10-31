import React, { useState } from "react";
import { BsPencil } from "react-icons/bs";
import { Modal, Input, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
const { TextArea } = Input;
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import {
  useGetReviewQuery,
  usePostReviewMutation,
} from "@/redux/feature/review/reviewApiSlice";
import { getAccessToken } from "@/redux/api/apiSlice";
import { useGetProfileQuery } from "@/redux/feature/user/userApiSlice";

const Review = ({ serviceId, userId, getSingleData }: any) => {
  const [showFullReview, setShowFullReview] = useState(false);
  const { data: reviewData } = useGetReviewQuery({});
  const { data: profile } = useGetProfileQuery({});
  // console.log(getSingleData?.data?.reviews);
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const [postReview] = usePostReviewMutation();

  const closeModal = () => {
    setModalOpen(false);
  };

  const token = getAccessToken();
  const { control, handleSubmit, watch, reset, getValues } = useForm();

  // handle post review

  const onSubmit = async (data: any) => {
    // Convert userId and serviceId to strings
    const stringUserId = String(userId);
    const stringServiceId = String(serviceId);

    // Make the API call to create a review
    await postReview({
      data: { ...data, serviceId: stringServiceId, userId: stringUserId },
    })
      .unwrap()
      .then((response) => {
        toast.success("Service added to the cart", {
          position: "bottom-right",
          autoClose: 3000,
        });
        setModalOpen(!modalOpen);
      })
      .catch((error: any) => {
        console.log("Post Review", error);
      });
    // console.log(data);
  };

  const handleAddReview = (id: any) => {
    if (!token) {
      toast.error("Please login to add review", {
        position: "bottom-right",
        autoClose: 3000,
      });
    } else {
      openModal();
    }
  };

  return (
    <div id="app" className="antialiased bg-gray-100 pt-8 pb-12">
      <div className="w-full flex justify-center my-5 md:my-0 md:justify-end items-center pr-10">
        <button
          onClick={handleAddReview}
          className="px-10 py-2 bg-transparent border-2 text-black border-[#1F3BB1] hover:bg-[#1F3BB1] hover:text-white flex justify-center items-center gap-2"
        >
          Add Review{" "}
          <span>
            {" "}
            <BsPencil className="text-xl" />{" "}
          </span>{" "}
        </button>
      </div>
      {/* review modal  */}
      <Modal
        title="Write a Review"
        centered
        open={modalOpen}
        onOk={closeModal}
        onCancel={closeModal}
        footer={null}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="text-gray-500" htmlFor="email">
            Your Email
          </label>
          <Controller
            name="email"
            defaultValue={profile?.data?.email || ""}
            control={control}
            render={({ field }) => (
              <Input className="my-2" {...field} placeholder="Email" readOnly />
            )}
          />
          <label className="text-gray-500" htmlFor="description">
            Your Review
          </label>
          <Controller
            name="userReview"
            control={control}
            render={({ field }) => (
              <TextArea
                {...field}
                placeholder="Controlled autosize"
                autoSize={{ minRows: 3, maxRows: 5 }}
              />
            )}
          />
          <div className="w-full h-full my-3">
            <button
              type="submit"
              className="bg-[#112164] w-full text-white py-2"
            >
              Submit Review
            </button>
          </div>
        </form>
      </Modal>
      {/* review  */}
      <div className="px-4 sm:px-6 lg:px-8">
        <section className="text-gray-600 body-font">
          <div className="container py-8 mx-auto">
            <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
              User Reviews
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 relative">
              {getSingleData?.data?.reviews?.length !== 0 &&
                getSingleData?.data?.reviews?.map((review: any, index: any) => (
                  <div key={index} className="w-full">
                    <div className="h-full bg-white p-8 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="block w-5 h-5 text-gray-400 mb-4"
                        viewBox="0 0 975.036 975.036"
                      >
                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                      </svg>

                      <div>
                        <p className="leading-relaxed mb-6">
                          {showFullReview
                            ? review?.userReview
                            : review?.userReview?.slice(0, 200)}
                          {review?.userReview?.length > 200 && (
                            <span
                              onClick={() => setShowFullReview(!showFullReview)}
                              className="text-blue-700 cursor-pointer"
                            >
                              {showFullReview ? "Read less" : "Read more..."}
                            </span>
                          )}
                        </p>
                      </div>

                      <a className="inline-flex items-center">
                        <Avatar
                          shape="square"
                          size={64}
                          icon={<UserOutlined />}
                        />
                        <span className="flex-grow flex flex-col pl-4">
                          <span className="title-font font-medium text-gray-900">
                            {review?.user?.name}
                          </span>
                          <span className="text-gray-500 text-sm">
                            {review?.email}
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                ))}

              {getSingleData?.data?.reviews?.length === 0 && (
                <div className="absolute flex justify-center items-center w-full h-10">
                  <p className="py-1 px-5 bg-red-200 rounded-lg">
                    No User Review Found
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Review;

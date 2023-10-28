import React, { useState } from "react";
import { BsPencil } from "react-icons/bs";
import { Modal, Input } from "antd";
const { TextArea } = Input;
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import { usePostReviewMutation } from "@/redux/feature/review/reviewApiSlice";
import { getAccessToken } from "@/redux/api/apiSlice";

const Review = ({ serviceId, userId }: any) => {
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
    // console.log({ ...data, userId: stringUserId, serviceId: stringServiceId })
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

  const reviews = [
    {
      id: 1,
      rating: 4,
      date: "2023-10-16",
      color: "Red",
      verifiedPurchase: true,
      title: "Great Product",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      photo: "https://example.com/user1.jpg",
      name: "John Doe",
    },
    // Add more reviews here
  ];

  return (
    <div id="app" className="antialiased bg-gray-100 min-h-screen pt-8 pb-12">
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
        visible={modalOpen}
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
            control={control}
            render={({ field }) => (
              <Input className="my-2" {...field} placeholder="Email" />
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

      <div className="px-4 sm:px-6 lg:px-8">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="max-w-lg px-8 py-8 rounded-md shadow-lg bg-white"
          >
            <div className="flex space-x-0.5">rating here</div>
            <p className="mt-2 text-sm font-medium leading-5 text-gray-500">
              {review.date}
            </p>
            <div className="mt-6 flex items-center space-x-1">
              <p className="text-sm font-medium leading-5 capitalize text-gray-500">
                Color: {review.color}
              </p>
              <span className="text-gray-500">&bull;</span>
              {review.verifiedPurchase && (
                <p className="text-sm font-medium leading-5 text-gray-500">
                  Verified purchase
                </p>
              )}
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-gray-800">{review.title}</h3>
              <p className="text-sm font-medium leading-5 text-gray-600">
                {review.body}
              </p>
            </div>
            <div className="mt-6 flex items-center space-x-2">
              <div className="flex flex-shrink-0 rounded-full border border-gray-200">
                <img
                  className="w-8 h-8 object-cover rounded-full"
                  src={review.photo}
                  alt=""
                />
              </div>
              <span className="text-sm font-semibold leading-5 text-gray-900">
                {review.name}
              </span>
              <div className="flex-shrink-0">
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;

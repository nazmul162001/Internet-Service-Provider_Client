import DashboardLayout from "@/components/Layouts/DashboardLayout";
import { ReactElement } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Input } from "antd";
import { toast } from "react-toastify";
import DashboardLayoutRedux from "@/components/Layouts/DashboardLayoutRedux";
import { useGetProfileQuery } from "@/redux/feature/user/userApiSlice";
import { useAddFeedBackMutation } from "@/redux/feature/feedback/feedbackApiSlice";
const { TextArea } = Input;

const Feedback = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const { data: profile } = useGetProfileQuery({});
  const [addFeedback] = useAddFeedBackMutation();

  // console.log(profile?.data);
  
  const userId = profile?.data?.id;

  // handle Add Feedback
  const onSubmit = async (data: any) => {
    // Convert userId and serviceId to strings
    const stringUserId = String(userId);

    // Make the API call to create a review
    await addFeedback({
      data: { ...data, userId: stringUserId },
    })
      .unwrap()
      .then((response: any) => {
        toast.success("Feedback added Successfully", {
          position: "bottom-right",
          autoClose: 3000,
        });
        reset();
      })
      .catch((error: any) => {
        console.log("Can't Add Feedback ============", error);
      });
    // console.log(data);
  };

  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-2/3">
        <h1 className="text-center border-b-2 text-xl pb-2 text-[#112164] font-medium">
          Please Give Us Your Feedback About Our Service
        </h1>

        {/* profile update form  */}
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
                  render={({ field }) => (
                    <input
                      {...field}
                      className="border-2 w-full py-2 px-2 border-gray-300"
                      type="text"
                      placeholder="Your Full Name"
                      readOnly
                    />
                  )}
                />
              </div>
            </div>

            <div className="w-full grid grid-cols-12 mb-4">
              <label className="grid col-span-4 items-center" htmlFor="email">
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
                  render={({ field }) => (
                    <input
                      {...field}
                      className="border-2 w-full py-2 px-2 border-gray-300"
                      type="email"
                      placeholder="Your Email Address"
                      readOnly
                    />
                  )}
                />
              </div>
            </div>

            <div className="w-full grid grid-cols-12 mb-4">
              <label
                className="grid col-span-4 items-center"
                htmlFor="comments"
              >
                <div className="font-sans font-medium ">
                  {" "}
                  Feedback{" "}
                  <span className="font-bold text-red-500 text-lg">*</span>
                </div>
              </label>
              <div className="col-span-8">
                <Controller
                  name="comments"
                  control={control}
                  rules={{
                    required: "Feedback is required",
                    minLength: {
                      value: 50,
                      message: "Feedback must be at least 50 characters",
                    },
                  }}
                  render={({ field }) => (
                    <TextArea
                      {...field}
                      className="border-2 w-full py-2 px-2 border-gray-300"
                      placeholder="Your Feedback"
                      autoSize={{ minRows: 3, maxRows: 5 }}
                    />
                  )}
                />

                {errors.comments && (
                  //@ts-ignore
                  <p className="text-red-500">{errors.comments.message}</p>
                )}
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 text-white my-5 bg-[#112164] hover-bg-[#0d99e5]"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;

Feedback.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayoutRedux>{page}</DashboardLayoutRedux>;
};

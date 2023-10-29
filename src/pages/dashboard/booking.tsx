import DashboardLayoutRedux from "@/components/Layouts/DashboardLayoutRedux";
import {
  useDeleteBookingMutation,
  useGetBookingQuery,
} from "@/redux/feature/booking/bookingApiSlice";
import { ReactElement } from "react";
import { BiTrash } from "react-icons/bi";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Booking = () => {
  const { data: booking } = useGetBookingQuery({});
  // console.log(booking?.data);
  const [deleteBooking] = useDeleteBookingMutation();

  const handleDeleteBooking = async (id: any) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        // User confirmed the deletion
        await deleteBooking(id);

        Swal.fire("Deleted!", "The booking has been deleted.", "success");
      }
    } catch (error) {
      console.error("Error deleting booking=============", error);
      // Handle the error, e.g., show an error message
    }
  };

  return (
    <div className="w-full h-full my-5 px-5">
      <div className="mx-auto sm:px-8">
        <div className="">
          <div>
            <h1 className="text-center border-b-2 text-xl pb-2 text-[#112164] font-medium">
              Booking History
            </h1>
          </div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Service
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                  </tr>
                </thead>
                <tbody>
                  {booking?.data?.map((booking: any, index: any) => (
                    <tr key={index}>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex">
                          <div className="flex-shrink-0 w-10 h-10">
                            <img
                              className="w-full h-full rounded-full"
                              src={
                                booking?.service?.images
                                  ? booking?.service?.images
                                  : "/default2.png"
                              }
                              alt=""
                            />
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {booking?.service?.name}
                            </p>
                            <p className="text-gray-600 whitespace-no-wrap">
                              {booking?.email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          ${booking?.service?.price}
                        </p>
                        <p className="text-gray-600 whitespace-no-wrap">USD</p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {booking?.category}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span
                            aria-hidden
                            className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                          ></span>
                          <span className="relative">{booking?.status}</span>
                        </span>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                        <button
                          onClick={() => handleDeleteBooking(booking?.id)}
                          type="button"
                          className="inline-block text-gray-500 hover:text-gray-700"
                        >
                          <BiTrash className="text-2xl hover:text-red-500" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;

Booking.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayoutRedux>{page}</DashboardLayoutRedux>;
};

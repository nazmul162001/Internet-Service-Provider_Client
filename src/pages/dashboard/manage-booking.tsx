import DashboardLayout from "@/components/Layouts/DashboardLayout";
import DashboardLayoutRedux from "@/components/Layouts/DashboardLayoutRedux";
import {
  useDeleteBookingMutation,
  useGetBookingQuery,
  useUpdateBookingStatusMutation,
} from "@/redux/feature/booking/bookingApiSlice";
import { ReactElement } from "react";
import { BiTrash } from "react-icons/bi";
import { ImCheckmark2 } from "react-icons/im";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const ManageBooking = () => {
  const { data: getBooking } = useGetBookingQuery({});
  const [updateBookingStatus] = useUpdateBookingStatusMutation();
  const [deleteBooking] = useDeleteBookingMutation();
  // console.log(getBooking?.data);

  // handle accept booking request
  const handleAcceptBooking = (id: any) => {
    const booking = getBooking?.data?.find((booking: any) => booking.id === id);

    if (!booking) {
      toast.info("Booking Not Found", {
        position: "bottom-right",
        autoClose: 3000,
      });
      return;
    }

    if (booking.status === "accepted") {
      toast.info("Booking already accepted", {
        position: "bottom-right",
        autoClose: 3000,
      });
      return;
    }

    // Show a confirmation dialog using SweetAlert2
    Swal.fire({
      title: "Confirm Accept Booking",
      text: "Are you sure you want to accept this booking?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Accept",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        updateBookingStatus({ id, newStatus: "accepted" })
          .unwrap()
          .then((response) => {
            toast.success("Booking Accepted", {
              position: "bottom-right",
              autoClose: 3000,
            });
          })
          .catch((error) => {
            console.error("Error updating booking status:", error);
          });
      }
    });
  };

  // handle accept booking request
  const handleDeleteBooking = (id: any) => {
    // Show a confirmation dialog using SweetAlert2
    Swal.fire({
      title: "Confirm Delete Booking",
      text: "Are you sure you want to delete this booking?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        // Proceed with the booking deletion
        deleteBooking(id)
          .unwrap()
          .then((response) => {
            toast.success("Booking Deleted", {
              position: "bottom-right",
              autoClose: 3000,
            });
          })
          .catch((error) => {
            console.error("Error deleting booking:", error);
          });
      }
    });
  };

  return (
    <div className="w-full h-full my-5 px-5">
      <div className="mx-auto sm:px-8">
        <div className="">
          <div>
            <h1 className="text-center border-b-2 text-xl pb-2 text-[#112164] font-medium">
              Manage Booking
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
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {getBooking?.data?.map((booking: any, index: any) => (
                    <tr>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex">
                          <div className="flex-shrink-0 w-10 h-10">
                            <img
                              className="w-full h-full rounded-full"
                              src={booking?.service?.images || "/default2.png"}
                              alt=""
                            />
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {booking?.service?.name}
                            </p>
                            <p className="text-gray-600 whitespace-no-wrap">
                              {booking?.service?.location}
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
                          {booking?.service?.category}
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
                          type="button"
                          className="inline-block text-gray-500 hover:text-gray-700"
                        >
                          <div className="flex items-center gap-2">
                            <BiTrash
                              onClick={() => handleDeleteBooking(booking?.id)}
                              className="text-2xl hover:text-red-500"
                            />

                            <div>
                              <ImCheckmark2
                                onClick={() => handleAcceptBooking(booking?.id)}
                                className="text-2xl hover:text-green-500"
                              />
                            </div>
                          </div>
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

export default ManageBooking;

ManageBooking.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayoutRedux>{page}</DashboardLayoutRedux>;
};

import DashboardLayout from "@/components/Layouts/DashboardLayout";
import { ReactElement, useState } from "react";
import { BiTrash } from "react-icons/bi";
import { BsPencil } from "react-icons/bs";
import { Modal, Input, Select } from "antd";
const { TextArea } = Input;
import { useForm, Controller } from "react-hook-form";
import {
  useGetUsersQuery,
  useUpdateProfileMutation,
} from "@/redux/feature/user/userApiSlice";
import DashboardLayoutRedux from "@/components/Layouts/DashboardLayoutRedux";
import { toast } from "react-toastify";

const ManageUser = () => {
  const { data: users } = useGetUsersQuery({});
  // console.log(users)
  const [updateProfile] = useUpdateProfileMutation();

  const [modal2Open, setModal2Open] = useState(false);
  const [modal3Open, setModal3Open] = useState(false);

  // const handleChange = (value: { value: string; label: React.ReactNode }) => {
  //   console.log(value)
  // }

  const { handleSubmit, control, reset } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    reset();
    setModal3Open(false);
  };

  // handle role
  const handleChange = (selectedRole: any, userId: any) => {
    // Find the user object in your data using the userId
    const userToUpdate = users?.data.find((user: any) => user.id === userId);

    if (userToUpdate) {
      // Create an updated profile object
      const updatedProfile = {
        ...userToUpdate,
        role: selectedRole.value,
      };

      // Send a request to update the user's profile with the new role
      updateProfile(updatedProfile)
        .unwrap()
        .then((response) => {
          // Handle the successful update, e.g., update user data or re-fetch the user list.
          toast.success("Role Change Successfully", {
            position: "bottom-right",
            autoClose: 3000,
          });
        })
        .catch((error: any) => {
          console.error("Error updating role:", error);
          // Handle the error, e.g., show an error message.
        });
    }
  };

  return (
    <div className="w-full h-full my-5 px-5">
      <div className="mx-auto sm:px-8">
        <div className="">
          <div>
            <div className="border-b-2 flex w-full justify-between pb-3">
              <h1 className="text-xl pb-2 text-[#112164] font-medium">
                Manage User
              </h1>

              <button
                onClick={() => setModal3Open(true)}
                className="flex items-center px-5 py-2 bg-[#0d99e5] text-white hover:bg-[#112164] gap-2"
              >
                Add User{" "}
                <span>
                  <BsPencil className="text-2xl" />{" "}
                </span>{" "}
              </button>
              <Modal
                title="Add User"
                centered
                open={modal3Open}
                onOk={() => setModal3Open(false)}
                footer={null}
                onCancel={() => setModal3Open(false)}
              >
                <form onSubmit={handleSubmit(onSubmit)}>
                  <label className="text-gray-500" htmlFor="email">
                    Email
                  </label>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <Input {...field} className="my-2" placeholder="Email" />
                    )}
                  />
                  <label className="text-gray-500" htmlFor="password">
                    Password
                  </label>
                  <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                      <Input.Password
                        {...field}
                        className="my-2"
                        placeholder="Password"
                      />
                    )}
                  />
                  <button
                    type="submit"
                    className="w-full py-1 bg-[#112164] text-white hover:bg-[#0d99e5]"
                  >
                    Add User
                  </button>
                </form>
              </Modal>
            </div>
          </div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      User Name
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Role
                    </th>
                    <th className="py-3 border-b-2 border-gray-200 bg-gray-100">
                      Action
                    </th>
                  </tr>
                </thead>
                {users?.data?.map((user: any) => (
                  <tbody key={user?.id}>
                    <tr>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex">
                          <div className="flex-shrink-0 w-10 h-10">
                            <img
                              className="w-full h-full rounded-full"
                              src={
                                user?.profileImage
                                  ? user.profileImage
                                  : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                              }
                              alt=""
                            />
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {user?.name ? user?.name : "Name Not Update"}
                            </p>
                            <p className="text-gray-600 whitespace-no-wrap">
                              {user?.email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {user?.phoneNumber
                            ? user?.phoneNumber
                            : "Phone Number Not Added"}
                        </p>
                      </td>

                      {user?.role === "super_admin" ? (
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="px-2 bg-red-300 rounded py-[2px]">
                            {user?.role}
                          </span>
                        </td>
                      ) : (
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span
                              aria-hidden
                              className="absolute inset-0 opacity-50 rounded-full"
                            ></span>
                            <Select
                              labelInValue
                              defaultValue={{
                                value: user.role,
                                label:
                                  user.role === "admin"
                                    ? "Admin"
                                    : user.role === "super_admin"
                                    ? "Super_Admin"
                                    : "User",
                              }}
                              style={{ width: 120 }}
                              onChange={(selectedRole) =>
                                handleChange(selectedRole, user.id)
                              }
                              options={[
                                {
                                  value: "user",
                                  label: "User",
                                },
                                {
                                  value: "admin",
                                  label: "Admin",
                                },
                              ]}
                            />
                          </span>
                        </td>
                      )}

                      <td className="py-5 border-b border-gray-200 bg-white text-sm text-right">
                        <button
                          type="button"
                          className=" text-gray-500 hover:text-gray-700 flex items-center gap-3"
                        >
                          <BiTrash className="text-2xl hover:text-red-500" />
                          <BsPencil
                            onClick={() => setModal2Open(true)}
                            className="text-2xl hover:text-green-500"
                          />
                          <Modal
                            title="Update User Profile"
                            centered
                            open={modal2Open}
                            onOk={() => setModal2Open(false)}
                            footer={null}
                            onCancel={() => setModal2Open(false)}
                          >
                            <label className="text-gray-500" htmlFor="name">
                              Name
                            </label>
                            <Input
                              className="my-2"
                              placeholder="Updated Name"
                            />
                            <label className="text-gray-500" htmlFor="email">
                              Email
                            </label>
                            <Input
                              className="my-2"
                              placeholder="Updated Email"
                            />

                            <label
                              className="text-gray-500"
                              htmlFor="phoneNumber"
                            >
                              Phone Number
                            </label>
                            <Input
                              className="my-2"
                              placeholder="Updated PhoneNumber"
                            />

                            <label
                              className="text-gray-500"
                              htmlFor="profileImage"
                            >
                              Image URL
                            </label>
                            <Input
                              className="my-2"
                              placeholder="profileImage"
                            />

                            <div className="w-full h-full my-3">
                              <button className="bg-[#112164] w-full text-white py-2">
                                Update User Profile
                              </button>
                            </div>
                          </Modal>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUser;

ManageUser.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayoutRedux>{page}</DashboardLayoutRedux>;
};

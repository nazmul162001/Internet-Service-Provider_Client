import { BsPencil } from "react-icons/bs";
import { BiTrash } from "react-icons/bi";
import React, { useState } from "react";
// import { Modal, Input, Image } from "antd";
import { Modal, Input, Select, Row, Col, Image } from "antd";
const { TextArea } = Input;
import { useForm, Controller } from "react-hook-form";
import {
  useDeleteServiceMutation,
  useUpdateServiceMutation,
} from "@/redux/feature/service/serviceApiSlice";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const ManageWhatWeDoCart = ({ service, bg }: any) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteServiceMutation] = useDeleteServiceMutation();
  const [updateService] = useUpdateServiceMutation();
  const { handleSubmit, control, reset } = useForm();

  const handleEditClick = () => {
    reset(service); // Pre-populate the form with service data
    setModalOpen(true);
  };

  // handle delete service
  const handleDelete = async (serviceId: any) => {
    // Show a SweetAlert confirmation dialog
    Swal.fire({
      title: "Are you sure?",
      text: "You are about to delete this service. This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it",
      cancelButtonText: "Cancel",
    }).then(async (result: any) => {
      if (result.isConfirmed) {
        try {
          const response = await deleteServiceMutation(serviceId);
          toast.success("Delete Service successful", {
            position: "bottom-right",
            autoClose: 3000,
          });
          console.log(response);
          // Handle success, e.g., update the UI.
        } catch (error) {
          console.error("Error deleting Service:", error);
          // Handle error, e.g., show an error message.
        }
      }
    });
  };

  const onSubmit = async (data: any) => {
    // Convert connectionCost and price to numbers
    data.connectionCost = parseFloat(data.connectionCost);
    data.price = parseFloat(data.price);

    try {
      const updatedService = await updateService(data).unwrap();
      toast.success("Update Service successful", {
        position: "bottom-right",
        autoClose: 3000,
      });
      reset();
      setModalOpen(false);
      // console.log(updatedService);
    } catch (error) {
      console.error("Error updating Service:", error);
    }
    // console.log("Original Data===============", data);
  };

  return (
    <div className="relative w-full h-full overflow-hidden card_main rounded cursor-pointer">
      <div
        className={`py-2 px-5 w-full h-full bg-[${bg}] border-2 card_body rounded`}
      >
        <span className="whiteOnHover block py-3">
          <Image
            width={60}
            src={service?.images ? service?.images : "/default2.png"}
          />
        </span>
        <h3 className="text-[#112164] whiteOnHover text-xl md:text-2xl">
          {service?.name}
        </h3>
        <h3 className=" text-lg text-[#0d99e5] px-2 whiteOnHover">
          ${service?.price}
        </h3>
        <p className="py-2 text-[#6c757d] font-bold font-sans text-sm whiteOnHover">
          category:{" "}
          <span className="font-normal font-sans">{service?.category}</span>
        </p>
        <p className="py-2 text-[#6c757d] font-normal font-sans text-sm whiteOnHover">
          {service?.description.slice(0, 50)}
        </p>

        <div className="custom_circle bg-[#0D99E5] absolute -top-32 right-32 w-36 h-28"></div>
        <div className="w-3/5 h-10 absolute bottom-3 left-1/2  transform -translate-x-1/2">
          <div className="w-full h-full relative">
            <div className=" w-full h-full flex justify-evenly items-center gap-3 cart_icon bg-[#269edf]">
              <BiTrash
                onClick={() => handleDelete(service?.id)}
                className="text-xl md:text-3xl lg:text-4xl text-white hover:text-red-500"
              />
              <BsPencil
                onClick={handleEditClick}
                className="text-xl md:text-3xl lg:text-4xl text-white hover:text-green-500"
              />
              <Modal
                title="Edit Service"
                centered
                open={modalOpen}
                onOk={() => setModalOpen(false)}
                footer={null}
                onCancel={() => setModalOpen(false)}
              >
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Row gutter={16}>
                    <Col span={12}>
                      <label className="text-gray-500" htmlFor="name">
                        Name
                      </label>
                      <Controller
                        name="name"
                        control={control}
                        render={({ field }) => (
                          <input
                            {...field}
                            className="border-2 w-full py-2 px-2 border-gray-300"
                            type="text"
                            placeholder="Updated Name"
                          />
                        )}
                      />
                    </Col>
                    <Col span={12}>
                      <label className="text-gray-500" htmlFor="price">
                        Price
                      </label>
                      <Controller
                        name="price"
                        control={control}
                        render={({ field }) => (
                          <input
                            {...field}
                            className="border-2 w-full py-2 px-2 border-gray-300"
                            type="number"
                            placeholder="Updated Price"
                          />
                        )}
                      />
                    </Col>
                  </Row>

                  <Row gutter={16}>
                    <Col span={12}>
                      <label className="text-gray-500" htmlFor="category">
                        Category
                      </label>
                      <Controller
                        name="category"
                        control={control}
                        defaultValue="wifiInternet"
                        render={({ field }) => (
                          <Select
                            {...field}
                            className="my-2"
                            style={{ width: "100%" }}
                            options={[
                              {
                                value: "wifiInternet",
                                label: "Wifi Internet",
                              },
                              {
                                value: "mobileConnection",
                                label: "Mobile Connection",
                              },
                              {
                                value: "tvBox",
                                label: "TV Box",
                              },
                              {
                                value: "smartHome",
                                label: "Smart Home",
                              },
                              {
                                value: "satelliteTv",
                                label: "Satellite TV",
                              },
                              {
                                value: "internet",
                                label: "Internet",
                              },
                              {
                                value: "broadband",
                                label: "Broadband",
                              },
                              {
                                value: "business",
                                label: "Business",
                              },
                            ]}
                          />
                        )}
                      />
                    </Col>
                    <Col span={12}>
                      <label className="text-gray-500" htmlFor="images">
                        Images
                      </label>
                      <Controller
                        name="images"
                        control={control}
                        render={({ field }) => (
                          <input
                            {...field}
                            className="border-2 w-full py-2 px-2 border-gray-300"
                            type="text"
                            placeholder="Updated Images"
                          />
                        )}
                      />
                    </Col>
                  </Row>

                  <Row gutter={16}>
                    <Col span={12}>
                      <label className="text-gray-500" htmlFor="district">
                        District
                      </label>
                      <Controller
                        name="district"
                        control={control}
                        render={({ field }) => (
                          <input
                            {...field}
                            className="border-2 w-full py-2 px-2 border-gray-300"
                            type="text"
                            placeholder="Updated District"
                          />
                        )}
                      />
                    </Col>
                    <Col span={12}>
                      <label className="text-gray-500" htmlFor="location">
                        Location
                      </label>
                      <Controller
                        name="location"
                        control={control}
                        render={({ field }) => (
                          <input
                            {...field}
                            className="border-2 w-full py-2 px-2 border-gray-300"
                            type="text"
                            placeholder="Updated Location"
                          />
                        )}
                      />
                    </Col>
                  </Row>

                  <Row gutter={16}>
                    <Col span={12}>
                      <label className="text-gray-500" htmlFor="description">
                        Description
                      </label>
                      <Controller
                        name="description"
                        control={control}
                        render={({ field }) => (
                          <input
                            {...field}
                            className="border-2 w-full py-2 px-2 border-gray-300"
                            type="text"
                            placeholder="Updated Description"
                          />
                        )}
                      />
                    </Col>
                    <Col span={12}>
                      <label className="text-gray-500" htmlFor="channel">
                        Channel
                      </label>
                      <Controller
                        name="channel"
                        control={control}
                        render={({ field }) => (
                          <input
                            {...field}
                            className="border-2 w-full py-2 px-2 border-gray-300"
                            type="text"
                            placeholder="Updated Channel"
                          />
                        )}
                      />
                    </Col>
                  </Row>

                  <Row gutter={16}>
                    <Col span={12}>
                      <label className="text-gray-500" htmlFor="hdChannel">
                        HD Channel
                      </label>
                      <Controller
                        name="hdChannel"
                        control={control}
                        render={({ field }) => (
                          <input
                            {...field}
                            className="border-2 w-full py-2 px-2 border-gray-300"
                            type="text"
                            placeholder="Updated HD Channel"
                          />
                        )}
                      />
                    </Col>
                    <Col span={12}>
                      <label className="text-gray-500" htmlFor="connectionCost">
                        Connection Cost
                      </label>
                      <Controller
                        name="connectionCost"
                        control={control}
                        render={({ field }) => (
                          <input
                            {...field}
                            className="border-2 w-full py-2 px-2 border-gray-300"
                            type="number"
                            placeholder="Updated Connection Cost"
                          />
                        )}
                      />
                    </Col>
                  </Row>

                  <Row gutter={16}>
                    <Col span={12}>
                      <label className="text-gray-500" htmlFor="status mr-5">
                        Status
                      </label>
                      <Controller
                        name="status"
                        control={control}
                        defaultValue="available"
                        render={({ field }) => (
                          <Select
                            {...field}
                            className="my-2"
                            style={{ width: "100%" }}
                            options={[
                              {
                                value: "available",
                                label: "Available",
                              },
                              {
                                value: "not available",
                                label: "Not Available",
                              },
                            ]}
                          />
                        )}
                      />
                    </Col>
                  </Row>

                  <div className="w-full h-full my-3">
                    <button className="bg-[#112164] w-full text-white py-2">
                      Update Service
                    </button>
                  </div>
                </form>
              </Modal>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#0000004f]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageWhatWeDoCart;

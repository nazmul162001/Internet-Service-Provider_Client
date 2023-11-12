import { useState } from "react";
import { Modal, Input } from "antd";
const { TextArea } = Input;
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsPencil } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import {
  useDeleteBlogMutation,
  useUpdateBlogMutation,
} from "@/redux/feature/blog/blogApiSlice";
import { EditOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";
const { Meta } = Card;
import { BiTrash } from "react-icons/bi";
import Swal from "sweetalert2";
const BlogCard = ({ blog }: any) => {
  const id = blog?.id;
  // console.log(blog);
  // console.log(id)
  const [modal8Open, setModal8Open] = useState(false);
  const { handleSubmit, control, reset } = useForm();
  const [updateBlog] = useUpdateBlogMutation();
  const [deleteBlog] = useDeleteBlogMutation();

  const handleDeleteBlog = (id: any) => {
    // Show a confirmation dialog using SweetAlert
    Swal.fire({
      title: "Confirm Delete",
      text: "Are you sure you want to delete this blog?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        // User confirmed, proceed with deletion
        deleteBlog(id)
          .unwrap()
          .then((response) => {
            toast.success("Blog Deleted Successfully", {
              position: "bottom-right",
              autoClose: 3000,
            });
            // You can add code here to refresh the blog list or update the UI
          })
          .catch((error) => {
            console.error("Error deleting blog:", error);
          });
      }
    });
  };

  // handle update Blog

  const onSubmit = async (blogData: any) => {
    try {
      // Make the API request to update the blog
      const response = await updateBlog({ id, ...blogData }).unwrap();
      // Close the modal
      setModal8Open(false);
      // Display a success message
      toast.success("Blog Updated Successfully", {
        position: "bottom-right",
        autoClose: 3000,
      });
      // console.log(response);
    } catch (error) {
      console.error("Error updating blog:", error);
      // Handle error here
    }
  };

  return (
    <>
      <Modal
        title="Update Blog"
        centered
        open={modal8Open}
        onOk={() => setModal8Open(false)}
        footer={null}
        onCancel={() => setModal8Open(false)}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="text-gray-500" htmlFor="title">
            Title
          </label>
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <Input {...field} className="my-2" placeholder="Title" />
            )}
          />
          <label className="text-gray-500" htmlFor="name">
            Name
          </label>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input {...field} className="my-2" placeholder="Name" />
            )}
          />
          <label className="text-gray-500" htmlFor="images">
            Images
          </label>
          <Controller
            name="images"
            control={control}
            render={({ field }) => (
              <Input {...field} className="my-2" placeholder="Images" />
            )}
          />
          <label className="text-gray-500" htmlFor="description">
            Description
          </label>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <TextArea
                {...field}
                className="my-2"
                placeholder="Description"
                autoSize={{ minRows: 3, maxRows: 5 }}
              />
            )}
          />
          <button
            type="submit"
            className="w-full py-1 bg-[#112164] text-white hover:bg-[#0d99e5]"
          >
            Update Blog
          </button>
        </form>
      </Modal>
      <div>
        <section className="w-full">
          <div className="card-container w-full cursor-pointer h-[450px] overflow-y-scroll relative">
            <div className="card-image">
              <img
                src={blog?.images || '/couple2.png'}
                alt="a brand new sports car"
              />
            </div>
            <div className="card-body">
              <span className="card-badge card-badge-blue">{blog?.title}</span>
              <h1>{blog?.name}</h1>
              <p className="card-subtitle">
                {blog?.description?.slice(0, 80)}{" "}
                {blog?.description?.length > 80 && (
                  <span className="text-blue-500">read more...</span>
                )}
              </p>
              <div className="card-author">
                <img
                  src="https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="author avatar"
                />
                <div className="author-info">
                  <p className="author-name">{blog?.user?.name || "Unknown"}</p>
                  <p className="post-timestamp">2h ago</p>
                </div>
              </div>
            </div>
            {/* action  */}
            <div className="absolute transform_show top-0 right-0 w-full h-full bg-[#0c07074d] flex justify-center items-end flex-col">
              <div className="mr-3">
                <span className="w-12 h-12 bg-[#0D99E5] mb-1 flex justify-center items-center rounded-lg">
                  <BsThreeDotsVertical className="text-xl text-white" />
                </span>
                <span
                  onClick={() => setModal8Open(true)}
                  className="w-12 h-12 bg-[#0D99E5] mb-1 flex justify-center items-center rounded-lg"
                >
                  <BsPencil className="text-xl text-white" />
                </span>
                <span
                  onClick={() => handleDeleteBlog(blog?.id)}
                  className="w-12 h-12 bg-[#0D99E5] mb-1 flex justify-center items-center rounded-lg"
                >
                  <BsTrash className="text-xl text-white" />
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogCard;

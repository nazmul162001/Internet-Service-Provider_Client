import DashboardLayout from "@/components/Layouts/DashboardLayout";
import { ReactElement, useState } from "react";
import { Modal, Input } from "antd";
const { TextArea } = Input;
import { useForm, Controller } from "react-hook-form";
import { BsPencil } from "react-icons/bs";
import Blog from "@/components/Blog/Blog";
import { toast } from "react-toastify";
import {
  useAddBlogMutation,
  useDeleteBlogMutation,
  useGetBlogsQuery,
  useUpdateBlogMutation,
} from "@/redux/feature/blog/blogApiSlice";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import { BiTrash } from "react-icons/bi";
import BlogCard from "@/components/Blog/BlogCard";
import DashboardLayoutRedux from "@/components/Layouts/DashboardLayoutRedux";
import { useGetProfileQuery } from "@/redux/feature/user/userApiSlice";

const { Meta } = Card;

const ManageBlog = () => {
  const [modal4Open, setModal4Open] = useState(false);

  const { handleSubmit, control, reset } = useForm();

  const [addBlog] = useAddBlogMutation();
  const { data: blogs } = useGetBlogsQuery({});
  const [updateBlog] = useUpdateBlogMutation();
  const [deleteBlog] = useDeleteBlogMutation();
  const { data: profile } = useGetProfileQuery({});
  // console.log(blogs?.data)

  // handle add Blog
  const onSubmit = async (data: any) => {
    try {
      // console.log(data)
      const response = await addBlog({
        data: { ...data, userId: profile?.data?.id },
      });
      toast.success("Blog added Successfully", {
        position: "bottom-right",
        autoClose: 3000,
      });
      // window.location.reload()
      // console.log(response);
      reset();
      setModal4Open(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="w-full h-full">
      <div className="border-b-2 flex justify-between pb-2">
        <h1 className="text-xl pb-2 text-[#112164] font-medium">Manage Blog</h1>

        <button
          onClick={() => setModal4Open(true)}
          className="flex items-center px-5 py-2 bg-[#0d99e5] text-white hover:bg-[#112164] gap-2"
        >
          Add Blog{" "}
          <span>
            {" "}
            <BsPencil className="text-2xl" />
          </span>{" "}
        </button>
        <Modal
          title="Add Blog"
          centered
          open={modal4Open}
          onOk={() => setModal4Open(false)}
          footer={null}
          onCancel={() => setModal4Open(false)}
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
              Add Blog
            </button>
          </form>
        </Modal>

        {/* modal for update blog  */}
      </div>
      {/* blog card  */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 my-5 px-5">
        {blogs?.data?.map((blog: any) => (
          <BlogCard blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default ManageBlog;

ManageBlog.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayoutRedux>{page}</DashboardLayoutRedux>;
};

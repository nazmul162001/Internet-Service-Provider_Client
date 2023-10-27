import { useGetProfileQuery } from "@/redux/feature/user/userApiSlice";

function useUserRole() {
  const { data: profile } = useGetProfileQuery();
  return profile?.data?.role;
}

export default useUserRole;

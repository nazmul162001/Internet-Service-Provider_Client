import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { useRouter } from "next/router";

const CustomFooter = () => {
  const router = useRouter();
  return (
    <footer className="w-full h-full mb-5 mt-32 px-5 md:px-10">
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-10">
        <div>
          <h1 className="text-[#112164] font-bold text-xl border_b">
            About company
          </h1>
          <p className="text-[#6c757d] font-sans text-sm font-medium py-10">
            We’re developing the ultimate communications network to power
            high-quality, secure, affordable, fast connections.
          </p>
          {/* social icon  */}
          <div className="flex items-center flex-wrap gap-3">
            <div className="w-12 h-12 hover:bg-[#344EB8] bg-[#E3E6F2] flex justify-center items-center icon_main rounded-lg cursor-pointer transition-all duration-150">
              <BiLogoFacebook className="text-2xl icon_" />
            </div>
            <div className="w-12 h-12 hover:bg-[#344EB8] bg-[#E3E6F2] flex justify-center items-center icon_main rounded-lg cursor-pointer transition-all duration-150">
              <AiOutlineTwitter className="text-2xl icon_" />
            </div>
            <div className="w-12 h-12 hover:bg-[#344EB8] bg-[#E3E6F2] flex justify-center items-center icon_main rounded-lg cursor-pointer transition-all duration-150">
              <BsYoutube className="text-2xl icon_" />
            </div>
            <div className="w-12 h-12 hover:bg-[#344EB8] bg-[#E3E6F2] flex justify-center items-center icon_main rounded-lg cursor-pointer transition-all duration-150">
              <BsLinkedin className="text-2xl icon_" />
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-[#112164] font-bold text-xl border_b">
            Contacts
          </h1>
          <div className="flex items-center gap-2 pt-8">
            <span>
              <GrLocation className="text-[#112164] text-xl" />
            </span>
            <p className="text-[#6c757d]">
              5002 Example Street Los Angeles, CA 90034
            </p>
          </div>

          <div className="flex items-center gap-2 pt-8">
            <span>
              <MdEmail className="text-[#112164] text-xl" />
            </span>
            <p className="text-[#6c757d]">example@company.com</p>
          </div>

          <div className="flex items-center gap-2 pt-8">
            <span>
              <BiPhoneCall className="text-[#112164] text-xl" />
            </span>
            <p className="text-[#6c757d]">012-2453-6353</p>
          </div>
        </div>

        <div>
          <h1 className="text-[#112164] font-bold text-xl border_b">Brows</h1>
          <div>
            <ul className="pt-8">
              <li className="text-[#6c757d] font-sans font-medium py-1 cursor-pointer hover:text-[#0d99e5] transition-all duration-150">
                Home
              </li>
              <li className="text-[#6c757d] font-sans font-medium py-1 cursor-pointer hover:text-[#0d99e5] transition-all duration-150">
                Service
              </li>
              <li
                onClick={() => router.push("/about")}
                className="text-[#6c757d] font-sans font-medium py-1 cursor-pointer hover:text-[#0d99e5] transition-all duration-150"
              >
                About Us
              </li>
              <li className="text-[#6c757d] font-sans font-medium py-1 cursor-pointer hover:text-[#0d99e5] transition-all duration-150">
                Our Team
              </li>
              <li className="text-[#6c757d] font-sans font-medium py-1 cursor-pointer hover:text-[#0d99e5] transition-all duration-150">
                Blogs
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h1 className="text-[#112164] font-bold text-xl border_b">
            Quick Links
          </h1>
          <div>
            <ul className="pt-8">
              <li className="text-[#6c757d] font-sans font-medium py-1 cursor-pointer hover:text-[#0d99e5] transition-all duration-150">
                Package
              </li>
              <li className="text-[#6c757d] font-sans font-medium py-1 cursor-pointer hover:text-[#0d99e5] transition-all duration-150">
                Connection
              </li>
              <li className="text-[#6c757d] font-sans font-medium py-1 cursor-pointer hover:text-[#0d99e5] transition-all duration-150">
                Service Plus
              </li>
              <li className="text-[#6c757d] font-sans font-medium py-1 cursor-pointer hover:text-[#0d99e5] transition-all duration-150">
                Primacy Policy
              </li>
              <li className="text-[#6c757d] font-sans font-medium py-1 cursor-pointer hover:text-[#0d99e5] transition-all duration-150">
                Coverage Maps
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CustomFooter;

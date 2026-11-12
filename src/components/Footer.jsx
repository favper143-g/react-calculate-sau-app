import { FaFacebook, FaLine } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
        <div className="mt-15">
            <p className="font-itim text-gray-700">
                &copy;2026 CAL-SAU. Allright Reserved. Created by fav per 
            </p>
            <p className="flex justify-center gap-3 mt-3">
              <FaFacebook className="text-blue-600 text-3xl" />
              <FaLine className="text-green-600 text-3xl" />
              <FaSquareXTwitter className="text-3xl" />
            </p>
        </div> 
    </>
  )
}

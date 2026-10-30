import bmr from "./../assets/bmr.png"
import { Link } from "react-router"

export default function Bmr() {
  return (
    <>
      <div className="w-200 border-2 flex flex-col items-center p-15 mt-20 mx-auto border-gray-100 shadow-2xl">
        
        <p className="text-3xl font-kanit font-bold text-center">
          BMR Calculator
        </p>
        <p className="text-lg font-kanit text-center text-gray-700">
          คำนวณ BMR
        </p>

        <img src={bmr} alt="bmr" className="mt-5 w-30"/>

        <form action="" className="w-full flex flex-col">
          <label htmlFor="" className="font-kanit font-bold">ป้อนน้ำหนัก (Kg)</label>
          <input type="number" name="" id="" className="border border-gray-500 rounded-sm p-2"/>

          <label htmlFor="" className="font-kanit font-bold mt-3">ป้อนส่วนสูง (cm)</label>
          <input type="number" name="" id="" className="border border-gray-500 rounded-sm p-2"/>


          <label htmlFor="" className="font-kanit font-bold mt-3">ป้อนอายุ (ปี)</label>
          <input type="number" name="" id="" className="border border-gray-500 rounded-sm p-2"/>


          <div className="mt-3">
            <label htmlFor="" className="font-kanit font-bold mt-5">เพศ:</label>
              <div class="flex items-center mb-2">
                <input type="radio" id="male" name="gender" value="male" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" checked />
                <label for="male" className="ml-2 text-sm text-gray-700">ชาย</label>
              </div>
              
              <div class="flex items-center">

                <input type="radio" id="female" name="gender" value="female" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                <label for="female" className="ml-2 text-sm text-gray-700">หญิง</label>
              </div>
          </div>


          <div className="flex gap-10">
            <button className="bg-purple-600 text-white p-2 mt-3 rounded-lg font-kanit font-bold hover:bg-purple-800 cursor-pointer w-full">
            คำนวณ BMR
            </button>

            <button className="bg-red-600 text-white p-2 mt-3 rounded-lg font-kanit font-bold hover:bg-red-800 cursor-pointer w-full">
            รีเซ็ต
            </button>
          </div>
        </form>
        <div className="flex justify-center mt-3 gap-5">
          <p className="font-kanit font-bold mt-5">ค่า BMR ที่คำนวณได้</p>
          <p className="font-kanit font-bold mt-5 text-blue-600">0.00</p>
        </div>

        <Link to="/" className="w-full text-center bg-gray-400 text-white p-2 mt-5 rounded-lg font-kanit font-bold">
          กลับหน้าหลัก
        </Link>
      </div>
    </>
  )
}

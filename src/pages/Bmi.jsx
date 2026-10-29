import bmi from "./../assets/bmi.png"
import { Link } from "react-router"
export default function Bmi() {
  return (
    <>
      <div className="w-200 border-2 flex flex-col items-center p-15 mt-40 mx-auto border-gray-100 shadow-2xl">

        {/* แสดงชื่อคำนวณ */}
        <p className="text-3xl font-kanit font-bold text-center">
          BMI (ดัชนีมวลกาย)
        </p>
        <p className="text-lg font-kanit text-center text-gray-700">
          คำนวณค่าดัชนีมวลกาย
        </p>

        {/* แสดงรูป */}
        <img src={bmi} alt="bmi" className="mt-5 w-30"/>


        {/* ส่วนของ form ให้ผุ้ใช้เลือกคลิก */}
        <form action="" className="w-full flex flex-col">
          <label htmlFor="" className="font-kanit font-bold">ป้อนน้ำหนัก (Kg)</label>
          <input type="number" name="" id="" className="border border-gray-500 rounded-sm p-2"/>

          <label htmlFor="" className="font-kanit font-bold mt-5">ป้อนน้ำหนัก (cm)</label>
          <input type="number" name="" id="" className="border border-gray-500 rounded-sm p-2"/>

          <button className="bg-blue-600 text-white p-2 mt-3 rounded-sm font-kanit font-bold hover:bg-blue-800 cursor-pointer">
            คำนวณ
          </button>

          <button className="bg-gray-600 text-white p-2 mt-3 rounded-sm font-kanit font-bold hover:bg-gray-800 cursor-pointer">
            ยกเลิก
          </button>
        </form>

        {/* ส่วนแสดงผล */}
        <div className="flex justify-center mt-5 gap-5">
          <p className="font-kanit font-bold mt-5">ค่า BMI ที่คำนวณได้</p>
          <p className="font-kanit font-bold mt-5 text-blue-600">0.00</p>
        </div>

        {/* ลิงค์กลับไปหน้าหลัก */}
        <Link to="/" className="w-full text-center bg-gray-400 text-white p-2 mt-2 rounded-sm font-kanit font-bold">
          กลับหน้าหลัก
        </Link>
      </div> 
    </>
  )
}

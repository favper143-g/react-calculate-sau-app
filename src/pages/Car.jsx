import car from "./../assets/car.png"
import { Link } from "react-router"
export default function Car() {
  return (
    <>
      <div className="w-200 border-2 flex flex-col items-center p-15 mt-20 mx-auto border-gray-100 shadow-2xl">

        {/* แสดงชื่อคำนวณ */}
        <p className="text-3xl font-kanit font-bold text-center">
          Car Installment Calculator 
        </p>
        <p className="text-lg font-kanit text-center text-gray-700">
          คำนวณ Car Installment 
        </p>

        {/* แสดงรูป */}
        <img src={car} alt="car" className="mt-5 w-30"/>
        
        <form action="" className="w-full flex flex-col">
          <label htmlFor="" className="font-kanit font-bold">ชื่อผู้คำนวณ</label>
          <input type="text" name="" id="" className="border border-gray-500 rounded-sm p-2"/>

          <label htmlFor="" className="font-kanit font-bold mt-5">ราคารถ (บาท)</label>
          <input type="number" name="" id="" className="border border-gray-500 rounded-sm p-2"/>

          <label htmlFor="" className="font-kanit font-bold mt-5">ดอกเบี้ยต่อปี (%)</label>
          <input type="number" name="" id="" className="border border-gray-500 rounded-sm p-2"/>

          <div className="mt-5">
            <label htmlFor="" className="font-kanit font-bold">เงินดาวน์ (%)</label>
            <div className="flex items-center space-x-4">
    
              <div className="flex items-center">
                <input type="radio" id="dp-15" name="downpayment" value="15" class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" checked />
                <label for="dp-15" class="ml-1 text-sm text-gray-700">15%</label>
              </div>
              
              <div className="flex items-center">
                <input type="radio" id="dp-20" name="downpayment" value="20" class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                <label for="dp-20" class="ml-1 text-sm text-gray-700">20%</label>
              </div>

              <div className="flex items-center">
                <input type="radio" id="dp-25" name="downpayment" value="25" class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                <label for="dp-25" class="ml-1 text-sm text-gray-700">25%</label>
              </div>

              <div className="flex items-center">
                <input type="radio" id="dp-30" name="downpayment" value="30" class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                <label for="dp-30" class="ml-1 text-sm text-gray-700">30%</label>
              </div>

              <div className="flex items-center">
                <input type="radio" id="dp-35" name="downpayment" value="35" class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                <label for="dp-35" class="ml-1 text-sm text-gray-700">35%</label>
              </div>
            </div>
          </div>

          <div class="mt-5">
            <label for="installment-months" className="font-kanit font-bold">จำนวนเดือนที่ผ่อน</label>
            <select id="installment-months" name="installment-months" className="w-full border border-gray-300 rounded-md p-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="24">24 เดือน</option>
              <option value="36">36 เดือน</option>
              <option value="48">48 เดือน</option>
              <option value="60">60 เดือน</option>
              <option value="72">72 เดือน</option>
              <option value="84">84 เดือน</option>
            </select>
          </div>

          <div className="flex gap-10 mt-5">
            <button className="bg-blue-600 text-white p-2 mt-3 rounded-lg font-kanit font-bold hover:bg-blue-800 cursor-pointer w-full">
              คำนวณ
            </button>

            <button className="bg-gray-600 text-white p-2 mt-3 rounded-lg font-kanit font-bold hover:bg-gray-800 cursor-pointer w-full">
              ล้างข้อมูล
            </button>
          </div>
        </form>

        <div className="flex justify-center mt-3 gap-5">
          <p className="font-kanit font-bold mt-5">ผ่อนชำระต่อเดือน:</p>
          <p className="font-kanit font-bold mt-5 text-blue-600">0.00</p>
        </div>

        <Link to="/" className="w-full text-center bg-gray-400 text-white p-2 mt-5 rounded-lg font-kanit font-bold">
          กลับหน้าหลัก
        </Link>
      </div> 
    </>
  )
}

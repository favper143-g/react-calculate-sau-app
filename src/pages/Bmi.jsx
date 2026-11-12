import bmi from "./../assets/bmi.png"
import { Link } from "react-router"
import { useState } from "react"
import Swal from 'sweetalert2'
import Footer from './../components/Footer'
export default function Bmi() {
  // สร้าง state ให้แมพกับข้อมูลที่จะบริหารจัดการ (handle) บน component
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [bmiValue, setBmiValue] = useState('0.00')

  // สร้างฟังก์ชัน คำนวณ BMI
  const handleCalBmiClick = (e) => {
    e.preventDefault()
    
    // Validate UI
    if (weight === '' || height ==='') {
      Swal.fire ({
        icon: 'warning',
        title: 'คำเตือน',
        text: 'กรุณาป้อนข้อมูลให้ครบถ้วน',
        confirmButtonText: 'ตกลง',
      })
      return // อย่าลืมใส่
    }

    // พร้อมคำนวณ ต้องแปลง state ให้เป็นตัวเลขก่อน
    let w = Number(weight)
    let h = Number(height)
    let bmiResult = w / ((h/100) * (h/100))

    // นำผลที่ได้ไปกำหนดให้กับ state ที่แสดงผล bmi
    setBmiValue( bmiResult.toFixed(2))

  }

  // Create function Clear screen to Default
  const handleCancelClick = (e) => {
    e.preventDefault()
    setWeight('')
    setHeight('')
    setBmiValue('0.00')
  }
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
          <input type="number" name="" id="" 
            value={weight} onChange={(e)=>setWeight(e.target.value)}
            className="border border-gray-500 rounded-sm p-2"/>

          <label htmlFor="" className="font-kanit font-bold mt-5">ป้อนส่วนสูง (cm)</label>
          <input type="number" name="" id="" 
            value={height} onChange={(e)=>setHeight(e.target.value)}
            className="border border-gray-500 rounded-sm p-2"/>

          <button onClick={handleCalBmiClick} 
            className="bg-blue-600 text-white p-2 mt-3 rounded-sm font-kanit font-bold hover:bg-blue-800 cursor-pointer">
            คำนวณ
          </button>

          <button onClick={handleCancelClick} 
            className="bg-gray-600 text-white p-2 mt-3 rounded-sm font-kanit font-bold hover:bg-gray-800 cursor-pointer">
            ยกเลิก
          </button>
        </form>

        {/* ส่วนแสดงผล */}
        <div className="flex justify-center mt-5 gap-5">
          <p className="font-kanit font-bold mt-5">ค่า BMI ที่คำนวณได้</p>
          <p className="font-kanit font-bold mt-5 text-blue-600">
            {bmiValue}
          </p>
        </div>

        {/* ลิงค์กลับไปหน้าหลัก */}
        <Link to="/" className="w-full text-center bg-gray-400 text-white p-2 mt-2 rounded-sm font-kanit font-bold">
          กลับหน้าหลัก
        </Link>

      </div> 
      <Footer />
    </>
  )
}

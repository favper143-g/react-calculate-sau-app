import bmr from "./../assets/bmr.png"
import { Link } from "react-router"
import { useState } from "react"
import Swal from "sweetalert2";

export default function Bmr() {
  // สร้าง state
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [bmrValue, setBmrValue] = useState('0.00');

  // สร้่างฟังก์ชัน คำนวณ BMR
  const handleCalBmrClick = (e) => {
    e.preventDefault();

    //Validate input
    if (weight === '' || height === '' || age === '') {
      Swal.fire({
        icon: 'error',
        title: 'คำเตือน',
        text: 'กรุณาป้อนข้อมูลให้ครบถ้วน',
        confirmButtonText: 'ตกลง',
      })
      return;
    }

    // convert State to Number
    const w = Number(weight);
    const h = Number(height);
    const a = Number(age);
    let bmrResult;

    if (gender === 'male') {
      bmrResult = 66 + (13.7 * w) + (5 * h) - (6.8 * a);
    }else{
      bmrResult = 655 + (9.6 * w) + (1.8 * h) - (4.7 * a);
    }
    
    setBmrValue(bmrResult.toFixed(2));
  }

  const handleResetClick = (e) => {
    e.preventDefault();
    setWeight('');
    setHeight('');
    setAge('');
    setGender('male');
    setBmrValue('0.00');
  }
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
          <input 
            type="number"
            placeholder="น่้ำหนัก"
            value={weight}
            onChange={(e) => setWeight(e.target.value)} 
            name="" 
            id="" 
            className="border border-gray-500 rounded-sm p-2"/>

          <label htmlFor="" className="font-kanit font-bold mt-3">ป้อนส่วนสูง (cm)</label>
          <input 
            type="number" 
            placeholder="ส่วนสูง"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            name="" 
            id="" 
            className="border border-gray-500 rounded-sm p-2"/>


          <label htmlFor="" className="font-kanit font-bold mt-3">ป้อนอายุ (ปี)</label>
          <input 
            type="number"
            placeholder="อายุ"
            value={age}
            onChange={(e) => setAge(e.target.value)} 
            name="" 
            id="" 
            className="border border-gray-500 rounded-sm p-2"/>


          <div className="mt-3">
            <label htmlFor="" className="font-kanit font-bold mt-5">เพศ:</label>
              <div class="flex items-center mb-2">
                <input 
                  type="radio" 
                  id="male" 
                  name="gender" 
                  value="male"
                  checked={gender === "male"}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" checked />
                <label for="male" className="ml-2 text-sm text-gray-700">ชาย</label>
              </div>
              
              <div class="flex items-center">

                <input 
                  type="radio" 
                  id="female" 
                  name="gender" 
                  value="female" 
                  checked={gender === "female"}
                  onChange={(e) => setGender(e.target.value)} 
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                <label for="female" className="ml-2 text-sm text-gray-700">หญิง</label>
              </div>
          </div>


          <div className="flex gap-10">
            <button onClick={handleCalBmrClick} 
              className="bg-purple-600 text-white p-2 mt-3 rounded-lg font-kanit font-bold hover:bg-purple-800 cursor-pointer w-full">
              คำนวณ BMR
            </button>

            <button onClick={handleResetClick}
              className="bg-red-600 text-white p-2 mt-3 rounded-lg font-kanit font-bold hover:bg-red-800 cursor-pointer w-full">
              รีเซ็ต
            </button>
          </div>
        </form>
        <div className="flex justify-center mt-3 gap-5">
          <p className="font-kanit font-bold mt-5">ค่า BMR ที่คำนวณได้</p>
          <p className="font-kanit font-bold mt-5 text-blue-600">
            {bmrValue}
          </p>
        </div>

        <Link to="/" className="w-full text-center bg-gray-400 text-white p-2 mt-5 rounded-lg font-kanit font-bold">
          กลับหน้าหลัก
        </Link>
      </div>
    </>
  )
}


import calculate from "./../assets/calculate.png"
import CardMenu from "./../components/CardMenu"
import Bmi from "./../assets/bmi.png"
import Bmr from "./../assets/bmr.png"
import Car from "./../assets/car.png"
import Footer from "./../components/Footer"
import { Link } from "react-router"
export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center">
        {/* แสดงรูป */}
        <img src={calculate} alt="calculate" className="w-30 mt-20" />

        {/* แสดงชื่อเว็บ */}
        <p className="font-kanit text-3xl font-bold mt-5">
          เครื่องคำนวณออนไลน์
        </p>
        <p className="font-itim text-xl text=gray-700">
          เลือกการคำนวณที่คุณต้องการจากเมนูด้านล่าง
        </p>

        {/* แสดงเมนู 3 เมนู */}
        <div className="flex gap-10 mt-20">
          <Link to="/bmi">
            <CardMenu imgShow={Bmi} titleShow="BMI (ดัชนีมวลกาย)" sTitleShow="คำนวณน้ำหนักและส่วนสูงวาเหมาะสมหรือไม่" />
          </Link>
          <Link to="/bmr">
            <CardMenu imgShow={Bmr} titleShow="BMR (อัตราเผาผลาญร่างกาย)" sTitleShow="คำนวณอัตราเผาผลาญที่ร่างกายต้องการ" />
          </Link>
          <Link to="/car">
            <CardMenu imgShow={Car} titleShow="Car (เงินผ่อนรถต่อเดือน)" sTitleShow="คำนวณเงินผ่อนรถยนตืหรือรถเครื่องต่อเดือน" />
          </Link>
        </div>

        {/* footer */}
        <Footer />
      </div> 
    </>
  )
}

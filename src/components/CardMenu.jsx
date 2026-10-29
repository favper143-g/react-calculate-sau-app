export default function CardMenu({imgShow, titleShow, sTitleShow}) {
  return (
    <>
        <div className="w-90 border border-gray-200 p-10 rounded-2xl shadow-2xl flex flex-col items-center"> 
            <img src={imgShow} alt="bmi picture" className="w-35"/>

            <p className="mt-4 font-kanit text-xl font-bold text-center">
                {titleShow}
            </p>

            <p className="mt-4 font-charm text-lg text-gray-500 text-center">
                {sTitleShow}
            </p>
        </div>
    </>
  )
}

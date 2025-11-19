export default function ProductsSection() {
    return (
        <div className="flex flex-col justify-center items-center mx-5 gap-10">
            <div className="bg-orange-strong flex flex-col xl:flex-row xl:gap-32 items-center gap-5 justify-center max-w-[327px] sm:max-w-[1000px] pt-20 pb-10 w-full rounded-xl ">
                {/* ZX9 SPEAKER */}
                <img src="assets\home\desktop\image-speaker-zx9.png" alt="headphone" className="w-40 h-52 sm:w-[197px] sm:h-[237px]  xl:w-[410px] xl:h-[493px] relative xl:top-12" />
                <div className="flex flex-col justify-center items-center gap-5">
                    <h1 className="text-white uppercase text-4xl xl:text-6xl text-center font-bold mt-5 xl:text-left w-[280px]">zx9 <br />speaker</h1>
                    <p className="w-[280px] text-center xl:text-left text-white opacity-75 text-[15px]">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <button className="w-[160px] h-[48px] uppercase text-white bg-black-strong xl:self-start">see product</button>
                </div>
            </div>
            {/*ZX7 SPEAKER*/}
            <div id="speaker" className="w-full max-w-[327px] h-[320px] sm:max-w-[1000px] rounded-xl flex flex-col justify-center gap-6 px-5 lg:px-20">
                <h1 className="text-black-strong uppercase text-[28px] font-bold">zx7 speaker</h1>
                <button className="w-[160px] h-[48px] uppercase text-black-strong border border-black-strong font-bold bg-transparent xl:self-start">see product</button>
            </div>
            {/*YX1 EARPHOONES*/}
            <div className="w-full max-w-[327px]   sm:max-w-[1000px] flex  justify-center gap-6 rounded-xl ">
                <div className="bg-red w-full flex flex-col sm:flex-row gap-6 ">
                    <img id="earphones" src="assets\home\desktop\image-earphones-yx1.jpg" alt="earphones" className="w-full rounded-xl sm:flex-1" />
                    <div className="bg-grey-strong indent-5 sm:indent-14 h-[200px] sm:h-[320px] flex flex-col justify-center gap-7 sm:flex-1 rounded-xl">
                        <h2 className="uppercase text-black-strong font-bold text-[28px] mt-5">yx1 earphones</h2>
                        <button className="sm:ml-14 ml-5 w-[160px] h-[48px] uppercase text-black-strong border border-black-strong font-bold bg-transparent xl:self-start">see product</button>
                    </div>
                </div>


            </div>
        </div>
    )
}
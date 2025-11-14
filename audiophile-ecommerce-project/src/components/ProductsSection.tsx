export default function ProductsSection() {
    return (
        <div className="flex flex-col justify-center items-center mx-5">
            <div className="bg-orange-strong flex flex-col xl:flex-row xl:gap-32 items-center gap-5 justify-center max-w-[327px] sm:max-w-[1000px] pt-20 pb-10 w-full rounded-xl ">
                {/*SPEAKER */}
                <img src="assets\home\desktop\image-speaker-zx9.png" alt="headphone" className="w-40 h-52 sm:w-[197px] sm:h-[237px]  xl:w-[410px] xl:h-[493px] relative xl:top-12" />
                <div className="flex flex-col justify-center items-center gap-5">
                    <h1 className="text-white uppercase text-4xl xl:text-6xl text-center font-bold mt-5 xl:text-left w-[280px]">zx9 <br />speaker</h1>
                    <p className="w-[280px] text-center xl:text-left text-white opacity-75 text-[15px]">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <button className="w-[160px] h-[48px] uppercase text-white bg-black-strong xl:self-start">see product</button>
                </div>
            </div>

            <div id="speaker" className="w-full max-w-[327px] h-[320px] sm:max-w-[1000px] rounded-xl flex flex-col justify-center gap-6 px-5 lg:px-20">
                <h1 className="text-black-strong uppercase text-[28px] font-bold">zx7 speaker</h1>
                <button className="w-[160px] h-[48px] uppercase text-black-strong border border-black-strong font-bold bg-transparent xl:self-start">see product</button>
            </div>
        </div>
    )
}
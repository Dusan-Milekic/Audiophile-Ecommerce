export default function HeroSection() {


    return (
        <div className="bg-[#121212]">
            <div id="hero-section" className="h-[55vh] flex justify-center items-center max-w-[1110px] mx-auto xl:justify-start  lg:px-10">
                <div className="w-[379px] h-[346px] flex flex-col justify-center gap-4 ">


                    <h2 className="uppercase text-sm text-white opacity-50 tracking-[0.4em] text-center lg:text-left">new product</h2>
                    <h1 className="uppercase text-white font-bold text-[40px] text-center leading-tight lg:text-left">xx99 mark ii headphones</h1>
                    <p className="font-medium text-white opacity-50 text-center lg:text-left">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                    <button className="uppercase w-40 h-12 bg-orange-strong text-white block text-[13px] font-bold mx-auto lg:mx-0">see product</button>
                </div>
            </div>
        </div>

    )
}
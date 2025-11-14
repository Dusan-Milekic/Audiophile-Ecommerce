export default function CategorySection() {

    return (
        <div className={`bg-white flex flex-col items-center gap-20 pt-24 pb-10  sm:flex-row sm:gap-5 sm:justify-center sm:px-5`}>
            {/*Headphones*/}
            <div className="bg-grey-strong w-80 h-40 relative  rounded-xl">
                <img src="assets/headphones-menu.png" alt="headphone" className="mx-auto absolute -top-14 left-1/2 -translate-x-1/2" />
                <h3 className="uppercase font-bold text-center mt-20">headphones</h3>
                <div className="flex items-center gap-[13px] justify-center py-4">
                    <p className="uppercase opacity-50 text-black-strong font-bold">shop</p>
                    <img src="assets/shared/desktop/icon-arrow-right.svg" alt="" />
                </div>

            </div>
            {/*Speakers*/}
            <div className="bg-grey-strong w-80 h-40 relative  rounded-xl">
                <img src="assets/speakers-menu.png" alt="headphone" className="mx-auto absolute -top-14 left-1/2 -translate-x-1/2" />
                <h3 className="uppercase font-bold text-center mt-20">speakers</h3>
                <div className="flex items-center gap-[13px] justify-center py-4">
                    <p className="uppercase opacity-50 text-black-strong font-bold">shop</p>
                    <img src="assets/shared/desktop/icon-arrow-right.svg" alt="" />
                </div>

            </div>



            {/*Earhphones*/}
            <div className="bg-grey-strong w-80 h-40 relative  rounded-xl">
                <img src="assets/earphones-menu.png" alt="headphone" className="mx-auto absolute -top-14 left-1/2 -translate-x-1/2" />
                <h3 className="uppercase font-bold text-center mt-20">earphones</h3>
                <div className="flex items-center gap-[13px] justify-center py-4">
                    <p className="uppercase opacity-50 text-black-strong font-bold">shop</p>
                    <img src="assets/shared/desktop/icon-arrow-right.svg" alt="" />
                </div>

            </div>
        </div>
    )
}
import { useState } from "react"
export default function Navigation() {

    // States 
    const [hamburgerClicked, setHamburgerClick] = useState(false);


    return (
        <div className="bg-black-strong">

            <nav className="flex justify-around bg-black-strong items-center py-8 md:justify-between md:px-8 xl:justify-between max-w-[1110px] mx-auto ">

                <div className="md:flex items-center gap-7 hidden xl:hidden">
                    <img src="assets/shared/tablet/icon-hamburger.svg" alt="hamburger" className="w-4 h-4 cursor-pointer" onClick={() => setHamburgerClick(!hamburgerClicked)} />
                    <img src="audiophile.svg" alt="logo" />
                </div>


                <img src="assets/shared/tablet/icon-hamburger.svg" alt="hamburger" className="w-4 h-4 md:hidden cursor-pointer" onClick={() => setHamburgerClick(!hamburgerClicked)} />

                <img src="audiophile.svg" alt="logo" className="md:hidden" />



                <img src="audiophile.svg" alt="logo" className="hidden xl:block" />
                <ul className="uppercase xl:flex  text-[13px] font-bold  text-white gap-[34px] hidden">
                    <li className="hover:text-orange-strong">home</li>
                    <li className="hover:text-orange-strong">headphones</li>
                    <li className="hover:text-orange-strong">speakers</li>
                    <li className="hover:text-orange-strong">earphones</li>
                </ul>



                <img src="assets/shared/desktop/icon-cart.svg" alt="cart" />
            </nav>


            {/*Hamburger menu navigation*/}
            <div className={`bg-white ${hamburgerClicked ? 'flex' : 'hidden'} flex-col items-center gap-20 pt-24 pb-10  xl:hidden sm:flex-row sm:gap-5 sm:justify-center sm:px-5`}>
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

        </div>

    )
}
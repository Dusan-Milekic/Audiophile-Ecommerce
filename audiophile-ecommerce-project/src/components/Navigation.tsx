export default function Navigation() {

    return (
        <div className="bg-black-strong">


            <nav className="flex justify-around bg-black-strong items-center py-8 md:justify-between md:px-8 xl:justify-between max-w-[1110px] mx-auto ">

                <div className="md:flex items-center gap-7 hidden xl:hidden">
                    <img src="assets/shared/tablet/icon-hamburger.svg" alt="hamburger" className="w-4 h-4" />
                    <img src="audiophile.svg" alt="logo" />
                </div>


                <img src="assets/shared/tablet/icon-hamburger.svg" alt="hamburger" className="w-4 h-4 md:hidden" />
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
        </div>
    )
}
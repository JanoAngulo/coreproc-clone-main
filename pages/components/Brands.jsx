import { motion } from 'framer-motion'
const Brands = () => {
  return (
    <div id="Clients">
      <div className="w-full h-full">
        <div className="py-8 box-container xl:py-24 lg:py-22 md:py-10">
          <div className="flex justify-center place-items-center">
            <div>
              <img id="bulb-left" className="w-auto lg:block hidden lg:h-full h-[15vw] lg:pr-5" src="/Assets/Images/bulb-left.png" alt="Light Bulb" />
            </div>

            <div className="grid place-items-center">
              <img id="bulb-straight" className="w-auto lg:hidden grid lg:h-full h-[15vw]" src="/Assets/Images/bulb-straight.png" alt="Light Bulb" />
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} className="text-center content-header ">
                Brands we work with
              </motion.div>
            </div>

            <div>
              <img id="bulb-right" className="w-auto lg:block hidden lg:h-full h-[15vw] lg:pl-5" src="/Assets/Images/bulb-right.png" alt="Light Bulb" />
            </div>
          </div>
          <div className="text-center SubText text-darkblue-100">Company brands that have entrusted CoreProc!</div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4">
          <div className="brand-image ">
            <motion.img whileHover={{ scale: 1.1 }} transition={{ ease: 'easeInOut' }} className="w-full transition-opacity duration-500 grayscale opacity-20 hover:opacity-100 hover:grayscale-0" src="/Assets/Brands/camel.svg" />
          </div>
          <div className="brand-image ">
            <motion.img whileHover={{ scale: 1.1 }} transition={{ ease: 'easeInOut' }} className="w-full transition-opacity duration-500 grayscale opacity-20 hover:opacity-100 hover:grayscale-0" src="/Assets/Brands/beep-web.svg" />
          </div>
          <div className="brand-image ">
            <motion.img whileHover={{ scale: 1.1 }} transition={{ ease: 'easeInOut' }} className="w-full transition-opacity duration-500 grayscale opacity-20 hover:opacity-100 hover:grayscale-0" src="/Assets/Brands/BBDO.svg" />
          </div>
          <div className="brand-image ">
            <motion.img whileHover={{ scale: 1.1 }} transition={{ ease: 'easeInOut' }} className="w-full transition-opacity duration-500 grayscale opacity-20 hover:opacity-100 hover:grayscale-0" src="/Assets/Brands/Travelbook.svg" />
          </div>
          <div className="brand-image ">
            <motion.img whileHover={{ scale: 1.1 }} transition={{ ease: 'easeInOut' }} className="w-full transition-opacity duration-500 grayscale opacity-20 hover:opacity-100 hover:grayscale-0" src="/Assets/Brands/Aeon.svg" />
          </div>
          <div className="brand-image ">
            <motion.img whileHover={{ scale: 1.1 }} transition={{ ease: 'easeInOut' }} className="w-full transition-opacity duration-500 grayscale opacity-20 hover:opacity-100 hover:grayscale-0" src="/Assets/Brands/OGIIVY.svg" />
          </div>
          <div className="brand-image ">
            <motion.img whileHover={{ scale: 1.1 }} transition={{ ease: 'easeInOut' }} className="w-full transition-opacity duration-500 grayscale opacity-20 hover:opacity-100 hover:grayscale-0" src="/Assets/Brands/pedigree.svg" />
          </div>
          <div className="brand-image ">
            <motion.img whileHover={{ scale: 1.1 }} transition={{ ease: 'easeInOut' }} className="w-full transition-opacity duration-500 grayscale opacity-20 hover:opacity-100 hover:grayscale-0" src="/Assets/Brands/johnson-johnson.svg" />
          </div>
          <div className="brand-image ">
            <motion.img whileHover={{ scale: 1.1 }} transition={{ ease: 'easeInOut' }} className="w-full transition-opacity duration-500 grayscale opacity-20 hover:opacity-100 hover:grayscale-0" src="/Assets/Brands/hitachi.svg" />
          </div>
          <div className="brand-image ">
            <motion.img whileHover={{ scale: 1.1 }} transition={{ ease: 'easeInOut' }} className="w-full transition-opacity duration-500 grayscale opacity-20 hover:opacity-100 hover:grayscale-0" src="/Assets/Brands/POEA.svg" />
          </div>
          <div className="brand-image ">
            <motion.img whileHover={{ scale: 1.1 }} transition={{ ease: 'easeInOut' }} className="w-full transition-opacity duration-500 grayscale opacity-20 hover:opacity-100 hover:grayscale-0" src="/Assets/Brands/IMFIP.svg" />
          </div>
          <div className="brand-image ">
            <motion.img whileHover={{ scale: 1.1 }} transition={{ ease: 'easeInOut' }} className="w-full transition-opacity duration-500 grayscale opacity-20 hover:opacity-100 hover:grayscale-0" src="/Assets/Brands/Pru-life-UK.svg" />
          </div>
          <div className="brand-image ">
            <motion.img whileHover={{ scale: 1.1 }} transition={{ ease: 'easeInOut' }} className="w-full transition-opacity duration-500 grayscale opacity-20 hover:opacity-100 hover:grayscale-0" src="/Assets/Brands/a8.svg" />
          </div>
          <div className="brand-image ">
            <motion.img whileHover={{ scale: 1.1 }} transition={{ ease: 'easeInOut' }} className="w-full transition-opacity duration-500 grayscale opacity-20 hover:opacity-100 hover:grayscale-0" src="/Assets/Brands/publicis.svg" />
          </div>
          <div className="brand-image ">
            <motion.img whileHover={{ scale: 1.1 }} transition={{ ease: 'easeInOut' }} className="w-full transition-opacity duration-500 grayscale opacity-20 hover:opacity-100 hover:grayscale-0" src="/Assets/Brands/xpressflower.svg" />
          </div>
          <div className="brand-image ">
            <motion.img whileHover={{ scale: 1.1 }} transition={{ ease: 'easeInOut' }} className="w-full transition-opacity duration-500 grayscale opacity-20 hover:opacity-100 hover:grayscale-0" src="/Assets/Brands/investvine.svg" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Brands

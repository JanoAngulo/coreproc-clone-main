import { motion } from 'framer-motion'

const SucessStories = () => {
  let ImgVariantLeft = {},
    ImgVariantRight = {}

  ImgVariantLeft = {
    initialImg: { x: -100, opacity: 1 },
    whileInViewImg: { x: 0 },
    viewportImg: { once: false }
  }

  ImgVariantRight = {
    initialImg: { x: 100, opacity: 1 },
    whileInViewImg: { x: 0 },
    viewportImg: { once: false }
  }

  return (
    <div id="SuccessStories">
      <div className="w-full h-full">
        <div className="py-8 box-container xl:py-24 lg:py-22 md:py-10">
          <div className="flex justify-center place-items-center">
            <div>
              <img id="bulb-left" className="w-auto lg:block hidden lg:h-full h-[15vw] lg:pr-5" src="/Assets/Images/bulb-left.png" alt="Light Bulb" />
            </div>

            <div className="grid place-items-center">
              <img id="bulb-straight" className="w-auto lg:hidden grid lg:h-full h-[15vw]" src="/Assets/Images/bulb-straight.png" alt="Light Bulb" />

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} className="text-center cursor-default content-header-2">
                Success Stories & <br /> Creative Collaborations
              </motion.div>
            </div>

            <div>
              <img id="bulb-right" className="w-auto lg:block hidden lg:h-full h-[15vw] lg:pl-5" src="/Assets/Images/bulb-right.png" alt="Light Bulb" />
            </div>
          </div>
          <div className="text-center SubText text-darkblue-100">Discover how we have achieved the digital ambitions of our clients.</div>
        </div>
      </div>

      <div className="w-full h-full py-[72px] bg-gray-100">
        <div className="box-container">
          <div className="grid justify-center lg:px-7 md:px-0 content-gap md:flex place-items-center">
            <motion.img variants={ImgVariantLeft} initial="initialImg" whileInView="whileInViewImg" viewport="viewportImg" transition={{ duration: 0.9 }} className="image" src="/Assets/Images/Nexgo.png" alt="Web Application Vector" />
            <div className="grid w-full h-auto gap-5 text-darkblue-100 font-Lato 2xl:gap-7 xl:gap-5 lg:gap-3">
              <div className="text-center content-title md:text-left">Ground-up Development of an IT Startup</div>
              <div className="text-center  content-description md:text-left">When NEXGO Express approached us with the challenge of building a full-featured mobile-responsive courier service, we knew we were ready.</div>
              <div className="text-center  content-description md:text-left">There were a number of requirements that the web app needed to address: an innovative tailored workflow for handling couriers, an enhanced UI/UX for customer facing sites, use of bar code for package processing and tracking, a suite of API’s to connect to their B2B partners, and a complete backend system supporting the process chain.</div>
              <div className="text-center  content-description md:text-left">
                Planning to start your own IT-based business? <br />
                Send us your queries at{' '}
                <a className="text-blue hover:underline underline-offset-2 decoration-1" href="mailto:ask@coreproc.ph">
                  {' '}
                  ask@coreproc.ph.
                </a>{' '}
                <br />
                Visit{' '}
                <a className="text-blue hover:underline underline-offset-2 decoration-1" target={'_blank'} rel="noreferrer" href="https://www.nexgoexpress.com/">
                  {' '}
                  NEXGOExpress
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full py-[72px] bg-white">
        <div className="box-container">
          <div className="grid justify-center lg:px-7 md:px-0 content-gap md:flex place-items-center">
            <motion.img variants={ImgVariantRight} initial="initialImg" whileInView="whileInViewImg" viewport="viewportImg" transition={{ duration: 0.9 }} className="block figaro-image md:hidden" src="/Assets/Images/Figaro.png" alt="Figaro App" />
            <div className="grid w-full h-auto gap-3 text-darkblue-100 font-Lato 2xl:gap-7 xl:gap-5 lg:gap-5">
              <div className="text-center content-title md:text-left">Creating the Best Mobile Experience</div>
              <div className="text-center  content-description md:text-left">Figaro Coffee wanted to have their own mobile apps as part of their digital strategy and transformation. They needed the apps to accept orders, process mobile payments, have a built-in rewards system, and have a seamless integration to their POS and brick-and-mortar processes.</div>
              <div className="text-center  content-description md:text-left">CoreProc set the bar high, designing the mobile apps strictly adhering to Google’s Material Design and Apple’s Human Interface Guidelines. We successfully deployed a full-blown mobile commerce platform that integrates to Figaro’s POS systems and business flow.</div>
              <div className="text-center  content-description md:text-left">
                Looking for a mobile app development partner? Send us your queries at{' '}
                <a className="text-blue hover:underline underline-offset-2 decoration-1" href="mailto:ask@coreproc.ph">
                  {' '}
                  ask@coreproc.ph.
                </a>{' '}
                <br />
                Download{' '}
                <a className="text-blue hover:underline underline-offset-2 decoration-1" target={'_blank'} rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.figarocoffee.android">
                  Figaro Coffee Android App
                </a>{' '}
                <br />
                Download{' '}
                <a className="text-blue hover:underline underline-offset-2 decoration-1" target={'_blank'} rel="noreferrer" href="https://apps.apple.com/ph/app/figaro-coffee-systems-inc/id1331349908">
                  Figaro Coffee iOS App
                </a>
              </div>
            </div>
            <motion.img variants={ImgVariantRight} initial="initialImg" whileInView="whileInViewImg" viewport="viewportImg" transition={{ duration: 0.9 }} className="hidden image md:block" src="/Assets/Images/Figaro.png" alt="Mobile Application Vector" />
          </div>
        </div>
      </div>

      <div className="w-full h-full py-[72px] bg-gray-100">
        <div className="box-container">
          <div className="grid justify-center lg:px-7 md:px-0 content-gap md:flex place-items-center">
            <motion.img variants={ImgVariantLeft} initial="initialImg" whileInView="whileInViewImg" viewport="viewportImg" transition={{ duration: 0.9 }} className="image" src="/Assets/Images/Visor.png" alt="Web Application Vector" />
            <div className="grid w-full h-auto gap-3 text-darkblue-100 font-Lato 2xl:gap-7 xl:gap-5 lg:gap-5">
              <div className="text-center content-title md:text-left">Wow Your Customers</div>
              <div className="text-center  content-description md:text-left">Visor.ph partnered with CoreProc to develop a mobile-responsive automotive website that is visually appealing with fast site loading. The project involved diligently creating clean and informative article sites – an organized UI/UX with simplicity and creativity in mind.</div>
              <div className="text-center  content-description md:text-left">
                Need engaging and intuitive apps? Send us your queries at{' '}
                <a className="text-blue hover:underline underline-offset-2 decoration-1" href="mailto:ask@coreproc.ph">
                  ask@coreproc.ph.
                </a>
                <br /> Visit{' '}
                <a className="text-blue hover:underline underline-offset-2 decoration-1" target={'_blank'} rel="noreferrer" href="https://visor.ph/">
                  {' '}
                  Visor.ph
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SucessStories

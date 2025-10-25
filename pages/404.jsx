import Head from 'next/head'
import NextLink from 'next/link'
import { motion } from 'framer-motion'

const Custom404 = () => {
  return (
    <div id="404Page">
      <Head>
        <title>404 Not Found</title>
      </Head>

      <div className="grid items-center justify-center h-full gap-5 pb-10  box-container lg:flex 2xl:gap-20 xl:gap-16 md:gap-10 bg-gradient-to-b from-darkblue-100 to-darkblue-300 lg:h-screen lg:py-0">
        <div className="grid gap-4 pt-10 text-center font-Lato lg:pt-0">
          <div>
            <div className="2xl:text-[23rem] xl:text-[20rem] lg:text-[13rem] md:text-[14rem] text-9xl leading-none font-bold text-yellow">404</div>
            <div className="text-4xl font-bold text-center uppercase 2xl:text-7xl xl:text-6xl lg:text-4xl md:text-5xl text-yellow">Page Not Found</div>
          </div>

          <div className="text-center text-white font-Lato xl:text-2xl lg:text-base md:text-2xl">Sorry, the page you&apos;re looking for doesn&apos;t exist.</div>
          <div className="flex justify-evenly">
            <NextLink href="/#">
              <motion.button whileHover={{ y: -4 }} initial="initial" whileInView="whileInView" viewport="viewport" className="not-found-button">
                Return Home
              </motion.button>
            </NextLink>

            <NextLink href="/components/ContactUs">
              <motion.button whileHover={{ y: -4 }} initial="initial" whileInView="whileInView" viewport="viewport" className="not-found-button">
                Contact Us
              </motion.button>
            </NextLink>
          </div>
        </div>

        <motion.div whileHover={{ scale: 1.02 }} className="p-8 bg-yellow rounded-3xl">
          <img src="/Assets/Images/404.png" alt="404 image" />
        </motion.div>
      </div>
    </div>
  )
}

export default Custom404

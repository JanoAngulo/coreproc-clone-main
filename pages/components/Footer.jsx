import NextLink from 'next/link'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (
    <div className="w-full h-auto">
      <div className="relative grid justify-center h-full pt-32 bg-white -z-20">
        <img className="mt-auto" src="/Assets/Images/teamwork.png" alt="Teamwork Vector" />
      </div>

      <div className="relative justify-center h-auto bg-darkblue-100 ">
        <div className="flex justify-center">
          <div className="absolute -top-14 ">
            <a href="#">
              <img className="" src="/Assets/Images/coreproc-circle.png" alt="CoreProc Icon" />
            </a>
          </div>
        </div>

        <div className="grid justify-center">
          <div className="grid grid-cols-1 py-5 mt-10 text-center text-white footer-nav-link md:mt-0 md:grid-cols-5 md:text-left place-content-center font-Lato">
            <NextLink href="/#WhatWeDo" scroll={false}>
              <a className="text-sm font-bold uppercase transition-all duration-300 cursor-pointer hover:underline underline-offset-4 decoration-2 hover:text-yellow col">What We Do</a>
            </NextLink>

            <NextLink href="/#SuccessStories" scroll={false}>
              <a className="text-sm font-bold uppercase transition-all duration-300 cursor-pointer hover:underline underline-offset-4 decoration-2 hover:text-yellow col">Success Stories</a>
            </NextLink>

            <div className="hidden col md:grid"></div>

            <NextLink href="/#Clients" scroll={false}>
              <a className="text-sm font-bold uppercase transition-all duration-300 cursor-pointer hover:underline underline-offset-4 decoration-2 hover:text-yellow col">Clients</a>
            </NextLink>

            <NextLink href="/components/ContactUs" scroll={true}>
              <a className="text-sm font-bold uppercase transition-all duration-300 cursor-pointer hover:underline underline-offset-4 decoration-2 hover:text-yellow col">Contact Us</a>
            </NextLink>
          </div>
        </div>

        <hr className="bg-white border-none h-[1px]" />

        <div className="grid justify-center px-5 pb-3 text-center text-white font-Lato">
          <div className="flex justify-center gap-3 pt-5">
            <motion.a whileHover={{ y: -5 }} target="_blank" rel="noreferrer" href="https://github.com/CoreProc/">
              <FontAwesomeIcon className="text-[2.5rem]" icon={faGithubSquare} />
            </motion.a>
            <motion.a whileHover={{ y: -5 }} target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/coreproc-inc-/">
              <FontAwesomeIcon className="text-[2.5rem]" icon={faLinkedin} />
            </motion.a>
            <motion.a whileHover={{ y: -5 }} target="_blank" rel="noreferrer" href="https://www.facebook.com/CoreProcInc/">
              <FontAwesomeIcon className="text-[2.5rem]" icon={faFacebookSquare} />
            </motion.a>
          </div>
          <div>
            Member{' '}
            <a className="font-bold hover:text-yellow font-Lato" target="_blank" rel="noreferrer" href="http://psia.org.ph">
              PSIA
            </a>
          </div>
          <div>
            Registered{' '}
            <a className="font-bold hover:text-yellow font-Lato" target="_blank" rel="noreferrer" href="https://www.privacy.gov.ph">
              NPC
            </a>
          </div>
          <div>
            Partner{' '}
            <a className="font-bold hover:text-yellow font-Lato" target="_blank" rel="noreferrer" href="https://www.pbed.ph">
              PBEd
            </a>
          </div>
          <div>
            <a href="mailto:ask@coreproc.ph">ask@coreproc.ph</a>{' '}
          </div>
          <div>
            <a href="tel:+63 2 8 631 3466"> +63 2 8 631 3466</a>
          </div>
          <div>
            <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/Fort+Palm+Spring+Condominium/@14.5538789,121.0440344,15z/data=!4m8!3m7!1s0x0:0x349e20bcf70bf6fa!5m2!4m1!1i2!8m2!3d14.5538789!4d121.0440344">
              Unit 12G, Fort Palm Spring, 30th St. cor. 1st Ave., Bonifacio Global City, Taguig, Philippines 1634
            </a>
          </div>
          <div className="text-white underline underline-offset-4">
            <NextLink href="/components/PrivacyPolicy">Privacy Policy</NextLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

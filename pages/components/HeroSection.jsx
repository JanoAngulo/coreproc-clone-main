import NextLink from "next/link";
import { motion } from "framer-motion";
import * as React from "react";
const HeroSection = () => {
	const isBrowser = () => typeof window.innerWidth !== "undefined";
	let Browser = isBrowser < 1024;

	let Variants,
		HeroVariant = {};

	let isMobile = Browser; //Add the width you want to check for here (now 768px)
	
	if (!isMobile) {
		Variants = {
			initial: { y: 100, opacity: 1 },
			whileInView: { y: 0 },
			viewport: { once: false }
		};

		HeroVariant = {
			initialImg: { x: 300, opacity: 1 },
			whileInViewImg: { x: 0 },
			viewportImg: { once: false }
		};
	}

	return (
		<div id="HeroSection">
			<div className="hero-container">
				{/* <img className="w-full h-auto md:hidden grid absolute -z-[10]" src="/Assets/Hero/yellow.svg" alt="" /> */}
				<div className="md:pl-7 px-0">
					<div className="grid md:grid-cols-2 grid-cols-1 md:gap-16 gap-0">
						<div className="place-content-center grid bg-yellow md:bg-transparent">
							<img
								className="w-[65vw] md:hidden place-self-center grid py-6"
								src="/Assets/Images/Hero-Mobile-Top.png"
								alt="Image Header"
							/>
							<motion.div className="MainText md:text-yellow text-black">
								<motion.div
									variants={Variants}
									initial="initial"
									whileInView="whileInView"
									viewport="viewport"
									transition={{ duration: 0.6 }}>
									Achieve your
								</motion.div>{" "}
								{/* <br className="md:hidden grid" /> */}
								<motion.div
									variants={Variants}
									initial="initial"
									whileInView="whileInView"
									viewport="viewport"
									transition={{ duration: 0.9 }}>
									digital ambitions
								</motion.div>
							</motion.div>
							<motion.div
								variants={Variants}
								initial="initial"
								whileInView="whileInView"
								viewport="viewport"
								transition={{ duration: 1.1 }}
								className="SubText text-white md:text-left text-center md:mx-0  mx-5 md:w-[90%]">
								Providing the best software development service{" "}
								<br className="md:hidden block" /> to startups, digital/ad
								agencies, and enterprises for over 8 years.
							</motion.div>

							<NextLink href="/components/ContactUs">
								<motion.button
									variants={Variants}
									initial="initial"
									whileInView="whileInView"
									viewport="viewport"
									transition={{ duration: 1.2 }}
									className="HeroButton">
									Tell us what you need
								</motion.button>
							</NextLink>
							<img
								className="w-[65vw] md:hidden place-self-center grid py-6"
								src="/Assets/Images/Hero-Mobile-Bottom.png"
								alt="Image Footer"
							/>
						</div>
						<motion.div
							variants={HeroVariant}
							initial="initialImg"
							whileInView="whileInViewImg"
							viewport="viewportImg"
							transition={{ duration: 0.9 }}
							className="hidden md:grid">
							<img
								src="/Assets/Images/Hero-with-bg.png"
								alt="CoreProc Hero"
							/>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;

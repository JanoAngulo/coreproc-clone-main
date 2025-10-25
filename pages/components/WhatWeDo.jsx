import { motion } from "framer-motion";

const WhatWeDo = () => {
	let ImgVariantLeft = {},
		ImgVariantRight = {};

	ImgVariantLeft = {
		initialImg: { x: -100, opacity: 1 },
		whileInViewImg: { x: 0 },
		viewportImg: { once: false }
	};

	ImgVariantRight = {
		initialImg: { x: 100, opacity: 1 },
		whileInViewImg: { x: 0 },
		viewportImg: { once: false }
	};

	return (
		<div id="WhatWeDo">
			<div className="w-full h-full">
				<div className="box-container xl:py-24 lg:py-22 md:py-10 py-8">
					<div className="flex place-items-center justify-center">
						<div>
							<img
								id="bulb-left"
								className="w-auto lg:block hidden lg:h-full h-[15vw] lg:pr-5"
								src="/Assets/Images/bulb-left.png"
								alt="Light Bulb"
							/>
						</div>

						<div className="grid place-items-center">
							<img
								id="bulb-straight"
								className="w-auto lg:hidden grid lg:h-full h-[15vw]"
								src="/Assets/Images/bulb-straight.png"
								alt="Light Bulb"
							/>
							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.9 }}
								className="content-header text-center cursor-default">
								What We Do?
							</motion.div>
						</div>

						<div>
							<img
								id="bulb-right"
								className="w-auto lg:block hidden lg:h-full h-[15vw] lg:pl-5"
								src="/Assets/Images/bulb-right.png"
								alt="Light Bulb"
							/>
						</div>
					</div>
					<div className="SubText text-center text-darkblue-100">
						CoreProc uses a holistic approach to your IT and software needs. We
						provide you with an <br /> end-to-end service delivery – from
						ideation, to launching, to operating and maintaining <br /> your
						production servers and software – on a 24/7 basis.
					</div>
				</div>
			</div>

			<div className="w-full h-full py-[72px] bg-gray-100">
				<div className="box-container">
					<div className="lg:px-7 md:px-0 content-gap md:flex grid place-items-center justify-center">
						<motion.img
							variants={ImgVariantLeft}
							initial="initialImg"
							whileInView="whileInViewImg"
							viewport="viewportImg"
							transition={{ duration: 0.9 }}
							className="image"
							src="/Assets/Images/web-app-dev.png"
							alt="Web Application Vector"
						/>
						<div className="w-full h-auto text-darkblue-100 font-Lato  grid 2xl:gap-7 xl:gap-5 lg:gap-3 gap-5">
							<div className="content-title md:text-left text-center">
								Web Application Development
							</div>
							<div className=" content-description md:text-left text-center">
								We produce award-winning mobile-responsive websites with
								multi-browser compatibility. Our top designers craft your
								websites in line with your business branding while our web
								developers build functional, scalable, secure, and maintainable
								code.
							</div>
							<div className=" content-description md:text-left text-center">
								Our expertise encompasses brand microsites, informational
								websites, e-commerce sites, blogs, online training modules,
								content management systems, and customized enterprise systems.
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="w-full h-full py-[72px] bg-white">
				<div className="box-container">
					<div className="lg:px-7 md:px-0 content-gap md:flex grid place-items-center justify-center">
						<motion.img
							variants={ImgVariantRight}
							initial="initialImg"
							whileInView="whileInViewImg"
							viewport="viewportImg"
							transition={{ duration: 0.9 }}
							className="image md:hidden block"
							src="/Assets/Images/mob-app-dev.png"
							alt="Mobile Application Vector"
						/>
						<div className="w-full h-auto text-darkblue-100 font-Lato grid 2xl:gap-7 xl:gap-5 lg:gap-5 gap-3">
							<div className="content-title md:text-left text-center">
								Mobile Application Development
							</div>
							<div className=" content-description md:text-left text-center">
								At CoreProc, we design and build best-in-class Android and iOS
								Apps for big brands and startups, like Figaro Coffee and BG
								Bridal Gallery. Our mobile teams adhere to Google’s and Apple’s
								UI/UX coding standards, offering consults and solutions to
								ensure successful app launches.
							</div>
							<div className=" content-description md:text-left text-center">
								Do you want to integrate QR codes, apply 2-factor
								authentication, support VPN, play adaptive videos, and/or accept
								payments to your mobile apps? Send us your queries at
								<a
									className="text-blue hover:underline underline-offset-2 decoration-1"
									href="mailto:ask@coreproc.ph">
									{" "}
									ask@coreproc.ph.
								</a>
							</div>
						</div>
						<motion.img
							variants={ImgVariantRight}
							initial="initialImg"
							whileInView="whileInViewImg"
							viewport="viewportImg"
							transition={{ duration: 0.9 }}
							className="image md:block hidden"
							src="/Assets/Images/mob-app-dev.png"
							alt="Mobile Application Vector"
						/>
					</div>
				</div>
			</div>

			<div className="w-full h-full py-[72px] bg-gray-100">
				<div className="box-container">
					<div className="lg:px-7 md:px-0 content-gap md:flex grid place-items-center justify-center">
						<motion.img
							variants={ImgVariantLeft}
							initial="initialImg"
							whileInView="whileInViewImg"
							viewport="viewportImg"
							transition={{ duration: 0.9 }}
							className="image"
							src="/Assets/Images/hosting-service.png"
							alt="Web Application Vector"
						/>
						<div className="w-full h-auto text-darkblue-100 font-Lato grid 2xl:gap-7 xl:gap-5 lg:gap-5 gap-3">
							<div className="content-title md:text-left text-center">
								Managed Software and Hosting Services
							</div>
							<div className=" content-description md:text-left text-center">
								CoreProc delivers a full-cycle software maintenance and hosting
								service. Our all-around support includes activities which cover
								enhancing; re-engineering; handling minor and major software
								issues that disrupt system performance and functionality; and
								providing 24/7 hosting, server monitoring, and maintenance.
							</div>
							<div className=" content-description md:text-left text-center">
								Our dedicated software maintenance and systems admin teams are
								well-versed in new and upcoming technologies ensuring maximum
								uptime of your IT systems and servers. We also provide server
								penetration testing service, as well as server and database
								migration.
							</div>
							<div className="flex gap-6 md:justify-start justify-between">
								<img
									className="w-auto 2xl:h-auto xl:h-[4vw] lg:h-[5.5vw] md:h-[7vw] h-[15vw]"
									src="/Assets/Images/d_o_partner.png"
									alt="DigitalOcean Partner"
								/>
								<img
									className="w-auto 2xl:h-auto xl:h-[4vw] lg:h-[5.5vw] md:h-[7vw] h-[15vw]"
									src="/Assets/Images/npclogo_registered.png"
									alt="National Privacy Commission"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhatWeDo;

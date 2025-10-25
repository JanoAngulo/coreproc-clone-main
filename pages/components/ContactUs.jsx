import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactUs = () => {

	const recaptchaRef = React.createRef();

	// Input Change Handling
	const [inputs, setInputs] = useState({
		Name: "",
		Email: "",
		Phone: "",
		Country: "",
		Message: ""
	});

	const handleOnChange = (event) => {
		event.persist();
		setInputs((prev) => ({
			...prev,
			[event.target.id]: event.target.value
		}));
	};

	  // Server State Handling

		const handleOnSubmit = (event) => {
			event.preventDefault();

			axios({
				method: "POST",
				url: "https://formbold.com/s/3jEl9",
				data: {...inputs, 'g-recaptcha-response': recaptchaRef.current.getValue()},
			})
				.then((r) => {
					alert("Your Form has now been submitted")
				})
				.catch((r) => {
					alert("Please Check the ReCaptcha")
				});
		};

	return (
		<div className="w-full h-auto">
			<Head>
				<title>Contact Us | CoreProc, Inc. - The Best Web and Mobile App Development Company in the Philippines</title>
			</Head>

			<div id="ContactUsPage">
				<div className="w-full h-auto bg-gradient-to-b from-darkblue-100 to-darkblue-300">
					<div className="py-8 box-container xl:py-24 lg:py-22 md:py-10">
						<div className="grid gap-10 lg:px-7 md:px-0 lg:gap-20">
							<div className="grid 2xl:grid-cols-2 lg:grid-cols-6 md:grid-cols-1 2xl:gap-16 xl:gap-8 lg:gap-5 md:gap-8">
								<div className="col-span-4 2xl:col-span-1">
									<div className="py-8 lg:py-0">
										<motion.div
											whileHover={{ scale: 1.05 }}
											className="text-center cursor-default content-header lg:text-left">
											Get in touch
										</motion.div>
										<div className="text-center text-white SubText lg:text-left">
											Request a free consultation and get a no-obligation quote
											for your project.
										</div>
									</div>

									<form
										onSubmit={handleOnSubmit}
										className="grid grid-cols-2 gap-6">
										<input
											onChange={handleOnChange}
											value={inputs.Name}
											id="Name"
											name="Name"
											placeholder="Name*"
											maxLength={100}
											required
											className="h-16 col-span-2 p-5 outline-none md:col-span-1 rounded-xl lg:text-xl focus:border-yellow focus:border-4"
											type="text"
										/>
										<input
											onChange={handleOnChange}
											value={inputs.Email}
											id="Email"
											name="Email Address"
											placeholder="Email Address*"
											maxLength={255}
											required
											className="h-16 col-span-2 p-5 outline-none md:col-span-1 rounded-xl lg:text-xl focus:border-yellow focus:border-4"
											type="email"
										/>
										<input
											onChange={handleOnChange}
											value={inputs.Phone}
											id="Phone"
											name="Phone Number"
											placeholder="Phone Number"
											maxLength={20}
											className="h-16 col-span-2 p-5 outline-none md:col-span-1 rounded-xl lg:text-xl focus:border-yellow focus:border-4"
											type="tel"
										/>
										<input
											onChange={handleOnChange}
											value={inputs.Country}
											id="Country"
											name="Country"
											list="countries"
											maxLength={50}
											placeholder="Country"
											className="h-16 col-span-2 p-5 outline-none md:col-span-1 rounded-xl lg:text-xl focus:border-yellow focus:border-4"
											type="text"
										/>

										<datalist id="countries">
											<option value="Afghanistan">Afghanistan</option>
											<option value="Åland Islands">Åland Islands</option>
											<option value="Albania">Albania</option>
											<option value="Algeria">Algeria</option>
											<option value="American Samoa">American Samoa</option>
											<option value="Andorra">Andorra</option>
											<option value="Angola">Angola</option>
											<option value="Anguilla">Anguilla</option>
											<option value="Antarctica">Antarctica</option>
											<option value="Antigua and Barbuda">
												Antigua and Barbuda
											</option>
											<option value="Argentina">Argentina</option>
											<option value="Armenia">Armenia</option>
											<option value="Aruba">Aruba</option>
											<option value="Australia">Australia</option>
											<option value="Austria">Austria</option>
											<option value="Azerbaijan">Azerbaijan</option>
											<option value="Bahamas">Bahamas</option>
											<option value="Bahrain">Bahrain</option>
											<option value="Bangladesh">Bangladesh</option>
											<option value="Barbados">Barbados</option>
											<option value="Belarus">Belarus</option>
											<option value="Belgium">Belgium</option>
											<option value="Belize">Belize</option>
											<option value="Benin">Benin</option>
											<option value="Bermuda">Bermuda</option>
											<option value="Bhutan">Bhutan</option>
											<option value="Bolivia">Bolivia</option>
											<option value="Bosnia and Herzegovina">
												Bosnia and Herzegovina
											</option>
											<option value="Botswana">Botswana</option>
											<option value="Bouvet Island">Bouvet Island</option>
											<option value="Brazil">Brazil</option>
											<option value="British Indian Ocean Territory">
												British Indian Ocean Territory
											</option>
											<option value="Brunei Darussalam">
												Brunei Darussalam
											</option>
											<option value="Bulgaria">Bulgaria</option>
											<option value="Burkina Faso">Burkina Faso</option>
											<option value="Burundi">Burundi</option>
											<option value="Cambodia">Cambodia</option>
											<option value="Cameroon">Cameroon</option>
											<option value="Canada">Canada</option>
											<option value="Cape Verde">Cape Verde</option>
											<option value="Cayman Islands">Cayman Islands</option>
											<option value="Central African Republic">
												Central African Republic
											</option>
											<option value="Chad">Chad</option>
											<option value="Chile">Chile</option>
											<option value="China">China</option>
											<option value="Christmas Island">Christmas Island</option>
											<option value="Cocos (Keeling) Islands">
												Cocos (Keeling) Islands
											</option>
											<option value="Colombia">Colombia</option>
											<option value="Comoros">Comoros</option>
											<option value="Congo">Congo</option>
											<option value="Congo, The Democratic Republic of The">
												Congo, The Democratic Republic of The
											</option>
											<option value="Cook Islands">Cook Islands</option>
											<option value="Costa Rica">Costa Rica</option>
											<option value="Cote D'ivoire">Cote D&apos;ivoire</option>
											<option value="Croatia">Croatia</option>
											<option value="Cuba">Cuba</option>
											<option value="Cyprus">Cyprus</option>
											<option value="Czech Republic">Czech Republic</option>
											<option value="Denmark">Denmark</option>
											<option value="Djibouti">Djibouti</option>
											<option value="Dominica">Dominica</option>
											<option value="Dominican Republic">
												Dominican Republic
											</option>
											<option value="Ecuador">Ecuador</option>
											<option value="Egypt">Egypt</option>
											<option value="El Salvador">El Salvador</option>
											<option value="Equatorial Guinea">
												Equatorial Guinea
											</option>
											<option value="Eritrea">Eritrea</option>
											<option value="Estonia">Estonia</option>
											<option value="Ethiopia">Ethiopia</option>
											<option value="Falkland Islands (Malvinas)">
												Falkland Islands (Malvinas)
											</option>
											<option value="Faroe Islands">Faroe Islands</option>
											<option value="Fiji">Fiji</option>
											<option value="Finland">Finland</option>
											<option value="France">France</option>
											<option value="French Guiana">French Guiana</option>
											<option value="French Polynesia">French Polynesia</option>
											<option value="French Southern Territories">
												French Southern Territories
											</option>
											<option value="Gabon">Gabon</option>
											<option value="Gambia">Gambia</option>
											<option value="Georgia">Georgia</option>
											<option value="Germany">Germany</option>
											<option value="Ghana">Ghana</option>
											<option value="Gibraltar">Gibraltar</option>
											<option value="Greece">Greece</option>
											<option value="Greenland">Greenland</option>
											<option value="Grenada">Grenada</option>
											<option value="Guadeloupe">Guadeloupe</option>
											<option value="Guam">Guam</option>
											<option value="Guatemala">Guatemala</option>
											<option value="Guernsey">Guernsey</option>
											<option value="Guinea">Guinea</option>
											<option value="Guinea-bissau">Guinea-bissau</option>
											<option value="Guyana">Guyana</option>
											<option value="Haiti">Haiti</option>
											<option value="Heard Island and Mcdonald Islands">
												Heard Island and Mcdonald Islands
											</option>
											<option value="Holy See (Vatican City State)">
												Holy See (Vatican City State)
											</option>
											<option value="Honduras">Honduras</option>
											<option value="Hong Kong">Hong Kong</option>
											<option value="Hungary">Hungary</option>
											<option value="Iceland">Iceland</option>
											<option value="India">India</option>
											<option value="Indonesia">Indonesia</option>
											<option value="Iran, Islamic Republic of">
												Iran, Islamic Republic of
											</option>
											<option value="Iraq">Iraq</option>
											<option value="Ireland">Ireland</option>
											<option value="Isle of Man">Isle of Man</option>
											<option value="Israel">Israel</option>
											<option value="Italy">Italy</option>
											<option value="Jamaica">Jamaica</option>
											<option value="Japan">Japan</option>
											<option value="Jersey">Jersey</option>
											<option value="Jordan">Jordan</option>
											<option value="Kazakhstan">Kazakhstan</option>
											<option value="Kenya">Kenya</option>
											<option value="Kiribati">Kiribati</option>
											<option value="Korea, Democratic People's Republic of">
												Korea, Democratic People&apos;s Republic of
											</option>
											<option value="Korea, Republic of">
												Korea, Republic of
											</option>
											<option value="Kuwait">Kuwait</option>
											<option value="Kyrgyzstan">Kyrgyzstan</option>
											<option value="Lao People's Democratic Republic">
												Lao People&apos;s Democratic Republic
											</option>
											<option value="Latvia">Latvia</option>
											<option value="Lebanon">Lebanon</option>
											<option value="Lesotho">Lesotho</option>
											<option value="Liberia">Liberia</option>
											<option value="Libyan Arab Jamahiriya">
												Libyan Arab Jamahiriya
											</option>
											<option value="Liechtenstein">Liechtenstein</option>
											<option value="Lithuania">Lithuania</option>
											<option value="Luxembourg">Luxembourg</option>
											<option value="Macao">Macao</option>
											<option value="Macedonia, The Former Yugoslav Republic of">
												Macedonia, The Former Yugoslav Republic of
											</option>
											<option value="Madagascar">Madagascar</option>
											<option value="Malawi">Malawi</option>
											<option value="Malaysia">Malaysia</option>
											<option value="Maldives">Maldives</option>
											<option value="Mali">Mali</option>
											<option value="Malta">Malta</option>
											<option value="Marshall Islands">Marshall Islands</option>
											<option value="Martinique">Martinique</option>
											<option value="Mauritania">Mauritania</option>
											<option value="Mauritius">Mauritius</option>
											<option value="Mayotte">Mayotte</option>
											<option value="Mexico">Mexico</option>
											<option value="Micronesia, Federated States of">
												Micronesia, Federated States of
											</option>
											<option value="Moldova, Republic of">
												Moldova, Republic of
											</option>
											<option value="Monaco">Monaco</option>
											<option value="Mongolia">Mongolia</option>
											<option value="Montenegro">Montenegro</option>
											<option value="Montserrat">Montserrat</option>
											<option value="Morocco">Morocco</option>
											<option value="Mozambique">Mozambique</option>
											<option value="Myanmar">Myanmar</option>
											<option value="Namibia">Namibia</option>
											<option value="Nauru">Nauru</option>
											<option value="Nepal">Nepal</option>
											<option value="Netherlands">Netherlands</option>
											<option value="Netherlands Antilles">
												Netherlands Antilles
											</option>
											<option value="New Caledonia">New Caledonia</option>
											<option value="New Zealand">New Zealand</option>
											<option value="Nicaragua">Nicaragua</option>
											<option value="Niger">Niger</option>
											<option value="Nigeria">Nigeria</option>
											<option value="Niue">Niue</option>
											<option value="Norfolk Island">Norfolk Island</option>
											<option value="Northern Mariana Islands">
												Northern Mariana Islands
											</option>
											<option value="Norway">Norway</option>
											<option value="Oman">Oman</option>
											<option value="Pakistan">Pakistan</option>
											<option value="Palau">Palau</option>
											<option value="Palestinian Territory, Occupied">
												Palestinian Territory, Occupied
											</option>
											<option value="Panama">Panama</option>
											<option value="Papua New Guinea">Papua New Guinea</option>
											<option value="Paraguay">Paraguay</option>
											<option value="Peru">Peru</option>
											<option value="Philippines">Philippines</option>
											<option value="Pitcairn">Pitcairn</option>
											<option value="Poland">Poland</option>
											<option value="Portugal">Portugal</option>
											<option value="Puerto Rico">Puerto Rico</option>
											<option value="Qatar">Qatar</option>
											<option value="Reunion">Reunion</option>
											<option value="Romania">Romania</option>
											<option value="Russian Federation">
												Russian Federation
											</option>
											<option value="Rwanda">Rwanda</option>
											<option value="Saint Helena">Saint Helena</option>
											<option value="Saint Kitts and Nevis">
												Saint Kitts and Nevis
											</option>
											<option value="Saint Lucia">Saint Lucia</option>
											<option value="Saint Pierre and Miquelon">
												Saint Pierre and Miquelon
											</option>
											<option value="Saint Vincent and The Grenadines">
												Saint Vincent and The Grenadines
											</option>
											<option value="Samoa">Samoa</option>
											<option value="San Marino">San Marino</option>
											<option value="Sao Tome and Principe">
												Sao Tome and Principe
											</option>
											<option value="Saudi Arabia">Saudi Arabia</option>
											<option value="Senegal">Senegal</option>
											<option value="Serbia">Serbia</option>
											<option value="Seychelles">Seychelles</option>
											<option value="Sierra Leone">Sierra Leone</option>
											<option value="Singapore">Singapore</option>
											<option value="Slovakia">Slovakia</option>
											<option value="Slovenia">Slovenia</option>
											<option value="Solomon Islands">Solomon Islands</option>
											<option value="Somalia">Somalia</option>
											<option value="South Africa">South Africa</option>
											<option value="South Georgia and The South Sandwich Islands">
												South Georgia and The South Sandwich Islands
											</option>
											<option value="Spain">Spain</option>
											<option value="Sri Lanka">Sri Lanka</option>
											<option value="Sudan">Sudan</option>
											<option value="Suriname">Suriname</option>
											<option value="Svalbard and Jan Mayen">
												Svalbard and Jan Mayen
											</option>
											<option value="Swaziland">Swaziland</option>
											<option value="Sweden">Sweden</option>
											<option value="Switzerland">Switzerland</option>
											<option value="Syrian Arab Republic">
												Syrian Arab Republic
											</option>
											<option value="Taiwan">Taiwan</option>
											<option value="Tajikistan">Tajikistan</option>
											<option value="Tanzania, United Republic of">
												Tanzania, United Republic of
											</option>
											<option value="Thailand">Thailand</option>
											<option value="Timor-leste">Timor-leste</option>
											<option value="Togo">Togo</option>
											<option value="Tokelau">Tokelau</option>
											<option value="Tonga">Tonga</option>
											<option value="Trinidad and Tobago">
												Trinidad and Tobago
											</option>
											<option value="Tunisia">Tunisia</option>
											<option value="Turkey">Turkey</option>
											<option value="Turkmenistan">Turkmenistan</option>
											<option value="Turks and Caicos Islands">
												Turks and Caicos Islands
											</option>
											<option value="Tuvalu">Tuvalu</option>
											<option value="Uganda">Uganda</option>
											<option value="Ukraine">Ukraine</option>
											<option value="United Arab Emirates">
												United Arab Emirates
											</option>
											<option value="United Kingdom">United Kingdom</option>
											<option value="United States">United States</option>
											<option value="United States Minor Outlying Islands">
												United States Minor Outlying Islands
											</option>
											<option value="Uruguay">Uruguay</option>
											<option value="Uzbekistan">Uzbekistan</option>
											<option value="Vanuatu">Vanuatu</option>
											<option value="Venezuela">Venezuela</option>
											<option value="Viet Nam">Viet Nam</option>
											<option value="Virgin Islands, British">
												Virgin Islands, British
											</option>
											<option value="Virgin Islands, U.S.">
												Virgin Islands, U.S.
											</option>
											<option value="Wallis and Futuna">
												Wallis and Futuna
											</option>
											<option value="Western Sahara">Western Sahara</option>
											<option value="Yemen">Yemen</option>
											<option value="Zambia">Zambia</option>
											<option value="Zimbabwe">Zimbabwe</option>
										</datalist>

										<textarea
											onChange={handleOnChange}
											value={inputs.Message}
											id="Message"
											required
											placeholder="Description of your project"
											className="col-span-2 p-5 outline-none resize-none rounded-xl lg:text-xl"
											name="Message"
											cols="30"
											maxLength={1000}
											rows="10"></textarea>

										<div className="grid col-span-2 gap-5 md:flex">
											<ReCAPTCHA
												className="grid justify-center"
												ref={recaptchaRef}
												sitekey="6LfNs5UiAAAAAIw-Zmv4Z8w31yMCDQZmzySzDaYu"
											/>

											<button
												className="w-full h-16 text-xl font-bold text-white uppercase transition-colors duration-150 rounded-full font-Lato bg-blue hover:bg-yellow 2xl:text-2xl lg:text-xl md:text-base"
												type="submit">
												Send your Request
											</button>
										</div>
									</form>
								</div>

								<motion.div
									whileHover={{ scale: 1.02 }}
									className="justify-center hidden gap-5 p-12 2xl:col-span-1 lg:col-span-2 md:col-span-4 md:grid bg-yellow rounded-xl 2xl:p-12 xl:p-10 lg:p-8 place-items-center">
									<motion.img
										whileHover={{ scale: 1.05 }}
										src="/Assets/Images/Get-in-touch-boy.png"
										alt="Man in a Laptop"
									/>

									<motion.img
										whileHover={{ scale: 1.05 }}
										className="hidden 2xl:hidden xl:block lg:block"
										src="/Assets/Images/Get-in-touch-girl.png"
										alt="Woman in megaphone"
									/>

									<motion.img
										whileHover={{ scale: 1.05 }}
										className="hidden 2xl:hidden xl:hidden lg:block"
										src="/Assets/Images/Get-in-touch-both.png"
										alt="Man and Woman Teamwork "
									/>
								</motion.div>
							</div>

							<div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
								<motion.div
									whileHover={{ y: -20 }}
									className="p-8 bg-yellow rounded-xl">
									<motion.div
										whileHover={{ scale: 1.03 }}
										className="grid justify-center gap-5 place-items-center">
										<img
											src="/Assets/Images/logo-web.png"
											alt=""
										/>
										<p className="text-lg text-justify text-white indent-10 font-Lato">
											We produce award-winning mobile-responsive websites with
											multi-browser compatibility. Our top designers craft your
											websites in line with your business branding while our web
											developers build functional, scalable, secure, and
											maintainable code.
										</p>
									</motion.div>
								</motion.div>
								<motion.div
									whileHover={{ y: -20 }}
									className="p-8 bg-yellow rounded-xl">
									<motion.div
										whileHover={{ scale: 1.03 }}
										className="grid justify-center gap-5 py-3 place-items-center">
										<img
											src="/Assets/Images/logo-mob.png"
											alt=""
										/>
										<p className="text-lg text-justify text-white indent-10 font-Lato">
											At CoreProc, we design and build best-in-class Android and
											iOS Apps for big brands and startups, like Figaro Coffee
											and BG Bridal Gallery. Our mobile teams adhere to Google’s
											and Apple’s UI/UX coding standards, offering consults and
											solutions to ensure successful app launches.
										</p>
									</motion.div>
								</motion.div>
								<motion.div
									whileHover={{ y: -20 }}
									className="p-8 bg-yellow rounded-xl">
									<motion.div
										whileHover={{ scale: 1.03 }}
										className="grid justify-center gap-5 py-5 place-items-center">
										<img
											src="/Assets/Images/logo-hosting.png"
											alt=""
										/>
										<p className="text-lg text-justify text-white indent-10 font-Lato">
											CoreProc delivers a full-cycle software maintenance and
											hosting service. Our all-around support includes
											activities which cover enhancing; re-engineering; handling
											minor and major software issues that disrupt system
											performance and functionality; and providing 24/7 hosting,
											server monitoring, and maintenance.
										</p>
									</motion.div>
								</motion.div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	);
};

export default ContactUs;

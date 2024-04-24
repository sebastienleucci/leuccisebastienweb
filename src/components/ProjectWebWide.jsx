import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"
import "./ProjectWebWide.css"

export function ProjectWebWide({ baseState, title, pills, color1, color2, urls, urlPreview, children }) {
	const [open, toggle] = useToggle(false)
	OpenCloseResizing({ open, toggle })

	//Handle Hover
	const [isHovered, setIsHovered] = useState(false)

	const handleMouseEnter = () => {
		setIsHovered(true)
	}

	const handleMouseLeave = () => {
		setIsHovered(false)
	}

	//for @sebastienleucci
	const elementRef = useRef(null)
	const isNarrow = useIsNarrow(elementRef, 493)

	return (
		<section className='mt-16 mx-auto w-full sm:overflow-hidden flex flex-col'>
			{/* Header Project */}
			<div className='flex flex-col sm:flex-row mySection m-auto'>
				<div
					style={{
						backgroundImage: `${urlPreview}`,
					}}
					onClick={toggle}
					className='border-2 border-black bg-cover bg-center hidden sm:flex sm:relative -mt-8 sm:mt-0 rounded-xl sm:min-w-40 sm:w-40 sm:h-40 sm:aspect-square overflow-hidden sm:overflow-visible hover:cursor-pointer pointer-events-none sm:pointer-events-auto'
				></div>
				<div
					className='relative flex flex-col w-full sm:pl-6 sm:pr-5 hover:cursor-pointer pointer-events-none sm:pointer-events-auto'
					onClick={toggle}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<div
						className={`-z-30 hidden sm:block absolute w-[95%] h-full duration-1000 ease-in-out ${
							isHovered ? "opacity-75" : "opacity-0"
						}`}
						style={{ background: `radial-gradient(at top, ${color1} -200%, #ffffff 70%)` }}
					></div>
					<div
						className={`pb-[2px] z-50 bg-gradient-to-r mb-2`}
						style={{ background: `linear-gradient(to right, ${color1}, ${color2})` }}
					></div>
					<h2 className='text-[1.6rem] mb:text-3xl font-bold text-left'>{title}</h2>
					<ul className='flex gap-2 mt-2 sm:mt-2  whitespace-nowrap flex-wrap'>
						{pills.map((value, index) => (
							<li
								key={index}
								style={{ borderColor: `${color1}`, color: `${color1}` }}
								className={`rounded-xl px-4 border-2 text-sm w-fit font-semibold`}
							>
								{value}
							</li>
						))}
					</ul>
					<div className='mt-[0.7rem] sm:mt-2 text-left md:w-5/6'>{children}</div>
				</div>
				<button className='hidden sm:flex ' onClick={toggle}>
					<svg
						className='mb-auto -mt-[10px]'
						width='28'
						height='28'
						fill={color2}
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='m12 13.169 4.95-4.95 1.414 1.414L12 15.997 5.636 9.633 7.05 8.219l4.95 4.95Z'></path>
					</svg>
				</button>
			</div>
			{/* Project Open */}
			<motion.div
				animate={{ height: open ? "auto" : 0 }}
				transition={{ type: "easeOut" }}
				className='h-0 sm:mt-8'
			>
				<div
					className='flex border-y-3 border-black bg-center *:font-spartan'
					style={{
						backgroundImage:
							"repeating-linear-gradient(-45deg, #f8f8f8 0, #f8f8f8 3px, transparent 0, transparent 50%)",
						backgroundSize: "28px 28px",
					}}
				>
					<div className='flex flex-wrap justify-center gap-16 w-full m-auto [&_*]:font-spartan py-5'>
						{/* Section Social Media */}
						<section className='max-w-[42rem] w-full'>
							<div ref={elementRef} className='flex flex-wrap items-center justify-between'>
								{/* Encart nom  */}
								<div className='flex '>
									<div className='max-w-28 max-h-28 my-auto rounded-full overflow-hidden border-3 border-black'>
										<img src='/img/moi_posterized.webp'></img>
									</div>
									<div className='flex flex-col items-start m-auto ml-4'>
										<h3 className='text-3xl font-medium'>Sébastien Leucci</h3>
										<p className='text-xl text-left font-extralight leading-5'>
											3D Infographist <br />
											Front-end developer jr
										</p>
									</div>
								</div>
								{/* Button contact */}
								<div className={`flex flex-col ${!isNarrow ? "text-right" : "text-left"} mt-4 ml-3`}>
									<button className='h-full mb-[6px]'>
										<div className='w-[160px] h-[45px] mt-0 bg-black flex rounded-xl border-3 border-black'></div>
										<div className='w-[160px] h-[45px] -mt-[50px] -ml-[4px] hover:-mt-[46px] hover:-mb-[4px] hover:ml-0 bg-red-400 flex justify-between rounded-xl border-3 border-black duration-200'>
											<h6 className='text-xl font-semibold m-auto mt-2'>Coucou toi</h6>
										</div>
									</button>
									<h4 className='text-lg font-semibold -mb-3'>@sebastienleucci</h4>
								</div>
							</div>
							{/* Stats */}
							<GraphMain />
						</section>
						{/* Timer project */}
						<SectionTimer />
						{/* Define Project */}
						<section className='relative flex flex-col min-h-full min-w-80 w-full max-w-[24rem] rounded-3xl py-6 bg-red-400 border-3 border-black overflow-hidden'>
							<h3 className='text-3xl font-medium'>Define your project</h3>
							<p className='text-xl text-center font-extralight leading-5'>
								Play with interactive design
							</p>
							<SliderPanel />
						</section>
					</div>
				</div>
				{/* <div className='h-96 border-b-3 border-black'></div> */}
			</motion.div>
		</section>
	)
}

//SECTION TIMER
function SectionTimer() {
	const [days, setDays] = useState(0)
	const [hours, setHours] = useState(0)
	const [minutes, setMinutes] = useState(0)
	// const [seconds, setSeconds] = useState(0)

	useEffect(() => {
		const projectStartDate = new Date("2024-04-23T00:00:00")
		const updateDuration = () => {
			const now = new Date()
			const duration = now - projectStartDate

			// const newSeconds = Math.floor((duration / 1000) % 60)
			const newMinutes = Math.floor((duration / (1000 * 60)) % 60)
			const newHours = Math.floor((duration / (1000 * 60 * 60)) % 24)
			const newDays = Math.floor(duration / (1000 * 60 * 60 * 24))

			// setSeconds(newSeconds)
			setMinutes(newMinutes)
			setHours(newHours)
			setDays(newDays)
		}

		const interval = setInterval(updateDuration, 1000)

		return () => clearInterval(interval)
	}, [])

	return (
		<section className='relative flex flex-col min-h-full min-w-80 w-full max-w-[26rem] bg-white border-3 border-black rounded-3xl py-6 overflow-hidden'>
			<h3 className='text-3xl font-medium max-w-72 m-auto'>Timer project</h3>
			<p className='text-xl text-center font-extralight leading-5'>Online for</p>
			<div className='flex w-full max-w-72 m-auto mt-5 gap-3'>
				<div className='flex flex-col items-center'>
					<button className='h-full w-min'>
						<div className='w-[60px] h-[60px] mt-0 bg-black flex rounded-xl border-3 border-black'></div>
						<div className='w-[60px] h-[60px] -mt-[64px] -ml-[4px] hover:-mt-[60px] hover:-mb-[4px] hover:ml-0 bg-red-400 flex justify-between rounded-xl border-3 border-black duration-200'>
							<h6 className='text-2xl font-semibold m-auto mt-3'>{days}</h6>
						</div>
					</button>
					<p className='text-xl text-left font-medium leading-5 mt-3'>
						<span className='text-red-400'>D</span>ays
					</p>
				</div>
				<div className='flex flex-col m-auto gap-1 pb-7'>
					<div className='h-[6px] w-[6px] bg-black rounded-full mr-1'></div>
					<div className='h-[6px] w-[6px] bg-black rounded-full mr-1'></div>
				</div>
				<div className='flex flex-col items-center'>
					<button className='h-full w-min'>
						<div className='w-[60px] h-[60px] mt-0 bg-black flex rounded-xl border-3 border-black'></div>
						<div className='w-[60px] h-[60px] -mt-[64px] -ml-[4px] hover:-mt-[60px] hover:-mb-[4px] hover:ml-0 bg-red-400 flex justify-between rounded-xl border-3 border-black duration-200'>
							<h6 className='text-2xl font-semibold m-auto -mb-[1px] mt-3'>{hours}</h6>
						</div>
					</button>
					<p className='text-xl text-left font-medium leading-5 mt-3'>
						<span className='text-red-400'>H</span>ours
					</p>
				</div>
				<div className='flex flex-col m-auto gap-1 pb-7'>
					<div className='h-[6px] w-[6px] bg-black rounded-full mr-1'></div>
					<div className='h-[6px] w-[6px] bg-black rounded-full mr-1'></div>
				</div>
				<div className='flex flex-col items-center'>
					<button className='h-full w-min'>
						<div className='w-[60px] h-[60px] mt-0 bg-black flex rounded-xl border-3 border-black'></div>
						<div className='w-[60px] h-[60px] -mt-[64px] -ml-[4px] hover:-mt-[60px] hover:-mb-[4px] hover:ml-0 bg-red-400 flex justify-between rounded-xl border-3 border-black duration-200'>
							<h6 className='text-2xl font-semibold m-auto -mb-[1px] mt-3'>{minutes}</h6>
						</div>
					</button>
					<p className='text-xl text-left font-medium leading-5 mt-3'>
						<span className='text-red-400'>M</span>ins
					</p>
				</div>
			</div>
			<h3 className='text-3xl font-medium max-w-72 mt-10 mb-5 mx-auto'>Skills involved</h3>
			<div className='w-full flex flex-col gap-5'>
				<ButtonPop name='UI Design' icon='/icons/mini-star.svg' color='bg-red-400' />
				<ButtonPop name='Figma' icon='/icons/mini-star.svg' color='bg-red-400' />
				<ButtonPop name='React' icon='/icons/mini-heart.svg' color='bg-[#ffb26b]' />
				<ButtonPop name='Javascript' icon='/icons/mini-heart.svg' color='bg-[#ffb26b]' />
			</div>
			<p className='-mb-5 mt-8'>
				*Original counter design: <span className='text-red-400'>@Sepidy</span>
			</p>
			<img src='/icons/star-black.svg' className='absolute top-80 rotate-[20deg] -left-[45px] w-[120px]' />
			<img src='/icons/star-red.svg' className='absolute top-[300px] rotate-[20deg] -left-[40px] w-[120px]' />
			<img src='/icons/heart-black.svg' className='absolute bottom-20 -rotate-[20deg] -right-[30px] w-[100px]' />
			<img src='/icons/heart-orange.svg' className='absolute bottom-24 -rotate-[20deg] -right-[25px] w-[100px]' />
		</section>
	)
}

// for responsive COUCOU
function useIsNarrow(ref, maxWidth) {
	const [isNarrow, setIsNarrow] = useState(false)

	useEffect(() => {
		const handleResize = () => setIsNarrow(ref.current?.offsetWidth < maxWidth)

		handleResize() // Check immediately in case it's already narrow.
		window.addEventListener("resize", handleResize)
		return () => window.removeEventListener("resize", handleResize)
	}, [ref, maxWidth])

	return isNarrow
}

// Graph
function GraphMain() {
	const mainGraphRef = useRef(null)
	const isNarrow = useIsNarrow(mainGraphRef, 470)

	return (
		<div
			ref={mainGraphRef}
			className={`relative p-5 mt-5 flex items-end ${
				!isNarrow ? "gap-5" : "gap-3"
			} rounded-3xl border-3 border-black bg-white`}
		>
			<div className='absolute flex flex-col items-end text-right top-5 right-5 '>
				<h3 className='text-3xl pl-28 font-medium'>Most viewed Reels and TikToks</h3>
				<p className='text-xl pl-28 font-extralight leading-5'>
					On similar posts TikTok engages x4 more community compared to Instagram
				</p>
			</div>
			<GraphColView name={"Penguins"} isTiktok={true} nbrView={"62.3K"} nbrLike={"1.2K"} height={"22"} />
			<GraphColView name={"On hit"} isTiktok={true} nbrView={"15.6K"} nbrLike={"960"} height={"7.4"} />
			<GraphColView name={"Penguins"} isTiktok={false} nbrView={"12.6K"} nbrLike={"850"} height={"7"}>
				<p className='w-full ml-[11px] mb-1 text-left font-extralight leading-4'>
					Sole reel <br /> above 10K
				</p>
			</GraphColView>
			<GraphColView name={"Bracelet"} isTiktok={true} nbrView={"11.5K"} nbrLike={"750"} height={"5.2"} />
			{!isNarrow && (
				<GraphColView name={"Dumbells"} isTiktok={true} nbrView={"11.3K"} nbrLike={"650"} height={"4.2"} />
			)}
		</div>
	)
}

function GraphColView({ name, isTiktok, nbrView, nbrLike, height, children }) {
	return (
		<div className='max-w-28 min-w-[68px] flex flex-1 flex-col items-center '>
			{children}
			<div
				className={`w-full p-1 mb-[6px] flex flex-col justify-between h-[${height}rem] ${
					isTiktok ? "bg-[#78ffe7]" : "bg-[#ffb26b]"
				}  rounded-xl border-3 border-black`}
			>
				<img
					src={`${isTiktok ? "/icons/mini-tiktok.svg" : "/icons/mini-insta.svg"}`}
					className={`w-4 ${!isTiktok && "m-[2px]"}`}
				/>
				<div className='flex '>
					<img src='/icons/mini-play.svg' className='w-2 pb-1 mx-1' />
					<h6 className='font-semibold text-sm'>{nbrView}</h6>
				</div>
			</div>
			<div className='w-full px-1 pb-[5px] pt-[8px] flex flex-col justify-center bg-red-400 rounded-xl border-3 border-black'>
				<div className='flex '>
					<img src='/icons/mini-heart.svg' className='w-[10px] pb-[2px] ml-[2px] mr-1' />
					<h6 className='font-semibold text-sm'>{nbrLike}</h6>
				</div>
			</div>
			<NavLink className='relative w-min mt-2 whitespace-nowrap font-medium'>
				{name} <img src='/icons/external_link.svg' className='w-2 absolute -right-[7px] -top-[1px]' />
			</NavLink>
		</div>
	)
}

function SliderPanel() {
	// State for the two sliders
	const [budgetSliderValue, setBudgetSliderValue] = useState(25) // Default position percentage
	const [timeSliderValue, setTimeSliderValue] = useState(25)

	// Handlers to update the slider values
	const handleBudgetChange = (value) => {
		setBudgetSliderValue(value)
	}

	const handleTimeChange = (value) => {
		setTimeSliderValue(value)
	}

	return (
		<ul className='flex justify-center h-full mt-8 mx-10'>
			<li className='flex flex-col h-full min-h-[28rem] items-center mx-auto'>
				<VerticalSlider value={budgetSliderValue} onChange={handleBudgetChange} />
				<p className='text-xl text-left font-medium leading-5 mt-3'>
					<span className='text-[#78ffe7]'>B</span>udget
				</p>
			</li>
			<li className='flex flex-col h-full min-h-[28rem] items-center mx-auto'>
				<VerticalSlider value={timeSliderValue} onChange={handleTimeChange} />
				<p className='text-xl text-left font-medium leading-5 mt-3'>
					<span className='text-[#78ffe7]'>T</span>ime
				</p>
			</li>
			<li className='flex flex-col h-full min-h-[28rem] items-center mx-auto'>
				<div className='relative overflow-hidden h-[420px] w-24 mx-3 bg-white border-black border-3 rounded-[20px]'>
					<div
						className='absolute flex flex-col justify-end items-center w-full h-[440px] bg-[#78ffe7] border-t-3 border-black overflow-hidden'
						style={{
							top: `${
								375 - 380 * ((parseInt(budgetSliderValue) * 3 + parseInt(timeSliderValue)) / 100 / 4)
							}px`,
						}}
					>
						<div className="bg-[url('/img/feels-good.jpg')] bg-cover bg-center h-40 w-40 -ml-8 mix-blend-multiply" />
					</div>
				</div>
				<p className='text-xl text-left font-medium leading-5 mt-3'>
					<span className='text-[#78ffe7]'>Q</span>uality
				</p>
			</li>
		</ul>
	)
}

//Slider
const VerticalSlider = ({ onChange }) => {
	const [value, setValue] = useState(50)

	const handleChange = (event) => {
		const newValue = event.target.value
		setValue(newValue)
		// console.log(newValue)
		if (onChange) {
			onChange(newValue) // Call the passed onChange function with the new value
		}
	}
	return (
		<div className='flex flex-col justify-between w-9 h-[420px] relative mx-auto py-20 bg-white rounded-full'>
			<input
				type='range'
				min='0' // Minimum value of the slider
				max='100' // Maximum value of the slider
				value={value} // Bind the value to the state
				onChange={handleChange}
				className='appearance-none bg-transparent absolute w-[420px] px-1 h-9 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 border-3 border-black rounded-full'
				style={{
					WebkitAppearance: "none",
					MozAppearance: "none",
					appearance: "none",
				}}
			/>
			<div className='bg-black h-[3px] rounded-full w-5 mx-2'></div>
			<div className='bg-black h-[3px] rounded-full w-5 mx-2'></div>
			<div className='bg-black h-[3px] rounded-full w-5 mx-2'></div>
			<div className='bg-black h-[3px] rounded-full w-5 mx-2'></div>
		</div>
	)
}

//Global
function OpenCloseResizing({ open, toggle }) {
	const [isMobile, setIsMobile] = useState(false)
	const [isDesktop, setIsDesktop] = useState(false)

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 640)
			setIsDesktop(window.innerWidth > 640)
		}

		handleResize()

		window.addEventListener("resize", handleResize)

		return () => {
			window.removeEventListener("resize", handleResize)
		}
	}, [])
	useEffect(() => {
		if (isMobile && !open) {
			toggle(true)
		}
	}, [isMobile])

	useEffect(() => {
		if (isDesktop && open) {
			toggle(false)
		}
	}, [isDesktop])
}

function useToggle(initialValue) {
	const [value, setValue] = useState(initialValue)
	const toggle = () => {
		const updatedValue = !value
		setValue(updatedValue)
		return updatedValue
	}
	return [value, toggle]
}

function ButtonPop({ name, icon, color }) {
	return (
		<button className='m-auto h-full w-min'>
			<div className='w-[200px] h-[50px] mt-0 bg-black flex rounded-xl border-3 border-black'></div>
			<div
				className={`w-[200px] h-[50px] -mt-[54px] -ml-[4px] hover:-mt-[50px] hover:-mb-[4px]  hover:ml-0  p-2 ${color} flex justify-between rounded-xl border-3 border-black duration-200`}
			>
				<h6 className='text-xl font-semibold m-auto ml-0 mt-[1px]'>{name}</h6>
				<img src={icon} className='w-6 m-auto mr-0' />
			</div>
		</button>
	)
}

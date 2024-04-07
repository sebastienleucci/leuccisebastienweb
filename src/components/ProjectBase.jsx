import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Slider from "react-slick"

export function ProjectBase({ baseState, title, pills, color1, color2, urls, urlPreview, children }) {
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

	return (
		<section className='mt-16 mySection mx-auto w-full sm:overflow-hidden flex flex-col rounded-xl'>
			<div className='flex flex-col sm:flex-row '>
				<div
					style={{
						backgroundImage: `${urlPreview}`,
					}}
					onClick={toggle}
					className='bg-cover bg-center hidden sm:flex sm:relative -mt-8 sm:mt-0 rounded-xl sm:min-w-40 sm:w-40 sm:h-40 sm:aspect-square overflow-hidden sm:overflow-visible hover:cursor-pointer pointer-events-none sm:pointer-events-auto'
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
						className={`h-[2px] bg-gradient-to-r mb-2`}
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
					<div className='mt-[0.7rem] sm:mt-2 text-left w-5/6'>{children}</div>
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
			{baseState ? (
				<motion.div className='h-auto sm:mt-6 '>
					<div className='slider-container rounded-xl overflow-hidden hover:cursor-pointer pointer-events-none sm:pointer-events-auto'>
						<SimpleSlider>
							{urls.map((url, index) => (
								<div key={index} className={"flex justify-center items-center overflow-hidden -mb-2"}>
									<img src={url} />
								</div>
							))}
						</SimpleSlider>
					</div>
				</motion.div>
			) : (
				<motion.div
					animate={{ height: open ? "auto" : 0 }}
					transition={{ type: "easeOut" }}
					className='h-0 sm:mt-6  '
				>
					<div className='slider-container  rounded-xl overflow-hidden hover:cursor-pointer '>
						<SimpleSlider>
							{urls.map((url, index) => (
								<div key={index} className={"flex justify-center items-center overflow-hidden -mb-2"}>
									<img src={url} />
								</div>
							))}
						</SimpleSlider>
					</div>
				</motion.div>
			)}
		</section>
	)
}

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

function SimpleSlider({ children }) {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: <SamplePrevArrow />,
		nextArrow: <SampleNextArrow />,
		appendDots: (dots) => (
			<div>
				<ul style={{ marginTop: "-70px" }}> {dots} </ul>
			</div>
		),
	}
	return <Slider {...settings}>{children}</Slider>
}
function SamplePrevArrow(props) {
	const { className, style, onClick } = props
	return (
		<div
			className={className}
			style={{ ...style, display: "block", marginLeft: 40, zIndex: 10 }}
			onClick={onClick}
		/>
	)
}
function SampleNextArrow(props) {
	const { className, style, onClick } = props
	return (
		<div
			className={className}
			style={{ ...style, display: "block", marginRight: 40, zIndex: 10 }}
			onClick={onClick}
		/>
	)
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

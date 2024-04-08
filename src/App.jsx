import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home.jsx"
import { About } from "./pages/About.jsx"
import { Header } from "./components/Header.jsx"
import { Footer } from "./components/Footer.jsx"
import ScrollToTop from "./components/ScrollToTop.js"

function App() {
	return (
		<>
			<Header />

			<main className='mt-[68px] flex flex-col items-center'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
				</Routes>
			</main>

			<Footer />

			<ScrollToTop />
		</>
	)
}

export default App

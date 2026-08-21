	// import { BrowserRouter, Routes, Route } from "react-router-dom";

	// import { ThemeProvider } from "@/context/ThemeContext";

	// import Navbar from "@/components/Navbar";
	// import Footer from "@/components/Footer";
	// import ScrollToTop from "@/components/ScrollToTop";
	// import PageTransition from "@/components/PageTransition";

	// import ClickSpark from "@/components/ClickSpark";
	// import SplashCursor from "@/components/SplashCursor";

	// import Home from "@/pages/Home";
	// import About from "@/pages/About";
	// import Experience from "@/pages/Experience";
	// import Projects from "@/pages/Projects";
	// import Skills from "@/pages/Skills";
	// import Education from "@/pages/Education";
	// import Contact from "@/pages/Contact";
	// import DigitalDisplay from "@/pages/digital_display";

	// function App() {
	// 	return (
	// 		<ThemeProvider>
	// 			<BrowserRouter basename="/SathyaSree-Portfolio">
	// 				{/* Global cursor effects */}
	// 				<SplashCursor
	// 					DENSITY_DISSIPATION={5}
	// 					VELOCITY_DISSIPATION={0.5}
	// 					PRESSURE={0.95}
	// 					CURL={3}
	// 					SPLAT_RADIUS={0.01}
	// 					SPLAT_FORCE={2500}
	// 					COLOR_UPDATE_SPEED={38}
	// 					SHADING={false}
	// 					RAINBOW_MODE={false}
	// 					COLOR="#E2725B"
	// 				/>

	// 				<ScrollToTop />

	// 				<ClickSpark
	// 					sparkColor="#B9674B"
	// 					sparkSize={8}
	// 					sparkRadius={14}
	// 					sparkCount={7}
	// 					duration={400}
	// 				>
	// 					<div className="flex min-h-screen flex-col">
	// 						<Navbar />

	// 						<main className="flex-1">
	// 							<PageTransition>
	// 								<Routes>
	// 									<Route path="/" element={<Home />} />
	// 									<Route path="/about" element={<About />} />
	// 									<Route path="/experience" element={<Experience />} />
	// 									<Route path="/projects" element={<Projects />} />
	// 									<Route path="/skills" element={<Skills />} />
	// 									<Route path="/education" element={<Education />} />
	// 									<Route path="/digital-display" element={<DigitalDisplay />} />
	// 									<Route path="/contact" element={<Contact />} />

	// 									{/* Fallback */}
	// 									<Route path="*" element={<Home />} />
	// 								</Routes>
	// 							</PageTransition>
	// 						</main>

	// 						<Footer />
	// 					</div>
	// 				</ClickSpark>
	// 			</BrowserRouter>
	// 		</ThemeProvider>
	// 	);
	// }

	// export default App;
















// 	import {
// 	BrowserRouter,
// 	Routes,
// 	Route,
// 	useLocation,
// } from "react-router-dom";

// import { ThemeProvider } from "@/context/ThemeContext";

// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import ScrollToTop from "@/components/ScrollToTop";
// import PageTransition from "@/components/PageTransition";

// import ClickSpark from "@/components/ClickSpark";
// import SplashCursor from "@/components/SplashCursor";

// import Home from "@/pages/Home";
// import About from "@/pages/About";
// import Experience from "@/pages/Experience";
// import Projects from "@/pages/Projects";
// import Skills from "@/pages/Skills";
// import Education from "@/pages/Education";
// import Contact from "@/pages/Contact";
// import DigitalDisplay from "@/pages/digital_display";


// function AppLayout() {
// 	const location = useLocation();

// 	// Hide footer only on Digital Display page
// 	const isDigitalDisplay =
// 		location.pathname === "/digital-display";

// 	return (
// 		<div className="flex min-h-screen flex-col">
// 			{/* Navbar stays on every page */}
// 			<Navbar />

// 			<main className="flex-1">
// 				<PageTransition>
// 					<Routes>
// 						<Route path="/" element={<Home />} />

// 						<Route
// 							path="/about"
// 							element={<About />}
// 						/>

// 						<Route
// 							path="/experience"
// 							element={<Experience />}
// 						/>

// 						<Route
// 							path="/projects"
// 							element={<Projects />}
// 						/>

// 						<Route
// 							path="/skills"
// 							element={<Skills />}
// 						/>

// 						<Route
// 							path="/education"
// 							element={<Education />}
// 						/>

// 						<Route
// 							path="/digital-display"
// 							element={<DigitalDisplay />}
// 						/>

// 						<Route
// 							path="/contact"
// 							element={<Contact />}
// 						/>

// 						{/* Fallback */}
// 						<Route
// 							path="*"
// 							element={<Home />}
// 						/>
// 					</Routes>
// 				</PageTransition>
// 			</main>

// 			{/* Footer hidden only on Digital Display */}
// 			{!isDigitalDisplay && <Footer />}
// 		</div>
// 	);
// }


// function App() {
// 	return (
// 		<ThemeProvider>
// 			<BrowserRouter basename="/SathyaSree-Portfolio">

// 				{/* Global cursor effects */}
// 				<SplashCursor
// 					DENSITY_DISSIPATION={5}
// 					VELOCITY_DISSIPATION={0.5}
// 					PRESSURE={0.95}
// 					CURL={3}
// 					SPLAT_RADIUS={0.01}
// 					SPLAT_FORCE={2500}
// 					COLOR_UPDATE_SPEED={38}
// 					SHADING={false}
// 					RAINBOW_MODE={false}
// 					COLOR="#E2725B"
// 				/>

// 				<ScrollToTop />

// 				<ClickSpark
// 					sparkColor="#B9674B"
// 					sparkSize={8}
// 					sparkRadius={14}
// 					sparkCount={7}
// 					duration={400}
// 				>
// 					<AppLayout />
// 				</ClickSpark>

// 			</BrowserRouter>
// 		</ThemeProvider>
// 	);
// }

// export default App;





















import {
	BrowserRouter,
	Routes,
	Route,
	useLocation,
} from "react-router-dom";

import { ThemeProvider } from "@/context/ThemeContext";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageTransition from "@/components/PageTransition";

import ClickSpark from "@/components/ClickSpark";
import SplashCursor from "@/components/SplashCursor";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Experience from "@/pages/Experience";
import Projects from "@/pages/Projects";
import Skills from "@/pages/Skills";
import Education from "@/pages/Education";
import Contact from "@/pages/Contact";
import DigitalDisplay from "@/pages/digital_display";


function AppLayout() {
	const location = useLocation();

	// Hide Navbar and Footer only on Digital Display page
	const isDigitalDisplay =
		location.pathname === "/digital-display";

	return (
		<div className="flex min-h-screen flex-col">

			{/* Navbar */}
			{!isDigitalDisplay && <Navbar />}

			<main className="flex-1">
				<PageTransition>
					<Routes>
						<Route
							path="/"
							element={<Home />}
						/>

						<Route
							path="/about"
							element={<About />}
						/>

						<Route
							path="/experience"
							element={<Experience />}
						/>

						<Route
							path="/projects"
							element={<Projects />}
						/>

						<Route
							path="/skills"
							element={<Skills />}
						/>

						<Route
							path="/education"
							element={<Education />}
						/>

						<Route
							path="/digital-display"
							element={<DigitalDisplay />}
						/>

						<Route
							path="/contact"
							element={<Contact />}
						/>

						{/* Fallback */}
						<Route
							path="*"
							element={<Home />}
						/>
					</Routes>
				</PageTransition>
			</main>

			{/* Footer */}
			{!isDigitalDisplay && <Footer />}

		</div>
	);
}


function App() {
	return (
		<ThemeProvider>
			<BrowserRouter basename="/SathyaSree-Portfolio">

				{/* Global cursor effects */}
				<SplashCursor
					DENSITY_DISSIPATION={5}
					VELOCITY_DISSIPATION={0.5}
					PRESSURE={0.95}
					CURL={3}
					SPLAT_RADIUS={0.01}
					SPLAT_FORCE={2500}
					COLOR_UPDATE_SPEED={38}
					SHADING={false}
					RAINBOW_MODE={false}
					COLOR="#E2725B"
				/>

				<ScrollToTop />

				<ClickSpark
					sparkColor="#B9674B"
					sparkSize={8}
					sparkRadius={14}
					sparkCount={7}
					duration={400}
				>
					<AppLayout />
				</ClickSpark>

			</BrowserRouter>
		</ThemeProvider>
	);
}


export default App;
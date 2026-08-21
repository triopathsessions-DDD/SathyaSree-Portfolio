// import { useEffect, useRef, useState } from "react";

// import d1 from "@/images/project_photo/dp1.jpg";
// import d2 from "@/images/project_photo/d2.jpg";
// import d3 from "@/images/project_photo/d3.jpg";
// import d4 from "@/images/project_photo/d4.jpg";
// import d5 from "@/images/project_photo/d5.jpg";
// import d6 from "@/images/project_photo/d6.jpg";
// import d7 from "@/images/project_photo/d7.jpg";
// import d8 from "@/images/project_photo/d8.jpg";
// import d9 from "@/images/project_photo/d9.jpeg";

// const images = [
// 	{ id: 1, src: d1 },
// 	{ id: 2, src: d2 },
// 	{ id: 3, src: d3 },
// 	{ id: 4, src: d4 },
// 	{ id: 5, src: d5 },
// 	{ id: 6, src: d6 },
// 	{ id: 7, src: d7 },
// 	{ id: 8, src: d8 },
// 	{ id: 9, src: d9 },
// ];

// export default function ScrollRevealGallery() {
// 	const sectionRef = useRef<HTMLDivElement>(null);

// 	const [progress, setProgress] = useState(0);

// 	useEffect(() => {
// 		const updateProgress = () => {
// 			const section = sectionRef.current;

// 			if (!section) return;

// 			const rect = section.getBoundingClientRect();
// 			const scrollDistance = section.offsetHeight - window.innerHeight;

// 			if (scrollDistance <= 0) return;

// 			const scrolled = -rect.top;

// 			const totalProgress = Math.min(Math.max(scrolled / scrollDistance, 0), 1);

// 			setProgress(totalProgress);
// 		};

// 		updateProgress();

// 		window.addEventListener("scroll", updateProgress, {
// 			passive: true,
// 		});

// 		window.addEventListener("resize", updateProgress);

// 		return () => {
// 			window.removeEventListener("scroll", updateProgress);
// 			window.removeEventListener("resize", updateProgress);
// 		};
// 	}, []);

// 	/*
// 	 * Each image receives an equal portion of the total scroll.
// 	 *
// 	 * Example with 9 images:
// 	 *
// 	 * Image 1 → 0% - 11.11%
// 	 * Image 2 → 11.11% - 22.22%
// 	 * Image 3 → 22.22% - 33.33%
// 	 * ...
// 	 * Image 9 → 88.88% - 100%
// 	 */

// 	const imageCount = images.length;
// 	const imageProgress = progress * imageCount;

// 	const activeIndex = Math.min(Math.floor(imageProgress), imageCount - 1);

// 	const currentImageProgress = Math.min(
// 		Math.max(imageProgress - activeIndex, 0),
// 		1,
// 	);

// 	return (
// 		<section
// 			ref={sectionRef}
// 			className="relative bg-[#111111]"
// 			style={{
// 				height: `${imageCount * 100}vh`,
// 			}}
// 		>
// 			{/* Sticky viewport */}
// 			<div className="sticky top-0 h-screen w-full overflow-hidden">
// 				{/* Intro text */}
// 				<div
// 					className={`pointer-events-none absolute left-1/2 top-10 z-50 -translate-x-1/2 text-center transition-opacity duration-500 ${
// 						progress > 0.02 ? "opacity-0" : "opacity-100"
// 					}`}
// 				>
// 					<p className="text-xs font-medium uppercase tracking-wider text-white/50">
// 						Scroll Down
// 					</p>

// 					<p className="text-xs font-medium uppercase tracking-wider text-white/50">
// 						To Reveal
// 					</p>

// 					<p className="text-xs font-medium uppercase tracking-wider text-white/50">
// 						The Images
// 					</p>

// 					<div className="mx-auto mt-4 h-16 w-px bg-white/20" />
// 				</div>

// 				{/* Image stage */}
// 				<div className="absolute inset-0 flex items-center justify-center px-4 md:px-8">
// 					<div className="relative h-[65vh] w-full max-w-5xl overflow-hidden md:h-[72vh] lg:h-[78vh]">
// 						{/* Images */}
// 						{images.map((image, index) => {
// 							/*
// 							 * Images before the active image remain completely visible.
// 							 */
// 							if (index < activeIndex) {
// 								return (
// 									<div
// 										key={image.id}
// 										className="absolute inset-0 overflow-hidden"
// 									>
// 										<img
// 											src={image.src}
// 											alt={`Fashion design ${image.id}`}
// 											className="h-full w-full object-contain"
// 										/>
// 									</div>
// 								);
// 							}

// 							/*
// 							 * Future images remain hidden.
// 							 */
// 							if (index > activeIndex) {
// 								return null;
// 							}

// 							/*
// 							 * Active image:
// 							 * progressively reveals from left → right.
// 							 */
// 							return (
// 								<div
// 									key={image.id}
// 									className="absolute inset-0 overflow-hidden"
// 									style={{
// 										clipPath: `inset(${
// 											(1 - currentImageProgress) * 100
// 										}% 0 0 0)`,
// 									}}
// 								>
// 									<img
// 										src={image.src}
// 										alt={`Fashion design ${image.id}`}
// 										className="h-full w-full object-contain"
// 									/>
// 								</div>
// 							);
// 						})}

// 						{/* Image counter */}
// 						<div className="absolute left-4 top-4 z-50 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-xs text-white backdrop-blur-md">
// 							{String(activeIndex + 1).padStart(2, "0")} /{" "}
// 							{String(imageCount).padStart(2, "0")}
// 						</div>

// 						{/* Right progress line */}
// 						<div className="absolute right-4 top-1/2 z-50 h-40 w-px -translate-y-1/2 bg-white/15">
// 							<div
// 								className="absolute left-0 top-0 w-px bg-white transition-none"
// 								style={{
// 									height: `${currentImageProgress * 100}%`,
// 								}}
// 							/>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// }
















// import { useEffect, useRef, useState } from "react";

// import d1 from "@/images/project_photo/dp1.jpg";
// import d2 from "@/images/project_photo/d2.jpg";
// import d3 from "@/images/project_photo/d3.jpg";
// import d4 from "@/images/project_photo/d4.jpg";
// import d5 from "@/images/project_photo/d5.jpg";
// import d6 from "@/images/project_photo/d6.jpg";
// import d7 from "@/images/project_photo/d7.jpg";
// import d8 from "@/images/project_photo/d8.jpg";
// import d9 from "@/images/project_photo/d9.jpeg";

// const images = [
// 	{ id: 1, src: d1 },
// 	{ id: 2, src: d2 },
// 	{ id: 3, src: d3 },
// 	{ id: 4, src: d4 },
// 	{ id: 5, src: d5 },
// 	{ id: 6, src: d6 },
// 	{ id: 7, src: d7 },
// 	{ id: 8, src: d8 },
// 	{ id: 9, src: d9 },
// ];

// export default function ScrollRevealGallery() {
// 	const sectionRef = useRef<HTMLDivElement>(null);

// 	const [progress, setProgress] = useState(0);

// 	const targetProgress = useRef(0);
// 	const smoothProgress = useRef(0);
// 	const animationFrame = useRef<number | null>(null);

// 	useEffect(() => {
// 		const updateTargetProgress = () => {
// 			const section = sectionRef.current;

// 			if (!section) return;

// 			const rect = section.getBoundingClientRect();

// 			const scrollDistance =
// 				section.offsetHeight - window.innerHeight;

// 			if (scrollDistance <= 0) return;

// 			const scrolled = -rect.top;

// 			const totalProgress = Math.min(
// 				Math.max(scrolled / scrollDistance, 0),
// 				1,
// 			);

// 			targetProgress.current = totalProgress;
// 		};

// 		const animate = () => {
// 			/*
// 			 * Smoothly move the current progress toward
// 			 * the actual scroll progress.
// 			 */
// 			smoothProgress.current +=
// 				(targetProgress.current - smoothProgress.current) * 0.08;

// 			setProgress(smoothProgress.current);

// 			animationFrame.current =
// 				requestAnimationFrame(animate);
// 		};

// 		updateTargetProgress();

// 		window.addEventListener(
// 			"scroll",
// 			updateTargetProgress,
// 			{ passive: true },
// 		);

// 		window.addEventListener(
// 			"resize",
// 			updateTargetProgress,
// 		);

// 		animationFrame.current =
// 			requestAnimationFrame(animate);

// 		return () => {
// 			window.removeEventListener(
// 				"scroll",
// 				updateTargetProgress,
// 			);

// 			window.removeEventListener(
// 				"resize",
// 				updateTargetProgress,
// 			);

// 			if (animationFrame.current !== null) {
// 				cancelAnimationFrame(
// 					animationFrame.current,
// 				);
// 			}
// 		};
// 	}, []);

// 	/*
// 	 * Each image receives an equal portion
// 	 * of the total scroll.
// 	 */

// 	const imageCount = images.length;

// 	const imageProgress =
// 		progress * imageCount;

// 	const activeIndex = Math.min(
// 		Math.floor(imageProgress),
// 		imageCount - 1,
// 	);

// 	const currentImageProgress = Math.min(
// 		Math.max(
// 			imageProgress - activeIndex,
// 			0,
// 		),
// 		1,
// 	);

// 	return (
// 		<section
// 			ref={sectionRef}
// 			className="relative bg-[#111111]"
// 			style={{
// 				height: `${imageCount * 100}vh`,
// 			}}
// 		>
// 			{/* Sticky viewport */}
// 			<div className="sticky top-0 h-screen w-full overflow-hidden">

// 				{/* Intro text */}
// 				<div
// 					className={`pointer-events-none absolute left-1/2 top-10 z-50 -translate-x-1/2 text-center transition-opacity duration-500 ${
// 						progress > 0.02
// 							? "opacity-0"
// 							: "opacity-100"
// 					}`}
// 				>
// 					<p className="text-xs font-medium uppercase tracking-wider text-white/50">
// 						Scroll Down
// 					</p>

// 					<p className="text-xs font-medium uppercase tracking-wider text-white/50">
// 						To Reveal
// 					</p>

// 					<p className="text-xs font-medium uppercase tracking-wider text-white/50">
// 						The Images
// 					</p>

// 					<div className="mx-auto mt-4 h-16 w-px bg-white/20" />
// 				</div>

// 				{/* Image stage */}
// 				<div className="absolute inset-0 flex items-center justify-center px-4 md:px-8">
// 					<div 
//                     // className="relative h-[65vh] w-full max-w-5xl overflow-hidden md:h-[72vh] lg:h-[78vh]"
//                     className="relative h-[850px] w-full max-w-5xl overflow-hidden"
//                     >

// 						{/* Images */}
// 						{images.map((image, index) => {

// 							/*
// 							 * Images before the active image
// 							 * remain completely visible.
// 							 */
// 							if (index < activeIndex) {
// 								return (
// 									<div
// 										key={image.id}
// 										className="absolute inset-0 overflow-hidden"
// 									>
// 										<img
// 											src={image.src}
// 											alt={`Fashion design ${image.id}`}
// 											className="h-full w-full object-contain"
// 										/>
// 									</div>
// 								);
// 							}

// 							/*
// 							 * Future images remain hidden.
// 							 */
// 							if (index > activeIndex) {
// 								return null;
// 							}

// 							/*
// 							 * Active image:
// 							 * smoothly reveals from
// 							 * bottom → top.
// 							 */
// 							return (
// 								<div
// 									key={image.id}
// 									className="absolute inset-0 overflow-hidden"
// 									style={{
// 										clipPath: `inset(${
// 											(1 - currentImageProgress) * 100
// 										}% 0 0 0)`,
// 										willChange: "clip-path",
// 									}}
// 								>
// 									<img
// 										src={image.src}
// 										alt={`Fashion design ${image.id}`}
// 										className="h-full w-full object-contain"
// 									/>
// 								</div>
// 							);
// 						})}

// 						{/* Image counter */}
// 						<div className="absolute left-4 top-4 z-50 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-xs text-white backdrop-blur-md">
// 							{String(
// 								activeIndex + 1,
// 							).padStart(2, "0")}{" "}
// 							/{" "}
// 							{String(
// 								imageCount,
// 							).padStart(2, "0")}
// 						</div>

// 						{/* Right progress line */}
// 						<div className="absolute right-4 top-1/2 z-50 h-40 w-px -translate-y-1/2 bg-white/15">

// 							<div
// 								className="absolute left-0 top-0 w-px bg-white"
// 								style={{
// 									height: `${currentImageProgress * 100}%`,
// 									willChange: "height",
// 								}}
// 							/>

// 						</div>

// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// }
























// import { useEffect, useRef, useState } from "react";

// import d1 from "@/images/project_photo/dp1.jpg";
// import d2 from "@/images/project_photo/d2.jpg";
// import d3 from "@/images/project_photo/d3.jpg";
// import d4 from "@/images/project_photo/d4.jpg";
// import d5 from "@/images/project_photo/d5.jpg";
// import d6 from "@/images/project_photo/d6.jpg";
// import d7 from "@/images/project_photo/d7.jpg";
// import d8 from "@/images/project_photo/d8.jpg";
// import d9 from "@/images/project_photo/d9.jpeg";

// const images = [
// 	{ id: 1, src: d1 },
// 	{ id: 2, src: d2 },
// 	{ id: 3, src: d3 },
// 	{ id: 4, src: d4 },
// 	{ id: 5, src: d5 },
// 	{ id: 6, src: d6 },
// 	{ id: 7, src: d7 },
// 	{ id: 8, src: d8 },
// 	{ id: 9, src: d9 },
// ];

// export default function ScrollRevealGallery() {
// 	const sectionRef = useRef<HTMLDivElement>(null);

// 	const targetProgress = useRef(0);
// 	const animatedProgress = useRef(0);
// 	const animationFrame = useRef<number | null>(null);

// 	const [progress, setProgress] = useState(0);

// 	useEffect(() => {
// 		const updateTargetProgress = () => {
// 			const section = sectionRef.current;

// 			if (!section) return;

// 			const rect = section.getBoundingClientRect();

// 			const scrollDistance =
// 				section.offsetHeight - window.innerHeight;

// 			if (scrollDistance <= 0) return;

// 			const scrolled = -rect.top;

// 			const nextProgress = Math.min(
// 				Math.max(scrolled / scrollDistance, 0),
// 				1
// 			);

// 			targetProgress.current = nextProgress;
// 		};

// 		const animate = () => {
// 			const current = animatedProgress.current;
// 			const target = targetProgress.current;

// 			/*
// 			 * Smooth interpolation.
// 			 *
// 			 * This prevents the images from jumping when the
// 			 * browser scroll position changes quickly.
// 			 */
// 			const difference = target - current;

// 			if (Math.abs(difference) < 0.0001) {
// 				animatedProgress.current = target;
// 			} else {
// 				animatedProgress.current =
// 					current + difference * 0.055;
// 			}

// 			setProgress(animatedProgress.current);

// 			animationFrame.current =
// 				requestAnimationFrame(animate);
// 		};

// 		updateTargetProgress();

// 		window.addEventListener(
// 			"scroll",
// 			updateTargetProgress,
// 			{ passive: true }
// 		);

// 		window.addEventListener(
// 			"resize",
// 			updateTargetProgress
// 		);

// 		animationFrame.current =
// 			requestAnimationFrame(animate);

// 		return () => {
// 			window.removeEventListener(
// 				"scroll",
// 				updateTargetProgress
// 			);

// 			window.removeEventListener(
// 				"resize",
// 				updateTargetProgress
// 			);

// 			if (animationFrame.current !== null) {
// 				cancelAnimationFrame(
// 					animationFrame.current
// 				);
// 			}
// 		};
// 	}, []);

// 	const imageCount = images.length;

// 	/*
// 	 * Every image gets an equal section of the scroll.
// 	 *
// 	 * 9 images:
// 	 *
// 	 * Image 1 → 0%   - 11.11%
// 	 * Image 2 → 11.11% - 22.22%
// 	 * Image 3 → 22.22% - 33.33%
// 	 * ...
// 	 * Image 9 → 88.88% - 100%
// 	 */
// 	const imageProgress = progress * imageCount;

// 	const activeIndex = Math.min(
// 		Math.floor(imageProgress),
// 		imageCount - 1
// 	);

// 	/*
// 	 * Progress inside the currently active image.
// 	 *
// 	 * 0 → 1
// 	 */
// 	const currentImageProgress = Math.min(
// 		Math.max(imageProgress - activeIndex, 0),
// 		1
// 	);

// 	/*
// 	 * FIRST HALF
// 	 *
// 	 * 0% → 50%
// 	 *
// 	 * Image reveals from top → bottom.
// 	 */
// 	const revealProgress = Math.min(
// 		currentImageProgress * 2,
// 		1
// 	);

// 	/*
// 	 * SECOND HALF
// 	 *
// 	 * 50% → 100%
// 	 *
// 	 * Image is already completely visible,
// 	 * then smoothly scales down.
// 	 *
// 	 * 50%  = 1
// 	 * 100% = 0.84
// 	 */
// 	const scaleProgress = Math.min(
// 		Math.max((currentImageProgress - 0.5) * 2, 0),
// 		1
// 	);

// 	const currentScale =
// 		1 - scaleProgress * 0.38;

// 	return (
// 		<section
// 			ref={sectionRef}
// 			className="relative bg-[#111111]"
// 			style={{
// 				height: `${imageCount * 100}vh`,
// 			}}
// 		>
// 			{/* Sticky viewport */}
// 			<div className="sticky top-0 h-screen w-full overflow-hidden bg-[#111111]">

// 				{/* Intro text */}
// 				{/* Intro text */}
// {activeIndex === 0 && (
// 	<div
// 		className="pointer-events-none absolute left-1/2 top-10 z-[100] text-center"
// 		style={{
// 			opacity: Math.max(
// 				0,
// 				1 - currentImageProgress * 5
// 			),
// 			transform: `translate(-50%, ${
// 				-currentImageProgress * 180
// 			}px)`,
// 			willChange: "transform, opacity",
// 		}}
// 	>
// 		<p className="text-xs font-medium uppercase tracking-wider text-white/50">
// 			Scroll Down
// 		</p>

// 		<p className="text-xs font-medium uppercase tracking-wider text-white/50">
// 			To Reveal
// 		</p>

// 		<p className="text-xs font-medium uppercase tracking-wider text-white/50">
// 			The Images
// 		</p>

// 		<div className="mx-auto mt-4 h-16 w-px bg-white/20" />
// 	</div>
// )}

// 				{/* Main image stage */}
// 				<div className="absolute inset-0 flex items-center justify-center px-4 md:px-8">

// 					<div className="relative flex h-full w-full items-center justify-center">

// 						{/* =====================================================
// 						    PREVIOUS IMAGES
// 						    ===================================================== */}

// 						{images.map((image, index) => {
// 							if (index >= activeIndex) {
// 								return null;
// 							}

// 							return (
// 								<div
// 									key={image.id}
// 									className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
// 								>
// 									<img
// 										src={image.src}
// 										alt={`Fashion design ${image.id}`}
// 										className="
// 											block
// 											h-[min(900px,calc(100vh-40px))]
// 											w-auto
// 											max-w-[92vw]
// 											object-contain
// 										"
// 										style={{
// 											transform:
// 												"scale(0.84)",
// 											transformOrigin:
// 												"center center",
// 										}}
// 									/>
// 								</div>
// 							);
// 						})}

// 						{/* =====================================================
// 						    ACTIVE IMAGE
// 						    ===================================================== */}

// 						<div
// 							className="
// 								absolute
// 								left-1/2
// 								top-1/2
// 								flex
// 								-translate-x-1/2
// 								-translate-y-1/2
// 								items-center
// 								justify-center
// 								overflow-hidden
// 							"
// 							style={{
// 								clipPath: `inset(${
// 									(1 - revealProgress) * 100
// 								}% 0 0 0)`,
// 								transform: `translate(-50%, -50%) scale(${currentScale})`,
// 								transformOrigin:
// 									"center center",
// 								transition:
// 									"clip-path 0.08s linear, transform 0.08s linear",
// 								willChange:
// 									"clip-path, transform",
// 							}}
// 						>
// 							<img
// 								src={images[activeIndex].src}
// 								alt={`Fashion design ${
// 									images[activeIndex].id
// 								}`}
// 								className="
// 									block
// 									h-[min(900px,calc(100vh-40px))]
// 									w-auto
// 									max-w-[92vw]
// 									object-contain
// 								"
// 							/>
// 						</div>

// 						{/* =====================================================
// 						    IMAGE COUNTER
// 						    ===================================================== */}

// 						<div className="absolute left-4 top-4 z-[100] rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-xs text-white backdrop-blur-md">
// 							{String(activeIndex + 1).padStart(
// 								2,
// 								"0"
// 							)}{" "}
// 							/{" "}
// 							{String(imageCount).padStart(
// 								2,
// 								"0"
// 							)}
// 						</div>

// 						{/* =====================================================
// 						    RIGHT PROGRESS LINE
// 						    ===================================================== */}

// 						<div
// 							className="
// 								absolute
// 								right-4
// 								top-1/2
// 								z-[100]
// 								h-40
// 								w-px
// 								-translate-y-1/2
// 								bg-white/15
// 								md:right-8
// 								lg:right-12
// 							"
// 						>
// 							<div
// 								className="absolute left-0 top-0 w-px bg-white"
// 								style={{
// 									height: `${
// 										currentImageProgress *
// 										100
// 									}%`,
// 									transition:
// 										"height 0.08s linear",
// 								}}
// 							/>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// }














// import { useEffect, useRef, useState } from "react";

// import d1 from "@/images/project_photo/dp1.jpg";
// import d2 from "@/images/project_photo/d2.jpg";
// import d3 from "@/images/project_photo/d3.jpg";
// import d4 from "@/images/project_photo/d4.jpg";
// import d5 from "@/images/project_photo/d5.jpg";
// import d6 from "@/images/project_photo/d6.jpg";
// import d7 from "@/images/project_photo/d7.jpg";
// import d8 from "@/images/project_photo/d8.jpg";
// import d9 from "@/images/project_photo/d9.jpeg";

// const images = [
// 	{ id: 1, src: d1 },
// 	{ id: 2, src: d2 },
// 	{ id: 3, src: d3 },
// 	{ id: 4, src: d4 },
// 	{ id: 5, src: d5 },
// 	{ id: 6, src: d6 },
// 	{ id: 7, src: d7 },
// 	{ id: 8, src: d8 },
// 	{ id: 9, src: d9 },
// ];

// export default function ScrollRevealGallery() {
// 	const sectionRef = useRef<HTMLDivElement>(null);

// 	const targetProgress = useRef(0);
// 	const animatedProgress = useRef(0);
// 	const animationFrame = useRef<number | null>(null);

// 	const [progress, setProgress] = useState(0);

// 	useEffect(() => {
// 		const updateTargetProgress = () => {
// 			const section = sectionRef.current;

// 			if (!section) return;

// 			const rect = section.getBoundingClientRect();

// 			const scrollDistance =
// 				section.offsetHeight - window.innerHeight;

// 			if (scrollDistance <= 0) return;

// 			const scrolled = -rect.top;

// 			const nextProgress = Math.min(
// 				Math.max(scrolled / scrollDistance, 0),
// 				1
// 			);

// 			targetProgress.current = nextProgress;
// 		};

// 		const animate = () => {
// 			const current = animatedProgress.current;
// 			const target = targetProgress.current;

// 			/*
// 			 * Smooth interpolation.
// 			 *
// 			 * This prevents the images from jumping when the
// 			 * browser scroll position changes quickly.
// 			 */
// 			const difference = target - current;

// 			if (Math.abs(difference) < 0.0001) {
// 				animatedProgress.current = target;
// 			} else {
// 				animatedProgress.current =
// 					current + difference * 0.055;
// 			}

// 			setProgress(animatedProgress.current);

// 			animationFrame.current =
// 				requestAnimationFrame(animate);
// 		};

// 		updateTargetProgress();

// 		window.addEventListener(
// 			"scroll",
// 			updateTargetProgress,
// 			{ passive: true }
// 		);

// 		window.addEventListener(
// 			"resize",
// 			updateTargetProgress
// 		);

// 		animationFrame.current =
// 			requestAnimationFrame(animate);

// 		return () => {
// 			window.removeEventListener(
// 				"scroll",
// 				updateTargetProgress
// 			);

// 			window.removeEventListener(
// 				"resize",
// 				updateTargetProgress
// 			);

// 			if (animationFrame.current !== null) {
// 				cancelAnimationFrame(
// 					animationFrame.current
// 				);
// 			}
// 		};
// 	}, []);

// 	const imageCount = images.length;

// 	/*
// 	 * Every image gets an equal section of the scroll.
// 	 *
// 	 * 9 images:
// 	 *
// 	 * Image 1 → 0%   - 11.11%
// 	 * Image 2 → 11.11% - 22.22%
// 	 * Image 3 → 22.22% - 33.33%
// 	 * ...
// 	 * Image 9 → 88.88% - 100%
// 	 */
// 	const imageProgress = progress * imageCount;

// 	const activeIndex = Math.min(
// 		Math.floor(imageProgress),
// 		imageCount - 1
// 	);

// 	/*
// 	 * Progress inside the currently active image.
// 	 *
// 	 * 0 → 1
// 	 */
// 	const currentImageProgress = Math.min(
// 		Math.max(imageProgress - activeIndex, 0),
// 		1
// 	);

// 	/*
// 	 * FIRST HALF
// 	 *
// 	 * 0% → 50%
// 	 *
// 	 * Image reveals from top → bottom.
// 	 */
// 	const revealProgress = Math.min(
// 		currentImageProgress * 2,
// 		1
// 	);

// 	/*
// 	 * SECOND HALF
// 	 *
// 	 * 50% → 100%
// 	 *
// 	 * Image is already completely visible,
// 	 * then smoothly scales down.
// 	 *
// 	 * 50%  = 1
// 	 * 100% = 0.84
// 	 */
// 	const scaleProgress = Math.min(
// 		Math.max((currentImageProgress - 0.5) * 2, 0),
// 		1
// 	);

// 	const currentScale =
// 		1 - scaleProgress * 0.38;

// 	return (
// 		<section
// 			ref={sectionRef}
// 			className="relative bg-[#111111]"
// 			style={{
// 				height: `${imageCount * 100}vh`,
// 			}}
// 		>
// 			{/* Sticky viewport */}
// 			<div className="sticky top-0 h-screen w-full overflow-hidden bg-[#111111]">

// 			{activeIndex > 0 && currentImageProgress < 0.5 && (
// 	<div
// 		className="
// 			absolute
// 			left-1/2
// 			top-1/2
// 			flex
// 			-translate-x-1/2
// 			-translate-y-1/2
// 			items-center
// 			justify-center
// 		"
// 	>
// 		<img
// 			src={images[activeIndex - 1].src}
// 			alt={`Fashion design ${images[activeIndex - 1].id}`}
// 			className="
// 				block
// 				h-[min(900px,calc(100vh-40px))]
// 				w-auto
// 				max-w-[92vw]
// 				object-contain
// 			"
// 			style={{
// 				transform: "scale(0.62)",
// 				transformOrigin: "center center",
// 			}}
// 		/>
// 	</div>
// )}
// 				{/* Main image stage */}
// 				<div className="absolute inset-0 flex items-center justify-center px-4 md:px-8">

// 					<div className="relative flex h-full w-full items-center justify-center">

// 						{/* =====================================================
// 						    ACTIVE IMAGE ONLY
// 						    ===================================================== */}

// 						<div
// 							className="
// 								absolute
// 								left-1/2
// 								top-1/2
// 								flex
// 								-translate-x-1/2
// 								-translate-y-1/2
// 								items-center
// 								justify-center
// 								overflow-hidden
// 							"
// 							style={{
// 								clipPath: `inset(${
// 									(1 - revealProgress) * 100
// 								}% 0 0 0)`,
// 								transform: `translate(-50%, -50%) scale(${currentScale})`,
// 								transformOrigin:
// 									"center center",
// 								transition:
// 									"clip-path 0.08s linear, transform 0.08s linear",
// 								willChange:
// 									"clip-path, transform",
// 							}}
// 						>
// 							<img
// 								src={images[activeIndex].src}
// 								alt={`Fashion design ${
// 									images[activeIndex].id
// 								}`}
// 								className="
// 									block
// 									h-[min(900px,calc(100vh-40px))]
// 									w-auto
// 									max-w-[92vw]
// 									object-contain
// 								"
// 							/>
// 						</div>

// 						{/* =====================================================
// 						    IMAGE COUNTER
// 						    ===================================================== */}

// 						<div className="absolute left-4 top-4 z-[100] rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-xs text-white backdrop-blur-md">
// 							{String(activeIndex + 1).padStart(
// 								2,
// 								"0"
// 							)}{" "}
// 							/{" "}
// 							{String(imageCount).padStart(
// 								2,
// 								"0"
// 							)}
// 						</div>

// 						{/* =====================================================
// 						    RIGHT PROGRESS LINE
// 						    ===================================================== */}

// 						<div
// 							className="
// 								absolute
// 								right-4
// 								top-1/2
// 								z-[100]
// 								h-40
// 								w-px
// 								-translate-y-1/2
// 								bg-white/15
// 								md:right-8
// 								lg:right-12
// 							"
// 						>
// 							<div
// 								className="absolute left-0 top-0 w-px bg-white"
// 								style={{
// 									height: `${
// 										currentImageProgress *
// 										100
// 									}%`,
// 									transition:
// 										"height 0.08s linear",
// 								}}
// 							/>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// }



















import { useEffect, useRef, useState } from "react";

import d1 from "@/images/project_photo/dp1.jpg";
import d2 from "@/images/project_photo/d2.jpg";
import d3 from "@/images/project_photo/d3.jpg";
import d4 from "@/images/project_photo/d4.jpg";
import d5 from "@/images/project_photo/d5.jpg";
import d6 from "@/images/project_photo/d6.jpg";
import d7 from "@/images/project_photo/d7.jpg";
import d8 from "@/images/project_photo/d8.jpg";
import d9 from "@/images/project_photo/d9.jpeg";

const images = [
	{ id: 1, src: d1 },
	{ id: 2, src: d2 },
	{ id: 3, src: d3 },
	{ id: 4, src: d4 },
	{ id: 5, src: d5 },
	{ id: 6, src: d6 },
	{ id: 7, src: d7 },
	{ id: 8, src: d8 },
	{ id: 9, src: d9 },
];

export default function ScrollRevealGallery() {
	const sectionRef = useRef<HTMLDivElement>(null);

	const targetProgress = useRef(0);
	const animatedProgress = useRef(0);
	const animationFrame = useRef<number | null>(null);

	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const updateTargetProgress = () => {
			const section = sectionRef.current;

			if (!section) return;

			const rect = section.getBoundingClientRect();

			const scrollDistance =
				section.offsetHeight - window.innerHeight;

			if (scrollDistance <= 0) return;

			const scrolled = -rect.top;

			const nextProgress = Math.min(
				Math.max(scrolled / scrollDistance, 0),
				1
			);

			targetProgress.current = nextProgress;
		};

		const animate = () => {
			const current = animatedProgress.current;
			const target = targetProgress.current;

			const difference = target - current;

			/*
			 * Smooth scroll interpolation.
			 *
			 * This controls how smoothly the gallery follows
			 * the user's actual scroll position.
			 */
			if (Math.abs(difference) < 0.0001) {
				animatedProgress.current = target;
			} else {
				animatedProgress.current =
					current + difference * 0.055;
			}

			setProgress(animatedProgress.current);

			animationFrame.current =
				requestAnimationFrame(animate);
		};

		updateTargetProgress();

		window.addEventListener(
			"scroll",
			updateTargetProgress,
			{ passive: true }
		);

		window.addEventListener(
			"resize",
			updateTargetProgress
		);

		animationFrame.current =
			requestAnimationFrame(animate);

		return () => {
			window.removeEventListener(
				"scroll",
				updateTargetProgress
			);

			window.removeEventListener(
				"resize",
				updateTargetProgress
			);

			if (animationFrame.current !== null) {
				cancelAnimationFrame(
					animationFrame.current
				);
			}
		};
	}, []);

	const imageCount = images.length;

	/*
	 * Each image gets one complete section of scroll.
	 *
	 * Image 1 → 0%   - 11.11%
	 * Image 2 → 11.11% - 22.22%
	 * Image 3 → 22.22% - 33.33%
	 * ...
	 * Image 9 → 88.88% - 100%
	 */
	const imageProgress = progress * imageCount;

	const activeIndex = Math.min(
		Math.floor(imageProgress),
		imageCount - 1
	);

	/*
	 * Progress inside the current image.
	 *
	 * 0 → 1
	 */
	const currentImageProgress = Math.min(
		Math.max(
			imageProgress - activeIndex,
			0
		),
		1
	);

	/*
	 * ============================================================
	 * FIRST HALF — IMAGE REVEAL
	 * ============================================================
	 *
	 * 0% → 50%
	 *
	 * The image reveals from top → bottom.
	 */
const firstImageStartDelay = 0.30;

const revealProgress =
	activeIndex === 0
		? Math.min(
				Math.max(
					(currentImageProgress - firstImageStartDelay) /
						(0.5 - firstImageStartDelay),
					0
				) * 1,
				1
			)
		: Math.min(
				currentImageProgress * 2,
				1
			);
	/*
	 * ============================================================
	 * SECOND HALF — IMAGE SHRINK
	 * ============================================================
	 *
	 * 50% → 100%
	 *
	 * The image is completely visible at 50%.
	 * Then it smoothly shrinks.
	 *
	 * 50%  → scale(1)
	 * 100% → scale(0.62)
	 */
	const scaleProgress = Math.min(
		Math.max(
			(currentImageProgress - 0.5) * 2,
			0
		),
		1
	);

	const currentScale =
		1 - scaleProgress * 0.38;

	/*
	 * The previous image must remain at exactly
	 * the final size reached at 100%.
	 *
	 * This prevents it from jumping back to 0.84
	 * when the next image begins.
	 */
	const previousImageScale = 0.62;

	return (
		<section
			ref={sectionRef}
			className="relative bg-[#111111]"
			style={{
				height: `${imageCount * 100}vh`,
			}}
		>
			{/* =====================================================
			    STICKY VIEWPORT
			    ===================================================== */}
			<div className="sticky top-0 h-screen w-full overflow-hidden bg-[#111111]">

				{/* =================================================
				    INTRO TEXT
				    ================================================= */}
				{activeIndex === 0 && (
					<div
						className="pointer-events-none absolute left-1/2 top-10 z-[100] text-center"
						style={{
							opacity: Math.max(
								0,
								1 -
									currentImageProgress * 5
							),
							transform: `translate(-50%, ${
								-currentImageProgress *
								180
							}px)`,
							willChange:
								"transform, opacity",
						}}
					>
						<p className="text-xs font-medium uppercase tracking-wider text-white/50">
							Scroll Down
						</p>

						<p className="text-xs font-medium uppercase tracking-wider text-white/50">
							To Reveal
						</p>

						<p className="text-xs font-medium uppercase tracking-wider text-white/50">
							The Images
						</p>

						<div className="mx-auto mt-4 h-16 w-px bg-white/20" />
					</div>
				)}

				{/* =================================================
				    MAIN IMAGE STAGE
				    ================================================= */}
				<div className="absolute inset-0 flex items-center justify-center px-4 md:px-8">

					<div className="relative flex h-full w-full items-center justify-center">

						{/* =================================================
						    IMMEDIATELY PREVIOUS IMAGE ONLY
						    =================================================

						    IMPORTANT:

						    Only the image directly before the
						    current image remains underneath.

						    Example:

						    Image 3 revealing
						    ↓
						    Image 2 stays underneath
						    ↓
						    Image 1 does NOT exist
						*/}
						{activeIndex > 0 &&
							currentImageProgress < 0.5 && (
								<div
									className="
										absolute
										left-1/2
										top-1/2
										flex
										-translate-x-1/2
										-translate-y-1/2
										items-center
										justify-center
									"
								>
									<img
										src={
											images[
												activeIndex -
													1
											].src
										}
										alt={`Fashion design ${
											images[
												activeIndex -
													1
											].id
										}`}
										className="
											block
											h-[min(900px,calc(100vh-40px))]
											w-auto
											max-w-[92vw]
											object-contain
											sm:max-w-[88vw]
										"
										style={{
											transform: `scale(${previousImageScale})`,
											transformOrigin:
												"center center",
										}}
									/>
								</div>
							)}

						{/* =================================================
						    ACTIVE IMAGE
						    ================================================= */}
						<div
							className="
								absolute
								left-1/2
								top-1/2
								flex
								-translate-x-1/2
								-translate-y-1/2
								items-center
								justify-center
								overflow-hidden
							"
							style={{
								/*
								 * Reveal from top → bottom.
								 */
								clipPath: `inset(${
									(1 -
										revealProgress) *
									100
								}% 0 0 0)`,

								/*
								 * Keep the image centered while
								 * shrinking from 50% → 100%.
								 */
								transform: `translate(-50%, -50%) scale(${currentScale})`,

								transformOrigin:
									"center center",

								/*
								 * No long CSS transition here.
								 *
								 * The requestAnimationFrame
								 * interpolation above already
								 * provides the smooth motion.
								 *
								 * This avoids double-animation
								 * and prevents transition
								 * flickering between images.
								 */
								willChange:
									"clip-path, transform",
							}}
						>
							<img
								src={
									images[
										activeIndex
									].src
								}
								alt={`Fashion design ${
									images[
										activeIndex
									].id
								}`}
								className="
									block
									h-[min(900px,calc(100vh-40px))]
									w-auto
									max-w-[92vw]
									object-contain
									sm:max-w-[88vw]
								"
							/>
						</div>

						{/* =================================================
						    IMAGE COUNTER
						    ================================================= */}
						{/* <div className="absolute left-4 top-4 z-[100] rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-xs text-white backdrop-blur-md sm:left-6 sm:top-5">
							{String(
								activeIndex + 1
							).padStart(2, "0")}{" "}
							/{" "}
							{String(
								imageCount
							).padStart(2, "0")}
						</div> */}

						{/* =================================================
						    RIGHT PROGRESS LINE
						    ================================================= */}
						<div
							className="
								absolute
								right-4
								top-1/2
								z-[100]
								h-40
								w-px
								-translate-y-1/2
								bg-white/15
								md:right-8
								lg:right-12
							"
						>
							<div
								className="absolute left-0 top-0 w-px bg-white"
								style={{
									height: `${
										currentImageProgress *
										100
									}%`,
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
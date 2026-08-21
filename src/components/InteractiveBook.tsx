import { useEffect, useState } from "react";

type BookPage = {
	number?: string;
	title?: string;
	text?: string;
		mobileText?: string;

	largeNumber?: string;
};

type BookSpread = {
	left: BookPage;
	right: BookPage;
};

type InteractiveBookProps = {
	coverImage: string;
	coverTitle: string;
	coverAuthor: string;
	spreads: BookSpread[];
};

export default function InteractiveBook({
	coverImage,
	coverTitle,
	coverAuthor,
	spreads,
}: InteractiveBookProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [currentSpread, setCurrentSpread] = useState(0);

	const [turning, setTurning] = useState(false);
	const [direction, setDirection] = useState<"next" | "prev">("next");

	const [isOpening, setIsOpening] = useState(false);

	const totalSpreads = spreads.length;

	const current = spreads[currentSpread];
	const next = spreads[currentSpread + 1];
	const previous = spreads[currentSpread - 1];

	/* =========================================================
	   LOCK BODY SCROLL WHILE BOOK IS OPEN
	========================================================= */

	useEffect(() => {
		if (!isOpen) {
			document.body.style.overflow = "";
			return;
		}

		document.body.style.overflow = "hidden";

		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	/* =========================================================
	   OPEN BOOK
	========================================================= */

	const openBook = () => {
		setCurrentSpread(0);
		setTurning(false);
		setDirection("next");
		setIsOpen(true);
		setIsOpening(true);

		window.setTimeout(() => {
			setIsOpening(false);
		}, 900);
	};

	/* =========================================================
	   CLOSE BOOK
	========================================================= */

	const closeBook = () => {
		setIsOpen(false);
		setCurrentSpread(0);
		setTurning(false);
		setIsOpening(false);
	};

	/* =========================================================
	   READ AGAIN
	========================================================= */

	const readAgain = () => {
		setTurning(false);
		setDirection("next");
		setCurrentSpread(0);
	};

	/* =========================================================
	   NEXT PAGE
	========================================================= */

	const goNext = () => {
		if (
			turning ||
			currentSpread >= totalSpreads - 1 ||
			!next
		) {
			return;
		}

		setDirection("next");
		setTurning(true);

		window.setTimeout(() => {
			setCurrentSpread((value) => value + 1);
			setTurning(false);
		}, 400);
	};

	/* =========================================================
	   PREVIOUS PAGE
	========================================================= */

	const goPrevious = () => {
		if (
			turning ||
			currentSpread <= 0 ||
			!previous
		) {
			return;
		}

		setDirection("prev");
		setTurning(true);

		window.setTimeout(() => {
			setCurrentSpread((value) => value - 1);
			setTurning(false);
		}, 850);
	};

	return (
		<>
			{/* =========================================================
			    CLOSED BOOK
			========================================================= */}

			<div className="flex w-full flex-col items-center justify-center py-10">
				<button
					type="button"
					onClick={openBook}
					className="group relative w-[230px] sm:w-[260px] md:w-[300px]"
				>
					<div
						className="
							relative
							aspect-[0.69]
							overflow-hidden
							rounded-[3px]
							shadow-[0_25px_60px_rgba(0,0,0,0.35)]
							transition-all
							duration-500
							ease-out
							group-hover:-translate-y-2
							group-hover:shadow-[0_35px_80px_rgba(0,0,0,0.45)]
						"
					>
						<img
							src={coverImage}
							alt={coverTitle}
							className="
								absolute
								inset-0
								h-full
								w-full
								object-cover
							"
						/>

						{/* Cover gradient */}
						<div
							className="
								absolute
								inset-0
								bg-gradient-to-b
								from-transparent
								via-transparent
								to-black/80
							"
						/>

						{/* Cover content */}
						<div
							className="
								absolute
								bottom-0
								left-0
								right-0
								p-4
								text-left
								sm:p-5
							"
						>
							<h3
								className="
									font-serif
									text-[17px]
									font-semibold
									leading-tight
									text-white
									sm:text-[19px]
									md:text-[21px]
								"
							>
								{coverTitle}
							</h3>

							<p
								className="
									mt-2
									text-[8px]
									font-medium
									uppercase
									tracking-[0.15em]
									text-white/80
									sm:text-[9px]
								"
							>
								{coverAuthor}
							</p>
						</div>
					</div>
				</button>

				<p
					className="
						mt-4
						text-xs
						uppercase
						tracking-[0.18em]
						text-muted
					"
				>
					Click to Open
				</p>
			</div>

			{/* =========================================================
			    BOOK MODAL
			========================================================= */}

			{isOpen && (
				<div
					className="
						fixed
						inset-0
						z-[9999]
						flex
						items-center
						justify-center
						bg-[#151515]
						px-3
						sm:px-6
					"
				>
					{/* =====================================================
					    CLOSE BUTTON
					===================================================== */}

					<button
						type="button"
						onClick={closeBook}
						aria-label="Close book"
						className="
							absolute
							right-4
							top-20
							z-[200]
							flex
							h-11
							w-11
							items-center
							justify-center
							rounded-full
							bg-white/[0.04]
							text-white
							transition-all
							duration-300
							hover:bg-white/[0.1]
							hover:rotate-90
							sm:right-6
							sm:top-20
						"
					>
						<span className="absolute h-px w-5 rotate-45 bg-white/90" />
						<span className="absolute h-px w-5 -rotate-45 bg-white/90" />
					</button>

					{/* =====================================================
					    BOOK SCENE
					===================================================== */}

					<div
						className={`
							relative
							w-full
							max-w-[900px]
							${isOpening ? "animate-book-open" : ""}
						`}
						style={{
							perspective: "1800px",
						}}
					>
						<div
							className="
								relative
								mx-auto
								aspect-[1.70]
								w-full
							"
							style={{
								transformStyle: "preserve-3d",
							}}
						>
							{/* =================================================
							    CURRENT LEFT PAGE
							================================================= */}

							<div
								className="
									absolute
									left-0
									top-0
									z-10
									h-full
									w-1/2
									overflow-hidden
									rounded-l-md
									bg-[#f8f7f2]
								"
								style={{
									boxShadow:
										"inset -18px 0 28px rgba(0,0,0,0.055)",
								}}
							>
								<PageContent
									page={current.left}
									side="left"
								/>
							</div>

							{/* =================================================
							    CURRENT RIGHT PAGE
							================================================= */}

							<div
								className="
									absolute
									right-0
									top-0
									z-10
									h-full
									w-1/2
									overflow-hidden
									rounded-r-md
									bg-[#f8f7f2]
								"
								style={{
									boxShadow:
										"inset 18px 0 28px rgba(0,0,0,0.055)",
								}}
							>
								<PageContent
									page={current.right}
									side="right"
									onReadAgain={
										currentSpread === totalSpreads - 1
											? readAgain
											: undefined
									}
								/>
							</div>

							{/* =================================================
							    NEXT PAGE TURN
							================================================= */}

							{turning &&
								direction === "next" &&
								next && (
									<div
										className="
											absolute
											right-0
											top-0
											z-50
											h-full
											w-1/2
										"
										style={{
											transformStyle:
												"preserve-3d",
											transformOrigin:
												"left center",
											animation:
												"pageNext 850ms cubic-bezier(0.22,0.61,0.36,1) forwards",
										}}
									>
										{/* FRONT */}

										<div
											className="
												absolute
												inset-0
												overflow-hidden
												rounded-r-md
												bg-[#f8f7f2]
											"
											style={{
												backfaceVisibility:
													"hidden",
												boxShadow:
													"8px 0 24px rgba(0,0,0,0.10)",
											}}
										>
											<PageContent
												page={current.right}
												side="right"
											/>

											<div
												className="
													pointer-events-none
													absolute
													inset-y-0
													left-0
													w-1/3
													bg-gradient-to-r
													from-black/[0.08]
													to-transparent
												"
											/>
										</div>

										{/* BACK */}

										<div
											className="
												absolute
												inset-0
												overflow-hidden
												rounded-l-md
												bg-[#f8f7f2]
											"
											style={{
												backfaceVisibility:
													"hidden",
												transform:
													"rotateY(180deg)",
												boxShadow:
													"inset -14px 0 24px rgba(0,0,0,0.055)",
											}}
										>
											<PageContent
												page={next.left}
												side="left"
											/>
										</div>
									</div>
								)}

							{/* =================================================
							    PREVIOUS PAGE TURN
							================================================= */}

							{turning &&
								direction === "prev" &&
								previous && (
									<div
										className="
											absolute
											left-0
											top-0
											z-50
											h-full
											w-1/2
										"
										style={{
											transformStyle:
												"preserve-3d",
											transformOrigin:
												"right center",
											animation:
												"pagePrev 850ms cubic-bezier(0.22,0.61,0.36,1) forwards",
										}}
									>
										{/* FRONT */}

										<div
											className="
												absolute
												inset-0
												overflow-hidden
												rounded-l-md
												bg-[#f8f7f2]
											"
											style={{
												backfaceVisibility:
													"hidden",
												boxShadow:
													"-8px 0 24px rgba(0,0,0,0.10)",
											}}
										>
											<PageContent
												page={current.left}
												side="left"
											/>

											<div
												className="
													pointer-events-none
													absolute
													inset-y-0
													right-0
													w-1/3
													bg-gradient-to-l
													from-black/[0.08]
													to-transparent
												"
											/>
										</div>

										{/* BACK */}

										<div
											className="
												absolute
												inset-0
												overflow-hidden
												rounded-r-md
												bg-[#f8f7f2]
											"
											style={{
												backfaceVisibility:
													"hidden",
												transform:
													"rotateY(180deg)",
												boxShadow:
													"inset 14px 0 24px rgba(0,0,0,0.055)",
											}}
										>
											<PageContent
												page={previous.right}
												side="right"
											/>
										</div>
									</div>
								)}

							{/* =================================================
							    CENTER SPINE
							================================================= */}

							<div
								className="
									pointer-events-none
									absolute
									left-1/2
									top-0
									z-[60]
									h-full
									w-px
									-translate-x-1/2
									bg-black/[0.12]
								"
								style={{
									boxShadow:
										"0 0 10px rgba(0,0,0,0.12)",
								}}
							/>

							{/* Soft center highlight */}

							<div
								className="
									pointer-events-none
									absolute
									left-1/2
									top-0
									z-[61]
									h-full
									w-8
									-translate-x-1/2
									bg-gradient-to-r
									from-transparent
									via-black/[0.025]
									to-transparent
								"
							/>
						</div>
					</div>

					{/* =====================================================
					    INVISIBLE CLICK AREAS
					===================================================== */}

					{!turning && (
						<>
							<button
								type="button"
								aria-label="Previous page"
								onClick={goPrevious}
								disabled={currentSpread === 0}
								className="
									absolute
									left-0
									top-0
									h-full
									w-1/2
									cursor-pointer
									disabled:cursor-default
								"
							/>

							<button
								type="button"
								aria-label="Next page"
								onClick={goNext}
								disabled={
									currentSpread ===
									totalSpreads - 1
								}
								className="
									absolute
									right-0
									top-0
									h-full
									w-1/2
									cursor-pointer
									disabled:cursor-default
								"
							/>
						</>
					)}
				</div>
			)}

			{/* =========================================================
			    ANIMATION STYLES
			========================================================= */}

			<style>{`
				@keyframes pageNext {
					0% {
						transform: rotateY(0deg);
					}

					100% {
						transform: rotateY(-180deg);
					}
				}

				@keyframes pagePrev {
					0% {
						transform: rotateY(0deg);
					}

					100% {
						transform: rotateY(180deg);
					}
				}

				@keyframes bookOpen {
					0% {
						opacity: 0;
						transform: scale(0.72) rotateY(-12deg);
					}

					55% {
						opacity: 1;
						transform: scale(1.025) rotateY(2deg);
					}

					100% {
						opacity: 1;
						transform: scale(1) rotateY(0deg);
					}
				}

				@media (max-width: 640px) {
					@keyframes bookOpen {
						0% {
							opacity: 0;
							transform: scale(0.78);
						}

						100% {
							opacity: 1;
							transform: scale(1);
						}
					}
				}

				@media (prefers-reduced-motion: reduce) {
					@keyframes pageNext {
						0%,
						100% {
							transform: rotateY(0deg);
						}
					}

					@keyframes pagePrev {
						0%,
						100% {
							transform: rotateY(0deg);
						}
					}

					@keyframes bookOpen {
						0%,
						100% {
							opacity: 1;
							transform: none;
						}
					}
				}
			`}</style>
		</>
	);
}

/* =============================================================
   PAGE CONTENT
============================================================= */

function PageContent({
	page,
	side,
	onReadAgain,
}: {
	page: BookPage;
	side: "left" | "right";
	onReadAgain?: () => void;
}) {
	/* ===========================================================
	   LEFT PAGE
	=========================================================== */

	if (side === "left") {
		return (
			<div className="relative flex h-full w-full items-center justify-center px-6 sm:px-10 md:px-14">
				{page.number && (
					<span
						className="
							absolute
							left-6
							top-6
							font-serif
							text-xs
							text-black/40
							sm:left-8
							sm:top-8
						"
					>
						{page.number}
					</span>
				)}

				{page.largeNumber ? (
					<span
						className="
							select-none
							font-serif
							text-[90px]
							font-bold
							leading-none
							text-black/[0.035]
							sm:text-[130px]
							md:text-[170px]
						"
					>
						{page.largeNumber}
					</span>
				) : (
					<div className="text-center">
						<h2
							className="
								font-serif
								text-xl
								leading-tight
								text-[#414141]
								sm:text-2xl
								md:text-3xl
							"
						>
							{page.title}
						</h2>

						<div className="mx-auto mt-4 h-px w-8 bg-black/20" />

						<p
							className="
								mt-3
								text-[9px]
								uppercase
								tracking-[0.16em]
								text-black/45
								sm:text-[10px]
							"
						>
							INTERACTIVE EDITION
						</p>
					</div>
				)}
			</div>
		);
	}

	/* ===========================================================
	   FINAL PAGE
	=========================================================== */

	if (page.title === "The End" && onReadAgain) {
		return (
			<div className="relative flex h-full w-full items-center justify-center px-7 py-7 sm:px-9 sm:py-9 md:px-12 md:py-10">
				{page.number && (
					<span
						className="
							absolute
							right-6
							top-6
							font-serif
							text-xs
							text-black/30
							sm:right-8
							sm:top-8
						"
					>
						{page.number}
					</span>
				)}

				<div className="flex flex-col items-center justify-center text-center">
					<h2
						className="
							font-serif
							text-2xl
							italic
							leading-tight
							text-black/25
							sm:text-3xl
							md:text-4xl
						"
					>
						{page.title}
					</h2>

					<button
						type="button"
						onClick={onReadAgain}
						className="
							mt-8
							flex
							items-center
							gap-2
							rounded-full
							bg-black/[0.015]
							px-7
							py-3
							font-sans
							text-sm
							text-black/25
							transition-all
							duration-300
							hover:bg-black/[0.04]
							hover:text-black/40
							sm:text-base
						"
					>
						<span className="text-xl leading-none">
							↻
						</span>

						<span>Read Again</span>
					</button>
				</div>
			</div>
		);
	}

	/* ===========================================================
	   RIGHT PAGE
	=========================================================== */

	return (
		<div className="relative h-full w-full px-7 py-7 sm:px-9 sm:py-9 md:px-12 md:py-10">
			{page.number && (
				<span
					className="
						absolute
						right-6
						top-6
						font-serif
						text-xs
						text-black/40
						sm:right-8
						sm:top-8
					"
				>
					{page.number}
				</span>
			)}

			<div className="flex h-full flex-col justify-center">
				{page.title && (
					<h2
						className="
							font-serif
							text-lg
							leading-tight
							text-[#292929]
							sm:text-xl
							md:text-2xl
						"
					>
						{page.title}
					</h2>
				)}

				{/* {page.text && (
					<p
						className="
							mt-6
							max-w-[95%]
							whitespace-pre-line
							font-serif
							text-xs
							leading-[1.65]
							text-[#444]
							sm:text-sm
							md:text-[15px]
							md:leading-[1.7]
						"
					>
						{page.text}
					</p>
				)} */}

				{page.text && (
	<>
		{/* Desktop / Tablet */}
		<p
			className="
				mt-6
				max-w-[95%]
				whitespace-pre-line
				font-serif
				text-xs
				leading-[1.65]
				text-[#444]
				sm:text-sm
				md:text-[10px]
				lg:text-[15px]
				md:leading-[1.7]
				hidden md:block
			"
		>
			{page.text}
		</p>

		{/* Mobile */}
		<p
			className="
				mt-5
				max-w-full
				whitespace-pre-line
				font-serif
				text-[8.5px]
				leading-[1.55]
				text-[#444]
				block md:hidden
			"
		>
			{page.mobileText || page.text}
		</p>
	</>
)}
			</div>
		</div>
	);
}
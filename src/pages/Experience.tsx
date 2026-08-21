// import PageHeader from '@/components/PageHeader';
// import ExperienceTimeline from '@/components/ExperienceTimeline';
// import { experience } from '@/data/portfolio';
// import ScrollReveal from '@/components/ScrollReveal';
// import { ArrowRight } from 'lucide-react';

// export default function Experience() {
//   return (
//     <>
//       <PageHeader
//         label="Experience"
//         title="The Journey"
//         subtitle="Professional experience shaping visual merchandising, retail operations, and team leadership."
//       />
//       <div className='mx-auto max-w-7xl px-10 pb-6'>
//        {/* <a className='border border-wine hover:text-wine hover:bg-transparent text-white bg-wine dark:bg-terracotta/80  dark:border-white/20 px-4 py-[10px] rounded-lg  dark:hover:bg-transparent dark:hover:text-muted' href=''>Tap to see My Work</a> */}
//        <a
//   className="group relative inline-flex items-center justify-center border border-wine hover:text-wine hover:bg-transparent text-white bg-wine dark:bg-terracotta/80 dark:border-white/20 px-4 py-[10px] rounded-lg dark:hover:bg-transparent dark:hover:text-white"
//   href=""
// >
//   <span className="transition-opacity duration-200 group-hover:opacity-0">
//     Tap to see My Work
//   </span>

//   <span className="absolute opacity-0 transition-opacity duration-200 group-hover:opacity-100 flex  gap-2 ">
//     Let's Gooooo 🥳 <ArrowRight />
//   </span>
// </a>
//       </div>
//       {/* Stats highlight */}
//       <section className="mx-auto max-w-7xl px-6 pb-12 md:px-10 mt-5">
//         <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
//           {[
//             { value: '10+', label: 'Seasonal Displays / Quarter' },
//             { value: '3', label: 'Departments Managed' },
//             { value: '5+', label: 'Zones Restructured' },
//             { value: '8+', label: 'Team Members Trained' },
//           ].map((stat, idx) => (
//             <div
//               key={idx}
//               className="rounded-xl border border-charcoal/10 bg-ivory/60 p-6 text-center transition-all duration-300 hover:border-wine/25 dark:border-cream/10 dark:bg-charcoal/40 dark:hover:border-terracotta/25 opacity-0 animate-scale-in "
//               style={{ animationDelay: `${idx * 100 + 200}ms` }}
//             >
//               <p className="font-d text-3xl font-light text-wine dark:text-terracotta">
//                 {stat.value}
//               </p>
//               <p className="mt-2 text-xs uppercase tracking-wider text-muted">{stat.label}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Timeline */}
//       <ScrollReveal>
//       <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
//         <div className="mb-12 flex items-center gap-4">
//           <h2 className="font-display text-2xl font-medium text-charcoal dark:text-cream">
//             Role & Responsibilities
//           </h2>
//           <div className="h-px flex-1 bg-charcoal/10 dark:bg-cream/10" />
//         </div>
//         <ExperienceTimeline />
//       </section>
//       </ScrollReveal>

//           // design images grid
//       <section className="mx-auto max-w-7xl px-6 pb-12 md:px-10 mt-5">

//           </section>

//       {/* Overview card */}
//       <ScrollReveal>
//       <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10 hover:scale-105">
//         <div className="rounded-2xl border border-charcoal/10 bg-gradient-to-br from-cream/50 to-ivory/50 p-8 dark:border-cream/10 dark:from-charcoal/40 dark:to-charcoal-deep/30 md:p-12">
//           <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">Overview</p>
//           <h3 className="mt-3 font-display text-3xl font-medium text-charcoal dark:text-cream">
//             {experience.role}
//           </h3>
//           <p className="mt-2 text-sm text-wine dark:text-terracotta">
//             {experience.company} · {experience.location}
//           </p>
//           <p className="mt-2 text-sm text-muted">{experience.period}</p>
//           <p className="mt-6 max text-base leading-relaxed text-charcoal/70 dark:text-cream/60 break-all">
//             Led visual merchandising and department management across three departments, delivering seasonal window and floor displays, aligning promotional calendars, and driving performance through data-informed display strategy. Combined creative presentation with operational discipline — managing inventory, vendors, budgets, and stakeholder reporting while training and onboarding the retail team. Conducted competitor benchmarking and regional trend analysis to keep visual presentations relevant and commercially competitive, while restructuring underperforming zones based on footfall and conversion data. Coordinated planograms, promotional campaigns, and point-of-purchase displays to maintain consistent brand presentation across departments.
//           </p>
//         </div>
//       </section>
//       </ScrollReveal>

//     </>
//   );
// }

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import { experience } from "@/data/portfolio";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { papaverineCollection } from "@/components/design_pic";

export default function Experience() {
	const [activeImage, setActiveImage] = useState(
		papaverineCollection.images[1],
	);

	const handlePrevious = () => {
		const currentIndex = papaverineCollection.images.findIndex(
			(image) => image.id === activeImage.id,
		);

		const previousIndex =
			currentIndex === 0
				? papaverineCollection.images.length - 1
				: currentIndex - 1;

		setActiveImage(papaverineCollection.images[previousIndex]);
	};

	const handleNext = () => {
		const currentIndex = papaverineCollection.images.findIndex(
			(image) => image.id === activeImage.id,
		);

		const nextIndex =
			currentIndex === papaverineCollection.images.length - 1
				? 0
				: currentIndex + 1;

		setActiveImage(papaverineCollection.images[nextIndex]);
	};

	return (
		<>
			{/* Page Header */}
			<PageHeader
				label="Experience"
				title="The Journey"
				subtitle="Professional experience in visual merchandising and fashion retail, combining creative display concepts, seasonal styling, planogram execution, brand presentation, retail operations, and team leadership to create engaging and commercially effective customer experiences."
			/>

			{/* Work Button */}
			<div className="mx-auto max-w-7xl px-10 pb-6">
				<a
					className="group relative inline-flex items-center justify-center rounded-lg border border-wine bg-wine px-4 py-[10px] text-white transition-all duration-300 hover:bg-transparent hover:text-wine dark:border-white/20 dark:bg-terracotta/80 dark:hover:bg-transparent dark:hover:text-white"
					href="#design-work"
				>
					<span className="transition-opacity duration-200 group-hover:opacity-0">
						Tap to see My Work
					</span>

					<span className="absolute flex gap-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
						Let's Gooooo 🥳
						<ArrowRight size={20} />
					</span>
				</a>
			</div>

			{/* Stats highlight */}
			<section className="mx-auto mt-5 max-w-7xl px-6 pb-12 md:px-10">
				<div className="grid grid-cols-2 gap-4 md:grid-cols-4">
					{[
						{
							value: "10+",
							label: "Seasonal Displays / Quarter",
						},
						{
							value: "3",
							label: "Departments Managed",
						},
						{
							value: "5+",
							label: "Zones Restructured",
						},
						{
							value: "8+",
							label: "Team Members Trained",
						},
					].map((stat, idx) => (
						<div
							key={idx}
							className="rounded-xl border border-charcoal/10 bg-ivory/60 p-6 text-center opacity-0 transition-all duration-300 hover:border-wine/25 animate-scale-in dark:border-cream/10 dark:bg-charcoal/40 dark:hover:border-terracotta/25"
							style={{
								animationDelay: `${idx * 100 + 200}ms`,
							}}
						>
							<p className="font-d text-3xl font-light text-wine dark:text-terracotta">
								{stat.value}
							</p>

							<p className="mt-2 text-xs uppercase tracking-wider text-muted">
								{stat.label}
							</p>
						</div>
					))}
				</div>
			</section>

			{/* Timeline */}
			<ScrollReveal>
				<section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
					<div className="mb-12 flex items-center gap-4">
						<h2 className="font-display text-2xl font-medium text-charcoal dark:text-cream">
							Role & Responsibilities
						</h2>

						<div className="h-px flex-1 bg-charcoal/10 dark:bg-cream/10" />
					</div>

					<ExperienceTimeline />
				</section>
			</ScrollReveal>

			{/* ========================================================= */}
			{/* FASHION DESIGN COLLECTION */}
			{/* ========================================================= */}

			<ScrollReveal>
				<section
					id="design-work"
					className="mx-auto max-w-7xl px-6 pb-20 md:px-10"
				>
					{/* Section heading */}
					<div className="mb-10">
						<p className="text-xs font-medium uppercase tracking-[0.25em] text-muted">
							Featured Work
						</p>

						<h2 className="mt-3 font-display text-3xl font-medium text-charcoal dark:text-cream md:text-4xl">
							{papaverineCollection.title}
						</h2>

						<p className="mt-2 text-sm uppercase tracking-[0.15em] text-wine dark:text-terracotta">
							{papaverineCollection.subtitle}
						</p>

						<p className="mt-4 max-w-2xl text-sm leading-relaxed text-charcoal/65 dark:text-cream/60">
							{papaverineCollection.description}
						</p>
					</div>

					{/* Featured Image */}
					<div className="flex w-full justify-center px-2 sm:px-4">
						<div className="relative flex max-w-full items-center justify-center gap-2 sm:gap-3 md:gap-4">
							{/* Previous Button */}
							<button
								type="button"
								aria-label="Previous image"
								onClick={handlePrevious}
								className="
        z-10
        flex shrink-0 items-center justify-center
        rounded-full
        border border-charcoal/20
        bg-black/20
        text-white
        backdrop-blur-md
        transition-all duration-300
        hover:scale-110
        hover:bg-black/40
        dark:border-white/20

        h-8 w-8
        sm:h-9 sm:w-9
        md:h-10 md:w-10
      "
							>
								<ChevronLeft
									className="h-4 w-4 sm:h-[18px] sm:w-[18px] md:h-5 md:w-5"
									strokeWidth={1.5}
								/>
							</button>

							{/* Image */}
							<div className="relative overflow-hidden rounded-lg sm:rounded-xl ">
								<img
									src={activeImage.src}
									alt={activeImage.alt}
									className="
  block
  h-[370px]
  w-auto
  max-w-[calc(100vw-88px)]
  object-contain
  transition-all
   rounded-lg
      sm:rounded-xl
  duration-700
  ease-out

  sm:h-[600px]

  min-[1080px]:h-[700px]

  min-[1440px]:h-[700px]
        "
								/>

							</div>

							{/* Next Button */}
							<button
								type="button"
								aria-label="Next image"
								onClick={handleNext}
								className="
        z-10
        flex shrink-0 items-center justify-center
        rounded-full
        border border-charcoal/20
        bg-black/20
        text-white
        backdrop-blur-md
        transition-all duration-300
        hover:scale-110
        hover:bg-black/40
        dark:border-white/20

        h-8 w-8
        sm:h-9 sm:w-9
        md:h-10 md:w-10
      "
							>
								<ChevronRight
									className="h-4 w-4 sm:h-[18px] sm:w-[18px] md:h-5 md:w-5"
									strokeWidth={1.5}
								/>
							</button>
						</div>
					</div>

					{/* ===================================================== */}
					{/* IMAGE SCROLL CARDS */}
					{/* ===================================================== */}

					{/* <div className="mt-5 overflow-x-auto pb-3">
            <div className="flex min-w-max gap-3"> */}
					<div className="mt-5 overflow-x-auto pb-3">
						<div className="mx-auto flex w-fit min-w-max gap-3">
							{papaverineCollection.images.map((image) => {
								const isActive = image.id === activeImage.id;

								return (
									<button
										key={image.id}
										type="button"
										onClick={() => setActiveImage(image)}
										aria-label={`View image ${image.id}`}
										className={`group relative h-24 w-20 shrink-0 overflow-hidden rounded-lg border transition-all duration-500 md:h-28 md:w-24 ${
											isActive
												? "scale-105 border-wine ring-2 ring-wine/20 dark:border-terracotta dark:ring-terracotta/20"
												: "border-charcoal/10 opacity-65 hover:scale-105 hover:opacity-100 dark:border-cream/10"
										}`}
									>
										<img
											src={image.src}
											alt={image.alt}
											className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
										/>

										{/* Card Number */}
										{/* <span className="absolute bottom-1.5 left-1.5 rounded bg-black/50 px-1.5 py-0.5 text-[10px] text-white backdrop-blur-sm">
                      {String(image.id).padStart(2, '0')}
                    </span> */}
									</button>
								);
							})}
						</div>
					</div>

					{/* Gallery Hint */}
					<p className="mt-4 text-center text-xs uppercase tracking-[0.2em] text-muted">
						Select a look to explore the collection
					</p>
				</section>
			</ScrollReveal>

			{/* Overview card */}
			<ScrollReveal>
				<section className="mx-auto max-w-7xl px-6 pb-20 transition-transform duration-300 hover:scale-[1.01] md:px-10">
					<div className="rounded-2xl border border-charcoal/10 bg-gradient-to-br from-cream/50 to-ivory/50 p-8 dark:border-cream/10 dark:from-charcoal/40 dark:to-charcoal-deep/30 md:p-12">
						<p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
							Overview
						</p>

						<h3 className="mt-3 font-display text-3xl font-medium text-charcoal dark:text-cream">
							{experience.role}
						</h3>

						<p className="mt-2 text-sm text-wine dark:text-terracotta">
							{experience.company} · {experience.location}
						</p>

						<p className="mt-2 text-sm text-muted">{experience.period}</p>

						<p className="mt-6 text-base leading-relaxed text-charcoal/70 dark:text-cream/60">
							Led visual merchandising and department management across three
							departments, delivering seasonal window and floor displays,
							aligning promotional calendars, and driving performance through
							data-informed display strategy. Combined creative presentation
							with operational discipline — managing inventory, vendors,
							budgets, and stakeholder reporting while training and onboarding
							the retail team. Conducted competitor benchmarking and regional
							trend analysis to keep visual presentations relevant and
							commercially competitive, while restructuring underperforming
							zones based on footfall and conversion data. Coordinated
							planograms, promotional campaigns, and point-of-purchase displays
							to maintain consistent brand presentation across departments.
						</p>
					</div>
				</section>
			</ScrollReveal>
		</>
	);
}

// import PageHeader from '@/components/PageHeader';
// import ProjectCards from '@/components/ProjectCards';

// export default function Projects() {
//   return (
//     <>
//       <PageHeader
//         label="Projects"
//         title="Selected Work"
//         subtitle="A showcase of fashion collections developed end-to-end — from concept and illustration through technical specification and runway presentation."
//       />

//       <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
//         <div className="mb-12 flex items-center gap-4">
//           <h2 className="font-display text-2xl font-medium text-charcoal dark:text-cream">
//             Case Studies
//           </h2>
//           <div className="h-px flex-1 bg-charcoal/10 dark:bg-cream/10" />
//           <span className="text-sm text-muted">02 Projects</span>
//         </div>
//         <ProjectCards />
//       </section>

//       {/* Process note */}
//       <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
//         <div className="grid gap-6 md:grid-cols-4">
//           {[
//             { num: '01', label: 'Concept', text: 'Inspiration, mood, and visual direction' },
//             { num: '02', label: 'Design', text: 'Illustration, flat sketches, and boards' },
//             { num: '03', label: 'Specification', text: 'Tech packs, costing, and sourcing' },
//             { num: '04', label: 'Presentation', text: 'Final collection and runway execution' },
//           ].map((step, idx) => (

//             <div
//               key={idx}
//               className="opacity-0 animate-fade-up"
//               style={{ animationDelay: `${idx * 100 + 300}ms` }}
//             >
//               <p className="font-display text-2xl font-light text-wine/40 dark:text-terracotta/40">
//                 {step.num}
//               </p>
//               <h4 className="mt-2 font-display text-lg font-medium text-charcoal dark:text-cream">
//                 {step.label}
//               </h4>
//               <p className="mt-1 text-sm text-muted">{step.text}</p>
//             </div>
//           ))}
//         </div>

//       </section>
//     </>
//   );
// }

import PageHeader from "@/components/PageHeader";
import ProjectCards from "@/components/ProjectCards";
import InteractiveBook from "@/components/InteractiveBook";

import bookCover from "@/images/book-cover.jpg";

export default function Projects() {
	return (
		<>
			<PageHeader
				label="Projects"
				title="Selected Work"
				subtitle="A showcase of fashion collections developed end-to-end — from concept and illustration through technical specification and runway presentation."
			/>

			<section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
				<div className="mb-12 flex items-center gap-4">
					<h2 className="font-display text-2xl font-medium text-charcoal dark:text-cream">
						Case Studies
					</h2>

					<div className="h-px flex-1 bg-charcoal/10 dark:bg-cream/10" />

					<span className="text-sm text-muted">02 Projects</span>
				</div>

				<ProjectCards />
			</section>

			{/* =====================================================
          INTERACTIVE PROCESS BOOK
      ===================================================== */}

			<section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
				<div className="mb-12 flex items-center gap-4">
					<h2 className="font-display text-2xl font-medium text-charcoal dark:text-cream">
						Process
					</h2>

					<div className="h-px flex-1 bg-charcoal/10 dark:bg-cream/10" />

					<span className="text-sm text-muted">04 Steps</span>
				</div>

				<InteractiveBook
					coverImage={bookCover}
					coverTitle="The Design Process"
					coverAuthor="- SATHYASREE"
					spreads={[
						{
							left: {
								title: "The Design Process",
							},

							right: {
								number: "01",
								title: "Concept",
								text: "Inspiration, mood, and visual direction establish the foundation of the collection.\n\nThe creative direction begins by exploring references, themes, colours, textures, and visual influences that shape the overall identity of the collection. These elements are carefully refined to create a clear mood and cohesive design language.\n\nFrom initial ideas and visual research to the development of a defined aesthetic, each decision helps translate the original concept into a strong and distinctive creative direction.",
							},
						},

						{
							left: {
								number: "02",
								largeNumber: "02",
							},

							right: {
								number: "03",
								title: "Design",
								text: "Illustration, flat sketches, and visual boards transform the initial concept into a refined design direction.\n\nEvery element is developed with a clear relationship between form, fabric, colour, and silhouette.",
							},
						},

						{
							left: {
								number: "04",
								largeNumber: "04",
							},

							right: {
								number: "05",
								title: "Specification",
								text: "Technical specifications, costing, sourcing, and production details turn the creative direction into a practical development process.\n\nEach design is translated into clear technical documentation, including measurements, materials, construction details, and finishing requirements. Costing and sourcing are carefully considered to ensure the collection remains both achievable and production-ready.\n\nThis process connects the creative concept with the practical requirements of development and manufacturing.",
							},
						},

						{
							left: {
								number: "06",
								largeNumber: "06",
							},

							right: {
								number: "07",
								title: "Presentation",
								text: "The final collection comes together through presentation, styling, and runway execution, communicating the completed creative vision.",
							},
						},
						{
							left: {
								number: "08",
								largeNumber: "08",
							},

							right: {
								// number: "09",
								title: "The End",
								text: "Read again.",
							},
						},
					]}
				/>
			</section>
		</>
	);
}

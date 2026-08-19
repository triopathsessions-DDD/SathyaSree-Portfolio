import { useState, FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import PageHeader from "@/components/PageHeader";
// import emailjs from "@emailjs/browser";
import ContactInfo from "@/components/ContactInfo";
import { profile } from "@/data/portfolio";

export default function Contact() {
	const [sent, setSent] = useState(false);

	// const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
	//   e.preventDefault();
	//   setSent(true);
	//   setTimeout(() => setSent(false), 4000);
	// };

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const form = e.currentTarget;
		const formData = new FormData(form);
		const name = formData.get("name");
		const email = formData.get("email");
		const message = formData.get("message");

		const whatsappMessage = `Hello Sathya,

Name: ${name}
Email: ${email}

Message:
${message}`;

		const whatsappUrl = `https://wa.me/9392473521?text=${encodeURIComponent(
			whatsappMessage,
		)}`;

		window.open(whatsappUrl, "_blank");

		setSent(true);
		form.reset();

		setTimeout(() => setSent(false), 4000);
	};

	return (
		<>
			<PageHeader
				label="Contact"
				title="Get in Touch"
				subtitle="Available for fashion design, visual merchandising, and retail collaboration opportunities."
			/>

			<section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
				<div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
					{/* Left: contact info */}
					<div>
						<h2 className="font-display text-2xl font-medium text-charcoal dark:text-cream">
							Let's Connect
						</h2>
						<p className="mt-3 text-sm leading-relaxed text-charcoal/65 dark:text-cream/55">
							Reach out via email, phone, or the form — I'd be glad to discuss
							creative collaborations, retail projects, or design opportunities.
						</p>
						<div className="mt-8">
							<ContactInfo />
						</div>
					</div>

					{/* Right: form */}
					<div>
						<form
							onSubmit={handleSubmit}
							className="rounded-2xl border border-charcoal/10 bg-ivory/60 p-8 dark:border-cream/10 dark:bg-charcoal/40 md:p-10"
						>
							<div className="grid gap-6 sm:grid-cols-2">
								<div>
									<label className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-muted">
										Name
									</label>
									<input
										type="text"
										required
										name="name"
										className="w-full rounded-lg border border-charcoal/15 bg-cream/40 px-4 py-3 text-sm text-charcoal outline-none transition-colors duration-300 placeholder:text-muted focus:border-wine dark:border-cream/15 dark:bg-charcoal-deep/40 dark:text-cream dark:focus:border-terracotta"
										placeholder="Your name"
									/>
								</div>
								<div >
									<label className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-muted">
										Number
									</label>
									<input
										type="text"
										required
										className="w-full rounded-lg border border-charcoal/15 bg-cream/40 px-4 py-3 text-sm text-charcoal outline-none transition-colors duration-300 placeholder:text-muted focus:border-wine dark:border-cream/15 dark:bg-charcoal-deep/40 dark:text-cream dark:focus:border-terracotta"
									
										placeholder="Your Mobile Number"
									/>
								</div>
							</div>

							<div className="mt-6">
								<label className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-muted">
									Email
								</label>
								<input
									type="email"
									required
									name="email"
										className="w-full rounded-lg border border-charcoal/15 bg-cream/40 px-4 py-3 text-sm text-charcoal outline-none transition-colors duration-300 placeholder:text-muted focus:border-wine dark:border-cream/15 dark:bg-charcoal-deep/40 dark:text-cream dark:focus:border-terracotta"
									placeholder="you@example.com"
								/>
							</div>

							<div className="mt-6">
								<label className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-muted">
									Message
								</label>
								<textarea
									required
									name="message"
									rows={5}
									className="w-full resize-none rounded-lg border border-charcoal/15 bg-cream/40 px-4 py-3 text-sm text-charcoal outline-none transition-colors duration-300 placeholder:text-muted focus:border-wine dark:border-cream/15 dark:bg-charcoal-deep/40 dark:text-cream dark:focus:border-terracotta"
									placeholder="Tell me about your project or opportunity..."
								/>
							</div>

							<button
								type="submit"
								className={`group mt-8 inline-flex w-full items-center justify-center gap-2 px-8 py-4 text-sm font-medium uppercase tracking-wide transition-all duration-300 sm:w-auto ${
									sent
										? "bg-green-700 text-cream dark:bg-green-600"
										: "bg-wine text-cream hover:bg-wine-deep dark:bg-terracotta dark:text-charcoal-deep dark:hover:bg-terracotta/80"
								}`}
							>
								{sent ? (
									<>
										<CheckCircle2 size={16} strokeWidth={1.5} />
										Message Sent
									</>
								) : (
									<>
										Send Message
										<Send
											size={15}
											strokeWidth={1.5}
											className="transition-transform duration-300 group-hover:translate-x-1"
										/>
									</>
								)}
							</button>

							{sent && (
								<p className="mt-4 text-sm text-charcoal/60 dark:text-cream/50">
									Thank you for reaching out. I'll get back to you at{" "}
									{profile.email} or via the email you provided.
								</p>
							)}
						</form>
					</div>
				</div>
			</section>
		</>
	);
}

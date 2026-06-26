"use client";

import { useActionState } from "react";
import { submitContactForm } from "@/lib/actions";

export default function ContactFormCard() {
	const initialState = {
		success: false,
		message: "",
	};

	const [state, formAction, isPending] = useActionState(
		submitContactForm,
		initialState,
	);

	return (
		<div className="border border-foreground rounded-xl p-5 lg:p-10 my-3">
			<form
				action={formAction}
				className="mx-auto flex w-full max-w-3xl flex-col gap-5"
			>
				<div className="grid grid-cols-1 gap-3 md:grid-cols-2">
					<div>
						<label htmlFor="name" className="mb-1 block text-sm font-medium">
							Name
						</label>

						<input
							id="name"
							name="name"
							type="text"
							placeholder="John Doe"
							className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none transition focus:border-black"
						/>

						{state.errors?.name && (
							<p className="mt-1 text-sm text-red-500">
								{state.errors.name[0]}
							</p>
						)}
					</div>

					<div>
						<label htmlFor="subject" className="mb-1 block text-sm font-medium">
							Subject
						</label>

						<select
							id="subject"
							name="subject"
							defaultValue=""
							className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 outline-none transition focus:border-black"
						>
							<option value="" disabled>
								Select a subject
							</option>

							<option value="Project Inquiry">Project Inquiry</option>
							<option value="Freelance Opportunity">
								Freelance Opportunity
							</option>
							<option value="Job Opportunity">Job Opportunity</option>
							<option value="Collaboration">Collaboration</option>
							<option value="General Question">General Question</option>
							<option value="Other">Other</option>
						</select>

						{state.errors?.subject && (
							<p className="mt-1 text-sm text-red-500">
								{state.errors.subject[0]}
							</p>
						)}
					</div>
				</div>

				<div>
					<label htmlFor="email" className="mb-1 block text-sm font-medium">
						Email
					</label>

					<input
						id="email"
						name="email"
						type="email"
						placeholder="john@example.com"
						className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none transition focus:border-black"
					/>

					{state.errors?.email && (
						<p className="mt-1 text-sm text-red-500">{state.errors.email[0]}</p>
					)}
				</div>

				<div>
					<label htmlFor="message" className="mb-1 block text-sm font-medium">
						Message
					</label>

					<textarea
						id="message"
						name="message"
						rows={6}
						placeholder="Tell me about your project..."
						className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none transition focus:border-black"
					/>

					{state.errors?.message && (
						<p className="mt-1 text-sm text-red-500">
							{state.errors.message[0]}
						</p>
					)}
				</div>

				{state.message && (
					<p
						className={`text-sm ${
							state.success ? "text-green-600" : "text-red-500"
						}`}
					>
						{state.message}
					</p>
				)}

				<button
					type="submit"
					disabled={isPending}
					className="rounded-md bg-foreground px-5 py-3 font-medium text-background transition hover:bg-neutral-800
					disabled:cursor-not-allowed disabled:opacity-50"
				>
					{isPending ? "Submitting..." : "Send Message"}
				</button>
			</form>
		</div>
	);
}

"use server";

import { Resend } from "resend";
import * as z from "zod";
import ContactNotification from "@/emails/ContactNotification";

const resend = new Resend(process.env.RESEND_API_KEY);

export type FormState = {
	success?: boolean;
	message?: string;
	errors?: {
		name?: string[];
		email?: string[];
		subject?: string[];
		message?: string[];
	};
};

const SUBJECTS = [
	"Project Inquiry",
	"Freelance Opportunity",
	"Job Opportunity",
	"Collaboration",
	"General Question",
	"Other",
] as const;

export async function submitContactForm(
	_prevState: FormState,
	formData: FormData,
): Promise<FormState> {
	try {
		const formSchema = z.object({
			name: z.string().min(2, "Name is required"),
			subject: z.enum(SUBJECTS, "Please select a valid subject"),
			email: z.email("Please enter a valid email address"),
			message: z
				.string()
				.min(10, "Message is required")
				.max(500, "Message must be between 10 and 500 characters"),
		});

		const result = formSchema.safeParse(Object.fromEntries(formData.entries()));
		if (!result.success)
			return {
				success: false,
				errors: z.flattenError(result.error).fieldErrors,
			};

		const { error: ownerError } = await resend.emails.send({
			from: "onboarding@resend.dev",
			to: ["nanakochan321@gmail.com"],
			replyTo: result.data.email,
			subject: `You have a new contact form submission | ${result.data.subject}`,
			html: ContactNotification({
				name: result.data.name,
				email: result.data.email,
				subject: result.data.subject,
				message: result.data.message,
			}),
		});

		if (ownerError) {
			console.error("Resend error:", ownerError);
			return {
				success: false,
				message: "Failed to send email. Please try again.",
			};
		}

		// const { error: confirmationError } = await resend.emails.send({
		// 	from: "onboarding@resend.dev",
		// 	to: [result.data.email],
		// 	subject: "Thank you for contacting me",
		// 	html: `
		// 			<h2>Thank you for contacting me</h2>
		// 			<p>I've received your message and will get back to you as soon as possible.</p>`,
		// });

		// if (confirmationError) {
		// 	console.error("Confirmation email error:", confirmationError);
		// 	return {
		// 		success: false,
		// 		message: "Failed to send confirmation email. Please try again.",
		// 	};
		// }

		return {
			success: true,
			message: "Success! I'll get back to you as soon as possible.",
		};
	} catch (error) {
		console.error("Server action error:", error);
		return {
			success: false,
			message: "Something went wrong. Please try again.",
		};
	}
}

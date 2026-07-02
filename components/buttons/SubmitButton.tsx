"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
	const { pending } = useFormStatus();

	return (
		<button
			type="submit"
			disabled={pending}
			className="rounded-md bg-foreground px-5 py-3 font-medium text-background transition hover:bg-foreground/70					disabled:cursor-not-allowed disabled:opacity-50"
			aria-label="Submit button"
		>
			{pending ? "Submitting..." : "Send Message"}
		</button>
	);
}

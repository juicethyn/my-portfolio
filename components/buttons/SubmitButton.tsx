"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
	const { pending } = useFormStatus();

	return (
		<button
			type="submit"
			disabled={pending}
			className="rounded-md bg-foreground px-5 py-3 font-medium text-background transition hover:bg-neutral-800
					disabled:cursor-not-allowed disabled:opacity-50"
		>
			{pending ? "Submitting..." : "Send Message"}
		</button>
	);
}

type ContactNotificationProps = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

export default function ContactNotification({
	name,
	email,
	subject,
	message,
}: ContactNotificationProps) {
	return `
  <!DOCTYPE html>
  		<html>
			<body
				style={{
					fontFamily: "Arial, sans-serif",
					padding: "32px",
					background: "#f5f5f5",
				}}
			>
				<div
					style={{
						maxWidth: "600px",
						margin: "0 auto",
						background: "#fff",
						padding: "32px",
						borderRadius: "12px",
					}}
				>
					<h1>📬 New Contact Form Submission</h1>

					<p>
						Someone reached out through your portfolio website.
					</p>

					<hr />

					<p>
						<strong>Name:</strong> ${name}
					</p>

					<p>
						<strong>Email:</strong> ${email}
					</p>

					<p>
						<strong>Subject:</strong> ${subject}
					</p>

					<h3>Message</h3>

					<div
						style={{
							padding: "16px",
							background: "#fafafa",
							border: "1px solid #ddd",
							borderRadius: "8px",
							whiteSpace: "pre-wrap",
						}}
					>
						${message}
					</div>
				</div>
			</body>
		</html>
  `;
}

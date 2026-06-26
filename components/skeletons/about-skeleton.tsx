import { Skeleton } from "@/components/ui/skeleton";

export default function AboutSkeleton() {
	return (
		<section>
			{/* Header Section */}
			<div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
				<Skeleton className="h-10 w-36 lg:h-16 lg:w-56" />

				<div className="flex flex-col items-start gap-2 lg:items-end">
					<Skeleton className="h-4 w-64" />
					<Skeleton className="h-4 w-48" />
				</div>
			</div>

			<div className="mt-3 flex flex-col gap-8 lg:flex-row lg:justify-between">
				{/* Left Column */}
				<div className="flex-1 space-y-2">
					<Skeleton className="h-5 w-full lg:h-7" />
					<Skeleton className="h-5 w-full lg:h-7" />
					<Skeleton className="h-5 w-11/12 lg:h-7" />
					<Skeleton className="h-5 w-4/5 lg:h-7" />

					<div className="h-6" />

					<Skeleton className="h-5 w-full lg:h-7" />
					<Skeleton className="h-5 w-full lg:h-7" />
					<Skeleton className="h-5 w-10/12 lg:h-7" />
					<Skeleton className="h-5 w-3/4 lg:h-7" />
				</div>

				{/* Right Column */}
				<div className="flex-1">
					<Skeleton className="mb-4 h-8 w-52" />

					<Skeleton className="mb-3 h-6 w-28" />

					<div className="space-y-3">
						<div className="rounded-lg p-4">
							<Skeleton className="mb-2 h-5 w-3/4" />
							<Skeleton className="mb-2 h-4 w-1/2" />
							<Skeleton className="h-4 w-1/3" />
						</div>

						<div className="rounded-lg p-4">
							<Skeleton className="mb-2 h-5 w-2/3" />
							<Skeleton className="mb-2 h-4 w-1/2" />
							<Skeleton className="h-4 w-1/4" />
						</div>
					</div>

					<Skeleton className="mb-3 mt-6 h-6 w-24" />

					<Skeleton className="h-5 w-full" />
					<Skeleton className="mt-2 h-5 w-3/4" />

					<Skeleton className="mb-3 mt-6 h-6 w-20" />

					<div className="flex flex-wrap gap-2">
						<Skeleton className="h-9 w-20 rounded-full" />
						<Skeleton className="h-9 w-28 rounded-full" />
						<Skeleton className="h-9 w-24 rounded-full" />
						<Skeleton className="h-9 w-16 rounded-full" />
						<Skeleton className="h-9 w-32 rounded-full" />
						<Skeleton className="h-9 w-24 rounded-full" />
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-4">
				<div className="rounded-xl p-5">
					<Skeleton className="mb-5 h-7 w-40" />

					<div className="flex flex-wrap gap-2">
						<Skeleton className="h-9 w-20 rounded-full" />
						<Skeleton className="h-9 w-28 rounded-full" />
						<Skeleton className="h-9 w-24 rounded-full" />
						<Skeleton className="h-9 w-16 rounded-full" />
						<Skeleton className="h-9 w-32 rounded-full" />
						<Skeleton className="h-9 w-24 rounded-full" />
					</div>
				</div>

				<div className="rounded-xl p-5">
					<Skeleton className="mb-5 h-7 w-40" />

					<div className="flex flex-wrap gap-2">
						<Skeleton className="h-9 w-24 rounded-full" />
						<Skeleton className="h-9 w-20 rounded-full" />
						<Skeleton className="h-9 w-32 rounded-full" />
						<Skeleton className="h-9 w-28 rounded-full" />
						<Skeleton className="h-9 w-16 rounded-full" />
						<Skeleton className="h-9 w-24 rounded-full" />
					</div>
				</div>

				<div className="rounded-xl p-5">
					<Skeleton className="mb-5 h-7 w-40" />

					<div className="flex flex-wrap gap-2">
						<Skeleton className="h-9 w-32 rounded-full" />
						<Skeleton className="h-9 w-20 rounded-full" />
						<Skeleton className="h-9 w-24 rounded-full" />
						<Skeleton className="h-9 w-28 rounded-full" />
						<Skeleton className="h-9 w-16 rounded-full" />
						<Skeleton className="h-9 w-20 rounded-full" />
					</div>
				</div>

				<div className="rounded-xl p-5">
					<Skeleton className="mb-5 h-7 w-40" />

					<div className="flex flex-wrap gap-2">
						<Skeleton className="h-9 w-24 rounded-full" />
						<Skeleton className="h-9 w-32 rounded-full" />
						<Skeleton className="h-9 w-16 rounded-full" />
						<Skeleton className="h-9 w-28 rounded-full" />
						<Skeleton className="h-9 w-20 rounded-full" />
						<Skeleton className="h-9 w-24 rounded-full" />
					</div>
				</div>
			</div>
		</section>
	);
}

import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectSkeleton() {
	return (
		<section className="my-3 text-foreground">
			{/* Header */}
			<div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
				<Skeleton className="h-10 w-56 lg:h-16 lg:w-80" />

				<div className="flex flex-col items-start gap-2 lg:items-end">
					<Skeleton className="h-4 w-64" />
					<Skeleton className="h-4 w-44" />
				</div>
			</div>

			{/* Selected Works */}
			<div className="my-6 flex flex-col items-center space-y-3">
				<Skeleton className="h-8 w-52 lg:h-10 lg:w-64" />
				<Skeleton className="h-4 w-full max-w-xl" />
				<Skeleton className="h-4 w-5/6 max-w-lg" />
			</div>

			{/* Featured Project 1 */}
			<div className="grid gap-6 lg:grid-cols-2 lg:items-center">
				<Skeleton className="aspect-video rounded-xl" />

				<div className="space-y-4">
					<Skeleton className="h-8 w-2/3" />

					<Skeleton className="h-4 w-full" />
					<Skeleton className="h-4 w-full" />
					<Skeleton className="h-4 w-5/6" />

					<div className="flex flex-wrap gap-2 pt-2">
						<Skeleton className="h-8 w-20 rounded-full" />
						<Skeleton className="h-8 w-28 rounded-full" />
						<Skeleton className="h-8 w-24 rounded-full" />
						<Skeleton className="h-8 w-16 rounded-full" />
					</div>

					<div className="flex gap-3 pt-4">
						<Skeleton className="h-10 w-28 rounded-md" />
						<Skeleton className="h-10 w-28 rounded-md" />
					</div>
				</div>
			</div>

			{/* Featured Project 2 */}
			<div className="grid gap-6 lg:grid-cols-2 lg:items-center">
				<div className="space-y-4">
					<Skeleton className="h-8 w-2/3" />

					<Skeleton className="h-4 w-full" />
					<Skeleton className="h-4 w-full" />
					<Skeleton className="h-4 w-5/6" />

					<div className="flex flex-wrap gap-2 pt-2">
						<Skeleton className="h-8 w-20 rounded-full" />
						<Skeleton className="h-8 w-28 rounded-full" />
						<Skeleton className="h-8 w-24 rounded-full" />
						<Skeleton className="h-8 w-16 rounded-full" />
					</div>

					<div className="flex gap-3 pt-4">
						<Skeleton className="h-10 w-28 rounded-md" />
						<Skeleton className="h-10 w-28 rounded-md" />
					</div>
				</div>

				<Skeleton className="aspect-video rounded-xl" />
			</div>

			{/* Other Works Header */}
			<div className="my-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
				<Skeleton className="h-8 w-48" />

				<div className="flex flex-col items-start gap-2 lg:items-end">
					<Skeleton className="h-4 w-56" />
					<Skeleton className="h-4 w-40" />
				</div>
			</div>

			{/* Table Header */}
			<div className="mb-3 grid grid-cols-2 lg:grid-cols-4 gap-4">
				<Skeleton className="h-5 w-16 justify-self-center" />
				<Skeleton className="hidden h-5 w-16 justify-self-center lg:block" />
				<Skeleton className="hidden h-5 w-16 justify-self-center lg:block" />
				<Skeleton className="h-5 w-16 justify-self-center" />
			</div>

			{/* Table Rows */}
			<div className="space-y-3">
				<div className="grid grid-cols-2 items-center gap-4 py-4 lg:grid-cols-4">
					<Skeleton className="h-5 w-32" />
					<Skeleton className="hidden h-5 w-20 lg:block" />
					<Skeleton className="hidden h-5 w-40 lg:block" />
					<Skeleton className="h-5 w-12 justify-self-end lg:justify-self-start" />
				</div>

				<div className="grid grid-cols-2 items-center gap-4 py-4 lg:grid-cols-4">
					<Skeleton className="h-5 w-40" />
					<Skeleton className="hidden h-5 w-24 lg:block" />
					<Skeleton className="hidden h-5 w-32 lg:block" />
					<Skeleton className="h-5 w-12 justify-self-end lg:justify-self-start" />
				</div>

				<div className="grid grid-cols-2 items-center gap-4 py-4 lg:grid-cols-4">
					<Skeleton className="h-5 w-28" />
					<Skeleton className="hidden h-5 w-16 lg:block" />
					<Skeleton className="hidden h-5 w-44 lg:block" />
					<Skeleton className="h-5 w-12 justify-self-end lg:justify-self-start" />
				</div>

				<div className="grid grid-cols-2 items-center gap-4 py-4 lg:grid-cols-4">
					<Skeleton className="h-5 w-36" />
					<Skeleton className="hidden h-5 w-28 lg:block" />
					<Skeleton className="hidden h-5 w-36 lg:block" />
					<Skeleton className="h-5 w-12 justify-self-end lg:justify-self-start" />
				</div>
			</div>
		</section>
	);
}

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectSlugSkeleton() {
	return (
		<div className="mx-auto w-full max-w-5xl">
			{/* Period */}
			<div className="flex justify-center">
				<Skeleton className="h-5 w-32" />
			</div>

			{/* Project Image */}
			<AspectRatio
				ratio={16 / 9}
				className="my-1 overflow-hidden rounded-lg bg-muted lg:my-4"
			>
				<Skeleton className="h-full w-full" />
			</AspectRatio>

			<div>
				{/* Title & Type */}
				<div className="my-3 block justify-between lg:my-0 lg:flex lg:items-center">
					<Skeleton className="h-12 w-72" />
					<Skeleton className="mt-2 h-6 w-36 lg:mt-0" />
				</div>

				{/* Description */}
				<div className="my-3 space-y-2">
					<Skeleton className="h-5 w-full" />
					<Skeleton className="h-5 w-full" />
					<Skeleton className="h-5 w-11/12" />
					<Skeleton className="h-5 w-3/4" />
				</div>

				<hr className="my-3 border-t border-foreground" />

				{/* Role */}
				<div className="my-3">
					<Skeleton className="mb-3 h-8 w-24" />

					<div className="space-y-2">
						<Skeleton className="h-5 w-full" />
						<Skeleton className="h-5 w-full" />
						<Skeleton className="h-5 w-10/12" />
					</div>
				</div>

				<hr className="my-3 border-t border-foreground" />

				{/* Bottom Grid */}
				<div className="my-1 grid grid-cols-1 gap-4 lg:my-3 lg:grid-cols-3">
					{/* Tools Used */}
					<div>
						<Skeleton className="mb-3 h-8 w-40" />

						<div className="flex flex-wrap gap-2">
							<Skeleton className="h-9 w-20 rounded-full" />
							<Skeleton className="h-9 w-28 rounded-full" />
							<Skeleton className="h-9 w-24 rounded-full" />
							<Skeleton className="h-9 w-16 rounded-full" />
							<Skeleton className="h-9 w-32 rounded-full" />
						</div>
					</div>

					{/* Project Type */}
					<div>
						<Skeleton className="mb-3 h-8 w-44" />

						<Skeleton className="h-5 w-40" />
					</div>

					{/* Source Code */}
					<div>
						<Skeleton className="mb-3 h-8 w-36" />

						<div className="flex flex-wrap gap-2">
							<Skeleton className="h-10 w-32 rounded-full" />
							<Skeleton className="h-10 w-28 rounded-full" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

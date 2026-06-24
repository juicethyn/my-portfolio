import { Skeleton } from "@/components/ui/skeleton";

export default function AboutSkeleton() {
	return (
		<div className="flex flex-col gap-4">
			<Skeleton className="h-6 w-1/4" />
			<Skeleton className="h-4 w-full" />
			<Skeleton className="h-4 w-full" />
			<Skeleton className="h-4 w-full" />
		</div>
	);
}

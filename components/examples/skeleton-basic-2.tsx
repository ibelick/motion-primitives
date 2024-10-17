import { Skeleton } from "../core/skeleton";

export function SkeletonBasic2() {
  return (
    <div className="flex flex-col items-center space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-lg" />
      <div className="flex items-center justify-between gap-2">
        <div className="space-y-2">
          <Skeleton className="h-4 w-[170px]" />
          <Skeleton className="h-4 w-[190px]" />
        </div>
        <Skeleton className="size-12 rounded-full" />
      </div>
    </div>
  )
}

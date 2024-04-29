import { Skeleton } from "@/components/ui/skeleton";

export default function Loading(){
    return (
        <main className="m-24 rounded-md grid-cols-4 gap-12">
    {
      Array.from({length:12}, (_, i) =>i + 1).map((id)=>(
        <div
        key={id}
        className="col-span-4 md:col-span-2">
         <Skeleton className="h-6 w-1/2 bg-gray-200"></Skeleton>
         <Skeleton className="h-6 w-1/4 bg-gray-200 mb-2"></Skeleton>
          <p className="h-6 w-1/4 mb-4"></p>
          <div className="aspect-video relative">
          </div>
         
        </div>
      ))
    }
        </main>
      );
}
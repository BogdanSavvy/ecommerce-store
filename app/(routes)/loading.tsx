import { Skeleton } from "@/components/ui/skeleton";
import Container from "@/components/ui/container";

const Loading = () => {
  return (
    <div className="h-full w-full p-8">
      <Container>
        <Skeleton className="aspect-square w-full rounded-xl md:aspect-[2.4/1]" />
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <Skeleton className="aspect-square rounded-xl" />
          <Skeleton className="aspect-square rounded-xl" />
          <Skeleton className="aspect-square rounded-xl" />
          <Skeleton className="aspect-square rounded-xl" />
          <Skeleton className="aspect-square rounded-xl" />
          <Skeleton className="aspect-square rounded-xl" />
        </div>
      </Container>
    </div>
  );
};

export default Loading;

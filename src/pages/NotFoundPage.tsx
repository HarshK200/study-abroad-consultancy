import { FileSearch } from "lucide-react";

export const NotFoundPage = () => {
  return (
    <main className="z-[-1] absolute top-[50%] translate-y-[-30%] left-[50%] translate-x-[-50%] flex flex-col gap-4 items-center justify-center">
      <FileSearch className="size-20" />
      <h1>Page Not Found</h1>
    </main>
  );
};

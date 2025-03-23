import { FileSearch } from "lucide-react";

export const NotFoundPage = () => {
  return (
    <main className="absolute top-[50%] left-[50%] translate-[-50%] flex flex-col gap-4 items-center justify-center">
      <FileSearch className="size-20" />
      <h1>Page Not Found</h1>
    </main>
  );
};

// import { FileSearch } from "lucide-react";

export const NotFoundPage = () => {
  return (
    <main className="z-[-1] absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] flex flex-col gap-4 items-center justify-center">
      {/*<FileSearch className="size-20" />*/}
      <img src="/tehepero.jpg" className="w-[14rem]" />
      <h1 className="text-sm text-center">
        woops! looks like i forgot to implement this page
      </h1>
      <h1 className="text-lg font-bold text-center whitespace-nowrap">
        404 Page Not Found
      </h1>
    </main>
  );
};

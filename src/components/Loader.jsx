import { VscLoading } from "react-icons/vsc";

const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-[50vh]">
      <VscLoading className="max-w-sm w-full animate-spin font-semibold text-3xl" />
    </div>
  );
};

export default Loader;

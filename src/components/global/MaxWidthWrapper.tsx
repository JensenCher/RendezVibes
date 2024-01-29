// "use client";

import { cn } from "@/lib/utils";

interface MaxWidthWrapperProps {
  className?: string;
  children: React.ReactNode;
}
// max-w-[2520px]
const MaxWidthWrapper: React.FC<MaxWidthWrapperProps> = ({ className, children }) => {
  return <div className={cn("max-w-[1680px] mx-auto px-2.5 md:px-20 xl:px-20 ", className)}>{children}</div>;
};

export default MaxWidthWrapper;

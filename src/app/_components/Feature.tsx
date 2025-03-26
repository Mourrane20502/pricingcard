import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
import { ReactNode } from "react";

type FeatureProps = {
  className?: string;
  children: ReactNode;
};

export default function Feature({ className, children }: FeatureProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <CheckIcon className="size-4  bg-accent  rounded-full p-1" />
      <span>{children}</span>
    </div>
  );
}

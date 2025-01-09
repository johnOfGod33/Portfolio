import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Github } from "./icons/Github";
import Linkedin from "./icons/Linkedin";
import Twitter from "./icons/Twitter";
export const Socials = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex gap-2", className)}>
      <Link
        className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
        href="https://github.com/johnOfGod33"
      >
        <Github size={12} />
      </Link>
      <Link
        className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
        href="https://linkedin.com/in/jean-de-dieu-sessou-260897292"
      >
        <Linkedin size={12} />
      </Link>
      <Link
        className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
        href="https://twitter.com/JohnKamiCode"
      >
        <Twitter size={12} />
      </Link>
    </div>
  );
};
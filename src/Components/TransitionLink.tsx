"use client"

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

interface TransitionLinkProps extends LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const TransitionLink = ({
  href,
  children,
  className,
  ...props
}: TransitionLinkProps) => {
  const router = useRouter();

  const handleNavigation = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const body = document.body;
    body.classList.add("exit-animation");
    await new Promise((res) => setTimeout(res, 700));
    body.classList.remove("exit-animation");
    router.push(href);
    body.classList.add("enter-animation");
    setTimeout(() => {
      body.classList.remove("enter-animation");
    }, 700);
  };

  return (
    <Link href={href} {...props} onClick={handleNavigation}>
      {children}
    </Link>
  );
};

export default TransitionLink;

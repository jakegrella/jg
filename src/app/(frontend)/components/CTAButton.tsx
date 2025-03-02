import React from "react";
import Link from "next/link";
import { clsx } from "clsx";

interface ButtonProps {
  href?: string;
  external?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

/**
 * A custom Button component that conditionally renders as:
 * - A Next.js Link if `href` is provided without `external`
 * - An <a> element if `external` is true
 * - A <button> element otherwise.
 */
const CTAButton: React.FC<ButtonProps> = ({
  href,
  external = false,
  onClick,
  className,
  children,
  type = "button",
  disabled = false,
}) => {
  const commonClasses = clsx(
    "inline-block  max-w-[80%] flex gap-2 items-center px-3 py-2 text-[#111110] bg-[#FFB01F] rounded transition-all hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed",
    className
  );
  const arrowStem = "grow h-px relative bg-[#111110]";
  const arrowPointTop =
    "before:absolute before:right-0 before:-translate-y-[4.75px] before:-translate-x-0.5 before:-rotate-45 before:h-1.5 before:w-px before:bg-[#111110]";
  const arrowPointBottom =
    "after:absolute after:right-0 after:-translate-y-[0.25px] after:-translate-x-0.5 after:rotate-45 after:h-1.5 after:w-px after:bg-[#111110]";

  const content = (
    <>
      {children}
      <span className={clsx(arrowStem, arrowPointTop, arrowPointBottom)} />
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={commonClasses}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={commonClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={commonClasses}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default CTAButton;

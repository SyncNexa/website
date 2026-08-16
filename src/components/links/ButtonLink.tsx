import React from "react";
import Link from "next/link";
import { SnButton } from "@syncnexa-library/ui";

function ButtonLink({
  path,
  label = "ButtonLink",
  variant = "solid",
  className = "",
  target,
  rel,
}: ButtonLinkProps) {
  const btnVariant = variant === "solid" ? "primary" : "stroke";

  return (
    <Link href={path} target={target} rel={rel} className={className}>
      <SnButton variant={btnVariant} size="lg">
        {label}
      </SnButton>
    </Link>
  );
}

export default ButtonLink;

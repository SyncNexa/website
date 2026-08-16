import React from "react";
import Link from "next/link";
import styles from "./styles/Links.module.css";

function ButtonLink({
  path,
  color = "green",
  label = "ButtonLink",
  variant = "solid",
  className = "",
  target,
  rel,
}: ButtonLinkProps) {
  const classNames = [
    styles.link_button,
    styles[color],
    styles[variant],
    className,
  ].filter(Boolean).join(" ");

  return (
    <Link className={classNames} href={path} target={target} rel={rel}>
      {label}
    </Link>
  );
}

export default ButtonLink;

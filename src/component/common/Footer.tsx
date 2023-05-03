import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      Copyright © {new Date().getFullYear()}. Design And Developed By
      <Link href="/" style={{ color: "#4c45f6" }}>
        Avatown
      </Link>
    </footer>
  );
};

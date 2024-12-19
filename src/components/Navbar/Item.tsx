import Link from "next/link";

type NavItemProps = {
  href: string;
  text: string;
  isMobile: boolean;
  onClick?: () => void;
};

export default function NavItem({
  href,
  text,
  isMobile = false,
  onClick,
}: NavItemProps) {
  return (
    <li
      onClick={onClick}
      className={`text-sm ${isMobile ? "py-4" : "uppercase hover:border-b"}`}
    >
      <Link href={href}>{text}</Link>
    </li>
  );
}

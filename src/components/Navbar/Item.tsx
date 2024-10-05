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
    <Link href={href}>
      <li
        onClick={onClick}
        className={`text-sm ${isMobile ? "py-4" : "uppercase hover:border-b"}`}
      >
        {text}
      </li>
    </Link>
  );
}

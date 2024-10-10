import Link from "next/link";
type BreadcrumbsProps = {
  segments: string[];
};
export default function Breadcrumbs({ segments }: BreadcrumbsProps) {
  const breadcrumbs = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    const isLast = index === segments.length - 1;

    // セグメント名を表示用にフォーマット（必要に応じて調整）
    const segmentName = decodeURIComponent(segment);

    return (
      <span key={href}>
        {!isLast ? (
          <>
            <Link
              href={href}
              className="relative inline-block 
              before:absolute before:w-full before:scale-x-0 before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-gray-400 
              before:origin-bottom-right 
              before:transition-transform before:duration-300 
              hover:before:scale-x-100 hover:before:origin-bottom-left"
            >
              {segmentName}
            </Link>
            {" / "}
          </>
        ) : (
          <span className="cursor-not-allowed">{segmentName}</span>
        )}
      </span>
    );
  });

  return (
    <nav aria-label="breadcrumbs">
      <Link
        href="/"
        className="relative inline-block 
        before:absolute before:w-full before:scale-x-0 before:h-[2px] 
        before:bottom-0 before:left-0 before:bg-gray-400 
        before:origin-bottom-right 
        before:transition-transform before:duration-300 
        hover:before:scale-x-100 hover:before:origin-bottom-left"
      >
        home
      </Link>
      {segments.length > 0 && <span> / </span>}
      {breadcrumbs}
    </nav>
  );
}

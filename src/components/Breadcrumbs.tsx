import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";

export default function Breadcrumbs() {
  const segments = useSelectedLayoutSegments();

  const breadcrumbs = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    const isLast = index === segments.length - 1;

    // セグメント名を表示用にフォーマット（必要に応じて調整）
    const segmentName = decodeURIComponent(segment);

    return (
      <span key={href}>
        {!isLast ? (
          <>
            <Link href={href}>{segmentName}</Link>
            {" / "}
          </>
        ) : (
          <span>{segmentName}</span>
        )}
      </span>
    );
  });

  return (
    <nav aria-label="breadcrumbs">
      <Link href="/">home</Link>
      {segments.length > 0 && <span> / </span>}
      {breadcrumbs}
    </nav>
  );
}

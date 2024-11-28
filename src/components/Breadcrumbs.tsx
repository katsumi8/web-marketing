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
      <li
        key={href}
        className="inline-flex items-center font-bold"
        itemProp="itemListElement"
        itemScope
        itemType="https://schema.org/ListItem"
      >
        {!isLast ? (
          <>
            <Link
              href={href}
              itemProp="item"
              className="text-[#52b5ee] no-underline hover:underline"
            >
              <span itemProp="name">{segmentName}</span>
            </Link>
            <meta itemProp="position" content={(index + 2).toString()} />
            <span className="mx-1 text-[#555]">{">"}</span>
          </>
        ) : (
          <>
            <span itemProp="name">{segmentName}</span>
            <meta itemProp="position" content={(index + 2).toString()} />
          </>
        )}
      </li>
    );
  });

  return (
    <nav aria-label="breadcrumbs">
      <ol
        className="m-0 p-0 list-none flex items-center"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {/* ホームへのリンク */}
        <li
          className="inline-flex items-center font-bold"
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <Link
            href="/"
            itemProp="item"
            className="text-[#52b5ee] no-underline hover:underline"
          >
            <span itemProp="name">Startseite</span>
          </Link>
          <meta itemProp="position" content="1" />
          {segments.length > 0 && (
            <span className="mx-1 text-[#555]">{">"}</span>
          )}
        </li>
        {breadcrumbs}
      </ol>
    </nav>
  );
}

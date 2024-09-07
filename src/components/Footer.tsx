import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10 w-full">
      <div
        className="container mx-auto flex flex-col items-center justify-center space-y-4 
                  md:flex-row md:justify-between md:space-y-0"
      >
        <div className="text-sm text-center md:text-left w-full">
          <p>
            &copy; 2024 Katsumi Ishihara Consulting. Alle Rechte vorbehalten.
          </p>
        </div>
        <div
          className="flex flex-col items-start md:justify-end md:items-center 
          space-y-2 md:flex-row md:space-x-8 md:space-y-0 w-full px-10 md:px-0"
        >
          <Link href="/impressum" passHref legacyBehavior>
            <a className="text-sm hover:text-blue-300">Impressum</a>
          </Link>
          <Link href="/agb" passHref legacyBehavior>
            <a className="text-sm hover:text-blue-300">AGB</a>
          </Link>
          <Link href="/datenschutzerklarung" passHref legacyBehavior>
            <a className="text-sm hover:text-blue-300">Datenschutzerklärung</a>
          </Link>
          <Link href="/widerrufsbelehrung" passHref legacyBehavior>
            <a className="text-sm hover:text-blue-300">Widerrufsbelehrung</a>
          </Link>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";

export default function Footer() {
    return (
        <div className="w-full bg-gray-800 py-6 text-white">
            <div className="container mx-auto flex flex-col items-center justify-center space-y-4 md:flex-row md:justify-between md:space-y-0">
                <div className="w-full text-center text-sm md:text-left">
                    <p>
                        &copy; 2024 Katsumi Ishihara Consulting. Alle Rechte
                        vorbehalten.
                    </p>
                </div>
                <div className="flex w-full flex-col items-start space-y-2 px-10 md:flex-row md:items-center md:justify-end md:space-y-0 md:space-x-8 md:px-0">
                    <Link href="/impressum" passHref legacyBehavior>
                        <a className="text-sm hover:text-blue-300">Impressum</a>
                    </Link>
                    {/* <Link href="/agb" passHref legacyBehavior> */}
                    {/*   <a className="text-sm hover:text-blue-300">AGB</a> */}
                    {/* </Link> */}
                    <Link href="/datenschutzerklarung" passHref legacyBehavior>
                        <a className="text-sm hover:text-blue-300">
                            Datenschutzerklärung
                        </a>
                    </Link>
                    {/* <Link href="/widerrufsbelehrung" passHref legacyBehavior> */}
                    {/*   <a className="text-sm hover:text-blue-300">Widerrufsbelehrung</a> */}
                    {/* </Link> */}
                </div>
            </div>
        </div>
    );
}

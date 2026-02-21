import Link from "next/link";


const links = [
    { name: "Portfolio", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "login", href: "/login" },
];

export default function Navbar() {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <Link href="/">Portfolio</Link>

            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <Link href={link.href} className="hover:text-gray-400">
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
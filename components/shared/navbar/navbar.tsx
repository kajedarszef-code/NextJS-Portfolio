import Link from "next/link";

const links = [
  { name: "Portfolio", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  { name: "Login", href: "/login" },
];

export default function Navbar() {
  return (
    <nav className="bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="text-xl font-bold text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-purple-500 hover:opacity-80 transition duration-300"
          >
            Portfolio
          </Link>

          {/* Links */}
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="relative text-slate-300 hover:text-white transition duration-300 group"
                >
                  {link.name}

                  {/* underline animation */}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-linear-to-r from-indigo-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

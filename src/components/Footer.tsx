import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-semibold text-lg mb-3">Sapienza Systems</h3>
            <p className="text-sm leading-relaxed">
              Operational systems consulting for hospitality and technical teams.
              Founded by Thomas Sapienza.
            </p>
          </div>
          <div>
            <h4 className="text-white font-medium text-sm mb-3 uppercase tracking-wider">
              Pages
            </h4>
            <div className="space-y-2">
              {[
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/industries", label: "Industries" },
                { href: "/insights", label: "Insights" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-medium text-sm mb-3 uppercase tracking-wider">
              Connect
            </h4>
            <div className="space-y-2 text-sm">
              <a
                href="mailto:TSapienza03@gmail.com"
                className="block hover:text-white transition-colors"
              >
                TSapienza03@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/thomassapienza/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <h4 className="text-white font-medium text-sm mt-6 mb-3 uppercase tracking-wider">
              Projects
            </h4>
            <div className="space-y-2 text-sm">
              <a
                href="https://bartender-trainer.replit.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white transition-colors"
              >
                Bartender Trainer
              </a>
              <a
                href="https://philosophercouncil.net"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white transition-colors"
              >
                Philosopher Council
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-stone-800 text-center text-xs text-stone-500">
          &copy; {new Date().getFullYear()} Sapienza Systems. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

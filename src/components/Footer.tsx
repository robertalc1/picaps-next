import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const footerLinks = {
  products: [
    { label: "Alpha - 18m²", href: "/modele/alpha" },
    { label: "Beta - 28m²", href: "/modele/beta" },
    { label: "Gamma - 38m²", href: "/modele/gamma" },
    { label: "Pi Business Resort", href: "/pi-business-resort" },
  ],
  company: [
    { label: "Despre Noi", href: "/despre" },
    { label: "Galerie", href: "/galerie" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Termeni și Condiții", href: "/termeni" },
    { label: "Politica de Confidențialitate", href: "/politica-de-confidentialitate" },
    { label: "Politica de Cookies", href: "/politica-cookies" },
  ],
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-pirulen text-2xl tracking-wider text-[#1D1D1F]">
                PI CAPS
              </span>
            </Link>

            <p className="mt-4 text-sm text-gray-500 max-w-xs leading-relaxed">
              Capsule modulare premium, gândite pentru viitorul locuirii. Design
              futurist, eficiență energetică și livrare rapidă.
            </p>

            {/* Contact Info */}
            <div className="mt-5 space-y-2.5">
              <a
                href="tel:+40727511563"
                className="flex items-center gap-3 text-[#1D1D1F] hover:text-[#1C4030] transition-colors group"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1C4030]/10 group-hover:bg-[#1C4030] transition-colors">
                  <Phone className="h-4 w-4 text-[#1C4030] group-hover:text-white transition-colors" />
                </span>
                <span className="text-sm font-medium">+40 727 511 563</span>
              </a>

              <a
                href="mailto:contact@picaps.ro"
                className="flex items-center gap-3 text-[#1D1D1F] hover:text-[#1C4030] transition-colors group"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1C4030]/10 group-hover:bg-[#1C4030] transition-colors">
                  <Mail className="h-4 w-4 text-[#1C4030] group-hover:text-white transition-colors" />
                </span>
                <span className="text-sm font-medium">contact@picaps.ro</span>
              </a>

              <div className="flex items-center gap-3 text-gray-400">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100">
                  <MapPin className="h-4 w-4 text-gray-400" />
                </span>
                <span className="text-sm">București, România</span>
              </div>
            </div>
          </div>

          {/* Modele */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#1C4030] mb-6">
              Modele
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-[#1C4030] transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Companie */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#1C4030] mb-6">
              Companie
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-[#1C4030] transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + ANPC */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#1C4030] mb-6">
              Legal
            </h4>

            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-[#1C4030] transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* ANPC badges */}
            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://anpc.ro/ce-este-sal/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Image
                  src="/anpc_1.webp"
                  alt="ANPC SAL"
                  width={80}
                  height={32}
                  className="h-7 w-auto"
                />
              </a>

              <a
                href="https://consumer-redress.ec.europa.eu/index_en"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Image
                  src="/anpc_2.webp"
                  alt="ANPC SOL"
                  width={80}
                  height={32}
                  className="h-7 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-100 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            © {year} PI CAPS.{" "}
            <a
              href="https://alcaziurobert.ro/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1C4030] hover:underline"
            >
              Developed by Alcaziu Robert
            </a>
            . Toate drepturile rezervate.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-xs text-gray-400">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-[#1C4030] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
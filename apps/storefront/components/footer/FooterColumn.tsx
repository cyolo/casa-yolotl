import LocaleLink from "../LocaleLink";

interface FooterColumnProps {
    title: string;
    links: { label: string; href: string; isExternal?: boolean }[];
}

const FooterColumn = ({ title, links }: FooterColumnProps) => {
    return (
        <div>
            <h3 className="text-[10px] uppercase tracking-[0.5em] font-sans font-bold mb-10 text-brand-gold">{title}</h3>
            <ul className="space-y-5">
                {links.map((link) => (
                    <li key={link.label}>
                        <LocaleLink
                            href={link.href}
                            className="text-[10px] uppercase tracking-widest text-brand-cream/40 hover:text-brand-gold transition-all duration-300"
                        >
                            {link.label}
                        </LocaleLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterColumn;

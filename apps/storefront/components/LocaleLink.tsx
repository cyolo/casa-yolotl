"use client";

import Link, { LinkProps } from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ReactNode } from "react";

interface LocaleLinkProps extends LinkProps {
    children: ReactNode;
    className?: string;
    href: string;
}

/**
 * A wrapper around next/link that automatically prefixes the href with the current locale.
 * Essential for maintaining I18N state across the storefront.
 */
const LocaleLink = ({ children, href, className, ...props }: LocaleLinkProps) => {
    const { locale } = useLanguage();
    const isExternal = href.startsWith('http') || href.startsWith('//');
    let path = href;

    // Don't prefix external links or fragments
    if (!isExternal) {
        // Handle fragment preservation
        const [urlPath, hash] = href.split('#');
        const normalizedPath = urlPath.startsWith('/') ? urlPath : `/${urlPath}`;

        // Prefix with locale: /es/path#hash or /es#hash
        const localePath = hash ? `/${locale}${normalizedPath}#${hash}` : `/${locale}${normalizedPath}`;

        // Cleanup: remove potential double slashes like /es/#anchor -> /es#anchor
        // or /es// -> /es
        path = localePath.replace(/\/+$/, '').replace(/\/#/, '#');

        // If path becomes empty (e.g. root), ensure it's at least /es
        if (path === `/${locale}`) {
            // keep as is
        } else if (path.startsWith(`/${locale}/`) || path === `/${locale}` || path.startsWith(`/${locale}#`)) {
            // already prefixed correctly
        }
    }

    return (
        <Link href={path} className={className} {...props}>
            {children}
        </Link>
    );
};

export default LocaleLink;

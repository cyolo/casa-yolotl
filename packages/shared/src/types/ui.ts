export interface NavLink {
    name: string;
    href: string;
}

export interface FooterLink {
    label: string;
    href: string;
    isExternal?: boolean;
}

export interface HeroAction {
    label: string;
    href: string;
    ariaLabel?: string;
    variant: "primary" | "secondary";
}

export interface SocialLink {
    name: string;
    href: string;
}

import LocaleLink from "../LocaleLink";

interface HeroActionsProps {
    actions: { label: string; href: string; ariaLabel?: string; variant: "primary" | "secondary" }[];
}

const HeroActions = ({ actions }: HeroActionsProps) => {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            {actions.map((action) => (
                <LocaleLink
                    key={action.label}
                    href={action.href}
                    aria-label={action.ariaLabel}
                    className={`group relative px-12 py-5 text-[10px] uppercase tracking-[0.3em] font-sans transition-all duration-400 ease-out overflow-hidden text-center border ${action.variant === "primary"
                            ? "border-brand-gold text-brand-gold hover:bg-brand-gold/5"
                            : "border-brand-gold/30 text-brand-cream/80 hover:border-brand-gold hover:text-brand-gold hover:bg-brand-gold/5"
                        }`}
                >
                    <span className="relative z-10">{action.label}</span>
                </LocaleLink>
            ))}
        </div>
    );
};

export default HeroActions;

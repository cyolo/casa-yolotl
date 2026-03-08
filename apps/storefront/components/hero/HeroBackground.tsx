import Image from "next/image";

const HeroBackground = ({ src, alt }: { src: string; alt: string }) => {
    return (
        <div className="absolute inset-0 z-0">
            <Image
                src={src}
                alt={alt}
                fill
                className="object-cover opacity-30 mix-blend-luminosity"
                priority
                sizes="100vw"
            />
            <div className="absolute inset-0 bg-[#0D0D0D]/60 backdrop-brightness-50"></div>
        </div>
    );
};

export default HeroBackground;

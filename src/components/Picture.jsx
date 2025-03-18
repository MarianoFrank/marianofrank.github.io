const getImageSrcSet = (imageName) => {
    const base = `/media`;
    return {
        avif: `${base}${imageName}.avif`,
        webp: `${base}${imageName}.webp`,
        jpeg: `${base}${imageName}.jpeg`
    };
};

const Picture = ({ className, imageName, alt = "Imagen proyecto" }) => {
    const { avif, webp, jpeg } = getImageSrcSet(imageName);

    return (
        <picture >
            {avif && <source srcSet={avif} type="image/avif" />}
            {webp && <source srcSet={webp} type="image/webp" />}
            <img className={`object-cover object-center ${className}`} src={jpeg} alt={alt} type="image/jpeg" loading="lazy" />
        </picture>
    );
};

export default Picture;
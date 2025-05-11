import { useEffect, useState } from "react";
import { SkeletonImageLoader } from "./Skeleton";

const GallerySection = ({ id, title, images, isLinked = false }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const imageLoaders = images.map((img) => {
      const image = new Image();

      image.src = img.src;
      return new Promise((res) => {
        image.onload = res;
        image.onerror = res;
      });
    });

    Promise.all(imageLoaders).then(() => setLoading(false));
  }, [images]);

  return (
    <section id={id} className="mb-16 p-2">
      <h2 className="section-header" id="media">
        {title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {loading
          ? images.map((_, idx) => <SkeletonImageLoader key={idx} />)
          : images.map((img, idx) =>
              isLinked ? (
                <a
                  href={img.link}
                  key={idx}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={img.src} alt={img.alt} className="ai-photo" />
                </a>
              ) : (
                <img
                  key={idx}
                  src={img.src}
                  alt={img.alt}
                  className="captured-photo"
                />
              )
            )}
      </div>
    </section>
  );
};

export default GallerySection;

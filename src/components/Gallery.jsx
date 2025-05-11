/**
 * GallerySection component displays a grid of images with optional links.
 * It includes a loading state that shows skeleton loaders until all images are loaded.
 *
 * @component
 * @param {Object} props
 * @param {string} props.id - The section ID for navigation.
 * @param {string} props.title - Title displayed above the gallery.
 * @param {Array} props.images - Array of image objects with `src`, `alt`, and optional `link`.
 * @param {boolean} [props.isLinked=false] - Determines if images are wrapped in anchor tags.
 * @returns {JSX.Element} The rendered gallery section.
 */

import { useEffect, useState } from "react";
import { SkeletonImageLoader } from "../utils/Skeleton";

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

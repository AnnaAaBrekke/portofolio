import { MdPhotoLibrary } from "react-icons/md";

/**
 * Skeleton loader for gallery images.
 * Displays a placeholder with an icon while the image loads.
 *
 * @component
 * @returns {JSX.Element}
 */
export const SkeletonImageLoader = () => (
  <div className="skeleton-image-container">
    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
      <MdPhotoLibrary className="w-10 h-10" />
    </div>
  </div>
);

/**
 * Skeleton loader for IntroCard component.
 * Renders a gray card placeholder during loading.
 *
 * @component
 * @returns {JSX.Element}
 */
export const IntroCardSkeleton = () => <div className="skeleton-card" />;

/**
 * Skeleton loader for the Header component.
 * Mimics the structure of the real header using animated bars.
 *
 * @component
 * @returns {JSX.Element}
 */
export const HeaderSkeleton = () => (
  <header className="bg-gradient-to-r from-secondary via-button to-primary text-text-secondary shadow-md">
    <nav className="max-w-7xl mx-auto px-2 py-4">
      <ul className="flex gap-5 md:gap-8">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="skeleton-bar" />
        ))}
      </ul>
    </nav>
  </header>
);

/**
 * Circular skeleton image loader.
 * Useful for profile thumbnails and avatars.
 *
 * @component
 * @param {Object} props
 * @param {string} props.size - Tailwind size class for width and height.
 * @returns {JSX.Element}
 */
export const SkeletonImageCircle = ({ size = "w-10 h-10" }) => (
  <div className={`${size} skeleton-circle`} />
);

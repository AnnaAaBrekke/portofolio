import { MdPhotoLibrary } from "react-icons/md";

export const SkeletonImageLoader = () => (
  <div className="skeleton-image-container">
    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
      <MdPhotoLibrary className="w-10 h-10" />
    </div>
  </div>
);

export const IntroCardSkeleton = () => <div className="skeleton-card" />;

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

export const SkeletonImageCircle = ({ size = "w-10 h-10" }) => (
  <div className={`${size} skeleton-circle`} />
);

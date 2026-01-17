/* eslint-disable @next/next/no-img-element */
import { FaLocationDot } from "react-icons/fa6";

export const ImageAutoSlider = () => {
  const images = [
    {
      image_url:
        "https://tqmfgzziyxzcchyeyptb.supabase.co/storage/v1/object/public/photos/IMG_0349.jpeg",
      location: "Location",
      location_url: "",
    },
    {
      image_url:
        "https://tqmfgzziyxzcchyeyptb.supabase.co/storage/v1/object/public/photos/IMG_7184.jpeg",
      location: "Location",
      location_url: "",
    },
    {
      image_url:
        "https://tqmfgzziyxzcchyeyptb.supabase.co/storage/v1/object/public/photos/IMG_7662.jpeg",
      location: "Location",
      location_url: "",
    },
    {
      image_url:
        "https://tqmfgzziyxzcchyeyptb.supabase.co/storage/v1/object/public/photos/IMG_7890.jpeg",
      location: "Location",
      location_url: "",
    },
    {
      image_url:
        "https://tqmfgzziyxzcchyeyptb.supabase.co/storage/v1/object/public/photos/IMG_8082.jpeg",
      location: "Location",
      location_url: "",
    },
    {
      image_url:
        "https://tqmfgzziyxzcchyeyptb.supabase.co/storage/v1/object/public/photos/IMG_8064.jpeg",
      location: "Location",
      location_url: "",
    },
    {
      image_url:
        "https://tqmfgzziyxzcchyeyptb.supabase.co/storage/v1/object/public/photos/e-twickenham-cambridge-convenience-store_orig.jpg",
      location: "Location",
      location_url: "",
    },
    {
      image_url:
        "https://tqmfgzziyxzcchyeyptb.supabase.co/storage/v1/object/public/photos/ham-kanset-pharmacy_orig.jpg",
      location: "Location",
      location_url: "",
    },
    {
      image_url:
        "https://tqmfgzziyxzcchyeyptb.supabase.co/storage/v1/object/public/photos/fe9e4892-6ccd-407f-b486-1b5e8b7459a2.JPG",
      location: "Location",
      location_url: "",
    },
  ];

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <>
      <style>{`

        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .infinite-scroll {
          animation: scroll-right 20s linear infinite;
        }

        .scroll-container {
          mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }

        .image-item {
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .image-item:hover {
          filter: brightness(1.2);
        }
      `}</style>

      {/* Scrolling images container */}
      <div className="relative z-10 w-full flex items-center justify-center py-8">
        <div className="scroll-container w-full">
          <div className="infinite-scroll flex gap-6 w-max">
            {duplicatedImages.map((image, index) => (
              <div
                key={index}
                className="image-item shrink-0 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-xl overflow-hidden shadow-2xl relative"
              >
                <img
                  src={image.image_url}
                  alt={`Hero gallery photo ${(index % images.length) + 1} - ${
                    image.location
                  }`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-end justify-center pb-4 bg-linear-to-t from-black/60 to-transparent">
                  <div className="flex items-center justify-center gap-1">
                    <FaLocationDot className="text-white" />
                    <p className="text-sm md:text-lg text-white font-semibold">
                      {image.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
    </>
  );
};

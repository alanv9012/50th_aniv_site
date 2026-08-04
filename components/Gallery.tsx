import Image from "next/image";
import { galleryImages, siteContent } from "@/lib/content";
import { FadeInView } from "./motion/FadeInView";
import { Reveal } from "./motion/Reveal";
import { Section } from "./Section";

type GalleryImage = (typeof galleryImages)[number];

function imageStyle(image: GalleryImage): { objectPosition?: string } | undefined {
  if (!("objectPosition" in image) || !image.objectPosition) return undefined;
  if (image.objectPosition === "center top") return undefined;
  return { objectPosition: image.objectPosition };
}

function imageClassName(image: GalleryImage) {
  if ("objectPosition" in image && image.objectPosition === "center top") {
    return "object-cover object-top";
  }
  if ("objectPosition" in image && image.objectPosition) {
    return "object-cover";
  }
  return "object-cover object-center";
}

export function Gallery() {
  const { gallery } = siteContent;

  return (
    <Section flow className="bg-surface" ariaLabelledby="gallery-heading">
      <Reveal>
        <div className="max-w-3xl">
          <h2 id="gallery-heading" className="heading-section">
            {gallery.headline}
          </h2>
          <p className="lead mt-4">{gallery.body}</p>
        </div>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
        {galleryImages.map((image, index) => (
          <FadeInView key={image.src} index={index}>
            <figure className="photo-frame">
              <div className="relative aspect-[4/5]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={index === 0}
                  className={imageClassName(image)}
                  style={imageStyle(image)}
                  sizes="(max-width: 640px) 100vw, 45vw"
                />
              </div>
              <figcaption className="px-4 py-3 text-sm text-ink-muted">
                {image.caption}
              </figcaption>
            </figure>
          </FadeInView>
        ))}
      </div>
    </Section>
  );
}

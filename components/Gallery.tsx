import Image from "next/image";
import { galleryImages, siteContent } from "@/lib/content";
import { FadeInView } from "./motion/FadeInView";
import { Reveal } from "./motion/Reveal";
import { Section } from "./Section";

type GalleryImage = (typeof galleryImages)[number];

function imageClassName(image: GalleryImage) {
  const fit =
    "objectFit" in image && image.objectFit === "contain"
      ? "object-contain"
      : "object-cover";
  const position =
    "objectPosition" in image && image.objectPosition
      ? image.objectPosition === "center top"
        ? "object-top"
        : image.objectPosition === "center"
          ? "object-center"
          : ""
      : "object-center";

  return `${fit} ${position}`.trim();
}

function frameClassName(image: GalleryImage) {
  const isLandscape = "aspect" in image && image.aspect === "landscape";
  const aspect = isLandscape
    ? "aspect-[16/10] sm:aspect-[21/9]"
    : "aspect-[4/5]";
  const extra =
    "frameClassName" in image && image.frameClassName
      ? ` ${image.frameClassName}`
      : "";

  return `relative ${aspect}${extra}`;
}

export function Gallery() {
  const { gallery } = siteContent;
  const [featured, ...rest] = galleryImages;

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
        <FadeInView index={0} className="sm:col-span-2">
          <figure className="photo-frame">
            <div className="relative aspect-[16/10] sm:aspect-[21/9]">
              <Image
                src={featured.src}
                alt={featured.alt}
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, 80vw"
              />
            </div>
            <figcaption className="px-4 py-3 text-sm text-ink-muted">
              {featured.caption}
            </figcaption>
          </figure>
        </FadeInView>

        {rest.map((image, index) => {
          const isLandscape =
            "aspect" in image && image.aspect === "landscape";

          return (
            <FadeInView
              key={image.src}
              index={index + 1}
              className={isLandscape ? "sm:col-span-2" : undefined}
            >
              <figure className="photo-frame">
                <div className={frameClassName(image)}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className={imageClassName(image)}
                    sizes={
                      isLandscape
                        ? "(max-width: 640px) 100vw, 80vw"
                        : "(max-width: 640px) 100vw, 45vw"
                    }
                  />
                </div>
                <figcaption className="px-4 py-3 text-sm text-ink-muted">
                  {image.caption}
                </figcaption>
              </figure>
            </FadeInView>
          );
        })}
      </div>
    </Section>
  );
}

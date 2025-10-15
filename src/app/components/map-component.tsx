import * as React from "react";

type MapEmbedProps = {
  /** Google (My) Maps embed URL */
  src?: string;
  /** Accessible title for the iframe */
  title?: string;
  /** Extra classes for the outer wrapper */
  containerClassName?: string;
  /** Extra/override classes for the iframe (height, etc.) */
  iframeClassName?: string;
};

export function MapEmbed({
  src = "https://www.google.com/maps/d/embed?mid=14jhDKUBm-_vNZ0z0Mw97JKX2C7n0_MQ&ehbc=2E312F",
  title = "Mapa Lima",
  containerClassName,
  iframeClassName = "w-full h-[360px] sm:h-[420px] lg:h-[520px]",
}: MapEmbedProps) {
  return (
    <div
      className={["py-6 overflow-hidden rounded-xl", containerClassName]
        .filter(Boolean)
        .join(" ")}
    >
      <iframe
        title={title}
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={iframeClassName}
        allowFullScreen
      />
    </div>
  );
}

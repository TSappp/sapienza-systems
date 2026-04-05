"use client";

import Image from "next/image";
import { useState } from "react";

/*
  PROFILE PHOTO:
  Place your headshot at: public/images/thomas-sapienza.jpg
  Recommended: 600\u00d7800px or similar 3:4 ratio, professional headshot.

  Until the file is added, this component shows the "TS" initials fallback.
*/

export default function ProfilePhoto() {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className="aspect-[3/4] bg-stone-900 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <span className="text-stone-500 text-3xl font-bold tracking-tight block">
            TS
          </span>
          <span className="text-stone-600 text-xs mt-1 block">
            Sapienza Systems
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="aspect-[3/4] relative rounded-lg overflow-hidden bg-stone-900">
      <Image
        src="/images/thomas-sapienza.jpg"
        alt="Thomas Sapienza \u2014 Founder, Sapienza Systems"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 33vw"
        priority
        onError={() => setImageError(true)}
      />
    </div>
  );
}

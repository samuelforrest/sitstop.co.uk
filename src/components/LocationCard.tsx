/* eslint-disable @next/next/no-img-element */
"use client";

import { Location } from "@/data/locations";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GoogleMapsIcon } from "@/components/icons/GoogleMapsIcon";

interface LocationCardProps {
  location: Location;
}

export function LocationCard({ location }: LocationCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
      <div className="relative h-48 w-full bg-gray-200">
        <img
          src={location.photoUrl}
          alt={`${location.name} Image`}
          className="w-full h-full object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 mb-5">
          {location.name}
        </h3>
        <div className="flex items-start gap-2 text-sm text-gray-600 mb-3">
          <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
          <p>{location.address}</p>
        </div>
        {location.email && (
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
            <Mail className="w-4 h-4 shrink-0" />
            <a
              href={`mailto:${location.email}`}
              className="hover:underline truncate"
            >
              {location.email}
            </a>
          </div>
        )}
        {location.phone && (
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
            <Phone className="w-4 h-4 shrink-0" />
            <a href={`tel:${location.phone}`} className="hover:underline">
              {location.phone}
            </a>
          </div>
        )}
        <div className="mt-auto pt-3">
          <Button asChild className="w-full" variant="outline">
            <a
              href={location.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <GoogleMapsIcon />
              Open in Google Maps
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

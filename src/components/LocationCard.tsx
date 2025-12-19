"use client";

import { Location } from "@/data/locations";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GoogleMapsIcon } from "@/components/icons/GoogleMapsIcon";

interface LocationCardProps {
  location: Location;
}

export function LocationCard({ location }: LocationCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <div className="relative h-48 w-full bg-gray-200">
        <Image
          src={location.photoUrl}
          alt={location.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {location.name}
        </h3>
        <div className="flex items-start gap-2 text-sm text-gray-600 mb-2">
          <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <p>{location.address}</p>
        </div>
        {location.email && (
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
            <Mail className="w-4 h-4 flex-shrink-0" />
            <a
              href={`mailto:${location.email}`}
              className="hover:text-blue-600 truncate"
            >
              {location.email}
            </a>
          </div>
        )}
        {location.phone && (
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
            <Phone className="w-4 h-4 flex-shrink-0" />
            <a href={`tel:${location.phone}`} className="hover:text-blue-600">
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
              GoogleMapsIco
              <MapPin className="w-4 h-4" />
              Open in Google Maps
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

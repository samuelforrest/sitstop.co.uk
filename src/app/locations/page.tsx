"use client";

import { NavigationBar } from "@/components/NavigationBar";
import { LocationCard } from "@/components/LocationCard";
import { locations } from "@/data/locations";
import { useState, useMemo } from "react";
import { Search } from "lucide-react";

export default function Locations() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLocations = useMemo(() => {
    if (!searchQuery) return locations;

    const query = searchQuery.toLowerCase();
    return locations.filter(
      (location) =>
        location.name.toLowerCase().includes(query) ||
        location.address.toLowerCase().includes(query) ||
        location.town.toLowerCase().includes(query) ||
        location.email?.toLowerCase().includes(query),
    );
  }, [searchQuery]);

  const locationsByTown = useMemo(() => {
    const grouped: Record<string, typeof locations> = {};
    filteredLocations.forEach((location) => {
      if (!grouped[location.town]) {
        grouped[location.town] = [];
      }
      grouped[location.town].push(location);
    });
    return grouped;
  }, [filteredLocations]);

  const activeTowns = Object.keys(locationsByTown).sort();

  return (
    <div className="w-full">
      <NavigationBar />
      <div className="w-full px-5 md:px-35 lg:px-45 xl:px-60 2xl:px-100 my-8 pt-20">
        <main>
          <section id="hero" className="w-full text-center space-y-6 mb-12">
            <h1 className="text-6xl md:text-8xl text-black font-bold">
              LOCATIONS
            </h1>
            <p className="text-md md:text-xl">
              Here is our directory of SIT STOP locations - there are over 100
              of them!<br></br>For opening times, visit the associated Google
              Maps page.
            </p>
          </section>

          <section id="search" className="w-full max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name, town, address, postcode or email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
            </div>
            <p className="text-sm text-gray-600 mt-2 text-center">
              {filteredLocations.length} location
              {filteredLocations.length !== 1 ? "s" : ""} found
            </p>
          </section>

          {activeTowns.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                No locations found matching your search.
              </p>
            </div>
          ) : (
            activeTowns.map((town) => (
              <section
                key={town}
                id={town.toLowerCase().replace(/\s+/g, "-")}
                className="mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 border-b-2 border-gray-300 pb-2">
                  {town}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
                  {locationsByTown[town].map((location) => (
                    <LocationCard key={location.id} location={location} />
                  ))}
                </div>
              </section>
            ))
          )}
        </main>
      </div>
    </div>
  );
}

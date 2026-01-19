"use client";

import WorldMap from "@/components/ui/world-map";
import { worldMapLocations } from "@/constants/worldMapLocations";

function WorldMapDoted() {
  return (
    <div className="py-20 md:py-40 dark:bg-black bg-white w-full relative overflow-hidden">
      <WorldMap dots={worldMapLocations} lineColor="#145a43" />

      {/* Decorative gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-white dark:from-black to-transparent pointer-events-none" />
    </div>
  );
}

export default WorldMapDoted;

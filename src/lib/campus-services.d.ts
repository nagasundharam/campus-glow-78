declare module "@/lib/locationService.js" {
  export interface CampusLocation {
    id: string;
    roomId?: string;
    name: string;
    category: string;
    [key: string]: unknown;
  }
  export function getAllSelectableLocations(): CampusLocation[];
  export function searchLocations(query: string): CampusLocation[];
}

declare module "@/lib/geolocationsDijkstra.js" {
  export interface CampusRoute {
    success: boolean;
    formattedDistance: string;
    formattedWalkingTime: string;
    crsSimpleCoordinates: number[][];
    stepInstructions: string[];
    [key: string]: unknown;
  }
  export function findGeolocationsRoute(from: string, to: string, type?: "pedestrian" | "vehicle"): CampusRoute;
}
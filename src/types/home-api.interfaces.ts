export interface HomeLocation {
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface HomeHost {
  name: string;
  image: string;
  reviewCount: number;
  joined: string;
  description: string;
  type: string;
}

export interface HomeGeoLoc {
  lat: number;
  lng: number;
}

export interface HomeMarker {
  lat: number;
  lng: number;
  pricePerNight: number;
  id: string;
}

export interface HomeAvailability {
  start: string;
  end: string;
}

export interface Home {
  id: number;
  type: string;
  title: string;
  description: string;
  note: string;
  reviewCount: number;
  reviewValue: number;
  features: string[];
  pricePerNight: number;
  location: HomeLocation;
  guests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  images: string[];
  host: HomeHost;
  _geoloc: HomeGeoLoc;
  availabilityRanges?: HomeAvailability[];
}

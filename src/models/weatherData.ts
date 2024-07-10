export interface Location {
    name: string;
    country: string;
  }
  
  export interface Current {
    temperature: number;
    weather_descriptions: string[];
    weather_icons: string[];
  }
  
  export interface Request {
    url: string;
  }
  
  export interface WeatherData {
    location: Location;
    current: Current;
    request: Request;
  }
  
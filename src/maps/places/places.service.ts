import { Injectable } from '@nestjs/common';
import {
  Client as GoogleMapsClient,
  PlaceInputType,
} from '@googlemaps/google-maps-services-js'; // Replace with the actual path

@Injectable()
export class PlacesService {
  constructor(private GoogleMapsClient: GoogleMapsClient) {}

  async findPlaces(text: string) {
    const { data } = await this.GoogleMapsClient.findPlaceFromText({
      params: {
        input: text,
        inputtype: PlaceInputType.textQuery,
        fields: ['place_id', 'formatted_address', 'geometry', 'name'],
        key: process.env.GOOGLE_MAPS_API_KEY,
      },
    });
    return data;
  }
}

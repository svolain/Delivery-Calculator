export async function fetchStaticData (venueSlug: string) {

    try {
        const response =  await fetch(
            `https://consumer-api.development.dev.woltapi.com/home-assignment-api/v1/venues/${venueSlug}/static`
        );

        if (!response.ok) {
            throw new Error();
        }
        const staticData = await response.json();
        const venueLocation = staticData.venue_raw.location.coordinates;
        return venueLocation;
    } catch (error) {
        console.log(error);
        return undefined;
    }
};

export async function fetchDynamicData (venueSlug: string) {

    try {
        const response: Response = await fetch(
            `https://consumer-api.development.dev.woltapi.com/home-assignment-api/v1/venues/${venueSlug}/dynamic`
        );

        if (!response.ok) {
            throw new Error();
        }
        const dynamicData = await response.json();
        const orderMin: any = dynamicData.venue_raw.delivery_specs.order_minimum_no_surcharge;
        const basePrice: any = dynamicData.venue_raw.delivery_specs.delivery_pricing.base_price;
        const distanceRanges: any = dynamicData.venue_raw.delivery_specs.delivery_pricing.distance_ranges;

        return { orderMin, basePrice, distanceRanges };
    } catch (error) {
        console.log(error)
        return undefined;
    }
}

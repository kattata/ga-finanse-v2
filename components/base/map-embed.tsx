export function MapEmbed() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_PLATFORM_API_KEY;

  return (
    <iframe
      width="100%"
      height="450"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      src={`https://www.google.com/maps/embed/v1/place?q=place_id:EivFmndpxJl0b2phxYRza2EgNTkvNCwgODEtMzkxIEdkeW5pYSwgUG9sYW5kIh0aGwoWChQKEgl1X7NJMKf9RhHYxoB7LQv2lxIBNA&key=${apiKey}`}
    ></iframe>
  );
}

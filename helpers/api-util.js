export async function getAllEvent() {
  var requestOptions = {
    method: 'GET',
  };

  const response = await fetch(
    'https://cycling-events-9363e-default-rtdb.firebaseio.com/events.json',
    requestOptions
  );

  const data = await response.json();

  const events = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }

  return events;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvent();
  return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  const allEvents = await getAllEvent();
  return allEvents.find((event) => event.id === id);
}

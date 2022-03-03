export const DISPLAY_DRAGONS = 'space-travelers-hub/dragons/DISPLAY_DRAGONS';
export const TOGGLE_DRAGON_RESERVATION = 'space-travelers-hub/dragons/TOGGLE_DRAGON_RESERVATION';

const basicURL = 'https://api.spacexdata.com/v3/dragons';

export const displayFetchedDragons = (dragons) => ({
  type: DISPLAY_DRAGONS,
  dragons,
});

export const toggleDragonReservation = (id) => ({
  type: TOGGLE_DRAGON_RESERVATION,
  id,
});

const fetchDragons = async () => (
  fetch(basicURL)
    .then((resolve) => resolve.json())
    .then((data) => data)
);

export const loadDragons = () => async (dispatch) => {
  const dragonsWiki = await fetchDragons();
  const dragonsSummary = [];

  Object.keys(dragonsWiki).forEach((id) => {
    dragonsSummary.push({
      id: dragonsWiki[id].id,
      name: dragonsWiki[id].name,
      type: dragonsWiki[id].type,
      description: dragonsWiki[id].description,
      image: dragonsWiki[id].flickr_images[0],
    });
  });

  dispatch(displayFetchedDragons(dragonsSummary));
};

export const LOAD_ROCKETS = 'LOAD_ROCKETS';
export const TOGGLE_ROCKET = 'TOGGLE_ROCKET';

export const loadRockets = (payload) => ({
  type: LOAD_ROCKETS,
  payload,
});

export const toggleRocket = (id) => ({
  type: TOGGLE_ROCKET,
  id,
});

async function fetchData() {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await response.json();
  return data;
}

export const displayRockets = () => async (dispatch) => {
  const rocketsArr = await fetchData();
  const rocketsTemp = [];

  Object.keys(rocketsArr).forEach((id) => {
    rocketsTemp.push({
      id,
      rocket_name: rocketsArr[id].rocket_name,
      description: rocketsArr[id].description,
      flickr_images: rocketsArr[id].flickr_images[0],
    });
  });

  dispatch(loadRockets(rocketsTemp));
};

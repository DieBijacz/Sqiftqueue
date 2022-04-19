import { names } from "../data/ClinicNames.js"

export const generateRandomPlaces = (user, coords) => {
  let generatedPlaces = 0
  while (generatedPlaces < 5) {
    // create new place
    const newPlace = {
      name: names[generatedPlaces],
      latitude: (coords[0] + randomNumber(0.5, 20)).toFixed(10),
      longitude: (coords[1] + randomNumber(0.5, 20)).toFixed(10),
    }
    // add new place to previous
    user.places = [...user.places, { ...newPlace }]
    generatedPlaces += 1
  }

  function randomNumber(n, r = 1) {
    return (Math.random() * (Math.random() > n ? -1 / r : 1 / r)) //TODO r sets range
  }

  return user
}

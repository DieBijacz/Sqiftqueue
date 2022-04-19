import { names } from "../data/ClinicNames.js"

const NUMBER_OF_PLACES = 10
const MAX_APPOINTMENTS_FOR_PLACE = 4

export const generateRandomPlaces = (user, coords) => {
  let generatedPlaces = 0
  while (generatedPlaces < NUMBER_OF_PLACES) {
    // generate available appointments
    const appointmets = generateAppointments(Math.floor(Math.random() * MAX_APPOINTMENTS_FOR_PLACE))

    // create new place
    const newPlace = {
      name: names[generatedPlaces],
      latitude: (coords[0] + randomNumber(0.5, 20)).toFixed(10),
      longitude: (coords[1] + randomNumber(0.5, 20)).toFixed(10),
      availableAppointments: [...appointmets]
    }

    // add new place to previous places
    user.places = [...user.places, { ...newPlace }]
    generatedPlaces += 1
  }

  function randomNumber(n, r = 1) {
    return (Math.random() * (Math.random() > n ? -1 / r : 1 / r)) //TODO r sets range
  }

  return user
}

export const generateAppointments = (n) => {
  const appointmets = []
  while (appointmets.length < n + 1) {
    const add = (Math.floor(Math.random() * 40) * 15)
    const m = ((480 + add) / 60).toString().split('.')[1]
    const hour = ((480 + add) / 60).toString().split('.')[0]
    const min = m === undefined ? '00' : m === '75' ? '45' : m === '25' ? '15' : '00'
    const newApp = {
      time: `${hour}:${min}`
    }
    appointmets.push(newApp)
  }
  return appointmets
}
import { names } from "../data/ClinicNames.js"

const NUMBER_OF_PLACES = 10
const MAX_APPOINTMENTS_FOR_PLACE = 7

export const generateRandomPlaces = (user, coords) => {
  console.log('generate places')
  let generatedPlaces = 0
  while (generatedPlaces < NUMBER_OF_PLACES) {
    // generate available appointments
    const appointmets = generateAppointments()

    // create new place
    const newPlace = {
      name: names[generatedPlaces],
      phone: '02476257930',
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
  const succes = true
  return { user, succes }
}

export const generateAppointments = () => {
  const appointmets = []
  while (appointmets.length < Math.floor(Math.random() * MAX_APPOINTMENTS_FOR_PLACE) + 1) {
    const add = (Math.floor(Math.random() * 40) * 15)
    const m = ((480 + add) / 60).toString().split('.')[1]
    const hour = ((480 + add) / 60).toString().split('.')[0]
    const min = m === undefined ? '00' : m === '75' ? '45' : m === '25' ? '15' : '00'

    const newApp = { time: `${hour.length === 1 ? `0${hour}` : `${hour}`}:${min}` } // add '0' to 8:45 => 08:45
    appointmets.push(newApp)
  }
  // SORT 
  appointmets.sort((a, b) => (a.time > b.time) ? 1 : ((b.time > a.time) ? -1 : 0))

  return appointmets
}

const id = 12;
const domain = "localhost:3000";

export function getAverageSessions() {
  return fetch(`http://${domain}/user/${id}/average-sessions`)
    .then((response) => response.json()
    .catch((error) => console.log(error))
  )
}

export function getPerformance() {
  return fetch(`http://${domain}/user/${id}/performance`)
    .then((response) => response.json()
    .catch((error) => console.log(error))
  )
}

export function getActivity() {
  return fetch(`http://${domain}/user/${id}/activity`)
    .then((response) => response.json()
    .catch((error) => console.log(error))
  )
}

export function getUserData() {
  return fetch(`http://${domain}/user/${id}`)
    .then((response) => response.json()
    .catch((error) => console.log(error))
  )
}
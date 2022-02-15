const domain = "localhost:3000";

/**
 * function to get average sessions data from the api
 * return {promise}
 */
export function getAverageSessions(id) {
  return fetch(`http://${domain}/user/${id}/average-sessions`)
    .then((response) => response.json()
    .catch((error) => console.log(error))
  )
}

/**
 * function to get performance data from the api
 * return {promise}
 */
export function getPerformance(id) {
  return fetch(`http://${domain}/user/${id}/performance`)
    .then((response) => response.json()
    .catch((error) => console.log(error))
  )
}

/**
 * function to get activity data from the api
 * return {promise}
 */
export function getActivity(id) {
  return fetch(`http://${domain}/user/${id}/activity`)
    .then((response) => response.json()
    .catch((error) => console.log(error))
  )
}

/**
 * function to get user data from the api
 * return {promise}
 */
export function getUserData(id) {
  return fetch(`http://${domain}/user/${id}`)
    .then((response) => response.json()
    .catch((error) => console.log(error))
  )
}
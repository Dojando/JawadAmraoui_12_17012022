const id = 12;
const domain = "localhost:3000";

/**
 * function to get average sessions data from the api
 * return {promise}
 */
export function getAverageSessions() {
  return fetch(`http://${domain}/user/${id}/average-sessions`)
    .then((response) => response.json()
    .catch((error) => console.log(error))
  )
}

/**
 * function to get performance data from the api
 * return {promise}
 */
export function getPerformance() {
  return fetch(`http://${domain}/user/${id}/performance`)
    .then((response) => response.json()
    .catch((error) => console.log(error))
  )
}

/**
 * function to get activity data from the api
 * return {promise}
 */
export function getActivity() {
  return fetch(`http://${domain}/user/${id}/activity`)
    .then((response) => response.json()
    .catch((error) => console.log(error))
  )
}

/**
 * function to get user data from the api
 * return {promise}
 */
export function getUserData() {
  return fetch(`http://${domain}/user/${id}`)
    .then((response) => response.json()
    .catch((error) => console.log(error))
  )
}
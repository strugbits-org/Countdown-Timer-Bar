let apiURL = "countdown-timer-bar-backend:8080/admin/gettimer" // http://localhost:3001

// Get Tiemr List
export const getTimerList = async () => {
   const apiData = await fetch(apiURL)
   const data = await apiData.json()
   console.log('Data - - - - - - - >', data)
   return data
}

let apiURL = "countdown-timer-bar-backend/admin/gettimer" // http://localhost:3001

// Get Tiemr List
export const getTimerList = async () => {
   const apiData = await fetch(apiURL).catch((err)=>{console.log(err)})
   console.log('Data - - - - - - - >',apiData)
   const data = await apiData.json()
   return data
} 
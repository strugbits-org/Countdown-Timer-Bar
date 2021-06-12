let apiURL = "countdown-timer-bar-backend/admin/gettimer" // http://localhost:3001

// Get Tiemr List
export const getTimerList = async () => {
   const apiData = await fetch(apiURL).catch((err)=>{return err})
   console.log('Data - - - - - - - >',apiData)
   console.log('Data - - - - - - - >',apiData.json())
   const data = await apiData.json()
   return data
} 
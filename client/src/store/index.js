let apiURL = "https://localhost:3001/admin/gettimer" // http://localhost:3001

// Get Tiemr List
export const getTimerList = async () => {
   const apiData = await fetch(apiURL)
   console.log('Data - - - - - - - >',apiData)
   const data = await apiData.json()
 
   return data
} 
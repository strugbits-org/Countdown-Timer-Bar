let apiURL = "/admin/getTimer"

// Get Tiemr List
export const getTimerList = async () => {
   const apiData = await fetch(apiURL)
   const data = await apiData.json()
   console.log('Data - - - - - - - >',data)
 
   return data
} 
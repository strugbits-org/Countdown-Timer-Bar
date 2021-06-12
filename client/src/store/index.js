let apiURL = "http://localhost:3001/admin/gettimer" // http://localhost:3001

// Get Tiemr List
export const getTimerList = async () => {
   const apiData = await fetch(apiURL)
   console.log('Data - - - - - - - >',apiData)
   debugger
   const data = await apiData.json()
   console.log('Data - - - - - - - >',data)
 
   return data
} 
const url = 'https://jsonplaceholder.typicode.com'

export async function GetUsers(){
 try {
   const response = await fetch(`${url}/users`)
   const data = await response.json()
   return data
 } catch (e) {
    console.log('Error to get users : ', e)
 }
}
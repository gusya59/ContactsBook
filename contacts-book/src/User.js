
//get random users 
export function getRandomUsers(userCount) {
  const promise = fetch(`https://randomuser.me/api/?results=${userCount}&nat=US`)
    .then(response => {
      if(response.status >= 400) {
        throw `Response invalid ( ${response.status} )`;
      }
      return response.json();
    })
    .then(({results}) => {
      return results;
    })
    .catch(error => {
      console.log(error);
    });

  return promise;
}
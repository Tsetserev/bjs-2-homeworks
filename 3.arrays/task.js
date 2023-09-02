function compareArrays(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
}

function getUsersNamesInAgeRange(users, gender) {
  const ages = users.filter((user) => user.gender === gender).map(user => user.age)
  return ages.reduce((acc, agg) => acc + agg / ages.length, 0)
}
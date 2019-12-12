
function addItem(person, people, force) {
  if (person && people) {
    if (force) {
      people.push(person);
    } else {
      const isNotNew = people.some(( { id } ) => person.id === id);
      if (!isNotNew) {
        people.push(person);
      }
    }
  }
}


module.exports = {
  addItem,
};
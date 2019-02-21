const db = {
  grades: [100, 50, 24, 60, 89, 92, 46],
  students: {
    1: {
      firstname: 'quinton',
      lastname: 'bolt'
    },
    2: {
      firstname: 'will',
      lastname: 'marttala'
    },
    3: {
      firstname: 'yolanda',
      lastname: 'thompson'
    }
  },
  get (string) {
    return this[string]
  }
}

export default db

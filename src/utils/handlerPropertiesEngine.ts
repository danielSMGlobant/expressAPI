const ENGINE_DB = process.env.ENGINE_DB as string

export const getProperties = (): any => {
  const data = {
    nosql: {
      id: '_id'
    },
    mysql: {
      id: 'id'
    }
  }
  if (ENGINE_DB === 'nosql' || ENGINE_DB === 'mysql') {
    return data[ENGINE_DB]
  } else {
    return undefined
  }
}

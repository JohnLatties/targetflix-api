import Show from '../app/shows/model'

export const findById = async (id) => {
  const result = await Show.findById(id)
  return result
}
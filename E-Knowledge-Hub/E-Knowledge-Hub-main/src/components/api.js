import { data } from './data.js'

export const  getPost = (id) => {
    const found = data.find(post => post._id === Number(id))
    console.log(found);
    return found;
}

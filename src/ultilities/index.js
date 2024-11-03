// get all coffees from local storage

import toast from "react-hot-toast";

const getAllData = () => {
    const all = localStorage.getItem('favoutites')

    if (all) {
        const allParse = JSON.parse(all)
        return allParse;
    }else{
        return []
    }
}

// add a coffee at local storage

const addFavorite = coffee => {

    const favorites = getAllData()
    const isExist = favorites.find(item =>item.id === coffee.id)
    if(isExist) return toast.error('Coffee already exist')
    favorites.push(coffee);
    localStorage.setItem('favoutites', JSON.stringify(favorites))
    toast.success('Coffee added ')
}

// remove a coffee from local storage

export { addFavorite,getAllData }
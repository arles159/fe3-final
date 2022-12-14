export const getFavFromStorage = () => {
    const localData = localStorage.getItem("favs");
    return localData ? JSON.parse(localData) : [];
};

export const setFavInStorage = (dentist) => {
    const storageFavs = getFavFromStorage();
    const isFavOnList = storageFavs.filter(fav => {
        return fav.id === dentist.id
    });
    if (isFavOnList.length === 0) {
        storageFavs.push(dentist)
        localStorage.setItem("favs", JSON.stringify(storageFavs));
        alert("El Odontologo fue añadido");
        return true;
    }
    else {
        alert("El Odontologo ya se encuentra como favorito");
        return false;
    }
}

export const isFavorited = (id) => {
    const localData = getFavFromStorage();
    const isFavOnList = localData.filter(fav => {
        return fav.id === id
    });
    return isFavOnList.length === 1;
};

export const getTokenFromStorage = () => {
    const localData = localStorage.getItem("token");
    return localData ? localData : null;
}

export const setTokenInStorage = (token) => {
    localStorage.setItem("token", token);
}

export const removeTokenFromStorage = () => {
    localStorage.removeItem("token");
}

export const removeFavInStorage = (id) => {
    let storageFavs = getFavFromStorage();
    const index = storageFavs.findIndex(fav => fav.id === id);
    console.log(index)
    if (index !== -1) {
        storageFavs.splice(index, 1);
        localStorage.setItem("favs", JSON.stringify(storageFavs));
        alert("Odontologo Eliminado");
    }
    else {
        alert("Ha sucedido un error");
    }
}
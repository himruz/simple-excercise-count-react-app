
const setToLocal = (value) =>{
    localStorage.setItem("BreakTime", value);
   
}

const getLocal = () => {
    const getLocalStorage = localStorage.getItem("BreakTime")
    return getLocalStorage;
}

export {
    setToLocal,
    getLocal
};
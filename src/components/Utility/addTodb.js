import { toast } from "react-toastify";

const getStoredReadList = ()=>{
    const storedListStr = localStorage.getItem('read-list');
    if(storedListStr){
            const storedList = JSON.parse(storedListStr);
            return storedList;
    }
    return [];
}


const addStoredReadList = (id)=>{
    const storedList = getStoredReadList();
    if(storedList.includes(id)){
        toast('already exist in the read list')
    }else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list',storedListStr);
        toast("wow book is added")
    }

}


const getStoredWishList = ()=>{
    const storedWishListStr = localStorage.getItem('wish-list');
    
    if(storedWishListStr){
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList;
    }
    return [];

}

const addStoredWishList = (id)=>{
    const storedWishList = getStoredWishList();
    if(storedWishList.includes(id)){
        toast(id,"already exist")
    }else{
        storedWishList.push(id);

        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list',storedWishListStr)
        toast("wow book is added ")
    }
}

export {addStoredReadList,addStoredWishList,getStoredReadList}
const initState = {
    posts:[
        {id:'1', title: 'Squirtle laid an Egg', body:'Lorem ipsum, dolor sit amet consectetur adip'},
        {id:'2', title: 'a', body:'Bilgisayar Mühendisliği'},
        {id:'3', title: 'Kayseri büyükşehir Belediyesi', body:'Gaziosmanpaşa üniversitesi'}        
    ]
}

const rootReducer = (state=initState,action)=>{

    if(action.type === "DELETE_POST"){
            let newPosts=state.posts.filter(post => {
                return post.id !== action.id
            });
            return {
                ...state,
                posts: newPosts
            }
    }
    return state;
}
export default rootReducer;
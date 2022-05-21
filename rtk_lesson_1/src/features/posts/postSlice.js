import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState={
    posts:[
        {
            id:1,
            name:'post1',
            description:'description1',
        },
        {
            id:2,
            name:'post2',
            description:'description2'
        },
        {
            id:3,
            name:'post3',
            description:'description3'
        },
    ]
};

export const postSlice=createSlice({

    name:'posts',
    initialState,
    reducers:{
         postAdded:{
            reducer(state,action){
                state.posts.push(action.payload);
            },
            prepare(name,description,userId){
                return{
                    payload:{
                        id:nanoid(),
                        name,
                        description,
                        userId
                    }
                }
            }
        }
    }
});

export const postsAll=state=>state.posts;

export const {postAdded}=postSlice.actions;

export default postSlice.reducer;

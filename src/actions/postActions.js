import {FETCH_POST,NEW_POST} from './types';

//actions are functions
/*
Thunk allows to use dispatch method directly for asynchronus call
you can say it as a resolver similar in promises
*/
export function fetchPosts(){
    console.log('fetching');
    return function(dispatch){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>dispatch({
            type:FETCH_POST,
            payload:data
        }))
    }
}

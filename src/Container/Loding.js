import React from 'react';

function Loading(Component) {
    return function Loading( {loading, data} ) {
        if(loading){
            return(
                <h1>Loading.....</h1>
            )

        }else{
            return(
                <Component data={data}/>
            )
        }
    }
}

export default Loading;
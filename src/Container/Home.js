import React from 'react';

function Home({data}) {
    console.log(data);
    return (
        <div>
            {
                data.map((d,i)=>{
                    return(
                        <div>
                        <h3>{d.id}</h3>
                        <h3>{d.name}</h3>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Home;
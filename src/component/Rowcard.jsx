// import React, { useState, useEffect } from 'react';

// const Rowcard = () => {
//     const [data, setData] = useState('');
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {

//         const apiUrl = 'https://striveschool-api.herokuapp.com/api/deezer/search?q=rock';


//         fetch(apiUrl)
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error(`Errore di rete - ${response.status}`);
//                 }
//                 return response.json();
//             })
//             .then((result) => {
//                 console.log(result)
//                 setData(result);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.error('Errore durante la richiesta:', error);
//                 setLoading(false);
//             });
//     }, []);


//     return (
//         // <>
//         //     {data !== null && data !== undefined && data.data !== undefined ? (
//         //         <p>{data.data[4].title}</p>
//         //     ) : (
//         //         <p>Dati non disponibili</p>
//         //     )}
//         // </>

//         // <div class="col text-center">
//         //     <img class="img-fluid" src={
//         //         data.data[4].title.cover
//         //     } alt="track" />
//         //     <p>
//         //         Track: "{
//         //             data.data[4].title.length < 16
//         //                 ? `${data.data[4].title}`
//         //                 : `${data.data[4].title.substring(0, 16)}...`
//         //         }"<br />
//         //         Artist: {data.data[4].artist.name}
//         //     </p>
//         // </div>

//         // <p>{data.data[4]}</p>
//     );
// };

// export default Rowcard;

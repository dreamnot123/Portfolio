// import React from 'react'
// import './Certification.css'

// import data from './Data.js'; // Assuming data.js is in the same directory


// function Certification() {
//     const tableRows = data.map(item => (
//         <tr key={item.id}>
//           <td className='id' style={{width:"5vw",marginLeft:"2vw",display:"flex",alignItems:"center",justifyContent:"center",marginLeft:"10vh"}}>{item.id}</td>
//           <td style={{width:"30vw",display:"flex",alignItems:"center",justifyContent:"center",marginLeft:"10vh"}}>{item.name}</td>
//           <td>
//             <a style={{marginLeft:"3vh",color:"black",display:"flex",alignItems:"center",justifyContent:"center"}} href={item.link} target="_blank" rel="noopener noreferrer">
//               Certification
//             </a>
//           </td>
//         </tr>
//       ));
//   return (
//     <div className='certi'>
//          <table>
//         <thead>
//           <tr>
//             <th className='id'>ID</th>
//             <th>Certification</th>
//             <th>Link</th>
//           </tr>
//         </thead>
//         <tbody>{tableRows}</tbody>
//       </table>
//     </div>


//   )
// }
// // function Certification() {
// //   return (
// //     <div>
// //         <Swiper
// //         effect={'cards'}
// //         grabCursor={true}
// //         modules={[EffectCards]}
// //         className="mySwiper"
// //       >
// //         <SwiperSlide>Slide 1</SwiperSlide>
// //         <SwiperSlide>Slide 2</SwiperSlide>
// //         <SwiperSlide>Slide 3</SwiperSlide>
// //         <SwiperSlide>Slide 4</SwiperSlide>
// //         <SwiperSlide>Slide 5</SwiperSlide>
// //         <SwiperSlide>Slide 6</SwiperSlide>
// //         <SwiperSlide>Slide 7</SwiperSlide>
// //         <SwiperSlide>Slide 8</SwiperSlide>
// //         <SwiperSlide>Slide 9</SwiperSlide>
// //       </Swiper>
// //     </div>
// //   )
// // }


// export default Certification



import React from 'react';
import './Certification.css';
import data from './Data.js';

function Certification() {
    const renderTableBody = () => {
        const screenWidth = window.innerWidth;

        if (screenWidth > 768) {
            return data.map(item => (
                <tr key={item.id}>
                    <td className='id' style={{width:"5vw",marginLeft:"2vw",display:"flex",alignItems:"center",justifyContent:"center",marginLeft:"10vh"}}>{item.id}</td>
                    <td style={{width:"30vw",display:"flex",alignItems:"center",justifyContent:"center",marginLeft:"10vh"}}>{item.name}</td>
                    <td>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            Certification
                        </a>
                    </td>
                </tr>
            ));
        } else {
            return data.map(item => (
                <tr key={item.id} style={{padding:"10px",gap:"2rem"}}>
                    <td className='id' style={{width:"2vw",display:"flex",alignItems:"center",justifyContent:"center"}}>{item.id}</td>
                    <td style={{width:"30vw",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"smaller"}}>
                        <a  style={{display:"flex",alignItems:"center",justifyContent:"center",fontSize:"large",marginLeft:"-9vh",color:"black",textAlign:"center"}}href={item.link} target="_blank" rel="noopener noreferrer">
                        {item.name}
                        </a>
                    </td>
                </tr>
            ));
        }
    };

    return (
        <div className='certi'>
            <table>
                <thead>
                    <tr>
                        <th className='id'>ID</th>
                        <th>Certification</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody style={{height:"100%"}}>{renderTableBody()}</tbody>
            </table>
        </div>
    );
}

export default Certification;

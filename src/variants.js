import { type } from "@testing-library/user-event/dist/type"
export const slideInFromLeft = (direction,delay) => {
    return {
        hidden: {
            x:  direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
            y:  direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
            opacity: 0, 
        },
        show: {
            x: 0, 
            opacity: 1, 
            transition: {
                type: 'tween',
                duration:1.2 , 
                delay: delay, 
            },
        },
    };
};
// export const fedeIn =(direction,delay) => {
//     return{
//         hidden: {
//             y:  direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
//             x:  direction === 'left' ? 40 : direction === 'right' ? -210 : 0

//         },
//         show:{
//             y:0,
//             x:0,
//             opacity:1,
//             transition:{
//                 type:'tween',
//                 duration:1.2,
//                 delay:delay,
//                 ease:[0.25,0.25,0.25,0.75]
//             }
//         }
//     }
// }
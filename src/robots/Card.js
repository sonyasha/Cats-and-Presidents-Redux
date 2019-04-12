import React from 'react';

const Card = ({name, email, id}) => {
    return (
        <div className='tc bg-light-blue dib br3 ma2 pa2 grow bw2 shadow-5'>
            {/* <img src={`https://robohash.org/${id}/?set=set4&size=150x150`} alt={`'img-${id}'`}/> */}
            <img src={`https://api.adorable.io/avatars/150/${id}`} alt={`'img-${id}'`}/>
            <div>
                <h2 className='f5'>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

// class Card extends React.Component {
//     render() {
//         const { name, email, id } = this.props;
//         // console.log(this.props);
//         return (
//             <div className='tc bg-light-blue dib br3 ma2 pa2 grow bw2 shadow-5 w-20'>
//                 <img src={`https://robohash.org/${id}/?set=set4&size=150x150`} alt={`'img-${id}'`}/>
//                <img src={`https://api.adorable.io/avatars/150/${id}`} alt={`'img-${id}'`}/>
//                 <div>
//                     <h2 className='f5'>{name}</h2>
//                     <p>{email}</p>
//                 </div>
//             </div>
//         )
//     }
// };

export default Card;
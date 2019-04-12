import React from 'react';
import Background from './backgrounds/fabric_of_squares_gray_@2X.png'

class Profile extends React.Component {
    
    render() {
        const breed_data = this.props.breed_data;
        
        return !breed_data ?
        (
            <div className='fl w-80 pa2 tc ma2 center br2 vh-75-l' style={{backgroundImage: `url(${Background})`}}>
                <h3>Choose a breed</h3>
                <img className='br2 vh-25-l vh-75-m grow' src='https://cataas.com/cat?type=md' alt='a kitty'/>
            </div>
        ):

        (
            <div className='fl w-80 pa2 tc ma2 center br2 vh-75-l'
                style={{backgroundImage: `url(${Background})`}}>
                <h3>
                    {breed_data.breeds[0].name}
                </h3>
                <img className='br2 vh-25-ns vh-75-m grow' 
                    src={breed_data.url}
                    alt='a kitty'/>
                <div>
                    <h4>Origin - {`${breed_data.breeds[0].origin}`}</h4>
                    <h5>Temperament {`${breed_data.breeds[0].temperament}`}</h5>
                    <p>{breed_data.breeds[0].description}</p>
                </div>
            </div>
            
        )
    }


};

export default Profile;
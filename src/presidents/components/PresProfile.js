import React from 'react';
import Background from './backgrounds/fabric_of_squares_gray_@2X.png'

class Presprofile extends React.Component {
    render() {
        const { firstname, terms, photo, link } = this.props;
        // console.log(photo);
        const all_terms = terms.map(el => 
            <div className='f6' key={el.start}>
                {el.start} - {el.end}
            </div>);

        const colors = () => {
            if (terms[0].party === 'Republican') {
                return 'b--red';
            }
            else if (terms[0].party === 'Democratic' || terms[0].party === 'Democrat') {
                return 'b--blue';
            }
            else if (terms[0].party === 'Whig') {
                return 'b--yellow';
            }
            else {
                return 'b--black-20';
            }
        };

        return(
            <div className={'w-30-ns tc ma2 br3 pa2 ba bw2 grow ' +  colors()}
                style={{backgroundImage: `url(${Background})`}}>
                <div className='fw6 f5 ma1'>
                    {`${firstname}`}
                </div>
                <div className='ma1'>{terms[0].party}</div>
                {/* <img src='https://avatars.io/static/default_128.jpg' alt={firstname}/> */}
                <a href={link} target='blank'>
                    <img src={photo} alt={firstname}/>
                </a>
                <div className='mt2'>
                    {all_terms}
                </div>
            </div>
        )
    }
}

export default Presprofile;
import React from 'react';
import { Carousel } from 'react-bootstrap';
import Cards from '../Cards'
import './style.css';

import storiesData from '../../utils/stories';

export default class ControlledCarousel extends React.Component{
    state = {
        data:[]
    }
    componentDidMount(){
        const newData = [{id:0, stories:[]}];
        storiesData.forEach((story,index)=>{//////////////////////////////
            newData[newData.length-1].stories.push(story);
            if((index + 1)%4===0){
                newData.push({i:(index+1)/4,stories:[]})
            }
        });/////////////////////////////
        this.setState({data:newData})
    }
    render(){
        return(
            <Carousel
            controls
            indicators 
            nextIcon={<i className="slider__control fas fa-angle-double-right"/>}
            prevIcon={<i className="slider__control fas fa-angle-double-left"/>}
            
            >
            {data.map(({id,stories})=>(
                <Carousel.Item>
                    <Cards data={stories}/>
                </Carousel.Item>
            ))}

            </Carousel>
        )
    }
}

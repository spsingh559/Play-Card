import React from 'react';
import EachDrawRow from './EachDrawRow';
export default class FirstRow extends React.Component{

 

    render(){

        // console.log(this.props.data);
        let newData=this.props.data.map((data,i)=>{
            return(
            <EachDrawRow
            key={i}
            data={data}
           
            />
            )
        })

        return(
            <div>
                {newData}
                </div>
        )
    }
}
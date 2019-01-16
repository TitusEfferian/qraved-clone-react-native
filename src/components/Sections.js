import React from 'react';
import {View} from 'react-native';

const Sections = (props) =>{
    return(
        <View style={[{...props.style},{backgroundColor:'white'}]}>  
            {
                props.children
            }
        </View>
    )
}
export default Sections
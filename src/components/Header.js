import React from 'react';
import {Text, View} from 'react-native';

const Header = (props)=>{
    const { containerStyle, textHeadingStyle} = styles;
    return(
        <View style={[containerStyle, props.style]}>
            <Text style = {textHeadingStyle}>{props.heading}</Text>
        </View>
    )
}

const styles = {
    containerStyle: {
        padding: 0
    },
    textHeadingStyle: {
        fontSize: 18,
        marginTop: 40,
        textAlign: 'center'
    }
}

export default Header;

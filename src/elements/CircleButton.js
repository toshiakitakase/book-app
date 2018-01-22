import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class CircleButton extends React.Component {
    render(){
        return(
            <View style={styles.circleButton}>
                <Text style={styles.circleButtonTitle}>
                    {this.props.children}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    circleButton: {
        position: 'absolute',
        bottom: 32,
        right: 32,
        width: 48,
        height: 48,
        backgroundColor: '#e31676',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
      },
      circleButtonTitle: {
        fontSize: 32,
        lineHeight: 32,
        color: "#fff"    
      }
});

export default CircleButton;
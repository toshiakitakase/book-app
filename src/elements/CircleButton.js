import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Font } from 'expo';
import FontAwesome from '../../assets/fonts/fontawesome-webfont.ttf';

class CircleButton extends React.Component {
    state = {
        fontLoaded: false,
    }

    async componentDidMount() {
        await Font.loadAsync({
          'FontAwesome': FontAwesome,
        });
    
        this.setState({ fontLoaded: true });
      }

    render(){
        const { style, color } = this.props;

        let bgColor = '#e31676';
        let textColor = '#fff';

        if(color === 'white') {
            bgColor = '#fff';
            textColor = '#e31676';
        }

        return(
            <View style={[styles.circleButton, style, { backgroundColor: bgColor }]}>
                {
                    this.state.fontLoaded ? (
                        <Text style={[styles.circleButtonTitle, { color: textColor }]}>
                            {this.props.children}
                        </Text>
                        ) : null
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    circleButton: {
        position: 'absolute',
        bottom: 32,
        right: 32,
        width: 48,
        height: 48,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
      },
      circleButtonTitle: {
        fontFamily: 'FontAwesome',
        fontSize: 24,
        lineHeight: 24,
      }
});

export default CircleButton;
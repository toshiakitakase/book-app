import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import CircleButton from '../elements/CircleButton';

class MemoDetailScreen extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <View>
                    <View style={styles.memoHeader}>
                        <View>
                            <Text style={styles.memoHeaderTitile}>講座のアイデア</Text>
                            <Text style={styles.memoHeaderDate}>2017/01/22</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.memoContent}>
                    <Text>講座のアイデアです。</Text>
                </View>

                <CircleButton color='white' style={styles.editButton} onPress={() => {this.props.navigation.navigate('MemoEdit')}}>
                    {'\uf040'}
                </CircleButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    memoHeader: {
        height: 100,
        backgroundColor: '#17313c',
        justifyContent: 'center',
        padding: 10,
    },
    memoHeaderTitile: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 4,
    },
    memoHeaderDate: {
        fontSize: 12,
        color: '#fff'
    },
    memoContent: {
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
    },
    editButton: {
        top: 75,
    }
})

export default MemoDetailScreen;
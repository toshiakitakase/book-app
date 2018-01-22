import React from  'react';
import { StyleSheet, View, Text } from 'react-native';

class MemoList extends React.Component {
    render(){
        return(
            <View style={styles.memolist}>
                <View style={styles.memolistItem}>
                    <Text style={styles.memoTitle}>講座のアイテム</Text>
                    <Text style={styles.memoDate}>2017/01/21</Text>
                </View>
                <View style={styles.memolistItem}>
                    <Text style={styles.memoTitle}>講座のアイテム</Text>
                    <Text style={styles.memoDate}>2017/01/21</Text>
                </View>
                <View style={styles.memolistItem}>
                    <Text style={styles.memoTitle}>講座のアイテム</Text>
                    <Text style={styles.memoDate}>2017/01/21</Text>
                </View>
                <View style={styles.memolistItem}>
                    <Text style={styles.memoTitle}>講座のアイテム</Text>
                    <Text style={styles.memoDate}>2017/01/21</Text>
                </View>
                <View style={styles.memolistItem}>
                    <Text style={styles.memoTitle}>講座のアイテム</Text>
                    <Text style={styles.memoDate}>2017/01/21</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    memolist: {
        flex: 1,
        width: "100%",
        paddingTop: 78
    },
    memolistItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        backgroundColor: "#fff"
    },
    memoTitle: {
        fontSize: 18,
        marginBottom: 4
    },
    memoDate: {
        fontSize: 10,
        color: "#a2a2a2"
    }
});

export default MemoList;
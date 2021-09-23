import React, { Component, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

//State Function Component (Hooks)
const Counter = () => {
    const [number, setNumber] = useState(0);
    return(
        <View>
            <Text style={styles.textTitle}>{number}</Text>
            <Button title="Add" onPress={()=>setNumber(number+1)}/>
        </View>
    )
}

//State Class Component
class CounterClass extends Component {
    state = {
        number: 0
    }
    render(){
        return(
            <View>
                <Text style={styles.textTitle}>{this.state.number}</Text>
                <Button title="Add" onPress={() => this.setState({number: this.state.number + 1})}/>
            </View>
        )
    }
}

const StateDinamis = () => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.titleSelection}>Function Component</Text>
            <Counter />
            <Counter />
            <Text style={styles.titleSelection}>Class Component</Text>
            <CounterClass />
        </View>
    )
}

export default StateDinamis;

const styles = StyleSheet.create({
    wrapper: { padding: 20 },
    textTitle: { textAlign: 'center' },
    titleSelection: {marginTop: 20}
})

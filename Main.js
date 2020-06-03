import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, TextInput} from 'react-native';

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selection: undefined,
      text: undefined
    };
  }

  onPress() {
    this.setState({
      selection: {
        start: 10,
        end: 10
      },
      text: 'Large Text'
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput selection={this.state.selection} value={this.state.text} placeholder={'Say Something'} />
        <TouchableOpacity onPress={this.onPress.bind(this)} style={{
          marginTop: 16
        }} >
          <Text>Click me</Text>
        </TouchableOpacity>
      </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
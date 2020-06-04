import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, TextInput} from 'react-native';

function replace(previous, range, chars) {
  const text = previous.slice(0, range.start) + chars + previous.slice(range.end)
  const sel = range.start + chars.length
  return {
    text,
    selection: {start: sel, end: sel}
  }
}

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selection: null,
      text: ''
    }
  }

  resetText = () => {
    this.setState({
      selection: {
        start: 10,
        end: 10
      },
      text: 'Large Text'
    })
  }

  onSelectionChange = evt => {
    console.log('onSelectionChange: ', evt.nativeEvent)

    let nextSelection = evt.nativeEvent.selection
    if (!this.inputEvent) {
      return this.setState({selection: nextSelection})
    }

    const {previousText, text, range} = this.inputEvent
    let nextText = replace(this.state.text, range, text).text
    delete this.inputEvent

    function replaceInputWith(chars) {
      const result = replace(previousText, range, chars)
      nextText = result.text
      nextSelection = result.selection
    }

    switch (text) {
      case '@': {
        replaceInputWith('@Mihail')
        break
      }

      case '\n': {
        replaceInputWith('\n- ')
        break
      }
    }

    this.setState({
      text: nextText,
      selection: nextSelection
    })
  }

  onChange = evt => {
    console.log('onChange: ', evt.nativeEvent)
  }

  onChangeText = evt => {
    console.log('onChangeText: ', evt)
  }

  setState(state) {
    console.log('SetState: ', state)
    super.setState(state)
  }

  onTextInput = evt => {
    console.log('onTextInput: ', evt.nativeEvent)
    this.inputEvent = evt.nativeEvent
  }

  onKeyPress = evt => {
    console.log('onKeyPress: ', evt.nativeEvent)
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          selection={this.state.selection}
          value={this.state.text}
          placeholder={'Say Something'}
          onSelectionChange={this.onSelectionChange}
          onChange={this.onChange}
          onChangeText={this.onChangeText}
          onTextInput={this.onTextInput}
          onKeyPress={this.onKeyPress}
          multiline
          autoFocus
        />
        <TouchableOpacity onPress={this.resetText} style={{
          marginTop: 16
        }} >
          <Text>Click me</Text>
        </TouchableOpacity>
      </View>
    )
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
})
import React, { Component } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, Image, Input, TextInput, Button } from 'react-native';
import {url} from '../url'


//ifconfig |grep inet
     // use second one

class SearchForProvider extends Component {
    constructor(){
        super()
        this.state = {
            providers: [],
            zip: ''
        }
    }

   

  getProviders = () => {
        console.log('hit', this.state.zip)
        axios.get(`${url.url}/api/searchProviders/${this.state.zip}`).then(res => {
            this.setState({providers: res.data})
        })
    }

    render(){
    
        const mappedProviders = this.state.providers.map(provider => {
            return (
                
    
                <View >
                    {/* <i className="far fa-comment-dots"></i> */}
                    <Text>{provider.name}</Text>
                    <Text>{provider.experience}</Text>
                    <Text>{provider.short_desc}</Text>
                    <Text>--------------</Text>
    
                </View>
    
            )
        })
        return(
            <View className="SearchForProvider">
            <Text>Search For Provider</Text>
            <Text>Search by zip code:</Text>

            <TextInput
                    style={{ height: 40, width: 100, borderColor: 'gray', borderWidth: 1 }}
                    placeholder='zip'
                    onChangeText={(zip) => this.setState({zip})} value={this.state.zip}
                />
            {/* <TextInput type='integer' placeholder='zip' maxLength={5} onChangeText={(e) => setZip(e.target.value)} value={zip}
            /> */}

            <Button
                onPress={this.getProviders}
                title="Search"
                color="#841584"
                accessibilityLabel="Get Providers"
            />

            {mappedProviders}
        </View>

        )
    }
}

export default SearchForProvider






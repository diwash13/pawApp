import React, { Component } from "react"
import { StyleSheet, Text, View, Image, Input, TextInput, Button } from 'react-native';
import axios from "axios"
import { connect } from "react-redux"
import { updateUser } from '../ducks/reducer'
import {url} from '../url'


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    componentDidMount() {
        this.checkUser()
    }

    checkUser = async () => {
        console.log('hit checkUser')
        const { id } = this.props
        if (!id) {
            try {
                let res = await axios.get(`${url.url}/api/current`)
                this.props.updateUser(res.data)
                // this.props.history.push('/home')
            } catch (err) {

            }
        } else {
            // this.props.history.push('/dashboard')
        }
    }
    handleChange(prop, val) {
        this.setState({
            [prop]: val
        })
    }

    login = async (e) => {
        console.log('click', this.state)
        e.preventDefault()
        let user = {
            email: this.state.email,
            password: this.state.password
        }
        try {
            let res = await axios.post(`${url.url}/auth/login`, user)
            this.props.updateUser(res.data)
            // this.props.history.push('/home')
        } catch (err) {
            alert('incorrect email or password')
        }
    }
    render() {
        console.log(this.props)
        const { email, password } = this.state
        return (
            <View>
                <Text>login</Text>
                <TextInput
                    style={{ height: 40, width: 100, borderColor: 'gray', borderWidth: 1 }}
                    placeholder='email'
                    value={this.state.email}
                    onChangeText={ (email) => this.setState({email})}
                />
                <TextInput
                    type='password'
                    secureTextEntry={true}
                    password={true}
                    style={{ height: 40, width: 100, borderColor: 'gray', borderWidth: 1 }}
                    placeholder='password'
                    value={this.state.password}
                    onChangeText={(password) => this.setState({password})}
                />
                <Button
                    onPress={this.login}
                    title="Login"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
                {/* <Input type='text'
                placeholder='email'
                value={email}
                onChange={e => this.handleChange("email", e.target.value)}
                />
                <Input type="password"
                placeholder='password'
                value={password}
                onChange={e => this.handleChange("password", e.target.value)}
                />
                <button onClick={this.login}>Login</button> */}
            </View>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        id: reduxState.id
    }
}
const mapDispatchToProps = {
    updateUser
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)

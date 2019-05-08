import React, {Component} from 'react';
import { View } from 'react-native';
import firebase from 'firebase'
import Header from './components/Header'
import LoginForm from './components/LoginForm'
import { Card, Button, CardSection, Spinner} from './components/common'

class App extends Component{

    state = {loggedIn: null}    //don't know if signed in or not
    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyDBTtjTYuyoCbC72bX9yVrhrZo6R-uvbdk",
            authDomain: "auth-b7d1e.firebaseapp.com",
            databaseURL: "https://auth-b7d1e.firebaseio.com",
            projectId: "auth-b7d1e",
            storageBucket: "auth-b7d1e.appspot.com",
            messagingSenderId: "182741874231"
        })
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({ loggedIn: true })
            }
            else{ 
                this.setState({loggedIn: false })
            }
        })
    }

    renderPage(){
        switch(this.state.loggedIn){
            case true: 
                return(<Button onPress = { () => firebase.auth().signOut()}>LOGOUT</Button>);
            case false: 
                // return(<Button onPress = { () => firebase.auth().signOut()}>LOGOUT</Button>);
                return  (
                    <LoginForm />
                );
            default:
            return(
                <Spinner />
            );
        }            
    }
    render(){
        return(
            <View style = {styles.containerStyle}>
                <Header style= {styles.headingStyle} heading='AUTHENTICATION' />
                {this.renderPage()}
            </View>

        )
    }
}
const styles = {
    containerStyle: {
        flex:1,
        flexDirection: 'column',
        backgroundColor: '#fff'
    },
    headingStyle: {
        height: 74,
        backgroundColor: '#f8f8f8'
    }
}

export default App;
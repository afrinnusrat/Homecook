import React, { Component } from "react";
import { Login } from "container_f";

class LoginScreen extends Component {
  static navigationOptions = {
    // headerStyle:{
    //   height: 48,
    //   backgroungColor: "#fff",
    //   borderBottomColor:"transparent",
    //   elevation:0
    // }
    header: null
  };
  render() {
    const { navigate } = this.props.navigation;
    return <Login onLoginPress={() => navigate("Home")} />;
  }
}
export default LoginScreen;
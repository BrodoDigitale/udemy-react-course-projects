import { Component } from "react";

export class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }
  //this method can be added to any class based component
  //and it turns that component into an error boundary
  componentDidCatch(error) {
    console.log(error);
    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong</p>;
    }
    return this.props.children;
  }
}

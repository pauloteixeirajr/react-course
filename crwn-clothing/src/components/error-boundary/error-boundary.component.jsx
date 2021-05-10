import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasErrored: false,
    error: null,
  };

  static getDerivedStateFromError(error) {
    // Process the error
    return { hasErrored: true, error };
  }

  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }

  render() {
    if (this.state.hasErrored) {
      return <div>Oh-uh! Something went wrong...</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

import React, { Component } from "react";

interface State {
  hasError: boolean;
  message: string;
}

interface Props {
  children: React.ReactNode;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
    message: "",
  };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, message: error.message };
  }

  render() {
    if (this.state.hasError) {
      return <h1>OCORREU O SEGUINTE ERROR: {this.state.message}</h1>;
    }
    return this.props.children;
  }
}

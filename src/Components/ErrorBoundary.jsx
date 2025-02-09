import React, { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, errorMessage: "" };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, errorMessage: error.message };
    }

    componentDidCatch(error, info) {
        console.error("Error caught by Error Boundary:", error, info);
    }

    handleReset = () => {
        this.setState({ hasError: false, errorMessage: "" });
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
                    <h1 className="text-3xl font-bold text-red-600">Oops! Something went wrong.</h1>
                    <p className="text-gray-600 mt-2">Error: {this.state.errorMessage}</p>
                    <button
                        onClick={this.handleReset}
                        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md"
                    >
                        Try Again
                    </button>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
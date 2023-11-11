import React from "react";

interface MyProps {
    children?: any;
}

interface MyState {
    error: string
}

export class ErrorBoundary extends React.Component<MyProps, MyState> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = { error: "" };
    }

    componentDidCatch(error: { name: any; message: any; }) {
        this.setState({ error: `${error.name}: ${error.message}` });
    }

    render() {
        const { error } = this.state;
        if (error) {
            return (
                <div>{error}</div>
            );
        } else {
            return <>{this.props.children}</>;
        }
    }
}
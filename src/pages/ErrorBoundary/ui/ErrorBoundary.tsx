import React, { ReactNode } from 'react';
import { withTranslation } from 'react-i18next';

interface ErrorBoundaryProps {
    children?: ReactNode;
}

interface ErrorBoundaryState {
    error: string
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { error: '' };
    }

    componentDidCatch(error: { name: string; message: string; }) {
        this.setState({ error: `${error.name}: ${error.message}` });
    }

    render() {
        const { error } = this.state;
        if (error) {
            return (
                <div>{error}</div>
            );
        }
        return <>{this.props.children}</>;
    }
}

export default withTranslation()(ErrorBoundary)
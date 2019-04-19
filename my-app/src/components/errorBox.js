import React from 'react';

class ErrorBox extends React.PureComponent {
    render() {
        const { errorMessage } = this.props;
        return <div className="w-100">
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
                <div><strong>{errorMessage}</strong></div>
            </div>
        </div>
    }
}

export default ErrorBox
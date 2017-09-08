import React from 'react';
import ReactDom from 'react-dom';

import io from 'socket.io-client';
import Objects from './objects.jsx';
import NotificationsManager from './notifications.jsx';

export default class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeObject: null,
        }

        this.notificationsManager = new NotificationsManager();
    }

    componentDidMount() {
        this.notificationsManager.connect((data) => {
            this.getNewLocation(data);
        });
    }


    getNewLocation(data) {
        const newActiveObject = data.filter((d) => d.Value == "1");
        if (newActiveObject.length == 1 && this.state.activeObject != newActiveObject[0]['Name']) {
            this.setState({ activeObject: newActiveObject[0]['Name'] })
        }
    }

    render() {
        return (
            <div>
                <Objects activeObject={this.state.activeObject}/>
            </div>
        )
    }
}

ReactDom.render(<Layout />, document.getElementById('app'));

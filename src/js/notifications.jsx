import io from 'socket.io-client';

export default class NotificationsManager {
    connect(callback) {
       const socket = io.connect('http://ec2-34-212-134-187.us-west-2.compute.amazonaws.com:9090');
        socket.on('connect',() => {
           console.log('socket connected');
        });

        socket.on('widget:data', (json) => {
            const data = JSON.parse(json.message);
            if (this.validateMsg(data)) {
                callback(data['Root']['BinaryInSet']['Entry']);
            }
        })
    }

    validateMsg(msg) {
        return msg['Root']['BinaryInSet']['Entry'].length > 0;
    }
}


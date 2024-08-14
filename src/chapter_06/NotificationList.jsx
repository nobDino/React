import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    { message: "안녕하세요. 오늘 일정을 알려드립니다." },
    { message: "점심식사 시간입니다." },
    { message: "이제 곧 미팅이 시작됩니다." },
];

var timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            notifications: [],
        };
    }

    componentDidMount() {
        timer = setInterval(() => {
            const { notifications } = this.state;
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                this.setState(prevState => ({
                    notifications: [...prevState.notifications, reservedNotifications[index]],
                }));
            } else {
                clearInterval(timer);
            }
        }, 1000);
    }

    componentWillUnmount() {
        if (timer) {
            clearInterval(timer);
        }
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification, index) => (
                    <Notification key={index} message={notification.message} />
                ))}
            </div>
        );
    }
}

export default NotificationList;

# NotificationApp

This is a simple React application that displays different types of notifications using a reusable `Notification` component.

## Components

### Notification

The `Notification` component takes the following props:
- `iconUrl`: The URL of the icon to be displayed.
- `message`: The notification message.
- `className`: The CSS class to style the notification.

### Usage

The `Notification` component is used within a parent `div` with the class `bg-container`. Four instances of the `Notification` component are rendered with different props to display various types of notifications.

## Example

```javascript
const Notification = props => {
    const {iconUrl, message, className} = props
    return (
        <div className={`notification-container ${className}`}>
            <img src={iconUrl} alt="icon" className="icon" />
            <p className="message">{message}</p>
        </div>
    )
};

const element = (
    <div className="bg-container">
        <h1 className="heading">Notifications</h1>

        <Notification 
        iconUrl = "https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        message = "Information Message"
        className = "information"
        />

        <Notification
        iconUrl = "https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        message = "Success Message"
        className = "success"
        />

        <Notification
        iconUrl = "https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        message = "Warning Message"
        className = "warning"
        />

        <Notification
        iconUrl = "https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        message = "Error Message"
        className = "error"
        />

    </div>
)

ReactDOM.render(element, document.getElementById('root'))
```

## Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Install the dependencies using `npm install`.
4. Start the development server using `npm start`.

## License

This project is licensed under the MIT License.
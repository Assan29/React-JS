
const Notification = props => {
    const {iconUrl, message, className} = props
    return (
        <div className={`notification-container ${className}`}>
            <img src={iconUrl} alt="icon" className="icon" />
            <p className="message">{message}</p>
        </div>
)};

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

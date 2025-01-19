# SocialButtons

This is a simple React application that displays social media buttons using reusable `Button` components.

## Components

### Button

The `Button` component takes the following props:
- `text`: The text to be displayed on the button.
- `className`: The CSS class to style the button.

### Usage

The `Button` component is used within a parent `div` with the class `bg-container`. Three instances of the `Button` component are rendered with different props to display various social media buttons.

## Example

```javascript
const Button = props => {
    const {text, className} = props
    return (
        <button className={`button ${className}`}>
            {text}
        </button>
    )
};

const element = (
    <div className="bg-container">
        <h1 className="heading">Social Buttons</h1>

        <Button text="Like" className="like-button" />
        <Button text="Comment" className="comment-button" />
        <Button text="Share" className="share-button" />
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
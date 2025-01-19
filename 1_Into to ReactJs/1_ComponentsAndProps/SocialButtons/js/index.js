const Button = props => {
    const { text, className } = props;
    return (
        <button className={`btn ${className}`}>{text}</button>
    );
}

const element = (
    <div className="bg-container">
        <h1 className="main-heading">Social Buttons</h1>
        <div className="buttons-wrapper">
            <Button text="Like" className="like-btn" />
            <Button text="Comment" className="comment-btn" />
            <Button text="Share" className="share-btn" />
        </div>
    </div>
);

ReactDOM.render(element, document.getElementById('root'))

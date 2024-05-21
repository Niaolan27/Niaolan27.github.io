
function Message() {
    const name = 'Jason';
    if (name)
        return <h1>Hi there {name}</h1>;
    return <h1>Hi there dude</h1>;
}

export default Message;
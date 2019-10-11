// Sign up a user
export const postUser = user => (
    $.ajax({
        url: 'api/users',
        method: 'POST',
        data: { user }
    })
);
// Login a user
export const postSession = user => (
    $.ajax({
        url: 'api/session',
        method: 'POST',
        data: { user }
    })
);
//Log a user out
export const deleteSession = () => (
    $.ajax({
        url: 'api/session',
        method: 'DELETE'
    })
);

export const demoUser = {
    email: "demo@gmail.com",
    password: "demoLogin"
};

export const postDemo = () => {
    return postSession(demoUser)
};
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
        data: { session }
    })
);
//Log a user out
export const deleteSession = () => (
    $.ajax({
        url: 'api/session',
        method: 'DELETE'
    })
);


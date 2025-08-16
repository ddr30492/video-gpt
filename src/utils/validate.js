export const checkValidation = (email, pass) => {
    const emailAddress = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const password = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(pass);

    if(!emailAddress) return 'Email Id is not valid.'
    else if(!password) return 'Password is not valid.'

    return null;
}
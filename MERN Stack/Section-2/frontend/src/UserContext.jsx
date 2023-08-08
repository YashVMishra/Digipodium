const { createContext, useState, useContext} = require('react');

// initialize the context.
const UserContext =  createContext();

// create a provider
// component that wraps around our app and passes down the user state to all children components as props.
export const UserProvider = ({children}) => {  

    const [currentUser, setCurrentUser] = useState(

        // get user data from session, convert it to JS and then store it in state.
        JSON.parse(sessionStorage.getItem('user'))
    );

    const [loggedIn, setLoggedIn] = useState(currentUser!==null ? true : false);

    const logout = () => {
        sessionStorage.removeItem('user');
        setCurrentUser(null);
        setLoggedIn(false);
    }

    return <UserContext.Provider value={{loggedIn, setLoggedIn, logout}}>
        {children}
    </UserContext.Provider>
};

const useUserContext = () => useContext(UserContext);

export default useUserContext;
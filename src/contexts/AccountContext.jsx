import {createContext, useState, useEffect} from 'react';
//import { v4 as uuidv4 } from 'uuid';

export const AccountContext = createContext();
/*
 Transaction:
 - Name
 - Type of Transaction
 - Amount


*/
const AccountContextProvider  = (props) => {
    const [transactionList, setTransactionList] = useState([]);
    const [currentUserId, setCurrentUserId] = useState(0);
    const [accounts, setAccounts] = useState([
        {id:0, name: 'Robert Heinlein', email: 'RHeinlein@mail.com', password: 'harsh123', balance: 0}
])
localStorage.setItem('accounts', JSON.stringify(accounts));

useEffect(()=> {
    setAccounts(JSON.parse(localStorage.getItem('accounts')))
},[])

useEffect(() => {
    localStorage.setItem('accounts', JSON.stringify(accounts));
})

console.log(accounts);

const addAccount = (name, email, password) => {
    setAccounts([...accounts , {id:accounts.length, name, email, password, balance:0}])
    setCurrentUserId(accounts.length);
}


const createTransaction = (newTransaction = {}) => {
     const oldTransactionList = transactionList;
    setTransactionList([...oldTransactionList, {...newTransaction, id: oldTransactionList.length }]);
}

const increaseBalance = (amount) => {
   const oldCurrentUser = accounts.filter(account => account.id === currentUserId)[0];
   oldCurrentUser.balance += amount;

   let otherUsers = accounts.filter(account => account.id !== oldCurrentUser.id);
   otherUsers.push(oldCurrentUser);
   // otherUsers = otherUsers.sort((a, b) => a.id < b.id);
   setAccounts(otherUsers);
   createTransaction({ userId: oldCurrentUser.id, name: oldCurrentUser.name, type: "Deposit", amount: amount });

}

const decreaseBalance = (amount) => {
    const oldCurrentUser = accounts.filter(account => account.id === currentUserId)[0];
    oldCurrentUser.balance -= amount;
 
    let otherUsers = accounts.filter(account => account.id !== oldCurrentUser.id);
    otherUsers.push(oldCurrentUser);
    //otherUsers = otherUsers.sort((a, b) => a.id < b.id);
    setAccounts(otherUsers);
    createTransaction({ userId: oldCurrentUser.id, name: oldCurrentUser.name, type: "Withdraw", amount: amount });
 }


    return (
        <AccountContext.Provider value={{ accounts, addAccount, increaseBalance, decreaseBalance, currentUserId, setCurrentUserId, transactionList, createTransaction }}>
            {props.children}
        </AccountContext.Provider>
    )
}


export default AccountContextProvider;
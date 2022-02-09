import {useContext } from 'react';
import {AccountContext} from '../contexts/AccountContext';
import Account from './Account';
import Transactions from './Transactions';
import AccountContextProvider from '../contexts/AccountContext';
import {Table, Card, Container } from 'react-bootstrap';


const AllData = () => {

    const {accounts, transactionList } = useContext(AccountContext);
    const parsedArray = JSON.parse(localStorage.getItem('accounts'))
    console.log("all data accounts: ", accounts);

    return (
       
    <>
    <h1>All Data</h1>
    <>
    <Container>
    <h2>Accounts</h2>
    <Table className="table table-striped table-hover" style={{width: '50rem'}}>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Balance</th>
            </tr>
        </thead>
        <tbody>
            {
                parsedArray.map(account => {
                return (
                <tr key={account.id}>
                    <Account account={account} />
                    
                </tr>
                );
            })}
        </tbody>
    </Table>
    </Container>
    </>
    <>
        <Transactions transactionList={transactionList} />
    </>
    </>
    )
}

export default AllData;
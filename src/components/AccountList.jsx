import {useContext } from 'react';
import {AccountContext} from '../contexts/AccountContext';
import Account from './Account';

const AccountList = () => {

    const {accounts} = useContext(AccountContext);

    return (
    <>
    <table className="table table-striped table-hover">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
            </tr>
        </thead>
        <tbody>
                {
                  accounts.map(account => (
                      <tr key={account.id}>
                        <Account account={account} />
                    </tr>
                  ))  
                }
        </tbody>
    </table>
    </>
    )
}

export default AccountList;
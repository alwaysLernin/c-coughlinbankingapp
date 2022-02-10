
import {Table, Container} from 'react-bootstrap';


const Transactions = ({ transactionList }) => {
    console.log('transaction list: ', transactionList);
    return (  
    <Container>
    <h2>Transactions</h2>
    <Table className="table table-striped table-hover" style={{width: '50rem'}}>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                {/*<th>Account User Id</th>*/}
                <th>Type</th>
                <th>Amount</th>
            </tr>
        </thead>
        <tbody>
            {
                transactionList.map((transaction, idx) => {
                return (
                <tr key={idx}>
                    <td>{transaction.id}</td>
                    <td>{transaction.name}</td>
                    {/*<td>{transaction.userId}</td> */}
                    <td>{transaction.type}</td>
                    <td className="text-end">${transaction.amount}</td>                
                </tr>
                );
            })}
        </tbody>
    </Table>
    </Container>
    
    )
}

export default Transactions;
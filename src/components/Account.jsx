
const Account = ({account}) => {
        
        return (
            <>
            <td>{account.name}</td>
            <td>{account.email}</td>
            <td>{account.password}</td>
            <td className="text-end">${account.balance}</td>
        </>
    )
}

export default Account;
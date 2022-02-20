function DonationRow(props) {
    return <tr>
        <td>
            <img height={75} width={75} src={props.donation.avatarImageURL}/>
        </td>
        <td>
            {props.donation.recipientName}
        </td>
        <td>
            {props.donation.displayName ? props.donation.displayName : "Anonymous"}
        </td>
        <td>
            ${props.donation.amount}
        </td>
        <td>
            {props.donation.message ? props.donation.message : "No message!"}
        </td>
    </tr>
}
export default DonationRow
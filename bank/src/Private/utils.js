const getStatus = (status) => {
    switch (status) {
        case 1:
            return 'Approved'
            break;
        case 2:
            return 'Waiting'
            break;
        case 3:
            return 'Rejected'
            break;

    }
}
export default getStatus
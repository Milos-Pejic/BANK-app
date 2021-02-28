import StyledCredit from "./StyledCredit";
import getStatus from "./utils";

const Credit = ({ credit }) => {

  const getClass = () => {
    switch (credit.status) {
      case 1:
        return 'credit-approved';
        break;
      case 2:
        return 'credit-warning';
        break;
      case 3:
        return 'credit-rejected';
        break;
    }
  }
  return (
    <>
      <StyledCredit>
        <div className="container credits">
          <div className={`credit ${getClass()}`}>
            <p>Amount: {credit.amount} {getStatus(credit.status)}</p>
          </div>
        </div>
      </StyledCredit>
    </>
  )
}
export default Credit
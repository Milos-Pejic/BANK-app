import styled from 'styled-components'
const StyledCredit= styled.div`

.credit{
    
    border: 1px solid rgb(46, 171, 243);
    margin: 30px;
    padding-left: 50px;
    width: 550px;
    font-size: 14pt;
    box-shadow: 3px 3px 3px grey;
    margin-left: 320px
  }
  
  .credit-approved{
    border: 1px solid #28a745;
    box-shadow: 3px 3px 3px #28a745;
  }
 
  
  .credit-warning{
    border: 1px solid orange;
    box-shadow: 3px 3px 3px orange;
  }
  
  .credit-rejected{
    border: 1px solid #DC143C;
    box-shadow: 3px 3px 3px #DC143C;
  }
`
export default StyledCredit
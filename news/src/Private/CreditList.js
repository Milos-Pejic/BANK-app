import Credit from "./Credit"

const CreditList=({credits})=>{
    return(
        <div>
            {credits.map((credit,i)=><Credit key={i} credit={credit}/>)}
        </div>
    )
}
export default CreditList
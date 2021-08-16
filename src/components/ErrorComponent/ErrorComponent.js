function ErrorComponent({Error, errormessage }) {
    console.log(errormessage);
    // console.log(hum);
    // console.log(windspeed);
    if(Error){
    return (
      <>
        <span className="error">{errormessage}</span>
     
      </>
    
        )}
        else{
            return(
                <></>
            )
        }
       
  }
  
  export default ErrorComponent;
  
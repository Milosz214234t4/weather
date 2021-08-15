function ErrorComponent({Error, errormessage }) {
    console.log(errormessage);
    // console.log(hum);
    // console.log(windspeed);
    if(Error){
    return (
      <>
        <h4>{errormessage}</h4>
     
      </>
    
        )}
        else{
            return(
                <></>
            )
        }
       
  }
  
  export default ErrorComponent;
  
/* Output:
{ twoDollar: 1, dime: 1, penny: 3 }
{ tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
{ twoDollar: 2, quarter: 3, dime: 2, penny: 4 }
*/

const calculateChange = function(total, cash) {
 let change = cash - total;
 let dispense = {};
 if (change < 1000)
  { 
    /////////////////////////////////////////////////////////////////////////

    if (change >= 500 && change <= 999) // biggest denomination is $5
    {
      let fiver = Number.parseInt(change/500);
      dispense.fiveDollars = fiver;
      fiveDollarLeftOver = change-500;
      let toony = Number.parseInt((change-500)/100);
      if (toony % 2 === 1)
      {      
      toonyCoin = Number.parseInt(toony/2);
      if (toonyCoin != 0)
{      dispense.twoDollars = toonyCoin;
}      dispense.oneDollar = 1;
      }    
      else if (toony % 2 === 0)  
      {
        dispense.twoDollars = toony;
      }
    let toonyLeftOver = (fiveDollarLeftOver - 100*toony);
    if (toonyLeftOver >= 25 && toonyLeftOver <= 99) //no the biggest is denomination = 25c
    {
    let twentyfiveCent = Number.parseInt(toonyLeftOver/25); //dividing by highest denomination to extract how many 25c can comprise the change
    dispense.quarter = twentyfiveCent; // storing int part into quarter
    let twentyfiveCentleftOver = (toonyLeftOver - 25*twentyfiveCent); // calculating left over by subtracting total quarter (*25) extracted in teh first step
     if (twentyfiveCentleftOver !=0) // if there is any left over to further denominate, if not end loop
      {
        if (twentyfiveCentleftOver >= 10) // to calculate denomination in nickles
        {
        let tenCent = Number.parseInt(twentyfiveCentleftOver/10); //dividing by highest denomination at this point to extract how many 5c can make the change
        dispense.dime = tenCent; // storing int part as nicle in the object dispense
        dimeLeftOver = (twentyfiveCentleftOver - 10*tenCent); // calculating left over by subtracting total nickles (*5) extracted in teh first step
          if (dimeLeftOver >= 5) //6
          {
          let fiveCent = Number.parseInt(dimeLeftOver/5); //dividing by highest denomination at this point to extract how many 5c can make the change
          dispense.nickle = fiveCent; // storing int part as nicle in the object dispense
          let nickleLeftOver = (dimeLeftOver - 5*fiveCent); // calculating left over by subtracting total nickles (*5) extracted in teh first step
          dispense.penny = nickleLeftOver;
          } 
          else if (dimeLeftOver < 5)
          {
          dispense.penny = dimeLeftOver;
          }
          }  
        else if (twentyfiveCentleftOver >= 5 && twentyfiveCentleftOver < 10) // to calculate denomination in nickles
        {
        let fiveCent = Number.parseInt(twentyfiveCentleftOver/5); //dividing by highest denomination at this point to extract how many 5c can make the change
        dispense.nickle = fiveCent; // storing int part as nicle in the object dispense
        let nickleLeftOver = (twentyfiveCentleftOver - 5*fiveCent); // calculating left over by subtracting total nickles (*5) extracted in teh first step
        dispense.penny = nickleLeftOver;
        } 
      else if (twentyfiveCentleftOver > 0 && twentyfiveCentleftOver < 5) // if less than 5c, only available option for denomination is pennies
      {
      dispense.penny = twentyfiveCentleftOver;
      }
    } 
} 
else if (toonyLeftOver < 25) 
{
  if (toonyLeftOver !=0) // if there is any left over to further denominate, if not end loop
  {
    if (toonyLeftOver >= 10) // to calculate denomination in nickles
    {
    let tenCent = Number.parseInt(toonyLeftOver/10); //dividing by highest denomination at this point to extract how many 5c can make the change
    dispense.dime = tenCent; // storing int part as nicle in the object dispense
    dimeLeftOver = (toonyLeftOver - 10*tenCent); // calculating left over by subtracting total nickles (*5) extracted in teh first step
    if (dimeLeftOver >= 5) //6
      {
        let fiveCent = Number.parseInt(dimeLeftOver/5); //dividing by highest denomination at this point to extract how many 5c can make the change
        dispense.nickle = fiveCent; // storing int part as nicle in the object dispense
        let nickleLeftOver = (dimeLeftOver - 5*fiveCent); // calculating left over by subtracting total nickles (*5) extracted in teh first step
        dispense.penny = nickleLeftOver;
      } 
      else if (dimeLeftOver < 5)
      {
      dispense.penny = dimeLeftOver;
      }
    } 
    else if (toonyLeftOver >= 5 && toonyLeftOver < 10) // to calculate denomination in nickles
    {
    let fiveCent = Number.parseInt(toonyLeftOver/5); //dividing by highest denomination at this point to extract how many 5c can make the change
    dispense.nickle = fiveCent; // storing int part as nicle in the object dispense
    let nickleLeftOver = (toonyLeftOver - 5*fiveCent); // calculating left over by subtracting total nickles (*5) extracted in teh first step
    dispense.penny = nickleLeftOver;
  } 
  else if (toonyLeftOver > 0 && toonyLeftOver < 5) // if less than 5c, only available option for denomination is pennies
  {
    dispense.penny = toonyLeftOver;
  }
}  
}
  
}
    /////////////////////////////////////////////////////////////////////////


    /////////////////////////////////////////////////////////////////////////
    else if (change >= 200 && change <= 499) // biggest denomination is $2
    {
      let toony = Number.parseInt(change/100);
          if (toony % 2 === 1)
          {      
          toonyCoin = Number.parseInt(toony/2);
          if (toonyCoin != 0)
{          dispense.twoDollars = toonyCoin;
}          dispense.oneDollar = 1;
          }    
          else if (toony % 2 === 0)  
          {
            toonyCoin = Number.parseInt(toony/2);
            dispense.twoDollars = toonyCoin;
          }
        let toonyLeftOver = (change - 100*toony);
        if (toonyLeftOver >= 25 && toonyLeftOver <= 99) //no the biggest is denomination = 25c
        {
        let twentyfiveCent = Number.parseInt(toonyLeftOver/25); //dividing by highest denomination to extract how many 25c can comprise the change
        dispense.quarter = twentyfiveCent; // storing int part into quarter
        let twentyfiveCentleftOver = (toonyLeftOver - 25*twentyfiveCent); // calculating left over by subtracting total quarter (*25) extracted in teh first step
         if (twentyfiveCentleftOver !=0) // if there is any left over to further denominate, if not end loop
          {
            if (twentyfiveCentleftOver >= 10) // to calculate denomination in nickles
            {
            let tenCent = Number.parseInt(twentyfiveCentleftOver/10); //dividing by highest denomination at this point to extract how many 5c can make the change
            dispense.dime = tenCent; // storing int part as nicle in the object dispense
            dimeLeftOver = (twentyfiveCentleftOver - 10*tenCent); // calculating left over by subtracting total nickles (*5) extracted in teh first step
              if (dimeLeftOver >= 5) //6
              {
              let fiveCent = Number.parseInt(dimeLeftOver/5); //dividing by highest denomination at this point to extract how many 5c can make the change
              dispense.nickle = fiveCent; // storing int part as nicle in the object dispense
              let nickleLeftOver = (dimeLeftOver - 5*fiveCent); // calculating left over by subtracting total nickles (*5) extracted in teh first step
              dispense.penny = nickleLeftOver;
              } 
              else if (dimeLeftOver < 5)
              {
              dispense.penny = dimeLeftOver;
              }
              }  
            else if (twentyfiveCentleftOver >= 5 && twentyfiveCentleftOver < 10) // to calculate denomination in nickles
            {
            let fiveCent = Number.parseInt(twentyfiveCentleftOver/5); //dividing by highest denomination at this point to extract how many 5c can make the change
            dispense.nickle = fiveCent; // storing int part as nicle in the object dispense
            let nickleLeftOver = (twentyfiveCentleftOver - 5*fiveCent); // calculating left over by subtracting total nickles (*5) extracted in teh first step
            dispense.penny = nickleLeftOver;
            } 
          else if (twentyfiveCentleftOver > 0 && twentyfiveCentleftOver < 5) // if less than 5c, only available option for denomination is pennies
          {
          dispense.penny = twentyfiveCentleftOver;
          }
        } 
    } 
    else if (toonyLeftOver < 25) 
    {
      if (toonyLeftOver !=0) // if there is any left over to further denominate, if not end loop
      {
        if (toonyLeftOver >= 10) // to calculate denomination in nickles
        {
        let tenCent = Number.parseInt(toonyLeftOver/10); //dividing by highest denomination at this point to extract how many 5c can make the change
        dispense.dime = tenCent; // storing int part as nicle in the object dispense
        dimeLeftOver = (toonyLeftOver - 10*tenCent); // calculating left over by subtracting total nickles (*5) extracted in teh first step
        if (dimeLeftOver >= 5) //6
          {
            let fiveCent = Number.parseInt(dimeLeftOver/5); //dividing by highest denomination at this point to extract how many 5c can make the change
            dispense.nickle = fiveCent; // storing int part as nicle in the object dispense
            let nickleLeftOver = (dimeLeftOver - 5*fiveCent); // calculating left over by subtracting total nickles (*5) extracted in teh first step
            dispense.penny = nickleLeftOver;
          } 
          else if (dimeLeftOver < 5)
          {
          dispense.penny = dimeLeftOver;
          }
        } 
        else if (toonyLeftOver >= 5 && toonyLeftOver < 10) // to calculate denomination in nickles
        {
        let fiveCent = Number.parseInt(toonyLeftOver/5); //dividing by highest denomination at this point to extract how many 5c can make the change
        dispense.nickle = fiveCent; // storing int part as nicle in the object dispense
        let nickleLeftOver = (toonyLeftOver - 5*fiveCent); // calculating left over by subtracting total nickles (*5) extracted in teh first step
        dispense.penny = nickleLeftOver;
      } 
      else if (toonyLeftOver > 0 && toonyLeftOver < 5) // if less than 5c, only available option for denomination is pennies
      {
        dispense.penny = toonyLeftOver;
      }
    }  
    }
      
    }
 /////////////////////////////////////////////////////////////////////////

    
    /////////////////////////////////////////////////////////////////////////
    else if (change >= 100 && change <= 199) // boggest denomination is $1
    {
      let loony = Number.parseInt(change/100) // dividing by highest denomination $1 = 100
      dispense.oneDollar = loony; // storing result in return object
      let loonyLeftOver = (change - 100*loony); // calculating left over by subtracting total quarter (* 100 = * $1) extracted in teh first step
      if (loonyLeftOver >= 25 && loonyLeftOver <= 99) //no the biggest is denomination = 25c
      {
        let twentyfiveCent = Number.parseInt(loonyLeftOver/25); //dividing by highest denomination to extract how many 25c can comprise the change
        dispense.quarter = twentyfiveCent; // storing int part into quarter
        let twentyfiveCentleftOver = (loonyLeftOver - 25*twentyfiveCent); // calculating left over by subtracting total quarter (*25) extracted in teh first step
        if (twentyfiveCentleftOver !=0) // if there is any left over to further denominate, if not end loop
          {
            if (twentyfiveCentleftOver >= 10) // to calculate denomination in nickles
            {
            let tenCent = Number.parseInt(twentyfiveCentleftOver/10); //dividing by highest denomination at this point to extract how many 5c can make the change
            dispense.dime = tenCent; // storing int part as nicle in the object dispense
            dimeLeftOver = (twentyfiveCentleftOver - 10*tenCent); // calculating left over by subtracting total nickles (*5) extracted in teh first step
            if (dimeLeftOver >= 5) //6
              {
                let fiveCent = Number.parseInt(dimeLeftOver/5); //dividing by highest denomination at this point to extract how many 5c can make the change
                dispense.nickle = fiveCent; // storing int part as nicle in the object dispense
                let nickleLeftOver = (dimeLeftOver - 5*fiveCent); // calculating left over by subtracting total nickles (*5) extracted in teh first step
                dispense.penny = nickleLeftOver;
              } 
              else if (dimeLeftOver < 5)
              {
              dispense.penny = dimeLeftOver;
              }
            } 
            else if (twentyfiveCentleftOver >= 5 && twentyfiveCentleftOver < 10) // to calculate denomination in nickles
            {
            let fiveCent = Number.parseInt(twentyfiveCentleftOver/5); //dividing by highest denomination at this point to extract how many 5c can make the change
            dispense.nickle = fiveCent; // storing int part as nicle in the object dispense
            let nickleLeftOver = (twentyfiveCentleftOver - 5*fiveCent); // calculating left over by subtracting total nickles (*5) extracted in teh first step
            dispense.penny = nickleLeftOver;
          } 
          else if (twentyfiveCentleftOver > 0 && twentyfiveCentleftOver < 5) // if less than 5c, only available option for denomination is pennies
          {
            dispense.penny = twentyfiveCentleftOver;
          }
        } 
    }


    }
    /////////////////////////////////////////////////////////////////////////


 /////////////////////////////////////////////////////////////////////////
    else if (change >= 25 && change <= 99) // biggest denomination = 25c
    {
      let twentyfiveCent = Number.parseInt(change/25); //dividing by highest denomination to extract how many 25c can comprise the change
      dispense.quarter = twentyfiveCent; // storing int part into quarter
      let twentyfiveCentleftOver = (change - 25*twentyfiveCent); // calculating left over by subtracting total quarter (*25) extracted in teh first step
        if (twentyfiveCentleftOver !=0) // if there is any left over to further denominate, if not end loop
          {
            if (twentyfiveCentleftOver >= 10) // to calculate denomination in nickles
            {
            let tenCent = Number.parseInt(twentyfiveCentleftOver/10); //dividing by highest denomination at this point to extract how many 5c can make the change
            dispense.dime = tenCent; // storing int part as nicle in the object dispense
            dimeleftOver = (twentyfiveCentleftOver - 10*tenCent); // calculating left over by subtracting total nickles (*5) extracted in teh first step
              if (dimeleftOver >= 5) //6
              {
                let fiveCent = Number.parseInt(dimeleftOver/5); //dividing by highest denomination at this point to extract how many 5c can make the change
                dispense.nickle = fiveCent; // storing int part as nicle in the object dispense
                let nickleLeftOver = (dimeleftOver - 5*fiveCent); // calculating left over by subtracting total nickles (*5) extracted in teh first step
                dispense.penny = nickleLeftOver;
              } 
              else if (dimeleftOver < 5)
              {
              dispense.penny = dimeleftOver;
              }
            } 
            else if (twentyfiveCentleftOver >= 5 && twentyfiveCentleftOver < 10) // to calculate denomination in nickles
            {
            let fiveCent = Number.parseInt(twentyfiveCentleftOver/5); //dividing by highest denomination at this point to extract how many 5c can make the change
            dispense.nickle = fiveCent; // storing int part as nicle in the object dispense
            let nickleLeftOver = (twentyfiveCentleftOver - 5*fiveCent); // calculating left over by subtracting total nickles (*5) extracted in teh first step
            dispense.penny = nickleLeftOver;
          } 
          else if (twentyfiveCentleftOver > 0 && twentyfiveCentleftOver < 5) // if less than 5c, only available option for denomination is pennies
          {
            dispense.penny = twentyfiveCentleftOver;
          }
        } 
    }


 /////////////////////////////////////////////////////
    else if (change >= 10 && change <= 24) // biggest denomination = 10c
    {
      
      let tenCent = Number.parseInt(change/10); //dividing by highest denomination to extract how many 10c can comprise the change
      dispense.dime = tenCent; // storing int part into dime
      let dimeLeftOver = (change - 10*tenCent); // calculating left over by subtracting total dimes (*10) extracted in teh first step
        if (dimeLeftOver !=0) // if there is any left over to further denominate, if not end loop
          {
            if (dimeLeftOver >= 5) // to calculate denomination in nickles
            {
            let fiveCent = Number.parseInt(leftOver/5); //dividing by highest denomination at this point to extract how many 5c can make the change
            dispense.nickle = fiveCent; // storing int part as nicle in the object dispense
            let oneCentLeftOver = (leftOver - 5*fiveCent); // calculating left over by subtracting total nickles (*5) extracted in teh first step
            dispense.penny = oneCentLeftOver;
          }
          else if (dimeLeftOver > 0 && leftOver < 5) // if less than 5c, only available option for denomination is pennies
          {
            dispense.penny = dimeLeftOver;
          }
        }
    }
     /////////////////////////////////////////////////////


     /////////////////////////////////////////////////////
    else if (change >= 5 && change <= 9) // biggest denomination = 5c
    {
      let fiveCent = Number.parseInt(change/5); //dividing by highest denomination to extract how many 5c can make the change
      dispense.nickle = fiveCent;//destoring int part into nickle
      let oneCentLeftOver = (change - 5*fiveCent); // calculating left over by subtracting total nickles (*5) extracted in teh first step
      dispense.penny = oneCentLeftOver;
    }
     /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
    else if (change >= 1 && change <= 4) // biggest denomination 1c
    {
      dispense.penny = change; // result is all cents
    }
   /////////////////////////////////////////////////////
  }

  return dispense;
};

console.log(calculateChange(1387, 2000)); // max 2$ trasactions
console.log(calculateChange(501, 1000));


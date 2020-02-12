import React from 'react';
import './Comment.scss';

function Comment(props) {
    const dynamicTimeStamp = timestamp => {
        const time = [  
        { unit: 'sec', divider: 60 },
        { unit: 'min', divider: 60 },
        { unit: 'hr',  divider: 24 },
        { unit: 'day', divider: 7  },
        { unit: 'wk',  divider: 4  },
        { unit: 'mo',  divider: 12 }];
        let toConvert = timestamp;
        let rightNow = Date.now();
        let res = rightNow - toConvert; // get the difference of the two dates in milliseconds
        res /= 1000; // convert milliseconds to seconds
    
        if (res >= 1){
          for(let i = 0; i < time.length; i++){
            // this block triggers if timestamp is more than or equal to 4 weeks
            if (i === time.length-1){ 
              // convert year to months (1year = 12 months) and add the rest of the months to the result
              // add toConvert month and rightNow month to their respective results
    
              let rightNowMonths = (new Date(rightNow).getFullYear()*12) + (new Date(rightNow).getMonth()+1); 
              let toConvertMonths = (new Date(toConvert).getFullYear()*12) + (new Date(toConvert).getMonth()+1);
              // subtract the results and you will get the results in months format
              res = rightNowMonths - toConvertMonths; 
              if (res >= 12) return `${Math.floor(res/12)} yr${(Math.floor(res/12)>=2)?'s':''} ago`;
              else return `${res} mon${res!== 1?'s':''} ago`;
            }
            else  {
              // cycle through the time array and divide res by time[i].divider
              // ${<unit>!= 1?'s':''}  <--- ternary operator to add 's' if the res is > 1
              if (Math.round(res) < time[i].divider) return `${Math.round(res)} ${time[i].unit}${Math.round(res)>= 2?'s':''} ago`; 
              else res /= time[i].divider;
            }
          }
        } else return `Just now`;
      } 

    return (
        <div className="comment"> 
            <div className="comment__left"> 
                <div className="comment__image"> </div>
            </div>
            <div className="comment__right"> 
                <div className="comment__header">
                    <span className="comment__author"> {props.comment.name} </span>
                    <span className="comment__time-stamp"> {dynamicTimeStamp(props.comment.timestamp)} </span>
                    <div className="comment__blurb"> 
                        <p> {props.comment.comment} </p>
                    </div>
                </div>
            </div>
        </div>
        );
    }

export default Comment;
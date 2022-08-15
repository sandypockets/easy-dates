export function timeBetween(inputDate1, inputDate2, expression) {
    // check if the arguments are valid
    if (!inputDate1 || !inputDate2) {
        throw new Error("timeBetween: two dates are required");
    };
    // rearrange the date by ascending order if necessary
    if (inputDate2 < inputDate1) {
        var date1 = inputDate2;
        var date2 = inputDate1;
    } else {
        var date1 = inputDate1;
        var date2 = inputDate2;
    }
    // get the difference between the dates
    let difference = date2 - date1;
    // declare the variable result which will ultimatly be returned
    let result;
    // update the value of result with a switch statement depending on the user's time difference expression
    switch (expression) {
        case "weeks":
            // express the difference in weeks
            result = Math.abs(Math.ceil(difference / (1000 * 60 * 60 * 24 * 7)));
            break;
        case "days":
            // express the difference in days
            result = Math.abs(Math.ceil(difference / (1000 * 60 * 60 * 24)));
            break;
        case "hours":
            // express the difference in hours
            result = Math.abs(Math.ceil((difference / (1000 * 60 * 60))));
            break;
        case "minutes":
            // express the difference in minutes
            result = Math.abs(Math.ceil((difference / (1000 * 60))));
            break;
        case "seconds":
            // express the difference in seconds
            result = Math.abs(Math.ceil((difference / 1000)));
            break;
        default:
            // by default, set the result as the difference in milliseconds between the two dates
            result = Math.abs(difference);
            break;
    }
    return result
}
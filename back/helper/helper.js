exports.currentDate = ( date=new Date() ) => {
    // Get the current date components
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');

    // Format the current date
    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
}

exports.yesterdayDate = ( date=new Date() ) => {
  var yesterday = new Date(date);
  yesterday.setDate(date.getDate() - 1);
  // Get the current date components
  const year = yesterday.getUTCFullYear();
  const month = String(yesterday.getUTCMonth() + 1).padStart(2, '0');
  const day = String(yesterday.getUTCDate()).padStart(2, '0');

  // Format the current date
  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
}

exports.removeQuotes = (string) => {
    if (string.length >= 2 && string[0] === '"' && string[string.length - 1] === '"') {
      return string.slice(1, -1);
    } else {
      return string;
    }
}

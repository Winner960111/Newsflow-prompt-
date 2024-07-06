export const currentDate = ( date=new Date() ) => {
    // Get the current date components
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');

    // Format the current date
    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
}

export const copyToClipboard = (text="") => {
    // Create a temporary textarea element
    const textarea = document.createElement('textarea');
    textarea.value = text;
  
    // Append the textarea element to the DOM
    document.body.appendChild(textarea);
  
    // Select the text inside the textarea
    textarea.select();
  
    // Execute the "copy" command
    document.execCommand('copy');
  
    // Remove the textarea element
    document.body.removeChild(textarea);
  };
  
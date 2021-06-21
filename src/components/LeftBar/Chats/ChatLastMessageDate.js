import React from 'react';

export function ChatLastMessageDate({time, ...props}) {
  const shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 
    'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

  const date = new Date(time)
  const day = date.getDate()
  const month = date.getMonth();
  const year = date.getFullYear()

  return (
    <div {...props}>
      {`${shortMonths[month]} ${day}, ${year}`}
    </div>
  )

}
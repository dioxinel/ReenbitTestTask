import React from 'react';

export function MessageCreatedAtDate({time, ...props}) {
  const date = new Date(time)
  const day = date.getDate()
  const month = date.getMonth() + 1;
  const year = date.getFullYear() + ''

  return (
    <div {...props}>
    {`${month}/${day}/${year[2]}${year[3]} . ${getTime(date)}`}
    </div>
  )
}

export function getTime(date) {
  const hours = date.getHours() > 11 ? date.getHours() - 12 : date.getHours()
  const minutes = date.getMinutes()
  let hourPrefix = 'AM'

  if(date.getHours() > 11) {
    hourPrefix = 'PM';
  }
  return `${hours}:${minutes} ${hourPrefix}`

}
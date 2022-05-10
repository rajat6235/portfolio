import React from 'react'

export default function ScreenHeading(props) {
  return (
    <div className='heading-container'>
        <div className='screen-heading'>
            <span> {props.title}</span>
        </div>
        {
            (props.subHeading)?(
                <div className='screen-sub-heading'>
                    <span>{props.subHeading}</span>
                    </div>):

            <div></div>
        }
    </div>
  )
}

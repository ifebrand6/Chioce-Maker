import React from 'react'
function date() {
    const date = new Date;
    let time = date.getFullYear()
    return time
}
const time = date()
function Footer(params) {
    return (
        <footer>
            <h4>Choice maker app {time} by Udeogu Ifechukwu</h4>
        </footer>
    )
}
export default Footer
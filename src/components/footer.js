import React from 'react'
function date() {
    const date = new Date;
    let time = date.getFullYear()
    return time
}
function Footer(params) {
    return (
        <footer>
            <h4>Choice maker app {date()} by Udeogu Ifechukwu</h4>
        </footer>
    )
}
export default Footer
import React from 'react'
function date() {
    let date = (new Date()).getFullYear();
    return date
}
const time = date();
function Footer(params) {
    return (
        <footer>
            <h4>Choice maker app {time} by Udeogu Ifechukwu</h4>
        </footer>
    )
}
export default Footer
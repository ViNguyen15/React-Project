import React from "react";

export default function Interest(){
    return (
        <div className="interest--body">
            <div className="interest--header">
                Interests
            </div>

            <div className="interest--paragraph">
                <table className="interest--table">
                    <tr className="firstRow">
                        <td>Programming</td>
                        <td>Chess</td>
                        <td>Power Lifting</td>
                    </tr>

                    <tr className="secondRow">
                        <td>Video Games</td>
                        <td>Building PCs</td>
                        <td>Model Kits</td>
                    </tr>

                    <tr className="thirdRow">
                        <td>Ping Pong</td>
                        <td>Traveling</td>
                        <td>Herbal Tea</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
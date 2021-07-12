import React from 'react';
import "./pagination.css";

class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let noOfPages = Math.ceil(this.props.totalMovies / 5);
        let paginationButtons = [];

        for (let i = 0; i < noOfPages; i++) {

            paginationButtons.push(<div className="pagination-button" onClick={() => {
                this.props.changePage(i + 1);
            }}>{i + 1}</div>)

        }
        return (
            <div className="pagination">
                {/* <div className="pagination-button">1</div>
                <div className="pagination-button">2</div>
                <div className="pagination-button">3</div> */}

                {paginationButtons}
            </div>
        )
    }
}

export default Pagination;